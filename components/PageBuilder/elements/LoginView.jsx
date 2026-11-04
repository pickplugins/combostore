'use client'

import React from "react";
import { useState } from "react";
import { IconAlertCircle, IconEye, IconEyeOff, IconLock, IconUser, IconLogin2 } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../components/auth-context";

/* Field styles shared with RegisterView so the two forms match side by side. */
export const authFieldClass = "w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15";
export const authLabelClass = "mb-1.5 block text-sm font-medium text-gray-700";
export const authAdornmentClass = "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400";
export const authSubmitClass = "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

/*
	The storefront's sign-in block.

	`handleLogin` returns nothing - it signs in in the background - so the old
	check on its return value showed "Invalid username or password" on every
	attempt, the successful ones included. The form now shows the provider's
	own error and progress. It also submitted only on a click of a div; Enter
	now works, and the customer stays on this page once signed in rather than
	being sent to the dashboard.
*/
const LoginView = (props) => {

	var cssSelectors = props?.cssSelectors ?? {};
	var type = props?.type;
	var id = props?.id;

	const { error, handleLogin, logging } = useAuth();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [missing, setMissing] = useState(false);

	const onSubmit = (ev) => {
		ev.preventDefault();

		if (!username.trim() || !password) {
			setMissing(true);
			return;
		}

		setMissing(false);
		handleLogin(username.trim(), password, null);
	};

	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			<form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">

				{/* Pages that put their own heading above the form set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div>
						<h3 className="text-lg font-semibold text-gray-900">Sign in</h3>
						<p className="text-sm text-gray-500">Welcome back! Sign in to see your orders and saved details.</p>
					</div>
				)}

				{(missing || error) && (
					<p role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
						<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
						<span>{missing ? "Please enter your username and password." : error}</span>
					</p>
				)}

				<div>
					<label htmlFor={`${id}-login-username`} className={authLabelClass}>Username or email</label>
					<div className="relative">
						<span className={authAdornmentClass}><IconUser size={16} /></span>
						<input
							id={`${id}-login-username`}
							name="username"
							type="text"
							autoComplete="username"
							autoCapitalize="none"
							autoCorrect="off"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className={authFieldClass}
						/>
					</div>
				</div>

				<div>
					<label htmlFor={`${id}-login-password`} className={authLabelClass}>Password</label>
					<div className="relative">
						<span className={authAdornmentClass}><IconLock size={16} /></span>
						<input
							id={`${id}-login-password`}
							name="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`${authFieldClass} !pr-11`}
						/>
						<button
							type="button"
							aria-label={showPassword ? "Hide password" : "Show password"}
							title={showPassword ? "Hide password" : "Show password"}
							onClick={() => setShowPassword(!showPassword)}
							className="absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700"
						>
							{showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
						</button>
					</div>
				</div>

				<button type="submit" disabled={logging} className={authSubmitClass}>
					{logging ? <Spinner /> : <IconLogin2 size={16} />}
					{logging ? "Signing in…" : "Sign in"}
				</button>

			</form>

		</div>
	);
};

export default LoginView;
