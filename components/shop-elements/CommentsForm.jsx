"use client";
import { useState, useEffect, useContext } from "react";

import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconEyeSearch, IconExclamationCircle } from "@tabler/icons-react";
import StarRating from "./StarRating";
import { useCounterStore } from '../../store/useCounterStore'

/* Buttons here were dark gray slabs that lightened on hover. */
const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer";



const CommentsForm = (props) => {



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX } = useCounterStore()


	var postData = props?.postData
	var id = props?.id
	var dummyComments = props?.dummyComments
	var parentId = props?.parentId
	var commentSubmitted = props?.commentSubmitted

	const [comment, setcomment] = useState({ content: "", postId: id, parentId: parentId, rate: null });
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




		if (comment.content.length == 0) {
			seterrors(["Comment Should not empty"])
			throw new Error("Comment Should not empty");

			return;
		}



		var bodyData = JSON.stringify(comment);




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
							setcomment({ ...comment, content: "", rate: null });

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

		setcomment({ ...comment, rate: rate });

	}



	return (
		<div className="">

			<div className="flex flex-col gap-5">

				{postData?.purchased && (
					<div className="flex flex-col gap-3">
						<label htmlFor="" className="block ">
							{("Rate this prompt")}
						</label>
						<StarRating rate={comment.rate} onChange={onChangeCommentRate} />
					</div>
				)}


				<div className="flex flex-col gap-3">
					<label htmlFor="" className="block ">
						{("Write Comment")}
					</label>
					<textarea
						className="!shadow-none h-40 bg-gray-200 !border-2 border-gray-600 px-2 py-1 rounded-sm w-full "
						value={comment?.content}
						onChange={(ev) => {
							var value = ev.target.value;
							setcomment({ ...comment, content: value });
						}}
					/>
				</div>

				<div className="flex flex-wrap gap-2 text-xs">

					{/* {JSON.stringify(randomComments)} */}


					{randomComments?.map((item, index) => {

						return (
							<div key={index} className="border rounded-full border-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-500" onClick={ev => {

								setcomment({ ...comment, content: item });

							}}>{item}</div>
						)

					})}

				</div>

				<div className={`${PRIMARY_BUTTON} justify-center`}
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

		</div>
	);
};

export default CommentsForm;
