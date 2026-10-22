"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import AddToCart from "./AddToCart";
import ProductDiscount from "./ProductDiscount";
import ProductPrice from "./ProductPrice";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ProductGrid = (props) => {


	var categories = props.categories;
	var column = props.column ? props.column : 5;
	var orderby = props.orderby;

	var [entries, setentries] = useState(props.entries);

	var [loading, setloading] = useState(false);


	function loopLayout(entry, columnIndex) {

		return (
			<div className="group overflow-hidden  bg-[#9a90ff] text-[#1b0e9f] border rounded-md bg-[#fff]"
				key={columnIndex}>

				{/* {JSON.stringify(entry)} */}


				<div className="flex flex-col relative">
					<div className="w-full overflow-hidden     p-2">


						{entry?.sale_price && (
							<div className="absolute top-4 left-4 bg-[#fc5732] text-[#fff]  rounded-sm px-2 py-1" >
								<ProductDiscount price={entry?.regular_price} sale_price={entry?.sale_price} label={``} />
							</div>
						)}

						{entry?.post_thumbnail_url && (
							<Link className="cursor-pointer" href={`/product/${entry.slug}/`} >
								<Image className=" w-full" src={entry?.post_thumbnail_url} width={300} height={300} alt={entry?.title} />



							</Link>

						)}
						{!entry?.post_thumbnail_url && (
							<Link className=" cursor-pointer" href={`/product/${entry.slug}/`} >
								<Image className="object-contain h-full w-full " src={`/thumb.png`} width={200} height={200} alt={entry?.title} />

							</Link>

						)}




					</div>



					<div className="text-left flex flex-col gap-3 flex-1 p-3">
						<Link className="text-left text-sm lg:text-base  cursor-pointer" href={`/product/${entry.slug}/`} >{entry?.title}
						</Link>

						{/* {JSON.stringify(entry.categories)} */}

						<ProductPrice productData={entry} discountRequest={false} />



						{/* <div className="flex gap-3 items-center">
							<div className="font-bold text-lg text-[#e63946]">{entry?.price}Tk</div>
							{entry?.sale_price && (
								<>
									<div> - </div>
									<div className="line-through text-base text-gray-600">{entry?.regular_price}Tk</div>
								</>
							)}
						</div> */}


						{entry?.stock_status == 'outofstock' && (
							<div className="text-red-400 font-bold">Out of stock</div>
						)}
						{(entry?.stock_status == 'instock' && entry?.price) && (
							<div className="absolute -bottom-100 group-hover:bottom-4 transition-all duration-500 right-0 w-full bg-[#fff] px-2 py-1">
								<div className="flex flex-col gap-3">
									<ProductPrice productData={entry} discountRequest={false} />

									<AddToCart productData={entry} quantitySyncwithCart={true} hideButtonText={true} addCartItems={null} />
								</div>


							</div>
						)}








					</div>





				</div>
			</div>

		);
	}



	return (
		<div className="w-full">


			{entries?.posts?.length > 0 && (

				<div className={`grid ${column == 3 ? 'xl:grid-cols-3' : ''} ${column == 4 ? 'xl:grid-cols-4' : ''} ${column == 5 ? 'xl:grid-cols-5' : ''} ${column == 6 ? 'xl:grid-cols-6' : ''}  grid-cols-2 gap-5`}>

					{entries?.posts?.map((entry, loopIndex) => {


						return (<div key={loopIndex}>
							{loopLayout(entry, loopIndex)}

						</div>)
					})}

				</div>
			)}








		</div>
	);
};

export default ProductGrid;
