"use client";

import { useState } from "react";
// import { useAuth } from "./auth-context";
// import { useRouter } from "next/navigation";
// import Spinner from "/components/Spinner";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useCounterStore } from '../store/useCounterStore'


const Register = (props) => {


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
	var emailLabel = options?.emailLabel ?? 'Username/Email';
	var phoneLabel = options?.phoneLabel ?? 'Phone';
	var password1Label = options?.password1Label ?? 'Password';
	var password2Label = options?.password2Label ?? 'Rewrite Password';
	var registerLabel = options?.registerLabel ?? 'Register';
	var haveAccountLabel = options?.haveAccountLabel ?? 'Have an Account?';



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	// const settings = useCounterStore((state) => state.settings);
	// const fetchSettings = useCounterStore((state) => state.fetchSettings);

	// const login_ID = settings?.apiKeys?.googleLogin?.id;


	// const { user, handleLogin, logging } = useAuth();
	// const router = useRouter();

	const [user, setUser] = useState({ email: "", password: "", phone: "", role: 'customer' });
	const [messages, setMessages] = useState(null);
	const [errors, seterrors] = useState(null);
	const [logging, setlogging] = useState(false);

	const handleChange = (e) => {

		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		//e.preventDefault();
		// const success = handleLogin(username, password);

		// if (success) {
		// 	router.push("/"); // redirect after login
		// } else {
		// 	setError("Invalid username or password");
		// }
	};














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
			<form className={`${cssSelectors['form']?.classes}`}>
				<div className={`${cssSelectors['input-fields-wrap']?.classes}`}>
					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-username']?.classes}`}>{emailLabel}</label>
						<input
							type="text"
							placeholder={`yourmail@domain.com`}
							name="email"
							onChange={ev => {
								setUser({ ...user, email: ev.target.value });
							}}


							className={`${cssSelectors['input-username']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>
					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-username']?.classes}`}>{phoneLabel}</label>
						<input
							type="text"
							placeholder={`01737034053`}
							name="email"
							onChange={ev => {
								setUser({ ...user, phone: ev.target.value });
							}}


							className={`${cssSelectors['input-phone']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>

					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-email']?.classes}`}>{password1Label}</label>
						<input
							type="text"
							name="password1"
							placeholder={("")}
							onChange={ev => {
								setUser({ ...user, password1: ev.target.value });
							}}
							className={`${cssSelectors['input-password']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>
					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-email']?.classes}`}>{password2Label}</label>
						<input
							type="text"
							name="password2"
							placeholder={("")}
							onChange={ev => {
								setUser({ ...user, password2: ev.target.value });
							}}
							className={`${cssSelectors['input-password']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>



					<div
						className={`${cssSelectors['submit']?.classes}`}

						onClick={ev => {
							// handleRegister()
						}}
					>
						<div>{registerLabel}</div>


						{/* {logging && <Spinner />} */}
					</div>
				</div>


				<div className={`${cssSelectors['have-account']?.classes}`}>
					{haveAccountLabel}
				</div>



			</form>
		</div>



	);
}


export default Register;
