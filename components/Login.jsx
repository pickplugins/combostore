"use client";
import Image from "next/image";

import { useState } from "react";
import { useAuth } from "./auth-context";
import { useRouter } from "next/navigation";
import { useCounterStore } from '../store/useCounterStore'
import Spinner from './Spinner';
import { IconAlertCircle, IconEye, IconEyeOff, IconLock, IconUser } from "@tabler/icons-react";
import { ADORNMENT_CLASSES, FIELD_CLASSES, LABEL_CLASSES, SUBMIT_CLASSES } from "./AuthShell";

export default function Login() {

	const { token, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, privacyMode, setprivacyMode, settings } = useCounterStore()

	/*
		Subscribed, not read with `useCounterStore.getState()`. That is a one-off
		snapshot taken while rendering, so this screen kept whatever `settings`
		were at first mount - null, because they load after the JWT does - and no
		later arrival re-rendered it.
	*/


	/* `error` comes from the provider now. This component used to keep an
		 `error` state of its own that nothing ever wrote to, so a rejected
		 sign-in showed no message. */
	const { user, error, handleLogin, logging } = useAuth();
	const router = useRouter();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		const success = handleLogin(username, password);

		// if (success) {
		// 	router.push("/"); // redirect after login
		// } else {
		// 	setError("Invalid username or password");
		// }
	};

	if (user) {
		return <p>You are already logged in as {user.name}</p>;
	}

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4">

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
				<h2 className="text-xl font-semibold text-gray-900">
					{("Welcome back")}
				</h2>
				<p className="text-sm text-gray-500">
					{("Sign in to manage your store")}
				</p>
			</div>

			{error && (
				<p
					role="alert"
					className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
					<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
					<span>{error}</span>
				</p>
			)}

			<div>
				<label htmlFor="login-username" className={LABEL_CLASSES}>
					{("Username")}
				</label>
				<div className="relative">
					<span className={ADORNMENT_CLASSES}>
						<IconUser size={16} />
					</span>
					<input
						id="login-username"
						name="username"
						type="text"
						autoComplete="username"
						autoCapitalize="none"
						autoCorrect="off"
						placeholder={("your username")}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className={FIELD_CLASSES}
					/>
				</div>
			</div>

			<div>
				<label htmlFor="login-password" className={LABEL_CLASSES}>
					{("Password")}
				</label>
				<div className="relative">
					<span className={ADORNMENT_CLASSES}>
						<IconLock size={16} />
					</span>
					<input
						id="login-password"
						name="password"
						type={showPassword ? "text" : "password"}
						autoComplete="current-password"
						placeholder="••••••••"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={`${FIELD_CLASSES} !pr-11`}
					/>
					{/* Typing a password blind on a phone keyboard is the single
					    biggest cause of a failed sign-in from mobile. */}
					<button
						type="button"
						title={showPassword ? ("Hide password") : ("Show password")}
						aria-label={showPassword ? ("Hide password") : ("Show password")}
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center !rounded-lg !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!text-gray-700">
						{showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
					</button>
				</div>
			</div>

			<button
				type="submit"
				disabled={logging}
				className={SUBMIT_CLASSES}>
				{logging && <Spinner size={16} fill="#ffffff" />}
				{logging ? ("Signing in...") : ("Sign in")}
			</button>

		</form>
	);
}
