import React from "react";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

class Footer extends React.Component {
	render() {
		const { className, topOuterDivider, topDivider, ...props } = this.props;

		const classes = classNames(
			"site-footer invert-color center-content-mobile",
			topOuterDivider && "has-top-divider",
			className,
		);

		return (
			<footer {...props} className={classes}>
				<div className="container">
					<div className={classNames("site-footer-inner", topDivider && "has-top-divider")}>
						<div className="footer-top space-between text-xxs">
							<Logo />
							<FooterSocial />
						</div>
						<div className="footer-bottom space-between text-xxs">
							<FooterNav />
							<div className="footer-copyright text-white">&copy; 2024 RegenPhD, all rights reserved</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
