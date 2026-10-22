"use client";

import { useState } from "react";
// import { useAuth } from "./auth-context";
// import { useRouter } from "next/navigation";
// import Spinner from "/components/Spinner";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useCounterStore } from '../store/useCounterStore'


const Login = (props) => {


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
	var usernameLabel = options?.usernameLabel ?? 'Username/Email';
	var passwordLabel = options?.passwordLabel ?? 'Password';
	var loginLabel = options?.loginLabel ?? 'Login';
	var forgetPasswordLabel = options?.forgetPasswordLabel ?? 'Forget Password';



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	// const settings = useCounterStore((state) => state.settings);
	// const fetchSettings = useCounterStore((state) => state.fetchSettings);

	// const login_ID = settings?.apiKeys?.googleLogin?.id;


	// const { user, handleLogin, logging } = useAuth();
	// const router = useRouter();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

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
						<label className={`${cssSelectors['label-username']?.classes}`}>{usernameLabel}</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}

							className={`${cssSelectors['input-username']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>

					<div className={`${cssSelectors['input-wrap']?.classes}`}>
						<label className={`${cssSelectors['label-email']?.classes}`}>{passwordLabel}</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={`${cssSelectors['input-email']?.classes} ${cssSelectors['input']?.classes}`}
						/>
					</div>
					<div
						className={`${cssSelectors['submit']?.classes}`}

						onClick={ev => {
							onSubmit()
						}}
					>
						<div>{loginLabel}</div>


						{/* {logging && <Spinner />} */}
					</div>
				</div>


				<div className={`${cssSelectors['forget-password']?.classes}`}>
					{forgetPasswordLabel}
				</div>



			</form>
		</div>



	);
}


export default Login;
