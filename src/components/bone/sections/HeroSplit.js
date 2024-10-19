import React from "react";
import classNames from "classnames";
import { Grid, Stack } from "@mui/material";
import { Button } from "antd";
import { useAuth } from "hooks";

const HeroSplit = ({ hasBgColor, invertColor, ...props }) => {
	const { toggleOpenRiskModal } = useAuth();

	return (
		<section
			{...props}
			className={classNames("hero section", hasBgColor && "has-bg-color", invertColor && "invert-color")}
		>
			<div className="container">
				<div className={classNames("hero-inner section-inner")}>
					<div className={classNames("split-wrap")}>
						<Grid container spacing={2} alignItems="center" className="py-4">
							<Grid item xs={12} md={6} className="">
								<h1 className="mt-0 mb-24 font-bold title">
									Bone Scan{" "}<br /> Bone Regeneration
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Cutting-Edge, Radiation-Free Bone Assessment</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
									R.E.M.S: Radiofrequency Echographic Multi-Spectrometry
								</p>
								<p className="mt-0 mb-32 font-md font-regular text-white">
									Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar
									vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks
									associated with DEXA.
								</p>
								<Stack spacing={2} direction="row" alignItems="center">
									<Button
										size="large"
										className="outlined-button blue font-medium"
										style={{ borderRadius: 5, minHeight: 45 }}
										onClick={() => toggleOpenRiskModal(true)}
									>
										Check Your Risk
									</Button>
									<Button
										size="large"
										className="primary-button blue font-medium"
										style={{ borderRadius: 5, minHeight: 45 }}
										onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/bone`)}
									>
										Book Scan
									</Button>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<div className="hero-video">
									<img alt="REMS" src={require("../../../assets/Images/bone/bone-landing-video-img.webp")} />
									<video preload="auto" loop autoPlay muted controls={false} playsInline>
										<source src={require("../../../assets/videos/bone-landing-page.mp4")} type="video/mp4" />
									</video>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSplit;
