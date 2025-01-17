import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		paragraph: PropTypes.string,
	}).isRequired,
	children: PropTypes.node,
	tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
	children: null,
	tag: "h2",
};

class SectionHeader extends React.Component {
	render() {
		const { className, data, children, tag, ...props } = this.props;

		const classes = classNames("section-header", className);

		const Component = tag;

		return (
			<React.Fragment>
				{(data.title || data.paragraph) && (
					<div {...props} className={classes}>
						<div className="container-md">
							{children}
							{data.title && (
								<Component className={classNames("mt-0 font-bold gradient-text", data.paragraph ? "mb-16" : "mb-0")}>
									{data.title}
								</Component>
							)}
							{data.paragraph && <p className="m-0 font-regular font-mlg">{data.paragraph}</p>}
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
