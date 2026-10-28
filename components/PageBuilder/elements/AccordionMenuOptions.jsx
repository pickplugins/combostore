import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import DropDown from "../../../components/DropDown";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
import TermsQueryPrams from "../TermsQueryPrams";


const ListOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var cssSelectors = props?.cssSelectors ?? {};
	var id = props?.id;
	var options = props?.options;
	var source = options?.source ?? 'manual';
	var items = options?.items ?? [];
	var iconSize = options?.iconSize;
	var icon = options?.icon;
	var hierarchical = options?.hierarchical;
	var queryPrams = options?.queryPrams ?? [];


	const [loading, setloading] = useState(false);
	var [taxonomies, settaxonomies] = useState({});




	function onChangeQuery(queryPramsX) {


		var optionsX = { ...options }
		optionsX.queryPrams = queryPramsX
		updateBlock('options', optionsX)
	}



	useEffect(() => {
		if (options.source == 'terms') {
			get_post_taxonomies();
		}

	}, [options.source]);




	const Title = ({ item, index }) => {

		return (

			<div className="flex flex-1 justify-between items-center">
				<div className="text-xs">{item.name}</div>
				<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
					var optionsX = { ...options }

					var itemsX = optionsX.items;

					itemsX.splice(index, 1)
					optionsX.items = itemsX
					updateBlock('options', optionsX)

				}}><IconX size={14} /></div>
			</div>

		)

	}




	function get_post_taxonomies() {





		var postData = JSON.stringify({});

		fetch(serverUrl + "wp-json/combo-store/v2/get_post_type_objects", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {




						var taxs = {}

						res.map(item => {


							taxs[item.id] = { label: item.label, value: item.id }
						})


						settaxonomies(res)



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}










	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">



				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Root</label>
					<div>
						<input type="text" placeholder="/categories" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options.root} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.root = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<div className="flex justify-between items-center">
					<label htmlFor="" className="text-xs font-medium text-gray-600">hierarchical</label>
					{/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}

					<div className="cursor-pointer " onClick={ev => {




						var optionsX = { ...options }
						optionsX.hierarchical = !hierarchical
						updateBlock('options', optionsX)


					}}>
						{hierarchical ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>


				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Source</label>
					<div>
						<select type="text" placeholder="/categories" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={source} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.source = value
							updateBlock('options', optionsX)

						}} >
							<option value="terms">Terms</option>
							<option value="manual">manual</option>
						</select>
					</div>
				</div>

				{options.source == 'terms' && (

					<>
						<TermsQueryPrams queryPrams={queryPrams} onChangeQuery={onChangeQuery} />

						{/* <div className="flex justify-between">
							<div>Taxonomy</div>





							<DropDown allowReset={false} multiple={false} value={taxonomy} position="right" options={taxonomies} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


								var optionsX = { ...options }
								optionsX.taxonomy = args?.value
								updateBlock('options', optionsX)



								// onChange(taxQueryX)


							}} />













						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Parent</label>
							<div>
								<input type="text" placeholder="0" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options.parent} onChange={ev => {

									var value = ev.target.value;

									var optionsX = { ...options }
									optionsX.parent = value
									updateBlock('options', optionsX)

								}} />
							</div>
						</div> */}

					</>

				)}






				{options.source == 'manual' && (

					<>
						<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

							var optionsX = { ...options }
							var itemsX = [...items];
							itemsX.push({ name: 'Custom Item', name: '', count: '' })
							optionsX.items = itemsX
							updateBlock('options', optionsX)

						}}>Add</div>

						<div className="flex flex-col gap-1">
							{items?.map((item, index) => {
								return (
									<ToggleContent key={index} iconPosition='left' title={<Title item={item} index={index} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>



										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
											<div>
												<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.name} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.items[index].name = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>
										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Slug</label>
											<div>
												<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.slug} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.items[index].slug = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>
										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Count</label>
											<div>
												<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.count} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.items[index].count = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>



										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
											<div>



												<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


													var optionsX = { ...options }
													optionsX.items[index].icon = args
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
											<div>
												<input type="number" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.iconSize} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.items[index].iconSize = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>



									</ToggleContent>
								)
							})}
						</div>

					</>

				)}












				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<div>



						<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


							var optionsX = { ...options }
							optionsX.icon = args
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
					<div>
						<input type="number" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={iconSize} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.iconSize = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>


				{/* <CssClassPicker type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.classes} onChange={(value) => {


					var optionsX = { ...options }
					optionsX.classes = value
					updateBlock('options', optionsX)

				}} /> */}

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />







			</div>


		</div>
	);
};



export default ListOptions;
