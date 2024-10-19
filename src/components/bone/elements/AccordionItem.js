import React, { useEffect, useRef } from "react";
import classNames from "classnames";

const AccordionItem = ({ title, children, isActive, onToggle, className, ...props }) => {
	const contentRef = useRef(null);

	useEffect(() => {
		if (isActive) {
			contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
		} else {
			contentRef.current.style.maxHeight = null;
		}
	}, [isActive]);

	const classes = classNames("accordion-item", className);

	return (
		<li {...props} className={classes}>
			<div className={classNames(isActive && "is-active")}>
				{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
				<div className="accordion-header text-sm" onClick={onToggle}>
					<span className="m-0">{title}</span>
					<div className="accordion-icon"></div>
				</div>
				<div ref={contentRef} className="accordion-content text-xs">
					<p>{children}</p>
				</div>
			</div>
		</li>
	);
};

export default AccordionItem;
