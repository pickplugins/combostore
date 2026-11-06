'use client'

import React from "react";
import { useState, useEffect } from "react";
import { IconAlertCircle, IconDeviceMobile, IconPencil } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const defaultSendEndpoint = "wp-json/combo-store/v2/send_login_otp";
const defaultVerifyEndpoint = "wp-json/combo-store/v2/verify_login_otp";

const normalizePhone = (value) => {
	let normalized = String(value).replace(/[\s()-]/g, "");
	if (normalized.startsWith("+")) normalized = normalized.slice(1);
	if (normalized.startsWith("8801")) normalized = `0${normalized.slice(3)}`;
	return normalized;
};

const isValidPhone = (value) => /^01[3-9]\d{8}$/.test(normalizePhone(value));

const endpointUrl = (endpoint) => /^https?:\/\//i.test(endpoint)
	? endpoint
	: `${String(serverUrl || "").replace(/\/$/, "")}/${String(endpoint).replace(/^\//, "")}`;

/* A failure can come back as { success: false, message }, as WordPress's
   { errors: { code: [message] } }, or as a plain error. */
function failureMessage(data) {
	if (!data || typeof data !== 'object') return null;
	if (data.success === false || data.status === "error" || data.verified === false) {
		return data.message || data.error || "Something went wrong. Please try again.";
	}
	if (data.errors && typeof data.errors === 'object') {
		const first = Object.values(data.errors).flat()[0];
		return first ? String(first) : "Something went wrong. Please try again.";
	}
	if (data.code && data.message && data.data?.status >= 400) return data.message;
	return null;
}

async function postJson(url, payload) {
	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	let data = {};
	try {
		data = await response.json();
	} catch {
		// Empty or non-JSON reply.
	}
	const failed = failureMessage(data);
	if (!response.ok || failed) {
		throw new Error(failed || `Request failed (${response.status})`);
	}
	return data;
}

