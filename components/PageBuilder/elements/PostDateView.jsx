import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
// import { useUtilsStore } from '../../../store/useUtilsStore';


const PostTitleView = (props) => {


	// const { wrapCurrency, formatDate } = useUtilsStore()


	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';
	var dateFormat = options?.dateFormat ?? 'DD-MM-YYYY';


	const post = usePost();


	const Tag = tag;


	var postDate = formatDate(post?.post_date, dateFormat);
	// var postAuthorName = postauthor?.name ?? 'Author Name';



	function formatDate(dateString, dateFormat) {



		var dateNames = [
			"Satureday",
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
		];
		var dateNamesShort = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
		var MonthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		var MonthNamesShort = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"June",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];




		String.prototype.strtr = function (dic) {
			const str = this.toString(),
				makeToken = (inx) => `{{###~${inx}~###}}`,
				tokens = Object.keys(dic).map((key, inx) => ({
					key,
					val: dic[key],
					token: makeToken(inx),
				})),
				tokenizedStr = tokens.reduce(
					(carry, entry) =>
						carry.replace(new RegExp(entry.key, "g"), entry.token),
					str
				);
			return tokens.reduce(
				(carry, entry) =>
					carry.replace(new RegExp(entry.token, "g"), entry.val),
				tokenizedStr
			);
		};






		const date = new Date(dateString);
		var amOrPm = date.getHours() < 12 ? "AM" : "PM";

		var dateObj = [];

		dateObj["d"] = date.getDate();
		dateObj["D"] = dateNamesShort[date.getDay()];
		dateObj["M"] = MonthNamesShort[date.getMonth()];
		dateObj["F"] = MonthNames[date.getMonth()];
		dateObj["m"] = date.getMonth() + 1;
		dateObj["y"] = date.getFullYear();
		dateObj["Y"] = date.getFullYear();
		dateObj["h"] = date.getHours();
		dateObj["H"] = date.getHours();
		dateObj["i"] = date.getMinutes();
		dateObj["s"] = date.getSeconds();
		dateObj["A"] = amOrPm;
		dateObj["a"] = amOrPm.toLowerCase();



		return dateFormat.strtr(dateObj);


	}










	return (
		<>

			{linkTo == 'postUrl' && (
				<Link href={`#`} dangerouslySetInnerHTML={{ __html: postDate }} id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
				/>
			)}

			{linkTo != 'postUrl' && (
				<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

					dangerouslySetInnerHTML={{ __html: postDate }}
				>
				</div>
			)}


		</>
	);
};



export default PostTitleView;
