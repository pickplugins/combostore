"use client"
import { useState, useEffect } from "react";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import ProductVariablePricesView from './ProductVariablePricesView';
import { useProductStore } from "../../../store/productStore";


const ProductPrice = (props) => {

	const { wrapCurrency } = useUtilsStore()




	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);






	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';


	const productData = usePost();


	const Tag = tag;




	// var productData = props?.productData
	var onChangePrice = props?.onChangePrice
	var viewType = props?.viewType ? props?.viewType : "list"



	var productId = productData?.id
	var priceType = productData?.priceType ?? 'simple'

	var discountRequest = productData?.discountRequest
	var variablePrices = productData?.variablePrices
	var pwyw_min_price = productData?.pwyw_min_price
	var pwyw_default_price = productData?.pwyw_default_price

	var [variablePricesIndex, setvariablePricesIndex] = useState(0);
	var [pwywSetPrice, setpwywSetPrice] = useState(false);
	var [pwywPrice, setpwywPrice] = useState(productData?.pwyw_default_price);

	var [bargainSetPrice, setbargainSetPrice] = useState(false);

	var [bargainPrice, setbargainPrice] = useState(productData?.bargain_default_price);
	var [seeBargainPrice, setseeBargainPrice] = useState(false);

	var [quantity, setquantity] = useState(props?.quantity);
	var [addons, setaddons] = useState(productData?.addons);
	var [variations, setvariations] = useState(productData?.variations ?? []);
	var [tradePrice, settradePrice] = useState(productData?.trade_price);
	var [salePrice, setsalePrice] = useState(productData?.sale_price);
	var [regularPrice, setregularPrice] = useState(productData?.regular_price);
	var [price, setprice] = useState(productData?.price);


	useEffect(() => {

		var priceX = (salePrice) ? salePrice : regularPrice;
		setprice(priceX);
	}, [salePrice]);


	useEffect(() => {


		if (activeVariation) {

			var sale_price = activeVariation?.sale_price
			var regular_price = activeVariation?.regular_price

			if (sale_price) {
				setregularPrice(regular_price)
				setsalePrice(sale_price)
				setprice(sale_price)
			} else {
				setregularPrice(regular_price)
				setprice(regular_price)
			}
		}





	}, [activeVariation]);







	const getVariationPriceRange = (variations = []) => {
		const list = Array.isArray(variations) ? variations : [];

		const prices = list
			.filter(v => v?.enable === 'yes')
			.map(v => {
				const sale = parseFloat(v?.sale_price);
				const regular = parseFloat(v?.regular_price);

				return sale > 0 ? sale : regular;
			})
			.filter(Number.isFinite);

		return {
			min: prices.length ? Math.min(...prices) : 0,
			max: prices.length ? Math.max(...prices) : 0,
		};
	};

	const { min, max } = getVariationPriceRange(variations);



	/*
		An extension may say this product's price is not to be shown - see
		`purchaseGate` in store/useCounterStore.js. extensions/request-quote
		uses it for products sold only by quote. The wording comes back with
		the gate, because core has no opinion about what replaces a price it
		is not allowed to print.

		Returned early rather than blanked branch by branch: everything below
		prints some combination of regular, sale, variation and
		pay-what-you-want prices, and guarding them one at a time would leave
		the next one added unguarded.
	*/
	const purchaseGate = useCounterStore((state) => state.purchaseGate);
	const priceGate = purchaseGate ? purchaseGate(productData) : null;

	if (priceGate?.hidePrice) {
		return (
			<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}>
				<span className={`${cssSelectors['simple-price-sale']?.classes}`}>
					{priceGate.priceText || "Price on request"}
				</span>
			</div>
		);
	}

	return (
		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

		>



			{!addons?.includes('variations') && (

				<>
					{(priceType == 'simple') && (
						<div className={`${cssSelectors['simple-price-wrap']?.classes}`}>



							{!salePrice && (
								<>
									{price && (
										<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(price)}</span>
									)}
								</>
							)}
							{salePrice && (
								<>
									<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(price)}</span>
									<span> - </span>
									<span className={`${cssSelectors['simple-price-regular']?.classes}`}>{wrapCurrency(regularPrice)}</span>
								</>
							)}

						</div>
					)}
					{priceType == 'pwyw' && (
						<div className="mb-4 flex gap-5 items-center">
							<div className="text-2xl text-[#1b0e9f]">{wrapCurrency(productData?.pwyw_default_price)}</div>

							{!pwywSetPrice && (
								<div className="text-xl text-[#1b0e9f] cursor-pointer" onClick={ev => {

									setpwywSetPrice(!pwywSetPrice);

								}}>Set your price</div>

							)}
							{pwywSetPrice && (
								<div className="flex gap-2 items-center">

									<input className="w-[80px]" type="number" value={pwywPrice} onChange={ev => {

										var value = parseFloat(ev.target.value);
										setpwywPrice(value);








									}} />

									<div className=" cursor-pointer" onClick={ev => {

										if (parseFloat(productData?.pwyw_min_price) >= parseFloat(pwywPrice)) {
											addNotification({ type: 'error', title: "Price can't set", content: `Price should not less than ${productData?.pwyw_min_price}` })

											return;
										}

										onChangePrice({ pwyw_default_price: pwywPrice })

									}}>Set</div>
									<div className="text-red-400 cursor-pointer" onClick={ev => {

										setpwywSetPrice(!pwywSetPrice);

									}}>Cancel</div>

								</div>
							)}

						</div>
					)}
					{/* {priceType == 'bargain' && (
				<div className="mb-4 flex gap-5 items-center">
					<div className="text-2xl text-[#1b0e9f]">{wrapCurrency(bargainPrice)}</div>
					<PopoverButton buttonLabel={("দামাদামি করুন")} buttonIcon={<IconPencilDollar />} title={""} wrapperClass="" position={"bottomRight"}>
						<ProductPriceBargain productData={productData} onChangePrice={onChangeBargainPrice} />
					</PopoverButton>
				</div>
			)} */}

				</>
			)}




			{addons?.includes('variations') && (

				<>
					{!activeVariation && (
						<div className={`${cssSelectors['variable-price-wrap']?.classes}`}>
							<div className={`${cssSelectors['variable-price-min']?.classes}`}>{wrapCurrency(min)}</div>
							<div> - </div>
							<div className={`${cssSelectors['variable-price-max']?.classes}`}>{wrapCurrency(max)}</div>
						</div>
					)}
					{activeVariation && (
						<div className={`${cssSelectors['simple-price-wrap']?.classes}`}>



							{!salePrice && (
								<>
									{price && (
										<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(price)}</span>
									)}
								</>
							)}
							{salePrice && (
								<>
									<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(price)}</span>
									<span> - </span>
									<span className={`${cssSelectors['simple-price-regular']?.classes}`}>{wrapCurrency(regularPrice)}</span>
								</>
							)}

						</div>
					)}

				</>







			)}





			{/* {JSON.stringify(productData)} */}






		</div>
	);
};



export default ProductPrice;
