"use client";

import React, { useContext, useState } from "react";
import Spinner from "./Spinner";
import { useCounterStore } from '../store/useCounterStore'
import Image from "next/image";
import { IconLock, IconMail } from "@tabler/icons-react";
import { ADORNMENT_CLASSES, FIELD_CLASSES, LABEL_CLASSES, SUBMIT_CLASSES } from "./AuthShell";

const Register = () => {



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, settings } = useCounterStore()


	const [user, setUser] = useState({ email: "", password: "" });
	const [messages, setMessages] = useState(null);
	const [errors, seterrors] = useState(null);
	const [logging, setlogging] = useState(false);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};


	function handleRegister(e) {


		e.preventDefault();
		setlogging(true);

		if (user.email.length == 0 || user.password.length == 0) {
			alert("email or password should not empty");
			return;
		}

		seterrors(false)



		var postData = JSON.stringify(user);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var result = JSON.parse(res)

						var error = result.error

						seterrors(error)


						var success = result.success
						var messages = result.messages


						setMessages(messages)


						setlogging(false);


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
				setlogging(false);
			});

	}

	return (

		<div className="flex flex-col gap-4">

			{settings?.site_logo?.src && (
				<div className="flex w-full justify-center">
					<Image
						width={200}
						height={100}
						unoptimized
						src={settings?.site_logo?.src}
						alt=""
						className="h-10 w-auto object-contain"
					/>
				</div>
			)}

			<div className="flex flex-col gap-1 text-center">
				<h2 className="text-xl font-semibold text-gray-900">{("Register")}</h2>
				<p className="text-sm text-gray-500">{("Create an account to get started")}</p>
			</div>



			<form

				// onSubmit={handleRegister}
				className="flex flex-col gap-4"
			>





				<div className="flex flex-col gap-4">
					<div>
						<label htmlFor="register-email" className={LABEL_CLASSES}>{("Email")}</label>
						<div className="relative">
							<span className={ADORNMENT_CLASSES}>
								<IconMail size={16} />
							</span>
							<input
								id="register-email"
								className={FIELD_CLASSES}
								type="email"
								name="email"
								autoComplete="email"
								autoCapitalize="none"
								placeholder={("Email")}
								onChange={handleChange}
								required
							/>
						</div>
					</div>

					<div>
						<label htmlFor="register-password" className={LABEL_CLASSES}>{("Password")}</label>

						<div className="relative">
							<span className={ADORNMENT_CLASSES}>
								<IconLock size={16} />
							</span>
							<input
								id="register-password"
								className={FIELD_CLASSES}
								type="password"
								name="password"
								autoComplete="new-password"
								placeholder={("Password")}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<button
						className={SUBMIT_CLASSES}
						disabled={logging}
						type="submit">{logging && <Spinner size={16} fill="#ffffff" />}{("Register")}</button>
				</div>
			</form>

			{errors && (
				<div className="flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
					{messages != null && (
						<>
							{Object.entries(messages).map(message => {
								return (
									<p key={message[0]}>{message}</p>
								)
							})}						</>
					)}
				</div>
			)}
			{!errors && (
				<div className="flex flex-col gap-1 empty:hidden rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
					{messages != null && (
						<>
							{Object.entries(messages).map(args => {
								return (
									<p key={args[0]}>{args[1]}</p>
								)
							})}
						</>
					)}
				</div>
			)}





		</div>


	);
};

export default Register;
