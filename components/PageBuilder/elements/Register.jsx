"use client";

import { useState } from "react";
import { IconEye, IconEyeOff, IconLock, IconMail, IconUser, IconUserPlus } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the sign-up block.

	It mirrors RegisterView's markup and reads the same cssSelectors keys (with
	the same defaults from ElementsDefinition.js), so styles edited in the
	builder show here exactly as on the storefront. It does not create an
	account: the submit is a no-op here, and the fields stay typeable so filled
	inputs can be previewed.
*/
const Register = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('register', cssSelectors);

	var id = props?.id;
	var type = props?.type;
	var options = props?.options;

	const [form, setForm] = useState({ name: "", email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (ev) => {
		setForm({ ...form, [ev.target.name]: ev.target.value });
	};

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
			<form onSubmit={ev => ev.preventDefault()} noValidate className={cls('form')}>

				{/* Pages that put their own heading above the form set hideTitle. */}
				{!options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Create an account</h3>
						<p className={cls('subtitle')}>Check out faster and keep track of your orders.</p>
					</div>
				)}

				<div className={cls('fields')}>

					<div className={cls('field')}>
						<label htmlFor={`${id}-register-name`} className={cls('field-label')}>Full name</label>
						<div className={cls('field-control')}>
							<span className={cls('field-icon')}><IconUser size={16} /></span>
							<input id={`${id}-register-name`} type="text" name="name" autoComplete="off" value={form.name} onChange={handleChange} className={`${cls('field-input')} ${cls('name-input')}`} />
						</div>
					</div>

					<div className={cls('field')}>
						<label htmlFor={`${id}-register-email`} className={cls('field-label')}>Email</label>
						<div className={cls('field-control')}>
							<span className={cls('field-icon')}><IconMail size={16} /></span>
							<input id={`${id}-register-email`} type="email" name="email" autoComplete="off" value={form.email} onChange={handleChange} className={`${cls('field-input')} ${cls('email-input')}`} />
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
								autoComplete="off"
								value={form.password}
								onChange={handleChange}
								className={`${cls('field-input')} ${cls('password-input')}`}
							/>
							<button
								type="button"
								aria-label={showPassword ? "Hide password" : "Show password"}
								title={showPassword ? "Hide password" : "Show password"}
								onClick={e => { e.stopPropagation(); setShowPassword(!showPassword); }}
								className={cls('password-toggle')}
							>
								{showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
							</button>
						</div>
						<p className={cls('field-hint')}>At least 6 characters.</p>
					</div>

				</div>

				{/* type="button" so a click only selects the block in the canvas. */}
				<button type="button" className={cls('submit-button')}>
					<IconUserPlus size={16} />
					Create account
				</button>

			</form>
		</div>

	);
}


export default Register;
