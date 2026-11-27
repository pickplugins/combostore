"use client";
import React, { useState, useEffect, useMemo } from "react";
import { IconPackages, IconTrash, IconEdit, IconDotsVertical } from "@tabler/icons-react";

import EntriesTable from "../../components/EntriesTable";
import PopoverButton from '../../components/PopoverButton';
import ShippingClassForm from '../../components/ShippingClassForm';
import { shippingClassRequest, shippingClassCostLabel } from '../../lib/shippingClasses';

import { useCounterStore } from '../../store/useCounterStore'
import { useCan } from '../../lib/useCan';

/*
  Delivery > Shipping Classes, laid out like Delivery > Shipping Zones: a
  "New Class" popover and bulk delete above an EntriesTable, an edit drawer
  on each row's id and an actions menu at its end.

  The classes come from get_shipping_classes (cstore_shipping_classes, via
  ComboStoreShippingClasses). There are only ever a handful, so the list is
  loaded whole and searched / paged here rather than on the server.
*/

const ICON_BUTTON = `inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`;

const ShippingClasses = () => {

  const { token, addNotification } = useCounterStore()
  const permit = useCan("shipping_classes"); /* Roles & Permissions */

  var [allClasses, setallClasses] = useState([]);
  var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "ASC", per_page: 20 });
  var [loading, setloading] = useState(false);
  var [selectedRows, setselectedRows] = useState([]);

  function fetchPosts() {
    if (!token) return;
    setloading(true);
    shippingClassRequest('get_shipping_classes', token)
      .then(res => setallClasses(res.classes ?? []))
      .catch(error => addNotification({ type: 'error', title: 'Could not load shipping classes', content: error.message }))
      .finally(() => setloading(false));
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  /* Search and paging over the loaded list, in the shape EntriesTable reads. */
  var classesData = useMemo(() => {
    var keyword = (queryPrams.keyword ?? '').trim().toLowerCase();
    var matches = keyword
      ? allClasses.filter(c => `${c.name} ${c.slug} ${c.description}`.toLowerCase().includes(keyword))
      : allClasses;
    var perPage = parseInt(queryPrams.per_page, 10) || 20;
    var maxPages = Math.max(1, Math.ceil(matches.length / perPage));
    var paged = Math.min(Math.max(1, parseInt(queryPrams.paged, 10) || 1), maxPages);
    return { posts: matches.slice((paged - 1) * perPage, paged * perPage), total: matches.length, maxPages };
  }, [allClasses, queryPrams]);

  async function delete_shipping_classes(ids) {
if (!permit.allowed("delete")) return permit.denied();

    ids = ids ? ids : selectedRows;

    if (ids.length == 0) {
      addNotification({ type: 'success', title: 'Select rows first', content: "Select rows first" })
      return;
    }

    setloading(true);
    var failed = 0;
    for (var id of ids) {
      try {
        await shippingClassRequest('delete_shipping_class', token, { id });
      } catch (error) {
        failed++;
      }
    }
    if (failed) {
      addNotification({ type: 'error', title: 'Some classes were not deleted', content: `${failed} of ${ids.length} could not be deleted.` })
    } else {
      addNotification({ type: 'success', title: ids.length == 1 ? 'Shipping class deleted' : 'Shipping classes deleted', content: '' })
    }
    setselectedRows([]);
    fetchPosts();
  }

  function onSelectRows(rows) {
    setselectedRows(rows);
  }

  function onChangeQueryPrams(prams) {
    if (prams) setqueryPrams(prams)
  }

  function onRefreshRequest() {
    fetchPosts();
  }

  function onSaved() {
    fetchPosts();
  }


  function callbackTitle(entry, columnIndex) {
    return (
      <td data-label="ID" className="text-left px-4 " key={columnIndex}>
        <div className="py-3 text-sm sm:pr-5">
          <div className="flex items-center gap-2">
            <span className=" text-gray-600 font-bold">{"#" + entry.id}</span>

            <PopoverButton buttonLabel={""} buttonIcon={<IconEdit size={16} />} title={"Edit Shipping Class"} drawer={"right"} buttonClass={ICON_BUTTON}>
              <div className="p-5 bg-gray-50 text-left">
                <ShippingClassForm entry={entry} onSaved={onSaved} />
              </div>
            </PopoverButton>
          </div>
          <div className="text-xs text-gray-500">Slug: <span className="font-mono">{entry.slug}</span></div>
        </div>
      </td>
    );
  }

  function callbackName(entry, columnIndex) {
    return (
      <td data-label="Name" className="" key={columnIndex}>
        <div className="flex flex-col gap-1 py-2 sm:pr-5 text-right lg:text-left text-sm">
          <div>{entry.name}</div>
          {entry.description && <div className="text-xs text-gray-500">{entry.description}</div>}
        </div>
      </td>
    );
  }

  function callbackCost(entry, columnIndex) {
    return (
      <td data-label="Default Cost" className="" key={columnIndex}>
        <div className="py-2 sm:pr-5 text-right lg:text-left text-sm tabular-nums">
          {shippingClassCostLabel(entry)}
        </div>
      </td>
    );
  }

  function callbackProducts(entry, columnIndex) {
    return (
      <td data-label="Products" className="" key={columnIndex}>
        <div className="py-2 sm:pr-5 text-right lg:text-left text-sm tabular-nums">
          {entry.product_count ?? 0}
        </div>
      </td>
    );
  }

  function callbackStatus(entry, columnIndex) {
    return (
      <td data-label="Status" className="text-left text-sm " key={columnIndex}>
        <div className={` text-xs `}>
          {(entry.status == 1) && (
            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">Active</span>
          )}
          {(entry.status == 0) && (
            <span className="inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-inset ring-gray-200">Inactive</span>
          )}
        </div>
      </td>
    );
  }

  function callbackActions(entry, columnIndex) {
    return (
      <td data-label="Actions" className="text-sm px-5!" key={columnIndex}>
        <div className="sm:flex flex-wrap justify-end sm:pr-5 text-sm">

          <PopoverButton wrapperClass={`bg-white flex justify-end`} buttonLabel={" "} buttonIcon={<IconDotsVertical />} title={"Actions"} position={"bottomRight"} buttonClass={ICON_BUTTON}>

            <div className="p-3 w-[400px]">
              <div className="flex gap-2 mb-3">
                <div className=" flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 cursor-pointer" {...permit.hide("delete")} onClick={() => {
                  var note = entry.product_count > 0 ? ` ${entry.product_count} ${entry.product_count == 1 ? 'product goes' : 'products go'} back to no shipping class.` : '';
                  if (confirm(`Delete "${entry.name}"?${note}`)) {
                    delete_shipping_classes([entry.id]);
                  }
                }}>
                  <IconTrash size={16} /> Delete
                </div>
              </div>
            </div>

          </PopoverButton>

        </div>
      </td>
    );
  }

  var columns = {
    check: { label: ("Check"), },
    id: { label: ("ID"), callback: callbackTitle, classes: "text-left  px-5 py-2 text-gray-600" },
    name: { label: ("Name"), callback: callbackName, classes: "text-left text-gray-600" },
    cost: { label: ("Default Cost"), callback: callbackCost, classes: "text-left text-gray-600" },
    products: { label: ("Products"), callback: callbackProducts, classes: "text-left text-gray-600" },
    status: { label: ("Status"), callback: callbackStatus, classes: "text-left text-gray-600" },
    action: { label: ("Action"), callback: callbackActions, classes: "text-right pr-5 text-gray-600" },
  };


  return (
    <div className="page-shell">

      <div className="flex gap-3 w-full justify-between items-center ">

        <div className="flex flex-wrap gap-3 items-center">

          <PopoverButton wrapperClass={`bg-gray-200 `} buttonLabel={("New Class")} buttonIcon={<IconPackages />} title={"New Shipping Class"} position={""}>
            <div className="p-5 bg-gray-50">
              <ShippingClassForm onSaved={onSaved} />
            </div>
          </PopoverButton>

        </div>

        <div className=" flex gap-2">
          {selectedRows?.length > 0 && (
            <div
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-700 cursor-pointer"
              title="Delete selected"
              {...permit.hide("delete")} onClick={() => {
                if (confirm(`Delete ${selectedRows.length} shipping ${selectedRows.length == 1 ? 'class' : 'classes'}? Products using them go back to no shipping class.`)) {
                  delete_shipping_classes()
                }
              }}>
              <IconTrash size={18} />
            </div>
          )}
        </div>

      </div>


      <EntriesTable
        queryPrams={queryPrams}
        columns={columns}
        entries={classesData}
        itemPath={""}
        onChange={onChangeQueryPrams}
        loading={loading}
        selectedRows={selectedRows}
        onSelectRows={onSelectRows}
        onRefreshRequest={onRefreshRequest}
      />

    </div>
  );
};

export default ShippingClasses;
