"use client";

import { useState } from "react";
import { IconEye, IconEyeOff, IconLock, IconUser, IconLogin2 } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the sign-in block.

	It mirrors LoginView's markup and reads the same cssSelectors keys (with
	the same defaults), so styles edited in the builder show here exactly as
	on the storefront. It does not sign in: the submit is a no-op here, and
	the fields stay typeable so filled inputs can be previewed.
*/
const Login = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('login', cssSelectors);

	var id = props?.id;
	var type = props?.type;
	var options = props?.options;

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

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
						<h3 className={cls('title')}>Sign in</h3>
						<p className={cls('subtitle')}>Welcome back! Sign in to see your orders and saved details.</p>
					</div>
				)}

				<div className={cls('field')}>
					<label htmlFor={`${id}-login-username`} className={cls('field-label')}>Username or email</label>
					<div className={cls('field-control')}>
						<span className={cls('field-icon')}><IconUser size={16} /></span>
						<input
							id={`${id}-login-username`}
							name="username"
							type="text"
							autoComplete="off"
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
							autoComplete="off"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
				</div>

				{/* type="button" so a click only selects the block in the canvas. */}
				<button type="button" className={cls('submit-button')}>
					<IconLogin2 size={16} />
					Sign in
				</button>

			</form>
		</div>

	);
}


export default Login;
