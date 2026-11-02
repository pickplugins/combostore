import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import CommentsForm from "./CommentsForm";
import { IconStar, IconStarFilled, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconTrash, IconStackPop } from "@tabler/icons-react";


const CommentsList = (props) => {



	var comments = props?.comments
	var id = props?.id
	var commentSubmitted = props?.commentSubmitted
	var addNotification = props?.addNotification
	var userDataX = props?.userDataX
	var setUserDataX = props?.setUserDataX

	const [replyTo, setreplyTo] = useState({ index: null });






	const CommentTemplate = ({ comment, index, id, commentSubmitted }) => {


		var comment_parent = comment?.comment_parent;

		var stars = [
			{ label: "Very Poor", value: 1 },
			{ label: "Poor", value: 2 },
			{ label: "Normal", value: 3 },
			{ label: "Good", value: 4 },
			{ label: "Supper", value: 5 },
		]


		return (
			<div className={`${comment_parent > 0 ? "ml-7" : ""} rounded-lg border border-gray-200 bg-gray-50 p-4`}>

				<div className="flex flex-col gap-3">

					<div className="flex justify-between items-center">

						<div className="w-max flex gap-2 items-center ">
							<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-white">
								<Image unoptimized className="h-8 w-8 object-cover" src={comment?.avatar} alt={comment?.comment_author} width={40} height={40} />


							</div>
							<div className="w-max text-sm font-medium text-gray-900">{comment?.comment_author}</div>
						</div>
						<div>
							{comment.rate > 0 && (
								<div>
									<div className="flex gap-1 items-center" >

										<div>Rate: </div>

										{stars.map((item, index) => {

											return (

												<div
													title={item?.label} className=" text-amber-400" key={index}>


													{comment.rate <= index && (
														<><IconStar width={18} /></>
													)}
													{comment.rate > index && (
														<><IconStarFilled width={18} /></>
													)}



												</div>
											)

										})}




									</div>
								</div>

							)}
						</div>
					</div>




					<div className="w-full text-sm leading-relaxed text-gray-700">
						{comment?.comment_content}
					</div>

					<div className="flex w-full justify-end gap-3 text-xs font-medium">

						<div className="cursor-pointer text-gray-500 transition-colors hover:text-gray-900" onClick={ev => {

							setreplyTo({ ...replyTo, index: index })

						}}>Reply</div>

						{replyTo.index == index && (
							<div className="cursor-pointer text-red-600 hover:text-red-700" onClick={ev => {

								setreplyTo({ ...replyTo, index: null })

							}}>Cancel</div>
						)}


					</div>

					{replyTo.index == index && (

						<div className="w-full">
							<CommentsForm id={id} parentId={comment.comment_ID} commentSubmitted={commentSubmitted} addNotification={addNotification} userDataX={userDataX} setUserDataX={setUserDataX} />
						</div>
					)}


				</div>

			</div>
		);
	};



	return (
		<div className="">


			<div className="flex max-h-[600px] flex-col gap-3 overflow-auto">
				{comments?.map((comment, index) => {

					return (
						<CommentTemplate key={index} comment={comment} id={id} commentSubmitted={commentSubmitted} index={index} />

					)

				})}
			</div>


		</div>
	);
};

export default CommentsList;
