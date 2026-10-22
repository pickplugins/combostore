import PropTypes from "prop-types";
import React from "react";

const VideoView = (props) => {



	var index = props?.index


	var id = props?.id;

	var options = props?.options;

	var width = options?.width;
	var height = options?.height;
	var videoId = options?.videoId;



	return (
		<div id={id} className={`  `}

		>
			<iframe
				width={width}
				height={height}
				src={`https://www.youtube.com/embed/${videoId}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>

		</div>
	);
};



export default VideoView;
