import PropTypes from "prop-types";
import React from "react";

const Popover = ({ children, className }) => {
	return <div className={`${className}`}>{children}</div>;
};

Popover.defaultProps = {
	className: "",
};

Popover.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Popover;
