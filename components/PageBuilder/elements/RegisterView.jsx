'use client'

import React from "react";
import { useRecaptcha } from "@/lib/recaptcha";
import { useState } from "react";
import { IconAlertCircle, IconCircleCheck, IconEye, IconEyeOff, IconLock, IconMail, IconUser, IconUserPlus } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../components/auth-context";
import { redirectFromLocation } from "../../../lib/authRedirect";
import ResendVerificationButton from "../../../components/ResendVerificationButton";
import { elementCssClasses } from "../ElementsDefinition";

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
	/* Each part's classes; a key the block lacks falls back to the register defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('register', cssSelectors);
	var type = props?.type;
	var id = props?.id;

	const { handleLogin, resendUrl } = useAuth();

	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [result, setResult] = useState(null); // { error: bool, messages: [] }

	const handleChange = (ev) => {
		setForm({ ...form, [ev.target.name]: ev.target.value });
	};

	const captcha = useRecaptcha("register");

	async function handleRegister(ev) {
		ev.preventDefault();

		var problems = [];
		if (!form.email.trim()) problems.push("Please enter your email.");
		if (form.password.length < 6) problems.push("Please choose a password of at least 6 characters.");

		if (problems.length > 0) {
			setResult({ error: true, messages: problems });
			return;
		}

		var captchaFields = {};
		try {
			captchaFields = await captcha.fields();
		} catch (err) {
			setResult({ error: true, messages: [err.message] });
			return;
		}

		setSubmitting(true);
		setResult(null);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			/* Sign-ups from the shop are always customer accounts. */
			body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), password: form.password, registerBy: 'email', role: 'customer', ...captchaFields }),
		})
			.then((response) => {
				/* A refusal with a reason (reCAPTCHA, validation) is shown as given. */
				if (!response.ok) {
					return response.json().catch(() => null).then((body) => {
						throw new Error(body?.message || 'request failed');
					});
				}
				return response.json();
			})
			.then((res) => {
				/* The endpoint double-encodes its reply. */
				var parsed = typeof res === 'string' ? JSON.parse(res) : res;

				if (parsed?.error) {
					captcha.reset();
					setResult({ error: true, messages: messageList(parsed?.messages) });
					return;
				}

				setResult({ error: false, messages: ["Your account is ready. Signing you in…"] });

				/*
					Stays on this page unless it was opened with `?redirect=`
					(lib/authRedirect.js, e.g. from the checkout's sign-in notice).
					A store that makes new accounts verify their email refuses this
					sign-in; it used to fail silently, leaving "Signing you in…" on
					screen for good. Now the shopper is told what to do next.
				*/
				handleLogin(form.email.trim(), form.password, redirectFromLocation() ?? null).then((signedIn) => {
					if (!signedIn) {
						/* `resend`: show the resend button (auth-context's resendUrl, set when the refusal was an unverified email). */
						setResult({ error: false, resend: true, messages: ["Your account is ready. If we sent you a verification email, confirm it first - then sign in."] });
					}
				});
			})
			.catch((err) => {
				captcha.reset();
				var reason = err?.message && err.message !== 'request failed' ? err.message : "We couldn't create your account just now. Please try again.";
				setResult({ error: true, messages: [reason] });
			})
			.finally(() => setSubmitting(false));
	}

	return (
		<div id={id} type={type} className={cls('*')}>

			<form onSubmit={handleRegister} noValidate className={cls('form')}>

				{/* Pages that put their own heading above the form set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Create an account</h3>
						<p className={cls('subtitle')}>Check out faster and keep track of your orders.</p>
					</div>
				)}

				{result && result.messages.length > 0 && (
					<div
						role={result.error ? "alert" : "status"}
						className={`${cls('message')} ${result.error ? cls('message-error') : cls('message-success')}`}
					>
						{result.error ? <IconAlertCircle size={16} className="mt-0.5 shrink-0" /> : <IconCircleCheck size={16} className="mt-0.5 shrink-0" />}
						<div className={cls('message-list')}>
							{result.messages.map((message, index) => (
								<span key={index} dangerouslySetInnerHTML={{ __html: message }} />
							))}
							{result.resend && <ResendVerificationButton key={resendUrl} url={resendUrl} />}
						</div>
					</div>
				)}

				<div className={cls('fields')}>

					<div className={cls('field')}>
						<label htmlFor={`${id}-register-name`} className={cls('field-label')}>Full name</label>
						<div className={cls('field-control')}>
							<span className={cls('field-icon')}><IconUser size={16} /></span>
							<input id={`${id}-register-name`} type="text" name="name" autoComplete="name" value={form.name} onChange={handleChange} className={`${cls('field-input')} ${cls('name-input')}`} />
						</div>
					</div>

					<div className={cls('field')}>
						<label htmlFor={`${id}-register-email`} className={cls('field-label')}>Email</label>
						<div className={cls('field-control')}>
							<span className={cls('field-icon')}><IconMail size={16} /></span>
							<input id={`${id}-register-email`} type="email" name="email" autoComplete="email" required value={form.email} onChange={handleChange} className={`${cls('field-input')} ${cls('email-input')}`} />
						</div>
					</div>

					<div className={`${cls('field')} ${cls('password-field')}`}>
						<label htmlFor={`${id}-register-password`} className={cls('field-label')}>Password</label>
						<div className={cls('field-control')}>
							<span className={cls('field-icon')}><IconLock size={16} /></span>
							<input
								id={`${id}-register-password`}
								type={showPassword ? "text" : "password"}
								name="password"
								autoComplete="new-password"
								required
								value={form.password}
								onChange={handleChange}
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
						<p className={cls('field-hint')}>At least 6 characters.</p>
					</div>

				</div>

				{captcha.widget}

				<button type="submit" disabled={submitting} className={cls('submit-button')}>
					{submitting ? <Spinner /> : <IconUserPlus size={16} />}
					{submitting ? "Creating account…" : "Create account"}
				</button>

			</form>

		</div>
	);
};

export default RegisterView;
