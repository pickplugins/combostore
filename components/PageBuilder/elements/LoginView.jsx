'use client'

import React from "react";
import { useState } from "react";
import { IconAlertCircle, IconEye, IconEyeOff, IconLock, IconUser, IconLogin2 } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../components/auth-context";

import { elementCssClasses } from "../ElementsDefinition";

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
	/* Each part's classes; a key the block lacks falls back to the login defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('login', cssSelectors);
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
		<div id={id} type={type} className={cls('*')}>

			<form onSubmit={onSubmit} noValidate className={cls('form')}>

				{/* Pages that put their own heading above the form set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Sign in</h3>
						<p className={cls('subtitle')}>Welcome back! Sign in to see your orders and saved details.</p>
					</div>
				)}

				{(missing || error) && (
					<p role="alert" className={cls('error')}>
						<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
						<span>{missing ? "Please enter your username and password." : error}</span>
					</p>
				)}

				<div className={cls('field')}>
					<label htmlFor={`${id}-login-username`} className={cls('field-label')}>Username or email</label>
					<div className={cls('field-control')}>
						<span className={cls('field-icon')}><IconUser size={16} /></span>
						<input
							id={`${id}-login-username`}
							name="username"
							type="text"
							autoComplete="username"
							autoCapitalize="none"
							autoCorrect="off"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className={`${cls('field-input')} ${cls('username-input')}`}
						/>
					</div>
				</div>

				<div className={cls('field')}>
					<label htmlFor={`${id}-login-password`} className={cls('field-label')}>Password</label>
					<div className={cls('field-control')}>
						<span className={cls('field-icon')}><IconLock size={16} /></span>
						<input
							id={`${id}-login-password`}
							name="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`${cls('field-input')} ${cls('password-input')}`}
						/>
						<button
							type="button"
							aria-label={showPassword ? "Hide password" : "Show password"}
							title={showPassword ? "Hide password" : "Show password"}
							onClick={() => setShowPassword(!showPassword)}
							className={cls('password-toggle')}
						>
							{showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
						</button>
					</div>
				</div>

				<button type="submit" disabled={logging} className={cls('submit-button')}>
					{logging ? <Spinner /> : <IconLogin2 size={16} />}
					{logging ? "Signing in…" : "Sign in"}
				</button>

			</form>

		</div>
	);
};

export default LoginView;
