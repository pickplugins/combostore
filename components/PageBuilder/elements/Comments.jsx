'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { usePost } from "../context/PostContext";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Comments = (props) => {
	const {
		block,
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		options,
		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;


	const product = usePost();

	var productId = prams?.productId ?? product?.id ?? null;


	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors;

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");




		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};






	const dummyComments = [
		"Love the product! Delivery was super fast too. ⭐⭐⭐⭐⭐",
		"The packaging was really nice, but the size runs a bit small.",
		"Do you restock this item in different colors?",
		"Received mine today. Quality is way better than expected!",
		"Customer service was very helpful in tracking my order.",
		"When will this be available in large size again?",
		"Price is fair, but shipping took longer than I hoped.",
		"Highly recommend this shop, I’ve ordered multiple times already.",
		"The material feels premium. Totally worth the money.",
		"Is there a warranty or return policy for this product?",
		"My order came with a small defect, can I exchange it?",
		"Looks great in pictures, but does it shrink after washing?",
		"Great value for the price. I’ll definitely buy again.",
		"Super comfy! I’m already thinking of getting another one.",
		"How long does standard shipping usually take?",
		"Bought this as a gift and my friend loved it!",
		"Do you ship internationally? I’m based in Canada.",
		"The color is slightly different from the photo, but still nice.",
		"Can I apply a discount code for bulk orders?",
		"Really impressed with the quality. Will recommend to friends!",
		"Super fast response from the support team, thanks!",
		"Does this come in different patterns or just plain?",
		"Very lightweight and comfortable to wear all day.",
		"The quality is okay, but I expected a bit better packaging.",
		"I got a discount during the sale, great deal!",
		"Can you notify me when this item is back in stock?",
		"I’ve tried similar products, but this one stands out.",
		"The instructions were a little unclear, can you help?",
		"Bought two pieces and both fit perfectly!",
		"Does this item come with a user manual?",
		"Really happy with my purchase, 10/10 would recommend.",
		"This is my second order, and the experience is just as good as the first.",
		"Do you offer gift wrapping for special occasions?",
		"The tracking link wasn’t working, but customer care fixed it quickly.",
		"Product arrived earlier than expected, amazing service!",
		"Would love to see this in more color options.",
		"Feels durable and looks stylish at the same time.",
		"Can I combine multiple discount codes on one order?",
		"This is my favorite shop now. Everything I’ve bought has been top notch.",
		"Do you have a size chart? Not sure which to pick."
	];



	const [loading, setloading] = useState(false);
	const [comments, setcomments] = useState([]);

	function fetchComments() {



		// if (!token) {
		// 	throw new Error("No token found");
		// }

		var queryPrams = { post_id: productId, paged: 1, order: "ASC", per_page: 20, }


		if (queryPrams.paged < 0) {
			return;
		}

		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
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

						var comments = res?.comments;

						setcomments(comments)
						setloading(false);


						setTimeout(() => {
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

		fetchComments();
	}, []);











	function onCommentSubmitted(comment) {


		var commentsX = [...comments];
		commentsX.push(comment)
		setcomments(commentsX)

	}






	return (
		<div
			draggable
			id={id}
			className={`${cssSelectors['*']?.classes ?? ''}   hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>
			{/* 
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10   rounded-sm">

				<div className="rounded-sm overflow-hidden">
					<div className="text-2xl mb-5 ">{("Comments")}({comments?.length})</div>

					<CommentsList comments={comments} id={id} commentSubmitted={onCommentSubmitted} addNotification={addNotification} userDataX={userDataX} setUserDataX={setUserDataX} />

					{comments?.length == 0 && (

						<div className="text-sm">No Comments Yet. Write First Comment.</div>
					)}

				</div>
				<div className="rounded-sm overflow-hidden">
					<div className="text-2xl mb-5 ">{("Submit Comment")}</div>

					<CommentsForm postData={postData} dummyComments={dummyComments} id={id} commentSubmitted={onCommentSubmitted} addNotification={addNotification} userDataX={userDataX} setUserDataX={setUserDataX} />
				</div>
			</div> */}


			{children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview
						key={child.id}
						index={`${index}-${idx}`}
						block={child}
						draggingBlock={draggingBlock}
						dragOverIndex={dragOverIndex}
						setDragOverIndex={setDragOverIndex}
						setDraggingBlock={setDraggingBlock}
						setSelectedId={setSelectedId}
						selectedId={selectedId}
						handleMoveBlock={handleMoveBlock}
						parentCssSelectors={cssSelectors}
					/>
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty Comments - Drop elements here</span>
				</div>
			)}
		</div>
	);
};

Comments.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default Comments;
