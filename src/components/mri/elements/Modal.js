import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	handleClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	closeHidden: PropTypes.bool,
	video: PropTypes.any,
	videoTag: PropTypes.oneOf(["iframe", "video"]),
};

const defaultProps = {
	children: null,
	show: false,
	closeHidden: false,
	video: "",
	videoTag: "iframe",
};

class Modal extends React.Component {
	state = {};

	componentDidMount() {
		document.addEventListener("keydown", this.keyPress);
		document.addEventListener("click", this.stopPropagation);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keyPress);
		document.removeEventListener("click", this.stopPropagation);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.show !== this.props.show) {
			this.handleBodyClass();
		}
	}

	handleBodyClass = () => {
		if (document.querySelectorAll(".modal.is-active").length) {
			document.body.classList.add("modal-is-active");
		} else {
			document.body.classList.remove("modal-is-active");
		}
	};

	keyPress = (e) => {
		if (e.keyCode === 27) {
			this.props.handleClose(e);
		}
	};

	stopPropagation = (e) => {
		e.stopPropagation();
	};

	render() {
		const { className, children, handleClose, show, closeHidden, video, videoTag, ...props } = this.props;

		const classes = classNames("modal", show && "is-active", video && "modal-video", className);

		return (
			<React.Fragment>
				{show && (
					// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
					<div
						{...props}
						className={classes}
						onClick={handleClose}
						role="dialog"
						aria-modal="true"
						tabIndex="-1"
						onKeyDown={this.keyPress}
					>
						{/*	eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
						<div className="modal-inner" onClick={this.stopPropagation}>
							{video ? (
								<div className="responsive-video">
									{videoTag === "iframe" ? (
										<iframe title="video" src={video} frameBorder="0" allowFullScreen aria-label="Video"></iframe>
									) : (
										<video controls src={video} aria-label="Video">
											<track kind="captions" />
										</video>
									)}
								</div>
							) : (
								<React.Fragment>
									{!closeHidden && (
										<button
											className="modal-close"
											aria-label="Close"
											onClick={handleClose}
											onKeyDown={(e) => e.keyCode === 13 && handleClose(e)} // Handle Enter key for accessibility
											tabIndex="0"
										/>
									)}
									<div className="modal-content">{children}</div>
								</React.Fragment>
							)}
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
