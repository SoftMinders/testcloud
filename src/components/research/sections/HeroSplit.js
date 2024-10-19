import React from "react";
import classNames from "classnames";
import { Grid } from "@mui/material";

const HeroSplit = ({ hasBgColor, invertColor, ...props }) => {
	return (
		<section
			{...props}
			className={classNames("hero section", hasBgColor && "has-bg-color", invertColor && "invert-color")}
		>
			<div className="container">
				<div className={classNames("hero-inner section-inner")}>
					<div className={classNames("split-wrap")}>
						<Grid container spacing={2} alignItems="center" className="py-4">
							<Grid item xs={12} md={12} className="">
								<h1 className="mt-0 mb-24 font-bold title text-center">
									Latest Research & <br /> Publications in REMS Bone Density scan
								</h1>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
