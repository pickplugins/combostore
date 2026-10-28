'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import Spinner from "../../../components/Spinner";
import { useRouter } from "next/navigation";

import { useCounterStore } from '../../../store/useCounterStore';
import { useAuth } from "../../../components/auth-context";

const SectionView = (props) => {

	const router = useRouter();
	const { handleLogout } = useAuth();

	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, settings } = useCounterStore()

	var cssSelectors = props?.cssSelectors ?? {};

	var type = props?.type
	var options = props?.options;
	var id = props?.id;

	var index = props?.index



	const login_ID = settings?.apiKeys?.googleLogin?.id;


	const { user, handleLogin, logging } = useAuth();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onSubmit = (e) => {
		//e.preventDefault();



		const success = handleLogin(username, password);

		console.log(success);


		if (success) {
			router.push("/"); // redirect after login
		} else {
			setError("Invalid username or password");
		}
	};


	return (
		<div

			id={id}
			type={type}
			className={` ${cssSelectors['*']?.classes}  
			`}

		>




			<form className="flex flex-col gap-3">
				{error && <p className="text-red-500">{error}</p>}
				<div className="flex flex-col gap-4">
					<div className="">
						<label className="">Username</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full border p-2 rounded"
						/>
					</div>

					<div className="">
						<label className="">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full border p-2 rounded"
						/>
					</div>
					<div
						className="p-3 py-[5px] hover:bg-[#1b0e9f] bg-[#1b0e9f] text-white  cursor-pointer  rounded-sm  w-full flex gap-2 items-center justify-center"
						onClick={ev => {
							onSubmit()
						}}
					>
						<div>Login</div>


						{logging && <Spinner />}
					</div>
				</div>


				{/* <div className="flex gap-3">
					<a href="https://api.whatsapp.com/send/?phone=8801745093000&text=I%20forgot%20my%20password" className="text-blue-500">Forgot password?</a>
					<a href="https://api.whatsapp.com/send/?phone=8801745093000&text=I%20want%20to%20reset%20my%20password" className="text-blue-500">Reset Password</a>
				</div> */}


				{/* <div className="py-10 w-full justify-center">
				<GoogleOAuthProvider clientId={login_ID}>
					<div>
						<GoogleLogin
							onSuccess={handleGoogleLogin}
							onError={handleError}
						/>
					</div>
				</GoogleOAuthProvider>
			</div> */}

			</form>

		</div>
	);
};



export default SectionView;
