import PropTypes from "prop-types";
import React from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { LoopProvider } from "../context/LoopContext";
import { FeatuerboxProvider } from "../context/FeatuerboxContext";


const List = (props) => {



	var children = props?.children;

	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors;
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';





	const Tag = tag;




	return (
		<Tag id={id} className={`${cssSelectors['*']?.classes}  `}

		>
			<FeatuerboxProvider value={{ cssSelectors: cssSelectors }}>

				{items?.map((item, index) => {

					return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

						<LoopProvider value={item} >

							{children.length > 0 && (
								children.map((child, idx) => (
									<BlockRender
										key={child.id}
										index={`${index}-${idx}`}
										block={child}

									/>
								))
							)}


						</LoopProvider>



					</div>)


				})}
			</FeatuerboxProvider>



		</Tag>
	);
};



export default List;
