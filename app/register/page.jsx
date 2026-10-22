"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import Login from '../../components/Login';

import Register from '../../components/Register';



const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, });








	return (



		<div className="">

			{!token && (
				/* Matches the sign-in card; the width comes from AuthShell. */
				<div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/5 sm:p-7">
					<Register />

					<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm">
						<Link href="/login" className="font-medium text-brand transition-colors hover:text-brand-600 hover:underline">
							Already have an account? Login
						</Link>
						<Link href="/" className="text-gray-500 transition-colors hover:text-gray-900 hover:underline">
							Home
						</Link>

					</div>
				</div>


			)}
		</div>




	);
};

export default page;
