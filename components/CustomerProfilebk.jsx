"use client";

import { useState, useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";
import { useCounterStore } from '../store/useCounterStore'

import LocationPicker from "../components/LocationPicker";
import WidgetWrapper from '../components/WidgetWrapper';
import countries from '../lib/Countries';
import states from '../lib/States'

import DropDown from '../components/DropDown';

const CustomerProfile = ({ userid }) => {




	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle } = useCounterStore()



	var [editUserData, seteditUserData] = useState({ kids: [], phones: [], addresses: [], customer_category: [] });
	var [passwordData, setpasswordData] = useState({ currentPass: "", newPass1: "", newPass2: "", passMatched: false, passUpdate: false, loading: false });
	var [countriesList, setcountriesList] = useState({});
	var [statesList, setstatesList] = useState([]);

	const [loading, setloading] = useState(false);
	var defaultCountry = 'BD';




	function updateUserProfile() {
		setloading(true);



		if (!token) {
			//throw new Error("No token found");
		}
		var postData = {
			id: userid,
			userData: editUserData,

		};


		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/update_user_profile", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						addNotification({ type: 'success', title: 'Profile Updated', content: "Your information updated successful." })

						setTimeout(() => {
							setloading(false);
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}

	function getUserProfile() {


		if (!token) {
			//throw new Error("No token found");
		}

		setloading(true);


		var postData = {
			id: userid,

		};

		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {
				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						console.log("customer data", res)

						seteditUserData({ ...editUserData, ...res.customer })


						setTimeout(() => {
							setloading(false);

						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}
	function updateUserPassword() {


		if (!token) {
			throw new Error("No token found");
		}
		if (passwordData.newPass1 !== passwordData.newPass2) {
			setpasswordData({ ...passwordData, passMatched: false, errors: ("Password doesn't match."), passUpdate: false, });

			addNotification({ type: 'error', title: 'Password update failed', content: "Password doesn't match." })

			return;
		}


		setpasswordData({ ...passwordData, loading: true, });

		setloading(true);


		var postData = {
			id: userDataX.id,
			old_password: passwordData.currentPass,
			new_password: passwordData.newPass1,


		};

		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/update_user_password", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {
				if (response.ok && response.status < 400) {
					response.json().then((res) => {



						var success = res?.success
						var errors = res?.errors


						if (errors?.length > 0) {
							setpasswordData({ ...passwordData, passUpdate: false, loading: false, });
							addNotification({ type: 'error', title: 'Update failed', content: errors })
						}
						if (success?.length > 0) {
							setpasswordData({ ...passwordData, passUpdate: true, loading: false, });
							addNotification({ type: 'success', title: 'Password updated', content: success })
						}








						setTimeout(() => {
							setloading(false);

						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {
		getUserProfile();
	}, []);

	useEffect(() => {

		var items = {};

		countries.map(country => {
			items[country.code2] = { label: country.name, value: country.code2, states: country.states }
		})

		setcountriesList(items)

	}, [countries]);


	useEffect(() => {
		var country = editUserData?.billing_country ?? defaultCountry;

		var selectedStates = states[country] ? states[country] : {};


		var statesListX = {};

		Object.entries(selectedStates)?.map(args => {

			var index = args[0]
			var name = args[1]

			statesListX[index] = { label: name, value: index, }

		})
		setstatesList(statesListX)
	}, [editUserData?.billing_country, defaultCountry]);





	return (
		<div className="flex flex-col gap-5">



			<div className=" flex items-center justify-end gap-2">

				{loading && (

					<div className="bg-[#1b0e9f] px-2 py-2 rounded-sm"><Spinner /></div>

				)}

				<div

					onClick={(ev) => {
						ev.preventDefault();

						updateUserProfile();
					}}
					className="p-2 inline hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white"
				>
					{("Update Profile")}

				</div>

			</div>


			<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">



				<WidgetWrapper collapsible={true} title="General Information">





					<form action="" className="">

						<div className="flex flex-col gap-5">

							<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
								<label htmlFor="" className="  py-2 lg:w-60 ">
									{("User Name")}
								</label>
								<input
									type="text"
									name="name"
									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.name}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));

									}}
								/>
							</div>

							<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Email")}
								</label>
								<input
									type="text"
									name="email"


									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.email}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>

							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<div htmlFor="" className="     py-2 lg:w-60 ">
									{("Phone")}
								</div>
								<input
									type="text"
									name="phone"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.phone}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>









						</div>


					</form>

				</WidgetWrapper>
				<WidgetWrapper collapsible={true} title="Change Password">

					<div className="flex justify-end">
						<div className="flex items-center gap-2">

							<div
								disabled={!passwordData?.passMatched}
								type="submit"
								value={("Update")}
								className={`${!passwordData?.passMatched ? "opacity-30 !cursor-not-allowed p-2 inline hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white" : "p-2 inline hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white"}`}
								onClick={(ev) => {
									ev.preventDefault();

									updateUserPassword();
								}}
							>
								{("Update")}
							</div>
							{passwordData?.loading && (
								<Spinner />
							)}
						</div>
					</div>

					<form className="grid grid-cols-1 gap-8">
						<div>
							<label htmlFor="" className="block  ">
								{("Current Password")}
							</label>
							<input
								type="password"
								className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
								onChange={(ev) => {
									var value = ev.target.value;
									setpasswordData({ ...passwordData, currentPass: value });
								}}
							/>
						</div>
						<div>
							<label htmlFor="" className="block ">
								{("New Password")}
							</label>
							<input
								type="password"
								className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
								onChange={(ev) => {
									var value = ev.target.value;
									setpasswordData({ ...passwordData, newPass1: value });
								}}
							/>
						</div>
						<div>
							<label htmlFor="" className="block ">
								{("Confirm Password")}
							</label>
							<input
								type="password"
								className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
								onChange={(ev) => {
									var value = ev.target.value;




									if (passwordData.newPass1 == value) {
										setpasswordData({ ...passwordData, newPass2: value, passMatched: true });

									} else {
										setpasswordData({ ...passwordData, newPass2: value, passMatched: false, errors: ("Password doesn't match.") });

									}


								}}
							/>


						</div>









					</form>
				</WidgetWrapper>







				<WidgetWrapper collapsible={true} title="Billing Address">





					<form action="" className="">

						<div className="flex flex-col gap-5">




							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<div htmlFor="" className="     py-2 lg:w-60 ">
									{("Billing Phone")}
								</div>
								<input
									type="text"
									name="billing_phone"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.billing_phone}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>



							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Address 1")}
								</label>
								<input
									type="text"
									name="billing_address1"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.billing_address1}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>
							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Address 2")}
								</label>
								<input
									type="text"
									name="billing_address2"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.billing_address2}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>



							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Country")}
								</label>



								{Object.entries(countriesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={editUserData?.billing_country ?? defaultCountry} options={countriesList} label={countriesList[editUserData?.billing_country]?.label ? countriesList[editUserData?.billing_country]?.label : `Choose Country`} onOptionsChoose={(args) => {

										console.log(args?.value);
										seteditUserData(prev => ({
											...prev,
											billing_country: args?.value,
											billing_city: null
										}));

									}} />
								)}



							</div>
							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("City")}
								</label>

								{Object.entries(statesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={editUserData?.billing_city} options={statesList} label={statesList[editUserData?.billing_city]?.label ? statesList[editUserData?.billing_city]?.label : `Choose City`} onOptionsChoose={(args) => {


										seteditUserData(prev => ({
											...prev,
											billing_city: args?.value
										}));


									}} />
								)}








							</div>
							{/* <div className="lg:flex flex-wrap py-3 gap-3 items-center">
									<label htmlFor="" className="   py-2 lg:w-60 ">
										{("Country")}
									</label>
									<input
										type="text"
											name="country"

										className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
										value={editUserData?.country}
										onChange={(ev) => {
											const { name, value } = ev.target;
												seteditUserData(prev => ({
													...prev,
													[name]: value
												}));
										}}
									/>
								</div> */}



						</div>


					</form>

				</WidgetWrapper>
				<WidgetWrapper collapsible={true} title="Shipping Address">





					<form action="" className="">

						<div className="flex flex-col gap-5">




							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<div htmlFor="" className="     py-2 lg:w-60 ">
									{("Shipping name")}
								</div>
								<input
									type="text"
									name="shipping_name"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.shipping_name}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>
							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<div htmlFor="" className="     py-2 lg:w-60 ">
									{("Shipping Phone")}
								</div>
								<input
									type="text"
									name="shipping_phone"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.shipping_phone}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>



							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Address 1")}
								</label>
								<input
									type="text"
									name="shipping_address1"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.shipping_address1}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>
							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Address 2")}
								</label>
								<input
									type="text"
									name="shipping_address2"

									className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
									value={editUserData?.shipping_address2}
									onChange={(ev) => {
										const { name, value } = ev.target;
										seteditUserData(prev => ({
											...prev,
											[name]: value
										}));
									}}
								/>
							</div>



							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("Country")}
								</label>



								{Object.entries(countriesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={editUserData?.shipping_country ?? defaultCountry} options={countriesList} label={countriesList[editUserData?.shipping_country]?.label ? countriesList[editUserData?.shipping_country]?.label : `Choose Country`} onOptionsChoose={(args) => {

										console.log(args?.value);
										seteditUserData(prev => ({
											...prev,
											shipping_country: args?.value,
											billing_city: null
										}));

									}} />
								)}



							</div>
							<div className="lg:flex flex-wrap py-3 gap-3 items-center">
								<label htmlFor="" className="  py-2 lg:w-60  ">
									{("City")}
								</label>

								{Object.entries(statesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={editUserData?.shipping_city} options={statesList} label={statesList[editUserData?.shipping_city]?.label ? statesList[editUserData?.shipping_city]?.label : `Choose City`} onOptionsChoose={(args) => {


										seteditUserData(prev => ({
											...prev,
											shipping_city: args?.value
										}));


									}} />
								)}








							</div>
							{/* <div className="lg:flex flex-wrap py-3 gap-3 items-center">
									<label htmlFor="" className="   py-2 lg:w-60 ">
										{("Country")}
									</label>
									<input
										type="text"
											name="country"

										className=" rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
										value={editUserData?.country}
										onChange={(ev) => {
											const { name, value } = ev.target;
												seteditUserData(prev => ({
													...prev,
													[name]: value
												}));
										}}
									/>
								</div> */}



						</div>


					</form>

				</WidgetWrapper>



				<WidgetWrapper collapsible={true} title="Delivery Location">




					<div className="flex flex-col gap-4">





						{editUserData?.delivery_location && (
							<div className=" bg-[#9a90ff]  rounded-sm p-3">
								<p>You haven't set any delivery location.</p>
							</div>
						)}



						<LocationPicker markerDraggable={true} latlng={editUserData?.delivery_location} onLocationSelect={(coords) => {




							seteditUserData(prev => ({ ...prev, delivery_location: coords }));



						}} />
					</div>


				</WidgetWrapper>




				<WidgetWrapper collapsible={true} title="Customer Information">


					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Profession')}</div>
						<select name="profession" className="rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
							value={editUserData?.profession}
							onChange={(ev) => {
								const { name, value } = ev.target;
								seteditUserData(prev => ({
									...prev,
									[name]: value
								}));
							}}
						>
							<option value="">Choose</option>
							<option value="student">Student</option>
							<option value="teacher">Teacher </option>
							<option value="doctor">Doctor</option>
							<option value="engineer">Engineer</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Monthly Income')}</div>
						<select name="income" className="rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
							value={editUserData?.income}
							onChange={(ev) => {
								const { name, value } = ev.target;
								seteditUserData(prev => ({
									...prev,
									[name]: value
								}));
							}}
						>
							<option value="">Choose</option>
							<option value="10000-20000">10000-20000</option>
							<option value="20000-30000">20000-30000 </option>
							<option value="30000-40000">30000-40000</option>
							<option value="40000-50000">40000-50000</option>
							<option value="50000+">50000+</option>
						</select>
					</div>
					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Has Orderd')}</div>
						<select name="has_orderd" className="rounded-sm !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
							value={editUserData?.has_orderd}
							onChange={(ev) => {
								const { name, value } = ev.target;
								seteditUserData(prev => ({
									...prev,
									[name]: value
								}));
							}}
						>
							<option value="">Choose</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>




					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Customer Category')}</div>

						<div className="flex flex-col gap-2">


							<select name="total_orderd" className="rounded-sm px-2 py-1 !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
								value={editUserData?.total_orderd}
								onChange={(ev) => {
									const { name, value } = ev.target;


									seteditUserData(prev => {
										return {
											...prev,
											customer_category: [...prev?.customer_category, value]
										}
									})







								}}
							>
								<option value="">Choose</option>
								<option value="repeat">Repeat</option>
								<option value="first-time">First-time</option>
								<option value="frequent">Frequent</option>
								<option value="loyal">Loyal</option>
								<option value="vip">VIP</option>
								<option value="mid-value">Mid-value</option>
								<option value="high-value">High-value</option>
								<option value="low-value">Low-value</option>
								<option value="reviewer">Reviewer</option>
								<option value="COD">COD</option>
								<option value="high-return">High return</option>
								<option value="fraud">Fraud</option>
								<option value="high-trust">High trust</option>
							</select>

							<div className="flex gap-5 flex-col">
								{editUserData?.customer_category?.map((item, index) => {
									return (
										<div className="flex gap-3">
											<div className="bg-red-400 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={ev => {

												seteditUserData(prev => {
													return {
														...prev,
														customer_category: prev?.customer_category?.filter((item, idx) => idx !== index)
													}
												})

											}} >X</div>
											<div key={index} className="flex flex-col gap-2">
												<div>{item}

												</div>









											</div>


										</div>
									)
								}
								)}
							</div>
						</div>
					</div>


					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Phones')}</div>

						<div className="flex flex-col gap-2">
							<div className="p-2 w-fit hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white" onClick={ev => {

								seteditUserData(prev => {
									return {
										...prev,
										phones: [...prev?.phones, { label: "", phone: "", }]
									}
								})

							}}>Add</div>


							<div className="flex gap-5 flex-col">
								{editUserData?.phones?.map((item, index) => {
									return (
										<div className="flex gap-3">
											<div key={index} className="flex flex-col gap-2">
												<div>{item.name}
													<input
														type="text"
														name="label"
														placeholder="label"
														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.label}
														onChange={(ev) => {
															const { name, value } = ev.target;
															var phones = editUserData?.phones || [];
															phones[index] = { ...phones[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																phones: phones
															}));

														}}
													/>
												</div>
												<div>

													<input
														type="text"
														name="phone"
														placeholder="phone number"

														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.phone}
														onChange={(ev) => {
															const { name, value } = ev.target;

															var phones = editUserData?.phones || [];
															phones[index] = { ...phones[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																phones: phones
															}));








														}}
													/>
												</div>









											</div>
											<div>

												<div className="bg-red-400 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={ev => {

													seteditUserData(prev => {
														return {
															...prev,
															phones: prev?.phones?.filter((item, idx) => idx !== index)
														}
													})

												}} >Remove</div>

											</div>

										</div>
									)
								}
								)}
							</div>
						</div>
					</div>
					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Kids')}</div>

						<div className="flex flex-col gap-2">
							<div className="p-2 w-fit hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white" onClick={ev => {

								seteditUserData(prev => {
									return {
										...prev,
										kids: [...prev?.kids, { name: "", age: "", birth_date: "" }]
									}
								})

							}}>Add</div>


							<div className="flex gap-5 flex-col">
								{editUserData?.kids?.map((item, index) => {
									return (
										<div className="flex gap-3">
											<div key={index} className="flex flex-col gap-2">
												<div>
													<input
														type="text"
														name="name"
														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.name}
														onChange={(ev) => {
															const { name, value } = ev.target;
															var kids = editUserData?.kids || [];
															kids[index] = { ...kids[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																kids: kids
															}));


														}}
													/>
												</div>
												<div>

													<input
														type="number"
														name="age"
														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.age}
														onChange={(ev) => {
															const { name, value } = ev.target;
															var kids = editUserData?.kids || [];
															kids[index] = { ...kids[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																kids: kids
															}));

														}}
													/>
												</div>
												<div>

													<input
														type="date"
														name="birth_date"
														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.birth_date}
														onChange={(ev) => {
															const { birth_date, value } = ev.target;
															var kids = editUserData?.kids || [];
															kids[index] = { ...kids[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																kids: kids
															}));

														}}
													/>
												</div>








											</div>
											<div>

												<div className="bg-red-400 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={ev => {

													seteditUserData(prev => {
														return {
															...prev,
															kids: prev?.kids?.filter((item, idx) => idx !== index)
														}
													})

												}} >Remove</div>

											</div>

										</div>
									)
								}
								)}
							</div>
						</div>
					</div>

					<div className=" lg:flex flex-wrap py-3 gap-3 items-center ">
						<div className="  py-2 lg:w-60 ">{('Addresses')}</div>

						<div className="flex flex-col gap-2">
							<div className="p-2 w-fit hover:bg-[#1b0e9f] rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white" onClick={ev => {

								seteditUserData(prev => {
									return {
										...prev,
										addresses: [...prev?.addresses, { name: "", age: "", birth_date: "" }]
									}
								})

							}}>Add</div>


							<div className="flex gap-5 flex-col">
								{editUserData?.addresses?.map((item, index) => {
									return (
										<div className="flex gap-3">
											<div key={index} className="flex flex-col gap-2">
												<div>
													<textarea
														type="text"
														name="name"
														className=" px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
														value={item?.name}
														onChange={(ev) => {
															const { name, value } = ev.target;
															var addresses = editUserData?.addresses || [];
															addresses[index] = { ...addresses[index], [name]: value };

															seteditUserData(prev => ({
																...prev,
																addresses: addresses
															}));


														}}
													/>
												</div>










											</div>
											<div>

												<div className="bg-red-400 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={ev => {

													seteditUserData(prev => {
														return {
															...prev,
															addresses: prev?.addresses?.filter((item, idx) => idx !== index)
														}
													})

												}} >Remove</div>

											</div>

										</div>
									)
								}
								)}
							</div>
						</div>
					</div>










				</WidgetWrapper>








			</div>
		</div>
	);
}

export default CustomerProfile