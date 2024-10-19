import React, { useState } from "react";
import classNames from "classnames";

const Accordion = ({ children, className, ...props }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const classes = classNames("accordion", className);

	return (
		<ul {...props} className={classes}>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					isActive: index === activeIndex,
					onToggle: () => handleToggle(index),
				}),
			)}
		</ul>
	);
};

export default Accordion;
