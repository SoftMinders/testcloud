import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, isScrolled, ...props }) => {
	const classes = classNames("brand", className);

	return (
		<div {...props} className={classes}>
			<h1 className="m-0">
				<Link to="/">
					<Image
						src={
							isScrolled
								? require("../../../../assets/Images/logo.png")
								: require("../../../../assets/Images/white_logo.png")
						}
						alt="Tidy"
						width={128}
						height={48}
					/>
				</Link>
			</h1>
		</div>
	);
};

export default Logo;
