"use client";

import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import {
	IconPlus,
	IconTrash,
	IconX,
	IconCircleCheck,
	IconCircleX,
	IconInfoCircle,
} from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";

import LocationPicker from "../components/LocationPicker";
import WidgetWrapper from "../components/WidgetWrapper";
import countries from "../lib/Countries";
import states from "../lib/States";

import DropDown from "../components/DropDown";

/* ---------------- Shared style tokens ---------------- */
const inputBase =
	"w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 " +
	"shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

const labelBase = "block text-sm font-medium text-gray-700 mb-1";

const btnPrimary =
	"inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm " +
	"font-semibold text-white shadow-sm transition hover:bg-indigo-700 " +
	"focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-50";

const btnDanger =
	"inline-flex items-center justify-center gap-1 rounded-md border border-red-200 bg-red-50 " +
	"px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-100";

const btnAdd =
	"inline-flex items-center justify-center gap-1 rounded-md border border-dashed border-indigo-300 " +
	"bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100";

/* ---------------- Small field wrapper ---------------- */
function Field({ label, htmlFor, hint, children }) {
	return (
		<div>
			<label htmlFor={htmlFor} className={labelBase}>{label}</label>
			{children}
			{hint ? <p className="mt-1 text-xs text-gray-500">{hint}</p> : null}
		</div>
	);
}

