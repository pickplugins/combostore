'use client'
import React from 'react'
import Link from "next/link";


import { useState, useEffect, useContext } from "react";


import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconExternalLink, IconPercentage, IconCash, IconTruckDelivery, IconX } from "@tabler/icons-react";
import { useUtilsStore } from '../../store/useUtilsStore';
import { couponTypes, couponAddons, couponAddonFields, customerRules, couponEffect, couponSummary, isOn } from '../../lib/coupon';
import ProductsPicker from "../../components/shop-elements/ProductsPicker";
import TermsPicker from "../../components/shop-elements/TermsPicker";
import UsersPicker from "../../components/shop-elements/UsersPicker";
import HtmlEditor from "../../components/HtmlEditor";
import DatePicker from "react-datepicker";
import { useCan } from '../../lib/useCan';
import "react-datepicker/dist/react-datepicker.css";


/* One addon's section in the main column. */
const AddonCard = ({ title, hint, children }) => (
  <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="border-b border-gray-200 px-5 py-4">
      <div className="text-base font-semibold text-gray-900">{title}</div>
      {hint && <div className="mt-0.5 text-xs text-gray-500">{hint}</div>}
    </div>
    <div className="flex flex-col gap-3 p-4">{children}</div>
  </div>
);

/* Picked products / categories / users, each removable. */
const ChipList = ({ items, label, empty, onRemove }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <div className="rounded-lg border border-dashed border-gray-300 px-3 py-4 text-center text-sm text-gray-400">{empty}</div>;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span key={index} className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#634FE5]/30 bg-[#634FE5]/10 py-1 pl-3 pr-1 text-sm text-[#634FE5]">
          <span className="truncate">{label(item)}</span>
          <button type="button" aria-label="Remove" className="rounded-full p-0.5 hover:bg-[#634FE5]/20" onClick={() => onRemove(item)}>
            <IconX size={14} />
          </button>
        </span>
      ))}
    </div>
  );
};

