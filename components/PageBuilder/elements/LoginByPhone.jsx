"use client";

import { useState } from "react";
import { IconDeviceMobile, IconPencil } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the phone sign-in block.

	It mirrors LoginByPhoneView's markup and reads the same cssSelectors keys
	(with the same defaults from ElementsDefinition.js), so styles edited in
	the builder show here exactly as on the storefront. It never calls the OTP
	endpoints: "Send code" just switches to the code step and "Change" goes
	back, so both steps can be previewed and styled without sending a text.
*/
const LoginByPhone = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('loginByPhone', cssSelectors);

	var id = props?.id;
	var type = props?.type;
	var options = props?.options;

	var phoneLabel = options?.phoneLabel ?? 'Phone number';
	var otpLabel = options?.otpLabel ?? 'Code';
	var verifyOtpLabel = options?.verifyOtpLabel ?? 'Verify & sign in';
	var sendOtpLabel = options?.sendOtpLabel ?? 'Send code';

	const [step, setstep] = useState(1);
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState("");

	return (

		<div draggable id={id} index={index} type={type} className={`${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
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
			<form className={cls('form')} onSubmit={ev => ev.preventDefault()} noValidate>

				<div className={cls('field')}>
					<label htmlFor={`${id}-phone`} className={cls('field-label')}>{phoneLabel}</label>
					<div className={cls('field-control')}>
						<input
							id={`${id}-phone`}
							type="tel"
							inputMode="numeric"
							autoComplete="off"
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
								onClick={e => { e.stopPropagation(); setstep(1); setOtp(""); }}
							>
								<IconPencil size={12} /> Change
							</button>
						)}
					</div>
				</div>

				{step === 1 && (
					<button type="button" className={cls('submit-button')} onClick={e => { e.stopPropagation(); setstep(2); }}>
						<IconDeviceMobile size={16} />
						{sendOtpLabel}
					</button>
				)}

				{step === 2 && (
					<>
						<p className={cls('sent-note')}>We sent a code to <span className={cls('sent-phone')}>{phone || '01XXXXXXXXX'}</span>.</p>

						<div className={cls('field')}>
							<label htmlFor={`${id}-otp`} className={cls('field-label')}>{otpLabel}</label>
							<div className={cls('field-control')}>
								<input
									id={`${id}-otp`}
									type="text"
									inputMode="numeric"
									autoComplete="off"
									maxLength={8}
									value={otp}
									onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
									className={`${cls('field-input')} ${cls('otp-input')}`}
								/>
							</div>
						</div>

						{/* type="button" so a click only selects the block in the canvas. */}
						<button type="button" className={cls('submit-button')}>
							{verifyOtpLabel}
						</button>

						<button type="button" className={cls('resend-button')}>
							Didn't get it? Send again
						</button>
					</>
				)}

			</form>
		</div>

	);
}


export default LoginByPhone;