/*
	Sign in with a phone number and a one-time code.

	The buttons used to call the endpoints directly, skipping the number check,
	the resend cooldown and the code check this block already had, and a
	verified code did nothing at all. Both steps now go through the same
	checks; a reply that carries a login token signs the customer in.
*/
const LoginByPhoneView = (props) => {

	var cssSelectors = props?.cssSelectors ?? {};
	var type = props?.type;
	var id = props?.id;
	var index = props?.index;
	var options = props?.options;

	var phoneLabel = options?.phoneLabel ?? 'Phone number';
	var otpLabel = options?.otpLabel ?? 'Code';
	var verifyOtpLabel = options?.verifyOtpLabel ?? 'Verify & sign in';
	var sendOtpLabel = options?.sendOtpLabel ?? 'Send code';

	/* Each part's classes; a key the block lacks falls back to the loginByPhone defaults in ElementsDefinition.js. */
	const cls = elementCssClasses('loginByPhone', cssSelectors);

	const [step, setstep] = useState(1);
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState("");
	const [timer, setTimer] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		if (timer <= 0) return;
		const intervalId = setInterval(() => {
			setTimer((current) => Math.max(0, current - 1));
		}, 1000);
		return () => clearInterval(intervalId);
	}, [timer > 0]);

	async function sendCode() {
		const normalizedPhone = normalizePhone(phone);
		if (!isValidPhone(normalizedPhone)) {
			setError("Enter a valid Bangladeshi mobile number, for example 01712345678.");
			return;
		}
		if (timer > 0) {
			setError(`Please wait ${timer} seconds before asking for another code.`);
			return;
		}

		if (typeof props?.onSendOtp === "function") {
			await props.onSendOtp({ phone: normalizedPhone });
		} else {
			await postJson(endpointUrl(options?.sendOtpEndpoint || props?.sendOtpEndpoint || defaultSendEndpoint), { phone: normalizedPhone });
		}

		setPhone(normalizedPhone);
		setOtp("");
		setstep(2);
		setTimer(Number(options?.otpResendCooldown ?? 60));
	}

	async function verifyCode() {
		const cleanOtp = String(otp).trim();
		if (!/^\d{4,8}$/.test(cleanOtp)) {
			setError("Enter the code from the text message.");
			return;
		}

		const normalizedPhone = normalizePhone(phone);
		let result;
		if (typeof props?.onVerifyOtp === "function") {
			result = await props.onVerifyOtp({ phone: normalizedPhone, otp: cleanOtp });
		} else {
			result = await postJson(endpointUrl(options?.verifyOtpEndpoint || props?.verifyOtpEndpoint || defaultVerifyEndpoint), { phone: normalizedPhone, otp: cleanOtp });
		}

		if (typeof props?.onLoginSuccess === "function") {
			await props.onLoginSuccess(result, { phone: normalizedPhone, otp: cleanOtp });
			return;
		}

		if (result?.token) {
			/* Same storage the username login uses; the reload lets the auth
			   provider pick the token up and load the customer. */
			localStorage.setItem("token", result.token);
			window.location.reload();
			return;
		}

		/* The server checked the code but sent no login token back. */
		throw new Error("Your number is verified, but signing in by phone isn't available yet. Please sign in with your username and password.");
	}

	const onSubmit = async (ev) => {
		ev?.preventDefault?.();
		if (loading) return;
		setError("");
		setLoading(true);
		try {
			if (step === 1) await sendCode();
			else await verifyCode();
		} catch (err) {
			setError(err?.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const resend = async () => {
		if (loading || timer > 0) return;
		setError("");
		setLoading(true);
		try {
			await sendCode();
		} catch (err) {
			setError(err?.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id={id} index={index} type={type} className={cls('*')}>
			<form className={cls('form')} onSubmit={onSubmit} noValidate>

				<div className={cls('field')}>
					<label htmlFor={`${id}-phone`} className={cls('field-label')}>{phoneLabel}</label>
					<div className={cls('field-control')}>
						<input
							id={`${id}-phone`}
							type="tel"
							inputMode="numeric"
							autoComplete="tel"
							value={phone}
							placeholder="01XXXXXXXXX"
							readOnly={step === 2}
							onChange={(e) => setPhone(e.target.value)}
							className={`${cls('field-input')} ${cls('phone-input')} ${step === 2 ? cls('phone-input-locked') : ''}`}
						/>
						{step === 2 && (
							<button
								type="button"
								className={cls('change-button')}
								onClick={() => { setstep(1); setOtp(""); setError(""); }}
							>
								<IconPencil size={12} /> Change
							</button>
						)}
					</div>
				</div>

				{step === 1 && (
					<button type="submit" className={cls('submit-button')} disabled={loading || timer > 0}>
						{loading ? <Spinner /> : <IconDeviceMobile size={16} />}
						{loading ? "Sending…" : timer > 0 ? `Send again in ${timer}s` : sendOtpLabel}
					</button>
				)}

				{step === 2 && (
					<>
						<p className={cls('sent-note')}>We sent a code to <span className={cls('sent-phone')}>{phone}</span>.</p>

						<div className={cls('field')}>
							<label htmlFor={`${id}-otp`} className={cls('field-label')}>{otpLabel}</label>
							<div className={cls('field-control')}>
								<input
									id={`${id}-otp`}
									type="text"
									inputMode="numeric"
									autoComplete="one-time-code"
									maxLength={8}
									value={otp}
									onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
									className={`${cls('field-input')} ${cls('otp-input')}`}
								/>
							</div>
						</div>

						<button type="submit" className={cls('submit-button')} disabled={loading}>
							{loading && <Spinner />}
							{loading ? "Checking…" : verifyOtpLabel}
						</button>

						<button
							type="button"
							className={cls('resend-button')}
							disabled={loading || timer > 0}
							onClick={resend}
						>
							{timer > 0 ? `Didn't get it? Send again in ${timer}s` : "Didn't get it? Send again"}
						</button>
					</>
				)}

				{error && (
					<div role="alert" aria-live="polite" className={cls('error')}>
						<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
						<span>{error}</span>
					</div>
				)}

			</form>
		</div>
	);
};

export default LoginByPhoneView;
