'use client'

import React from "react";
import { useRecaptcha } from "@/lib/recaptcha";
import { useState } from "react";
import { IconAlertCircle, IconCircleCheck, IconEye, IconEyeOff, IconLock, IconMail, IconPhone, IconUser, IconUserPlus } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../components/auth-context";
import { redirectFromLocation } from "../../../lib/authRedirect";
import ResendVerificationButton from "../../../components/ResendVerificationButton";
import { elementCssClasses } from "../ElementsDefinition";
import { blockSignupRole } from "./registerRoles";

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

	const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

	/* Phone field, from the block's options (RegisterOptions): shown with showPhone, must be filled with phoneRequired. */
	var showPhone = !!props?.options?.showPhone;
	var phoneRequired = showPhone && !!props?.options?.phoneRequired;
	/* What's wrong with the phone number - the form's own check or the server's (field: 'phone') - shown under the field. */
	const [phoneError, setPhoneError] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [result, setResult] = useState(null); // { error: bool, messages: [] }

	/* The role comes from the block's options only (RegisterOptions "Sign up as"); visitors are not offered a choice. */
	var roleInfo = blockSignupRole(props?.options);

	const handleChange = (ev) => {
		setForm({ ...form, [ev.target.name]: ev.target.value });
		if (ev.target.name === 'phone') setPhoneError(null);
	};

	const captcha = useRecaptcha("register");

	async function handleRegister(ev) {
		ev.preventDefault();

		var problems = [];
		if (!form.email.trim()) problems.push("Please enter your email.");
		var phone = showPhone ? form.phone.trim() : "";
		var phoneProblem = null;
		if (phoneRequired && !phone) phoneProblem = "Please enter your phone number.";
		/* Digits with an optional leading +, spaces, dashes or brackets; 6-15 digits. */
		else if (phone && (!/^\+?[\d\s\-()]+$/.test(phone) || !/^\d{6,15}$/.test(phone.replace(/\D/g, "")))) phoneProblem = "Please enter a valid phone number.";
		if (form.password.length < 6) problems.push("Please choose a password of at least 6 characters.");

		setPhoneError(phoneProblem);
		if (problems.length > 0 || phoneProblem) {
			setResult(problems.length > 0 ? { error: true, messages: problems } : null);
			if (phoneProblem && problems.length === 0) document.getElementById(`${id}-register-phone`)?.focus();
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
			/*
				Only roles the block offers are sent. The server checks again:
				customer always, affiliate only while the store allows affiliate
				sign-up; anything else needs an administrator (register_user).
			*/
			/* `mobile` is saved as the account's phone (user meta "phone", ComboStoreRegister::create_user). */
			body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), ...(phone ? { mobile: phone } : {}), password: form.password, registerBy: 'email', role: roleInfo.value, ...captchaFields }),
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
					/* A phone number already registered: under the phone field when the form shows one. */
					if (parsed?.field === 'phone' && showPhone) {
						setPhoneError(messageList(parsed?.messages)[0] || "This phone number can't be used.");
						document.getElementById(`${id}-register-phone`)?.focus();
						return;
					}
					setResult({ error: true, messages: messageList(parsed?.messages) });
					return;
				}

				/*
					An affiliate or rider sign-up the store must approve comes back
					as a customer account with affiliate_application / rider_application
					"pending" (register_user). Say so, and keep saying it after sign-in.
				*/
				var appliedAs = parsed?.rider_application === 'pending' ? 'rider' : parsed?.affiliate_application === 'pending' ? 'affiliate' : null;
				var applied = appliedAs !== null;
				var appliedMessage = `Thanks for applying! Your account is ready and your ${appliedAs} application is waiting for approval. We'll email you once it's approved.`;

				setResult({ error: false, messages: [applied ? appliedMessage : "Your account is ready. Signing you in…"] });

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
						setResult({ error: false, resend: true, messages: [...(applied ? [appliedMessage] : []), "Your account is ready. If we sent you a verification email, confirm it first - then sign in."] });
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
						<p className={cls('subtitle')}>{roleInfo.subtitle}</p>
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

					{showPhone && (
						<div className={`${cls('field')} ${cls('phone-field')}`}>
							<label htmlFor={`${id}-register-phone`} className={cls('field-label')}>
								Phone{!phoneRequired && <span className={cls('field-optional')}> (optional)</span>}
							</label>
							<div className={cls('field-control')}>
								<span className={cls('field-icon')}><IconPhone size={16} /></span>
								<input
									id={`${id}-register-phone`}
									type="tel"
									name="phone"
									autoComplete="tel"
									inputMode="tel"
									required={phoneRequired}
									aria-invalid={phoneError ? true : undefined}
									aria-describedby={phoneError ? `${id}-register-phone-error` : undefined}
									value={form.phone}
									onChange={handleChange}
									className={`${cls('field-input')} ${cls('phone-input')} ${phoneError ? cls('field-input-invalid') : ''}`}
								/>
							</div>
							{phoneError && <p id={`${id}-register-phone-error`} role="alert" className={cls('field-error')}>{phoneError}</p>}
						</div>
					)}

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
