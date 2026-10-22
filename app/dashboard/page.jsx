"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
import { useRouter } from "next/navigation";
import AuthShell from "@/components/AuthShell";

import Login from '../../components/Login';

import Register from '../../components/Register';

import Dashboard from '../../components/Dashboard';


const page = () => {

	const router = useRouter();


	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 10, });
	var [loginStep, setloginStep] = useState('login');




	useEffect(() => {

		if (token) {
			router.push("/dashboard");
		} else {
			/* Only a real sign-out, not the gap before AuthProvider rehydrates the
				 stored JWT - this used to redirect on every reload. */
			if (!localStorage.getItem("token")) router.push("/dashboard");
		}
	}, [token]);



	return (



		<div className="">

			{/* The frame itself comes from app/dashboard/layout.jsx, so every
			    dashboard route has it and not just this one. */}
			{token && (
				<Dashboard />
			)}

			{!token && (
				<div className="">




					{!token && (
						/* `w-100` was a fixed 25rem card, wider than a 360px phone before
							 any padding was counted. The width comes from AuthShell's
							 `max-w-sm` now, so the card fills whatever it is given. */
						<AuthShell>



							<div className="flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/5 sm:p-7">

								{loginStep == 'login' && (

									<>
										<Login />

										<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm">
											<div className="font-medium text-brand transition-colors hover:text-brand-600 hover:underline" onClick={ev => {

												setloginStep('register')

											}}>
												Dont have an account? Register
											</div>
											<Link href="/" className="text-gray-500 transition-colors hover:text-gray-900 hover:underline">
												Home
											</Link>
										</div>
									</>

								)}
								{loginStep == 'register' && (

									<>
										<Register />

										<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm">
											<div className="font-medium text-brand transition-colors hover:text-brand-600 hover:underline" onClick={ev => {

												setloginStep('login')

											}}>
												Already have an account? Login
											</div>
											<Link href="/" className="text-gray-500 transition-colors hover:text-gray-900 hover:underline">
												Home
											</Link>

										</div>
									</>

								)}


							</div>
						</AuthShell>

					)}
				</div>
			)}
		</div>




	);
};

export default page;
