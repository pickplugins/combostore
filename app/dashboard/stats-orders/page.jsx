"use client";
import React from "react";

import OrderStats from "../../../components/OrderStats";


const page = () => {


	return (
		<div className="page-shell">

			{/* Page heading: this screen had no title. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Order Stats")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{("Sales and order performance over the selected range")}
					</p>
				</div>
			</div>

			<OrderStats />
		</div>
	);
};

export default page;
