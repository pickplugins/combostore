'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { useCounterStore } from '../../../store/useCounterStore';

const SectionView = (props) => {


	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, settings } = useCounterStore()

	var cssSelectors = props?.cssSelectors;

	var type = props?.type
	var options = props?.options;
	var id = props?.id;

	var index = props?.index


	const [user, setUser] = useState({ email: "", password: "" });
	const [messages, setMessages] = useState(null);
	const [errors, seterrors] = useState(null);
	const [logging, setlogging] = useState(false);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};


	function handleRegister(e) {


		e.preventDefault();
		setlogging(true);

		if (user.email.length == 0 || user.password.length == 0) {
			alert("email or password should not empty");
			return;
		}

		seterrors(false)



		var postData = JSON.stringify(user);

		fetch(serverUrl + "wp-json/combo-store/v2/register_user", {
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


						var result = JSON.parse(res)

						var error = result.error

						seterrors(error)


						var success = result.success
						var messages = result.messages


						setMessages(messages)


						setlogging(false);


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
				setlogging(false);
			});

	}


	const children = props?.children || [];


	return (
		<div

			id={id}
			type={type}
			className={` ${cssSelectors['*']?.classes}  
			`}

		>
			<div className="flex flex-col gap-3">

				{settings?.site_logo?.src && (
					<div className="w-full flex justify-center">
						<Image width={200} height={100} unoptimized src={settings?.site_logo?.src} alt="Login Image" />
					</div>
				)}

				<h2 className="my-5 text-2xl">{("Register")}</h2>



				<form

					// onSubmit={handleRegister}
					className="flex flex-col gap-3"
				>





					<div className="flex flex-col gap-3">
						<div>
							<label htmlFor="" className="block">{("Email")}</label>
							<input
								className="!shadow-none bg-white px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400  !outline-none focus:border-0"
								type="email"
								name="email"
								placeholder={("Email")}
								onChange={handleChange}
								required
							/>
						</div>

						<div>
							<label htmlFor="" className="block">{("Password")}</label>

							<input
								className="!shadow-none bg-white px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400  !outline-none focus:border-0"

								type="password"
								name="password"
								placeholder={("Password")}
								onChange={handleChange}
								required
							/>
						</div>
						<button
							className="!shadow-none bg-white px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400  !outline-none focus:border-0"

							type="submit">{("Register")} {logging && <Spinner />}</button>
					</div>
				</form>

				{errors && (
					<div className="text-red-600">
						{messages != null && (
							<>
								{Object.entries(messages).map(message => {
									return (
										<p>{message}</p>
									)
								})}						</>
						)}
					</div>
				)}
				{!errors && (
					<div className="text-green-700">
						{messages != null && (
							<>
								{Object.entries(messages).map(args => {
									return (
										<p>{args[1]}</p>
									)
								})}
							</>
						)}
					</div>
				)}





			</div>

		</div>
	);
};



export default SectionView;
