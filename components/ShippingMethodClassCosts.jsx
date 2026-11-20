"use client";
import React from "react";
import Link from "next/link";
import { shippingClassCostLabel } from "@/lib/shippingClasses";

/*
	A shipping method's cost for each shipping class
	(cstore_shipping_class_rates). A blank cost uses the class's default.
	ShippingMethodEdit loads and saves these alongside the method.

	`rates` is { [class_id]: { cost, type } }.
*/

const FIELD =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition-colors hover:border-gray-400";

const ShippingMethodClassCosts = ({ classes, rates, onChange, methodType, loading }) => {

  var noClassCosts = methodType === 'free_shipping' || methodType === 'local_pickup';

  function setRate(classId, patch) {
    var current = rates?.[classId] ?? { cost: '', type: 'fixed' };
    onChange({ ...rates, [classId]: { ...current, ...patch } });
  }

  if (loading) {
    return <p className="py-3 text-sm text-gray-500">Loading shipping classes...</p>;
  }

  if (!classes?.length) {
    return (
      <p className="py-3 text-sm text-gray-500">
        No shipping classes yet. Create them in <Link href="/dashboard/shipping-classes" className="font-medium text-[#634FE5] hover:underline">Delivery → Shipping Classes</Link>.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 py-3">

      <p className="text-xs text-gray-500">
        {noClassCosts
          ? 'Free shipping and local pickup never add class costs. These amounts are kept in case you change the method type.'
          : 'What this method adds for each class. Leave a cost blank to use the class’s default. The most expensive class in the cart is added once per order.'}
      </p>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-3 py-2">Class</th>
              <th className="px-3 py-2">Default</th>
              <th className="px-3 py-2">This method</th>
              <th className="px-3 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(c => {
              var rate = rates?.[c.id] ?? { cost: '', type: c.type };
              return (
                <tr key={c.id} className="border-t border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-900">
                    {c.name || c.slug}
                    {!Number(c.status) && <span className="ml-2 text-xs font-normal text-gray-400">inactive</span>}
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-gray-500">{shippingClassCostLabel(c)}</td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      min={0}
                      step="any"
                      aria-label={`${c.name} cost on this method`}
                      className={`${FIELD} min-w-[100px] tabular-nums`}
                      placeholder="Default"
                      value={rate.cost ?? ''}
                      onChange={ev => setRate(c.id, { cost: ev.target.value })}
                    />
                  </td>
                  <td className="px-3 py-2">
                    <select
                      aria-label={`${c.name} cost type on this method`}
                      className={`${FIELD} min-w-[150px]`}
                      value={rate.type ?? 'fixed'}
                      disabled={rate.cost === '' || rate.cost == null}
                      onChange={ev => setRate(c.id, { type: ev.target.value })}
                    >
                      <option value="fixed">Fixed amount</option>
                      <option value="percent">Percent of subtotal</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShippingMethodClassCosts;
