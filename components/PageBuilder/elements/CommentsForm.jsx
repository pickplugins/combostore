'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { useComment } from "../context/CommentContext";



const CommentsForm = (props) => {
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

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};

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


	const comment = useComment();
	var comment_author = comment?.comment_author ?? 'Post Title';




	var postData = props?.postData
	var dummyComments = props?.dummyComments
	var parentId = props?.parentId
	var commentSubmitted = props?.commentSubmitted

	const [newComment, setcomment] = useState({ content: "", postId: id, parentId: parentId, rate: null });
	var [errors, seterrors] = useState([]);
	var [loading, setloading] = useState(false);

	var [submission, setsubmission] = useState({ id: null, success: false });



	function getRandomComments(arr, count = 10) {
		const shuffled = arr?.sort(() => 0.5 - Math.random());
		return shuffled?.slice(0, count);
	}

	// Usage
	const randomComments = getRandomComments(dummyComments);


	function submit_comment() {





		if (!token) {
			addNotification({ type: 'error', title: 'Login Required', content: "Please Login to submit comment." })

			seterrors(["Please login first. "])

			throw new Error("No token found");
		}




		if (newComment.content.length == 0) {
			seterrors(["Comment Should not empty"])
			throw new Error("Comment Should not empty");

			return;
		}



		var bodyData = JSON.stringify(newComment);




		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/submit_comment",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: bodyData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;
						var commentData = res?.comment;
						var message = res?.message;






						if (errors) {
							seterrors(errors)


							addNotification({ type: 'error', title: 'There is an error.', content: message })
							setloading(false);
							return;
						}
						if (success) {
							seterrors([])
							commentSubmitted(commentData)

							setsubmission({ ...submission, success: true })
							setcomment({ ...newComment, content: "", rate: null });

							addNotification({ type: 'success', title: 'Thank you for your comment', content: "Your feedback is percious to us, Keep up good works." })

							var total_credit = parseInt(userDataX.total_credit) + 5
							setUserDataX({ ...userDataX, total_credit: total_credit });



						}




						setloading(false);

					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	function onChangeCommentRate(rate) {

		setcomment({ ...newComment, rate: rate });

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



			<div className="flex flex-col gap-5">

				{postData?.purchased && (
					<div className="flex flex-col gap-3">
						<label htmlFor="" className="block ">
							{("Rate this prompt")}
						</label>
						<StarRating rate={newComment.rate} onChange={onChangeCommentRate} />
					</div>
				)}


				<div className="flex flex-col gap-3">
					<label htmlFor="" className="block ">
						{("Write Comment")}
					</label>
					<textarea
						className="!shadow-none h-40 bg-gray-200 !border-2 border-gray-600 px-2 py-1 rounded-sm w-full "
						value={newComment?.content}
						onChange={(ev) => {
							var value = ev.target.value;
							setcomment({ ...newComment, content: value });
						}}
					/>
				</div>

				<div className="flex flex-wrap gap-2 text-xs">

					{/* {JSON.stringify(randomComments)} */}


					{randomComments?.map((item, index) => {

						return (
							<div key={index} className="border rounded-full border-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-500" onClick={ev => {

								setcomment({ ...newComment, content: item });

							}}>{item}</div>
						)

					})}

				</div>

				<div className="p-2 text-center hover:bg-gray-400 rounded-sm cursor-pointer px-4 bg-gray-600 text-white"
					onClick={ev => {
						submit_comment()
					}}

				>




					{!loading && (
						<>{("Submit")}</>
					)}
					{loading && (
						<> {("Please wait.")}</>
					)}


				</div>

				{errors?.length > 0 && (
					<div className="text-red-400 text-sm">
						{errors?.map((item, index) => {

							return (
								<div key={index} className="flex items-center gap-2"> <IconExclamationCircle /> {item}</div>
							)
						})}
					</div>
				)}



			</div>



			{/* {children.length > 0 ? (
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
					<span className="text-xs mt-1">Empty CommentsForm - Drop elements here</span>
				</div>
			)} */}








		</div>
	);
};

CommentsForm.propTypes = {
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

export default CommentsForm;