const CouponEdit = ({ id }) => {




  const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
  const permit = useCan("coupons"); /* Roles & Permissions */

  var [currentObject, setcurrentObject] = useState(null);

  var [loading, setloading] = useState(false);

  const { wrapCurrency } = useUtilsStore()

  /* A coupon saved before types were required has none; it priced as percent. */
  const couponType = currentObject?.couponType || 'percent';
  const setField = (key, value) => setcurrentObject(previous => ({ ...previous, [key]: value }));
  const num = (value) => { var n = parseFloat(value); return Number.isFinite(n) && n > 0 ? n : 0; };
  const couponTypeIcons = { percent: IconPercentage, fixed: IconCash, free_shipping: IconTruckDelivery };
  const inputClass = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";

  /* ---------- Addons ---------- */

  const hasAddon = (value) => Array.isArray(currentObject?.addons) && currentObject.addons.includes(value);

  /* Switching an addon off clears what it set, so a hidden rule never keeps applying. */
  function toggleAddon(value) {
    setcurrentObject(previous => {
      var addons = Array.isArray(previous?.addons) ? [...previous.addons] : [];
      if (addons.includes(value)) {
        return { ...previous, ...(couponAddonFields[value] ?? {}), addons: addons.filter(a => a !== value) };
      }
      var next = { ...previous, addons: [...addons, value] };
      if (value === 'customer' && !next.customerRule) next.customerRule = 'logged_in';
      return next;
    });
  }

  /* Lists of picked things (products, categories, users), kept unique by `key`. */
  function addToList(field, entry, key) {
    if (entry?.[key] === undefined || entry?.[key] === null) return;
    setcurrentObject(previous => {
      var list = Array.isArray(previous?.[field]) ? previous[field] : [];
      if (list.some(item => String(item?.[key]) === String(entry[key]))) return previous;
      return { ...previous, [field]: [...list, entry] };
    });
  }
  function removeFromList(field, entry, key) {
    setcurrentObject(previous => ({ ...previous, [field]: (previous?.[field] ?? []).filter(item => String(item?.[key]) !== String(entry?.[key])) }));
  }
  function toggleInList(field, entry, key) {
    var list = Array.isArray(currentObject?.[field]) ? currentObject[field] : [];
    if (list.some(item => String(item?.[key]) === String(entry?.[key]))) removeFromList(field, entry, key);
    else addToList(field, entry, key);
  }

  /* The offer's conditions, in words, for the summary box. */
  function offerConditions() {
    var lines = [];
    var products = currentObject?.products ?? [];
    var categories = currentObject?.categories ?? [];
    var restricted = products.length > 0 || categories.length > 0;

    if (restricted) {
      var names = [...products.map(p => p?.title), ...categories.map(c => c?.name)].filter(Boolean);
      lines.push(`Only on ${names.slice(0, 3).join(', ')}${names.length > 3 ? ` and ${names.length - 3} more` : ''}.`);
    } else {
      lines.push('On every product.');
    }

    var min = num(currentObject?.minSpend), max = num(currentObject?.maxSpend);
    if (min && max) lines.push(`Carts from ${wrapCurrency(min)} to ${wrapCurrency(max)}.`);
    else if (min) lines.push(`Carts of ${wrapCurrency(min)} or more.`);
    else if (max) lines.push(`Carts up to ${wrapCurrency(max)}.`);

    var when = (v) => new Date(v).toLocaleString();
    if (currentObject?.startDate && currentObject?.endDate) lines.push(`From ${when(currentObject.startDate)} to ${when(currentObject.endDate)}.`);
    else if (currentObject?.startDate) lines.push(`From ${when(currentObject.startDate)}.`);
    else if (currentObject?.endDate) lines.push(`Until ${when(currentObject.endDate)}.`);

    var rule = customerRules.find(r => r.value === currentObject?.customerRule);
    if (rule) lines.push(`${rule.label} only.`);

    var users = currentObject?.users ?? [];
    if (users.length) lines.push(`Only ${users.length} chosen ${users.length === 1 ? 'person' : 'people'}.`);

    if (num(currentObject?.limit)) lines.push(`Up to ${num(currentObject.limit)} uses.`);

    if (couponType !== 'free_shipping') {
      var sample = Math.max(min, 1000);
      if (max) sample = Math.min(sample, max);
      lines.push(`A ${wrapCurrency(sample)} cart${restricted ? ' of eligible items' : ''} saves ${wrapCurrency(couponEffect({ ...currentObject, couponType }, sample).amount)}.`);
    }
    return lines;
  }



  function get_product() {


    // if (!token) {
    //   //throw new Error("No token found");
    // }



    var postData = {
      id: id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_coupon",
      {
        method: "POST",
        /* Signed in, so the server includes the coupon's chosen users (names and emails are staff-only). */
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {




            var errors = res?.errors;
            var success = res?.success;
            var product = res?.coupon;



            setloading(false);

            /* Coupons saved before addons were stored: switch on the ones their saved fields already use. */
            var addons = Array.isArray(product?.addons) ? [...product.addons] : [];
            if ((product?.startDate || product?.endDate) && !addons.includes('expiry')) addons.push('expiry');
            if ((num(product?.minSpend) || num(product?.maxSpend)) && !addons.includes('spend')) addons.push('spend');

            setcurrentObject(product ? { ...product, addons } : product)



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }
  function update_product() {
if (!permit.allowed("edit")) return permit.denied();


    // if (!token) {
    //   //throw new Error("No token found");
    // }

    // if (currentObject.id < 0) {
    //   return;
    // }

    //var postData = currentObject;

    currentObject.id = id;



    var postData = JSON.stringify({ ...currentObject, couponType: currentObject?.couponType || 'percent', freeShipping: isOn(currentObject?.freeShipping) });


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_coupon",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {
            var errors = res?.errors;
            var success = res?.success;


            setloading(false);
            if (errors) {
              addNotification({ type: 'error', title: 'Coupon', content: res?.message || 'Could not save the coupon.' });
            } else {
              addNotification({ type: 'success', title: 'Coupon saved', content: 'Your changes are saved.' });
            }



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
      });
  }






  useEffect(() => {
    get_product();

  }, []);









  function toSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric chars
      .replace(/\s+/g, '-')          // Replace spaces with -
      .replace(/-+/g, '-');          // Replace multiple - with single -
  }




  return (
    <div>


      <div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

        {/* The two columns were fixed at 800px + 400px, which overflowed any
            viewport under ~1500px once the app sidebar was open. */}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

          <div className="flex min-w-0 flex-col gap-4">

            <div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
              <div className="min-w-0">
                {loading && (
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <div className="animate-spin"><IconFidgetSpinner size={18} /> </div>
                    <div>Please wait...</div>

                  </div>
                )}
                {!loading && (
                  <div className="min-w-0">

                    <div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Edit coupon</div>
                    <div className="truncate text-base font-semibold text-gray-900">{currentObject?.title}</div>

                  </div>
                )}

              </div>
              <Link className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700" href={`/product/${id}`}>
                <IconExternalLink /> View
              </Link>
            </div>


            {/* {JSON.stringify(currentObject?.addons)} */}

            <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

              <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">General Info</div>

              <div className="p-4 flex flex-col  gap-4">

                <div className="flex flex-col gap-3 ">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Title")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.title}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      var slug = toSlug(value);

                      setcurrentObject({ ...currentObject, title: value, slug: slug });
                    }}
                  />
                </div>



                <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Coupon Code")}
                  </label>
                  <input
                    type="text"
                    className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm"
                    value={currentObject?.couponCode}
                    onChange={(ev) => {
                      var value = ev.target.value;
                      setcurrentObject({ ...currentObject, couponCode: value });


                    }}
                  />
                </div>

                {/* <div className="flex flex-col gap-1.5">
                  <label htmlFor="" className="block text-sm font-medium text-gray-700">
                    {("Content")}
                  </label>
                  <HtmlEditor
                    value={currentObject?.post_content || ""}
                    onChange={(html) => {
                      setcurrentObject({ ...currentObject, post_content: html });
                    }}
                  />
                </div> */}









                {/* ---------- Discount ---------- */}
                <div className="flex flex-col gap-1.5">
                  <span className="block text-sm font-medium text-gray-700">{("Coupon type")}</span>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {couponTypes.map(type => {
                      var TypeIcon = couponTypeIcons[type.value];
                      var active = couponType === type.value;
                      return (
                        <button
                          type="button"
                          key={type.value}
                          aria-pressed={active}
                          className={`flex items-start gap-2.5 rounded-lg border p-3 text-left transition-colors ${active ? "border-[#634FE5] bg-[#634FE5]/10" : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"}`}
                          onClick={() => setField('couponType', type.value)}
                        >
                          <TypeIcon size={20} className={`mt-0.5 shrink-0 ${active ? "text-[#634FE5]" : "text-gray-400"}`} />
                          <span className="min-w-0">
                            <span className={`block text-sm font-medium ${active ? "text-[#634FE5]" : "text-gray-800"}`}>{type.label}</span>
                            <span className="block text-xs text-gray-500">{type.hint}</span>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {couponType !== 'free_shipping' && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="coupon-amount" className="block text-sm font-medium text-gray-700">
                        {couponType === 'percent' ? ("Discount (%)") : ("Discount amount")}
                      </label>
                      <input
                        id="coupon-amount"
                        type="number"
                        min="0"
                        max={couponType === 'percent' ? 100 : undefined}
                        step="any"
                        className={inputClass}
                        value={currentObject?.amount ?? ""}
                        onChange={(ev) => setField('amount', ev.target.value)}
                      />
                      {num(currentObject?.amount) <= 0 && !isOn(currentObject?.freeShipping) && (
                        <span className="text-xs text-amber-700">{("Enter an amount - without one the coupon takes nothing off.")}</span>
                      )}
                    </div>

                    {couponType === 'percent' && (
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="coupon-max" className="block text-sm font-medium text-gray-700">{("Maximum discount")}</label>
                        <input
                          id="coupon-max"
                          type="number"
                          min="0"
                          step="any"
                          placeholder={("No cap")}
                          className={inputClass}
                          value={currentObject?.maxDiscount ?? ""}
                          onChange={(ev) => setField('maxDiscount', ev.target.value)}
                        />
                        <span className="text-xs text-gray-500">{("Caps the money off, e.g. 20% up to 500.")}</span>
                      </div>
                    )}
                  </div>
                )}

                {couponType !== 'free_shipping' && (
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5] !shadow-none"
                      checked={isOn(currentObject?.freeShipping)}
                      onChange={(ev) => setField('freeShipping', ev.target.checked)}
                    />
                    <span>
                      <span className="block text-sm font-medium text-gray-800">{("Also give free delivery")}</span>
                      <span className="block text-xs text-gray-500">{("The delivery charge is waived as well as the discount.")}</span>
                    </span>
                  </label>
                )}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="coupon-limit" className="block text-sm font-medium text-gray-700">{("Usage limit")}</label>
                  <input
                    id="coupon-limit"
                    type="number"
                    min="0"
                    step="1"
                    placeholder={("Unlimited")}
                    className={inputClass + " sm:max-w-[50%]"}
                    value={currentObject?.limit ?? ""}
                    onChange={(ev) => setField('limit', ev.target.value)}
                  />
                </div>

                {/* What a shopper would get, so the numbers above read as an offer. */}
                <div className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
                  <div className="font-medium text-gray-800">{couponSummary({ ...currentObject, couponType }, wrapCurrency) || ("Set a discount")}</div>
                  <ul className="mt-1 flex flex-col gap-0.5 text-xs">
                    {offerConditions().map((line, index) => <li key={index}>{line}</li>)}
                  </ul>
                </div>

              </div>
            </div>


            {/* ---------- Addons: each one a restriction on who / what the coupon covers ---------- */}

            {hasAddon('products') && (
              <AddonCard title={("Products")} hint={("The discount only counts these products.")}>
                <div className="flex justify-end">
                  <ProductsPicker placeholder={("Search products")} onPick={(item) => addToList('products', { id: item?.id, title: item?.title }, 'id')} />
                </div>
                <ChipList items={currentObject?.products} label={(item) => item?.title || `#${item?.id}`} empty={("No products chosen yet.")} onRemove={(item) => removeFromList('products', item, 'id')} />
              </AddonCard>
            )}

            {hasAddon('categories') && (
              <AddonCard title={("Categories")} hint={("The discount only counts products in these categories.")}>
                <ChipList items={currentObject?.categories} label={(item) => item?.name || item?.slug} empty={("No categories chosen yet.")} onRemove={(item) => removeFromList('categories', item, 'term_id')} />
                <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200 p-2">
                  <TermsPicker
                    queryPrams={{ taxonomy: "product_cat", hierarchical: true, per_page: 999 }}
                    selected={currentObject?.categories ?? []}
                    onPick={(item) => toggleInList('categories', { term_id: item?.term_id, name: item?.name, slug: item?.slug }, 'term_id')}
                  />
                </div>
              </AddonCard>
            )}

            {hasAddon('spend') && (
              <AddonCard title={("Spend")} hint={("Measured on the cart subtotal, before delivery.")}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="coupon-min" className="block text-sm font-medium text-gray-700">{("Minimum spend")}</label>
                    <input id="coupon-min" type="number" min="0" step="any" placeholder={("No minimum")} className={inputClass}
                      value={currentObject?.minSpend ?? ""} onChange={(ev) => setField('minSpend', ev.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="coupon-max-spend" className="block text-sm font-medium text-gray-700">{("Maximum spend")}</label>
                    <input id="coupon-max-spend" type="number" min="0" step="any" placeholder={("No maximum")} className={inputClass}
                      value={currentObject?.maxSpend ?? ""} onChange={(ev) => setField('maxSpend', ev.target.value)} />
                  </div>
                </div>
                {num(currentObject?.minSpend) > 0 && num(currentObject?.maxSpend) > 0 && num(currentObject?.maxSpend) < num(currentObject?.minSpend) && (
                  <div className="text-xs text-red-600">{("Maximum spend is below the minimum, so no cart can use this coupon.")}</div>
                )}
              </AddonCard>
            )}

            {hasAddon('expiry') && (
              <AddonCard title={("Expiry")} hint={("Leave a date empty for no limit on that side.")}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="coupon-start" className="block text-sm font-medium text-gray-700">{("Start date")}</label>
                    <input id="coupon-start" type="datetime-local" className={inputClass}
                      value={currentObject?.startDate ?? ""} onChange={(ev) => setField('startDate', ev.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="coupon-end" className="block text-sm font-medium text-gray-700">{("End date")}</label>
                    <input id="coupon-end" type="datetime-local" className={inputClass}
                      value={currentObject?.endDate ?? ""} onChange={(ev) => setField('endDate', ev.target.value)} />
                  </div>
                </div>
              </AddonCard>
            )}

            {hasAddon('customer') && (
              <AddonCard title={("Customer")} hint={("Shoppers have to be signed in for the store to know which they are.")}>
                <div className="flex flex-col gap-2">
                  {customerRules.map(rule => (
                    <label key={rule.value} className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 text-sm hover:bg-gray-50">
                      <input type="radio" name="coupon-customer-rule" className="h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5] !shadow-none"
                        checked={(currentObject?.customerRule || 'logged_in') === rule.value}
                        onChange={() => setField('customerRule', rule.value)} />
                      <span className="text-gray-800">{rule.label}</span>
                    </label>
                  ))}
                </div>
              </AddonCard>
            )}

            {hasAddon('user') && (
              <AddonCard title={("Users")} hint={("Only these people can use the code, once signed in.")}>
                <div className="flex justify-end">
                  <UsersPicker placeholder={("Search users")} onPick={(user) => addToList('users', { id: user?.id, name: user?.display_name || user?.name, email: user?.email || user?.user_email }, 'id')} />
                </div>
                <ChipList items={currentObject?.users} label={(item) => item?.name ? `${item.name}${item?.email ? ` (${item.email})` : ''}` : (item?.email || `#${item?.id}`)} empty={("No users chosen yet.")} onRemove={(item) => removeFromList('users', item, 'id')} />
              </AddonCard>
            )}










          </div>

          <div className="min-w-0 xl:sticky  xl:self-start">

            <div className="flex flex-col gap-4">

              <div className="form-card flex flex-wrap items-center justify-end gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

                <div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
                  {...permit.hide("edit")} onClick={ev => {
                    update_product()
                  }}
                >Update</div>
              </div>


              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Publish</div>

                <div className="p-4 flex flex-col text-sm gap-4">



                  {/* {JSON.stringify(currentObject?.postStatus)} */}


                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="status" className=" text-gray-500">
                      {("Status")}
                    </label>

                    {/* Controlled by `value`. With `selected` on the options it showed
                        "Publish" (the first option) before the coupon loaded and kept
                        showing it, so a draft coupon looked live - and the cart only
                        accepts published ones. */}
                    <select name="status" id="status" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm  bg-white "
                      value={currentObject?.postStatus === 'publish' ? 'publish' : 'draft'}
                      onChange={ev => setField('postStatus', ev.target.value)}>

                      <option value="publish">Publish</option>
                      <option value="draft">Draft</option>

                    </select>

                  </div>

                  {currentObject && currentObject?.postStatus !== 'publish' && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                      {("This coupon is a draft, so shoppers can't use it yet. Set the status to Publish and click Update.")}
                    </div>
                  )}





                </div>
              </div>












              <div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

                <div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">Addons</div>

                <div className="p-4 flex flex-col  gap-4">


                  <p className="text-xs text-gray-500">{("Switch on the rules this coupon needs. Each one adds its own section.")}</p>

                  <div className="grid grid-cols-2 gap-3 ">

                    {couponAddons.map(item => {
                      var active = hasAddon(item.value);
                      return (
                        <button type="button" key={item.value} aria-pressed={active}
                          className={`flex gap-2 p-3 rounded-lg border text-left transition-colors cursor-pointer ${active ? "border-[#634FE5] bg-[#634FE5]/10 text-[#634FE5]" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`}
                          onClick={() => toggleAddon(item.value)}>
                          {active ? <IconCheckbox className="shrink-0" /> : <IconSquare className="shrink-0" />}
                          <span className="min-w-0">
                            <span className="block text-sm font-medium">{item.label}</span>
                            <span className="block text-xs text-gray-500">{item.hint}</span>
                          </span>
                        </button>
                      )
                    })}

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>


      </div>


    </div>
  )
}

export default CouponEdit