/* ---------------- Component ---------------- */
const CustomerProfile = ({ userid }) => {
	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, addNotification, userDataX } = useCounterStore();

	const [editUserData, seteditUserData] = useState({
		kids: [],
		phones: [],
		addresses: [],
		customer_category: [],
	});

	const [passwordData, setpasswordData] = useState({
		currentPass: "",
		newPass1: "",
		newPass2: "",
		passMatched: false,
		passUpdate: false,
		loading: false,
	});

	const [countriesList, setcountriesList] = useState({});
	const [statesList, setstatesList] = useState([]);
	const [loading, setloading] = useState(false);
	const [categorySelect, setCategorySelect] = useState("");

	const defaultCountry = "BD";

	/* ---------------- API calls (unchanged logic) ---------------- */
	function updateUserProfile() {
		setloading(true);
		const postData = JSON.stringify({ id: userid, userData: editUserData });

		fetch(serverUrl + "wp-json/combo-store/v2/update_user_profile", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
			body: postData,
		})
			.then((response) => {
				if (!response.ok) throw new Error("Token validation failed");
				if (response.status < 400) {
					response.json().then(() => {
						addNotification({
							type: "success",
							title: "Profile Updated",
							content: "Your information was updated successfully.",
						});
						setTimeout(() => setloading(false), 500);
					});
				}
			})
			.catch(() => setloading(false));
	}

	function getUserProfile() {
		setloading(true);
		const postData = JSON.stringify({ id: userid });

		fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
			body: postData,
		})
			.then((response) => {
				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						console.log(res.customer);


						seteditUserData((prev) => ({ ...prev, ...res.customer }));
						setTimeout(() => setloading(false), 500);
					});
				}
			})
			.catch(() => setloading(false));
	}

	function updateUserPassword() {
		if (!token) throw new Error("No token found");
		if (passwordData.newPass1 !== passwordData.newPass2) {
			setpasswordData({ ...passwordData, passMatched: false, passUpdate: false });
			addNotification({
				type: "error",
				title: "Password update failed",
				content: "Password doesn't match.",
			});
			return;
		}

		setpasswordData({ ...passwordData, loading: true });
		setloading(true);

		const postData = JSON.stringify({
			id: userDataX?.id,
			old_password: passwordData.currentPass,
			new_password: passwordData.newPass1,
		});

		fetch(serverUrl + "wp-json/combo-store/v2/update_user_password", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
			body: postData,
		})
			.then((response) => {
				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						const success = res?.success;
						const errors = res?.errors;

						if (errors?.length > 0) {
							setpasswordData({ ...passwordData, passUpdate: false, loading: false });
							addNotification({ type: "error", title: "Update failed", content: errors });
						}
						if (success?.length > 0) {
							setpasswordData({ ...passwordData, passUpdate: true, loading: false });
							addNotification({ type: "success", title: "Password updated", content: success });
						}
						setTimeout(() => setloading(false), 500);
					});
				}
			})
			.catch(() => setloading(false));
	}

	/* ---------------- Effects ---------------- */
	useEffect(() => {
		getUserProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const items = {};
		countries.forEach((country) => {
			items[country.code2] = {
				label: country.name,
				value: country.code2,
				states: country.states,
			};
		});
		setcountriesList(items);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countries]);

	useEffect(() => {
		const country = editUserData?.billing_country ?? defaultCountry;
		const selectedStates = states[country] || {};
		const next = {};
		Object.entries(selectedStates).forEach(([index, name]) => {
			next[index] = { label: name, value: index };
		});
		setstatesList(next);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [editUserData?.billing_country, defaultCountry]);

	/* ---------------- Helper ---------------- */
	const updateField = (field, value) =>
		seteditUserData((prev) => ({ ...prev, [field]: value }));

	/* ---------------- Render ---------------- */
	return (
		<div className="flex flex-col gap-6">
			{/* ===== Header ===== */}
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4">
				<div>
					<h2 className="text-lg font-semibold text-gray-900">Customer Profile</h2>
					<p className="text-sm text-gray-500">
						Manage personal, address and preference information
					</p>
				</div>
				<div className="flex items-center gap-2">
					{loading && <Spinner />}
					<div
						type="button"
						onClick={updateUserProfile}
						disabled={loading}
						className={btnPrimary}
					>
						Update Profile
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
				{/* ===== General Information ===== */}
				<WidgetWrapper collapsible title="General Information">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<Field label="User Name" htmlFor="user-name">
							<input
								id="user-name"
								name="name"
								className={inputBase}
								value={editUserData?.name ?? ""}
								onChange={(e) => updateField("name", e.target.value)}
							/>
						</Field>
						<Field label="Email" htmlFor="user-email">
							<input
								id="user-email"
								type="email"
								name="email"
								className={inputBase}
								value={editUserData?.email ?? ""}
								onChange={(e) => updateField("email", e.target.value)}
							/>
						</Field>
						<Field label="Phone" htmlFor="user-phone">
							<input
								id="user-phone"
								type="tel"
								name="phone"
								className={inputBase}
								value={editUserData?.phone ?? ""}
								onChange={(e) => updateField("phone", e.target.value)}
							/>
						</Field>
					</div>
				</WidgetWrapper>

				{/* ===== Change Password ===== */}
				<WidgetWrapper collapsible title="Change Password">
					<div className="flex flex-col gap-4">
						<Field label="Current Password" htmlFor="pw-current">
							<input
								id="pw-current"
								type="password"
								className={inputBase}
								value={passwordData.currentPass}
								onChange={(e) =>
									setpasswordData({ ...passwordData, currentPass: e.target.value })
								}
							/>
						</Field>

						<Field label="New Password" htmlFor="pw-new">
							<input
								id="pw-new"
								type="password"
								className={inputBase}
								value={passwordData.newPass1}
								onChange={(e) => {
									const value = e.target.value;
									setpasswordData({
										...passwordData,
										newPass1: value,
										passMatched: value !== "" && value === passwordData.newPass2,
									});
								}}
							/>
						</Field>

						<Field
							label="Confirm Password"
							htmlFor="pw-confirm"
							hint={
								passwordData.newPass2
									? passwordData.passMatched
										? "Passwords match"
										: "Passwords do not match"
									: undefined
							}
						>
							<div className="relative">
								<input
									id="pw-confirm"
									type="password"
									className={`${inputBase} pr-10`}
									value={passwordData.newPass2}
									onChange={(e) => {
										const value = e.target.value;
										setpasswordData({
											...passwordData,
											newPass2: value,
											passMatched: value !== "" && value === passwordData.newPass1,
										});
									}}
								/>
								{passwordData.newPass2 ? (
									passwordData.passMatched ? (
										<IconCircleCheck
											size={18}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
										/>
									) : (
										<IconCircleX
											size={18}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
										/>
									)
								) : null}
							</div>
						</Field>

						<div className="flex items-center justify-end gap-2 pt-2">
							{passwordData.loading && <Spinner />}
							<div
								type="button"
								disabled={!passwordData.passMatched || passwordData.loading}
								onClick={updateUserPassword}
								className={btnPrimary}
							>
								Update Password
							</div>
						</div>
					</div>
				</WidgetWrapper>

				{/* ===== Billing Address ===== */}
				<WidgetWrapper collapsible title="Billing Address">
					<div className="grid grid-cols-1 gap-4">
						<Field label="Billing Phone" htmlFor="billing-phone">
							<input
								id="billing-phone"
								type="tel"
								className={inputBase}
								value={editUserData?.billing_phone ?? ""}
								onChange={(e) => updateField("billing_phone", e.target.value)}
							/>
						</Field>
						<Field label="Address Line 1" htmlFor="billing-address1">
							<input
								id="billing-address1"
								className={inputBase}
								value={
									editUserData?.billing_address1
								}
								onChange={(e) => updateField("billing_address1", e.target.value)}
							/>
						</Field>
						<Field label="Address Line 2" htmlFor="billing-address2">
							<input
								id="billing-address2"
								className={inputBase}
								value={
									editUserData?.billing_address2 ??
									editUserData?.billing_address2 ??
									""
								}
								onChange={(e) => updateField("billing_address2", e.target.value)}
							/>
						</Field>
						<Field label="Country" htmlFor="billing-country">
							{Object.keys(countriesList).length > 0 && (
								<DropDown
									allowReset={false}
									multiple={false}
									labelClass={`${inputBase} cursor-pointer`}
									value={editUserData?.billing_country ?? defaultCountry}
									options={countriesList}
									label={
										countriesList[editUserData?.billing_country]?.label ??
										"Choose Country"
									}
									onOptionsChoose={(args) =>
										seteditUserData((prev) => ({
											...prev,
											billing_country: args?.value,
											billing_city: null,
										}))
									}
								/>
							)}
						</Field>
						<Field label="City" htmlFor="billing-city">
							{Object.keys(statesList).length > 0 && (
								<DropDown
									allowReset={false}
									multiple={false}
									labelClass={`${inputBase} cursor-pointer`}
									value={editUserData?.billing_city}
									options={statesList}
									label={
										statesList[editUserData?.billing_city]?.label ?? "Choose City"
									}
									onOptionsChoose={(args) =>
										updateField("billing_city", args?.value)
									}
								/>
							)}
						</Field>
					</div>
				</WidgetWrapper>

				{/* ===== Shipping Address ===== */}
				<WidgetWrapper collapsible title="Shipping Address">
					<div className="grid grid-cols-1 gap-4">
						<Field label="Shipping Name" htmlFor="shipping-name">
							<input
								id="shipping-name"
								className={inputBase}
								value={editUserData?.shipping_name ?? ""}
								onChange={(e) => updateField("shipping_name", e.target.value)}
							/>
						</Field>
						<Field label="Shipping Phone" htmlFor="shipping-phone">
							<input
								id="shipping-phone"
								type="tel"
								className={inputBase}
								value={editUserData?.shipping_phone ?? ""}
								onChange={(e) => updateField("shipping_phone", e.target.value)}
							/>
						</Field>
						<Field label="Address Line 1" htmlFor="shipping-address1">
							<input
								id="shipping-address1"
								className={inputBase}
								value={editUserData?.shipping_address1 ?? ""}
								onChange={(e) => updateField("shipping_address1", e.target.value)}
							/>
						</Field>
						<Field label="Address Line 2" htmlFor="shipping-address2">
							<input
								id="shipping-address2"
								className={inputBase}
								value={editUserData?.shipping_address2 ?? ""}
								onChange={(e) => updateField("shipping_address2", e.target.value)}
							/>
						</Field>
						<Field label="Country" htmlFor="shipping-country">
							{Object.keys(countriesList).length > 0 && (
								<DropDown
									allowReset={false}
									multiple={false}
									labelClass={`${inputBase} cursor-pointer`}
									value={editUserData?.shipping_country ?? defaultCountry}
									options={countriesList}
									label={
										countriesList[editUserData?.shipping_country]?.label ??
										"Choose Country"
									}
									onOptionsChoose={(args) =>
										seteditUserData((prev) => ({
											...prev,
											shipping_country: args?.value,
											shipping_city: null,
										}))
									}
								/>
							)}
						</Field>
						<Field label="City" htmlFor="shipping-city">
							{Object.keys(statesList).length > 0 && (
								<DropDown
									allowReset={false}
									multiple={false}
									labelClass={`${inputBase} cursor-pointer`}
									value={editUserData?.shipping_city}
									options={statesList}
									label={
										statesList[editUserData?.shipping_city]?.label ?? "Choose City"
									}
									onOptionsChoose={(args) =>
										updateField("shipping_city", args?.value)
									}
								/>
							)}
						</Field>
					</div>
				</WidgetWrapper>

				{/* ===== Delivery Location ===== */}
				<WidgetWrapper collapsible title="Delivery Location">
					<div className="flex flex-col gap-4">
						{!editUserData?.delivery_location && (
							<div className="flex items-start gap-2 rounded-md border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm text-indigo-700">
								<IconInfoCircle size={16} className="mt-0.5 shrink-0" />
								<span>You haven't set a delivery location yet.</span>
							</div>
						)}
						<LocationPicker
							markerDraggable
							latlng={editUserData?.delivery_location}
							onLocationSelect={(coords) =>
								seteditUserData((prev) => ({ ...prev, delivery_location: coords }))
							}
						/>
					</div>
				</WidgetWrapper>

				{/* ===== Customer Information ===== */}
				<WidgetWrapper collapsible title="Customer Information">
					<div className="flex flex-col gap-6">
						{/* Profession / Income / Ordered */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<Field label="Profession" htmlFor="profession">
								<select
									id="profession"
									className={inputBase}
									value={editUserData?.profession ?? ""}
									onChange={(e) => updateField("profession", e.target.value)}
								>
									<option value="">Choose</option>
									<option value="student">Student</option>
									<option value="teacher">Teacher</option>
									<option value="doctor">Doctor</option>
									<option value="engineer">Engineer</option>
									<option value="other">Other</option>
								</select>
							</Field>
							<Field label="Monthly Income" htmlFor="income">
								<select
									id="income"
									className={inputBase}
									value={editUserData?.income ?? ""}
									onChange={(e) => updateField("income", e.target.value)}
								>
									<option value="">Choose</option>
									<option value="10000-20000">10000-20000</option>
									<option value="20000-30000">20000-30000</option>
									<option value="30000-40000">30000-40000</option>
									<option value="40000-50000">40000-50000</option>
									<option value="50000+">50000+</option>
								</select>
							</Field>
							<Field label="Has Ordered" htmlFor="has-orderd">
								<select
									id="has-orderd"
									className={inputBase}
									value={editUserData?.has_orderd ?? ""}
									onChange={(e) => updateField("has_orderd", e.target.value)}
								>
									<option value="">Choose</option>
									<option value="yes">Yes</option>
									<option value="no">No</option>
								</select>
							</Field>
						</div>

						{/* Customer Category */}
						<div>
							<label className={labelBase}>Customer Category</label>
							<select
								className={inputBase}
								value={categorySelect}
								onChange={(e) => {
									const value = e.target.value;
									if (!value) return;
									seteditUserData((prev) => {
										if (prev.customer_category?.includes(value)) return prev;
										return {
											...prev,
											customer_category: [...(prev.customer_category ?? []), value],
										};
									});
									setCategorySelect("");
								}}
							>
								<option value="">Add category…</option>
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

							<div className="mt-3 flex flex-wrap gap-2">
								{editUserData?.customer_category?.length ? (
									editUserData.customer_category.map((item, index) => (
										<span
											key={`${item}-${index}`}
											className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
										>
											{item}
											<button
												type="button"
												onClick={() =>
													seteditUserData((prev) => ({
														...prev,
														customer_category: prev.customer_category.filter(
															(_, idx) => idx !== index
														),
													}))
												}
												className="text-indigo-500 hover:text-indigo-700"
												aria-label={`Remove ${item}`}
											>
												<IconX size={12} />
											</button>
										</span>
									))
								) : (
									<span className="text-xs text-gray-500">No categories added</span>
								)}
							</div>
						</div>

						{/* Phones */}
						<div>
							<div className="mb-2 flex items-center justify-between">
								<label className={labelBase}>Phones</label>
								<button
									type="button"
									onClick={() =>
										seteditUserData((prev) => ({
											...prev,
											phones: [...(prev.phones ?? []), { label: "", phone: "" }],
										}))
									}
									className={btnAdd}
								>
									<IconPlus size={14} /> Add
								</button>
							</div>

							<div className="flex flex-col gap-3">
								{editUserData?.phones?.length ? (
									editUserData.phones.map((item, index) => (
										<div
											key={index}
											className="flex flex-col gap-3 rounded-md border border-gray-200 bg-gray-50 p-3 sm:flex-row sm:items-center"
										>
											<input
												type="text"
												placeholder="Label"
												className={inputBase}
												value={item?.label ?? ""}
												onChange={(e) => {
													const phones = [...(editUserData.phones ?? [])];
													phones[index] = { ...phones[index], label: e.target.value };
													seteditUserData((prev) => ({ ...prev, phones }));
												}}
											/>
											<input
												type="tel"
												placeholder="Phone number"
												className={inputBase}
												value={item?.phone ?? ""}
												onChange={(e) => {
													const phones = [...(editUserData.phones ?? [])];
													phones[index] = { ...phones[index], phone: e.target.value };
													seteditUserData((prev) => ({ ...prev, phones }));
												}}
											/>
											<button
												type="button"
												onClick={() =>
													seteditUserData((prev) => ({
														...prev,
														phones: prev.phones.filter((_, idx) => idx !== index),
													}))
												}
												className={btnDanger}
											>
												<IconTrash size={12} /> Remove
											</button>
										</div>
									))
								) : (
									<span className="text-xs text-gray-500">No phones added</span>
								)}
							</div>
						</div>

						{/* Kids */}
						<div>
							<div className="mb-2 flex items-center justify-between">
								<label className={labelBase}>Kids</label>
								<button
									type="button"
									onClick={() =>
										seteditUserData((prev) => ({
											...prev,
											kids: [
												...(prev.kids ?? []),
												{ name: "", age: "", birth_date: "" },
											],
										}))
									}
									className={btnAdd}
								>
									<IconPlus size={14} /> Add
								</button>
							</div>

							<div className="flex flex-col gap-3">
								{editUserData?.kids?.length ? (
									editUserData.kids.map((item, index) => (
										<div
											key={index}
											className="flex flex-col gap-3 rounded-md border border-gray-200 bg-gray-50 p-3 sm:flex-row sm:items-center"
										>
											<input
												type="text"
												placeholder="Name"
												className={inputBase}
												value={item?.name ?? ""}
												onChange={(e) => {
													const kids = [...(editUserData.kids ?? [])];
													kids[index] = { ...kids[index], name: e.target.value };
													seteditUserData((prev) => ({ ...prev, kids }));
												}}
											/>
											<input
												type="number"
												placeholder="Age"
												className={inputBase}
												value={item?.age ?? ""}
												onChange={(e) => {
													const kids = [...(editUserData.kids ?? [])];
													kids[index] = { ...kids[index], age: e.target.value };
													seteditUserData((prev) => ({ ...prev, kids }));
												}}
											/>
											<input
												type="date"
												className={inputBase}
												value={item?.birth_date ?? ""}
												onChange={(e) => {
													const kids = [...(editUserData.kids ?? [])];
													kids[index] = {
														...kids[index],
														birth_date: e.target.value,
													};
													seteditUserData((prev) => ({ ...prev, kids }));
												}}
											/>
											<button
												type="button"
												onClick={() =>
													seteditUserData((prev) => ({
														...prev,
														kids: prev.kids.filter((_, idx) => idx !== index),
													}))
												}
												className={btnDanger}
											>
												<IconTrash size={12} /> Remove
											</button>
										</div>
									))
								) : (
									<span className="text-xs text-gray-500">No kids added</span>
								)}
							</div>
						</div>

						{/* Addresses */}
						<div>
							<div className="mb-2 flex items-center justify-between">
								<label className={labelBase}>Addresses</label>
								<button
									type="button"
									onClick={() =>
										seteditUserData((prev) => ({
											...prev,
											addresses: [...(prev.addresses ?? []), { address: "" }],
										}))
									}
									className={btnAdd}
								>
									<IconPlus size={14} /> Add
								</button>
							</div>



							<div className="flex flex-col gap-3">
								{editUserData?.addresses?.length ? (
									editUserData.addresses.map((item, index) => (
										<div
											key={index}
											className="flex flex-col gap-3 rounded-md border border-gray-200 bg-gray-50 p-3"
										>
											<textarea
												placeholder="Address"
												rows={2}
												className={`${inputBase} resize-y`}
												value={item?.address ?? ""}
												onChange={(e) => {
													const addresses = [...(editUserData.addresses ?? [])];
													addresses[index] = {
														...addresses[index],
														address: e.target.value,
													};
													seteditUserData((prev) => ({ ...prev, addresses }));
												}}
											/>

											<div className="flex gap-5">

												<Field label="Country" htmlFor="billing-country">
													{Object.keys(countriesList).length > 0 && (
														<DropDown
															allowReset={false}
															multiple={false}
															labelClass={`${inputBase} cursor-pointer`}
															value={editUserData?.addresses[index]?.country ?? ''}
															options={countriesList}
															label={
																countriesList[editUserData?.addresses[index]?.country]?.label ??
																"Choose Country"
															}
															onOptionsChoose={(args) => {


																const addresses = [...(editUserData.addresses ?? [])];
																addresses[index] = {
																	...addresses[index],
																	country: args?.value,
																};
																seteditUserData((prev) => ({ ...prev, addresses }));

															}











															}
														/>
													)}
												</Field>
												<Field label="City" htmlFor="billing-city">
													{Object.keys(statesList).length > 0 && (
														<DropDown
															allowReset={false}
															multiple={false}
															labelClass={`${inputBase} cursor-pointer`}
															value={editUserData?.addresses[index]?.city ?? ''}
															options={statesList}
															label={
																statesList[editUserData?.addresses[index]?.city]?.label ?? "Choose City"
															}
															onOptionsChoose={(args) => {

																const addresses = [...(editUserData.addresses ?? [])];
																addresses[index] = {
																	...addresses[index],
																	city: args?.value,
																};
																seteditUserData((prev) => ({ ...prev, addresses }));

															}

															}
														/>
													)}
												</Field>

											</div>





											<button
												type="button"
												onClick={() =>
													seteditUserData((prev) => ({
														...prev,
														addresses: prev.addresses.filter(
															(_, idx) => idx !== index
														),
													}))
												}
												className={`${btnDanger} self-end`}
											>
												<IconTrash size={12} /> Remove
											</button>
										</div>
									))
								) : (
									<span className="text-xs text-gray-500">
										No additional addresses
									</span>
								)}
							</div>
						</div>
					</div>
				</WidgetWrapper>
			</div>
		</div>
	);
};

export default CustomerProfile;