import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<Link to="/bone/" className="text-white">
						Bone
					</Link>
				</li>
{/*				<li>
					<Link to="/mai" className="text-white">
						MAI
					</Link>
				</li>*/}
				<li>
					<Link to="/mri/" className="text-white">
						MRI
					</Link>
				</li>
				<li>
					<Link to="/dna/" className="text-white">
						DNA
					</Link>
				</li>
				<li>
					<a href="https://regenman.com"
					   target="_blank"
					   rel="noreferrer" className="text-white">
						Books
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
