"use client";

import { useEffect, useState } from "react";
// import { useAuth } from "./auth-context";
// import { useRouter } from "next/navigation";
// import Spinner from "/components/Spinner";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useCounterStore } from '../store/useCounterStore'


const LoginByPhone = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var phoneLabel = options?.phoneLabel ?? 'Phone Number';
	var otpLabel = options?.otpLabel ?? 'OTP';
	var verifyOtpLabel = options?.verifyOtpLabel ?? 'Verify OTP';
	var sendOtpLabel = options?.sendOtpLabel ?? 'Send OTP';



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	// const settings = useCounterStore((state) => state.settings);
	// const fetchSettings = useCounterStore((state) => state.fetchSettings);

	// const login_ID = settings?.apiKeys?.googleLogin?.id;


	// const { user, handleLogin, logging } = useAuth();
	// const router = useRouter();

	const [step, setstep] = useState(2);
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

	const normalizePhone = (value) => {
		let normalized = String(value).replace(/[\s()-]/g, "");
		if (normalized.startsWith("+")) normalized = normalized.slice(1);
		if (normalized.startsWith("8801")) normalized = `0${normalized.slice(3)}`;
		return normalized;
	};

	const isValidPhone = (value) => /^01[3-9]\d{8}$/.test(normalizePhone(value));

	const requestJson = async (url, payload) => {
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
		let data = {};
		try {
			data = await response.json();
		} catch {
			// The endpoint may return an empty or non-JSON response.
		}
		if (!response.ok || data?.success === false || data?.status === "error") {
			throw new Error(data?.message || data?.error || `Request failed (${response.status})`);
		}
		return data;
	};

	const onSubmit = async (e) => {
		e?.preventDefault?.();
		if (loading) return;
		setError("");

		const normalizedPhone = normalizePhone(phone);
		if (!isValidPhone(normalizedPhone)) {
			setError("Enter a valid Bangladeshi mobile number (e.g. 01537039053).");
			return;
		}

		setLoading(true);
		try {
			if (step === 1) {
				if (timer > 0) {
					setError(`Please wait ${timer} seconds before requesting another OTP.`);
					return;
				}

				let result;
				if (typeof props?.onSendOtp === "function") {
					result = await props.onSendOtp({ phone: normalizedPhone });
				} else {
					const endpoint = options?.sendOtpEndpoint || props?.sendOtpEndpoint;
					if (!endpoint) throw new Error("OTP sending is not configured. Provide onSendOtp or sendOtpEndpoint.");
					const url = /^https?:\/\//i.test(endpoint) ? endpoint : `${String(serverUrl || "").replace(/\/$/, "")}/${String(endpoint).replace(/^\//, "")}`;
					result = await requestJson(url, { phone: normalizedPhone });
				}

				if (result?.success === false || result?.status === "error") {
					throw new Error(result?.message || "Unable to send OTP.");
				}
				setPhone(normalizedPhone);
				setstep(2);
				setTimer(Number(options?.otpResendCooldown ?? 60));
				setError("");
			} else {
				const cleanOtp = String(otp).trim();
				if (!/^\d{4,8}$/.test(cleanOtp)) {
					setError("Enter the valid OTP code.");
					return;
				}

				let result;
				if (typeof props?.onVerifyOtp === "function") {
					result = await props.onVerifyOtp({ phone: normalizedPhone, otp: cleanOtp });
				} else {
					const endpoint = options?.verifyOtpEndpoint || props?.verifyOtpEndpoint;
					if (!endpoint) throw new Error("OTP verification is not configured. Provide onVerifyOtp or verifyOtpEndpoint.");
					const url = /^https?:\/\//i.test(endpoint) ? endpoint : `${String(serverUrl || "").replace(/\/$/, "")}/${String(endpoint).replace(/^\//, "")}`;
					result = await requestJson(url, { phone: normalizedPhone, otp: cleanOtp });
				}

				if (result?.success === false || result?.status === "error" || result?.verified === false) {
					throw new Error(result?.message || "OTP verification failed.");
				}
				setError("");
				if (typeof props?.onLoginSuccess === "function") {
					await props.onLoginSuccess(result, { phone: normalizedPhone, otp: cleanOtp });
				}
			}
		} catch (err) {
			setError(err?.message || "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};





	function send_login_otp() {



		var postData = JSON.stringify({ phone: phone });

		fetch(serverUrl + "wp-json/combo-store/v2/send_login_otp", {
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





						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}








	return (

		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>
			<form className={`${cssSelectors['form']?.classes}`} onSubmit={onSubmit}>
				<div className={`${cssSelectors['input-fields-wrap']?.classes}`}>
					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-phone']?.classes}`}>{phoneLabel}</label>
						<input
							type="number"
							value={phone}
							placeholder="01537039053"
							onChange={(e) => setPhone(e.target.value)}

							className={`${cssSelectors['input-phone']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>

					{step == 1 && (

						<>


							<div
								className={`${cssSelectors['submit']?.classes}`}
								role="button"
								aria-disabled={loading || timer > 0}
								onClick={send_login_otp}
							>
								<div>{loading ? "Please wait..." : timer > 0 ? `Resend OTP in ${timer}s` : sendOtpLabel}</div>


								{/* {logging && <Spinner />} */}
							</div>
						</>

					)}
					{step == 2 && (

						<>


							<div className={`${cssSelectors['input-wrap']?.classes}`}>
								<label className={`${cssSelectors['label-otp']?.classes}`}>{otpLabel}</label>
								<input
									type="text"
									value={otp}
									onChange={(e) => setOtp(e.target.value)}
									className={`${cssSelectors['input-otp']?.classes} ${cssSelectors['input']?.classes}`}
								/>
							</div>
							<div
								className={`${cssSelectors['submit']?.classes}`}
								role="button"
								aria-disabled={loading}
								onClick={onSubmit}
							>
								<div>{loading ? "Verifying..." : verifyOtpLabel}</div>


								{/* {logging && <Spinner />} */}
							</div>
						</>

					)}


					{error && <div role="alert" aria-live="polite">{error}</div>}
				</div>





			</form>
		</div>



	);
}


export default LoginByPhone;
