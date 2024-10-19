import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "assets/styles/bone/style.scss";

const BoneLayoutDefault = ({ children, className, service }) => (
	<div className={className}>
		<Header service={service} className="invert-color" navPosition="right" />
		<main className="site-content">{children}</main>
		<Footer />
	</div>
);

export default BoneLayoutDefault;
