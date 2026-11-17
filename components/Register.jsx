"use client";

import React, { useContext, useState } from "react";
import Spinner from "./Spinner";
import { useCounterStore } from '../store/useCounterStore'
import Image from "next/image";
import { IconLock, IconMail } from "@tabler/icons-react";
import { ADORNMENT_CLASSES, FIELD_CLASSES, LABEL_CLASSES, SUBMIT_CLASSES } from "./AuthShell";
import { useAuth } from "./auth-context";
import { redirectFromLocation, withRedirect } from "@/lib/authRedirect";
import Link from "next/link";
import ResendVerificationButton from "./ResendVerificationButton";

const Register = () => {

	const { handleLogin, resendUrl } = useAuth();



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, settings } = useCounterStore()


	const [user, setUser] = useState({ email: "", password: "" });
	const [messages, setMessages] = useState(null);
	const [errors, seterrors] = useState(null);
	const [logging, setlogging] = useState(false);
	/* Shown after sign-up when signing straight in was refused (email verification). */
	const [signInLink, setsignInLink] = useState(null);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};


	function handleRegister(e) {


		e.preventDefault();

		/* A message in the form rather than alert(), and the button is not
		   left disabled - it returned before clearing `logging`. */
		if (user.email.length == 0 || user.password.length == 0) {
			seterrors(true);
			setMessages(["Email and password are required."]);
			return;
		}

		setlogging(true);
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

						/*
							Sent here with `?redirect=` (the checkout's sign-in notice):
							try to sign the new account straight in and go back.
							WordPress accepts the email as the login name. A store
							that makes new accounts verify their email first refuses
							that sign-in, so then the shopper is told to verify and
							given a Sign in link that still returns to checkout.
							Without a redirect the message stays as it was.
						*/
						var redirect = redirectFromLocation();
						if (!error && redirect) {
							setMessages(["Account created. Signing you in..."]);
							handleLogin(user.email, user.password, redirect).then((signedIn) => {
								if (!signedIn) {
									setMessages(["Account created. If we sent you a verification email, confirm it first - then sign in to continue."]);
									setsignInLink(withRedirect("/login", redirect));
								}
							});
						}


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



			{/*
				onSubmit was commented out, so Register submitted the form natively:
				the page reloaded with the email and password in the URL and no
				account was created.
			*/}
			<form
				onSubmit={handleRegister}
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
							{/* message[1]: the entry is [index, text], and the whole pair printed as "0Text". */}
							{Object.entries(messages).map(message => {
								return (
									<p key={message[0]}>{message[1]}</p>
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
					{signInLink && (
						<Link href={signInLink} className="font-semibold underline underline-offset-2">Sign in</Link>
					)}
					{/* Only after this form's own sign-in was refused for an unverified email (signInLink is set then). */}
					{signInLink && <ResendVerificationButton key={resendUrl} url={resendUrl} />}
				</div>
			)}





		</div>


	);
};

export default Register;
