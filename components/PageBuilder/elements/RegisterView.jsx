'use client'

import React from "react";
import { useState } from "react";
import { IconAlertCircle, IconCircleCheck, IconEye, IconEyeOff, IconLock, IconMail, IconUser, IconUserPlus } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../components/auth-context";
import { authFieldClass, authLabelClass, authAdornmentClass, authSubmitClass } from "./LoginView";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* The server's messages arrive as a list or as an object of lists. */
function messageList(messages) {
	if (!messages) return [];
	if (Array.isArray(messages)) return messages.flat().map(String);
	if (typeof messages === 'object') return Object.values(messages).flat().map(String);
	return [String(messages)];
}

/*
	The storefront's sign-up block.

	The form's submit handler was commented out, so pressing Register
	reloaded the page with the email and password in the address bar. Image
	and Spinner were used without being imported, which crashed the block on
	any shop with a logo, and errors printed as "key,value" pairs. A new
	account is signed in straight away instead of being told to go and log in.
*/
const RegisterView = (props) => {

	var cssSelectors = props?.cssSelectors ?? {};
	var type = props?.type;
	var id = props?.id;

	const { handleLogin } = useAuth();

	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [result, setResult] = useState(null); // { error: bool, messages: [] }

	const handleChange = (ev) => {
		setForm({ ...form, [ev.target.name]: ev.target.value });
	};

	function handleRegister(ev) {
		ev.preventDefault();

		var problems = [];
		if (!form.email.trim()) problems.push("Please enter your email.");
		if (form.password.length < 6) problems.push("Please choose a password of at least 6 characters.");

		if (problems.length > 0) {
			setResult({ error: true, messages: problems });
			return;
		}

		setSubmitting(true);
		setResult(null);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			/* Sign-ups from the shop are always customer accounts. */
			body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), password: form.password, registerBy: 'email', role: 'customer' }),
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then((res) => {
				/* The endpoint double-encodes its reply. */
				var parsed = typeof res === 'string' ? JSON.parse(res) : res;

				if (parsed?.error) {
					setResult({ error: true, messages: messageList(parsed?.messages) });
					return;
				}

				setResult({ error: false, messages: ["Your account is ready. Signing you in…"] });
				handleLogin(form.email.trim(), form.password, null);
			})
			.catch(() => {
				setResult({ error: true, messages: ["We couldn't create your account just now. Please try again."] });
			})
			.finally(() => setSubmitting(false));
	}

	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			<form onSubmit={handleRegister} noValidate className="flex flex-col gap-4">

				{/* Pages that put their own heading above the form set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div>
						<h3 className="text-lg font-semibold text-gray-900">Create an account</h3>
						<p className="text-sm text-gray-500">Check out faster and keep track of your orders.</p>
					</div>
				)}

				{result && result.messages.length > 0 && (
					<div
						role={result.error ? "alert" : "status"}
						className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${result.error ? 'border-red-200 bg-red-50 text-red-700' : 'border-green-200 bg-green-50 text-green-700'}`}
					>
						{result.error ? <IconAlertCircle size={16} className="mt-0.5 shrink-0" /> : <IconCircleCheck size={16} className="mt-0.5 shrink-0" />}
						<div className="flex flex-col gap-0.5">
							{result.messages.map((message, index) => (
								<span key={index} dangerouslySetInnerHTML={{ __html: message }} />
							))}
						</div>
					</div>
				)}

				<div>
					<label htmlFor={`${id}-register-name`} className={authLabelClass}>Full name</label>
					<div className="relative">
						<span className={authAdornmentClass}><IconUser size={16} /></span>
						<input id={`${id}-register-name`} type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} className={authFieldClass} />
					</div>
				</div>

				<div>
					<label htmlFor={`${id}-register-email`} className={authLabelClass}>Email</label>
					<div className="relative">
						<span className={authAdornmentClass}><IconMail size={16} /></span>
						<input id={`${id}-register-email`} type="email" name="email" autoComplete="email" required value={form.email} onChange={handleChange} className={authFieldClass} />
					</div>
				</div>

				<div>
					<label htmlFor={`${id}-register-password`} className={authLabelClass}>Password</label>
					<div className="relative">
						<span className={authAdornmentClass}><IconLock size={16} /></span>
						<input
							id={`${id}-register-password`}
							type={showPassword ? "text" : "password"}
							name="password"
							autoComplete="new-password"
							required
							value={form.password}
							onChange={handleChange}
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
					<p className="mt-1 text-xs text-gray-500">At least 6 characters.</p>
				</div>

				<button type="submit" disabled={submitting} className={authSubmitClass}>
					{submitting ? <Spinner /> : <IconUserPlus size={16} />}
					{submitting ? "Creating account…" : "Create account"}
				</button>

			</form>

		</div>
	);
};

export default RegisterView;
