import React from "react";
import PropTypes from "prop-types";

const propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	alt: PropTypes.string,
};

const defaultProps = {
	src: undefined,
	width: undefined,
	height: undefined,
	alt: undefined,
};

class Image extends React.Component {
	render() {
		const { className, src, width, height, alt, ...props } = this.props;

		return <img {...props} className={className} src={src} width={width} height={height} alt={alt} />;
	}
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
