import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";
import {Button} from "antd";

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
							<Grid item xs={12} md={6} className="">
								<h1 className="mt-0 mb-24 font-bold title">
									Precision Imaging <br /> Unmatched Comfort
								</h1>
								<h4 className="mt-0 mb-16 font-medium">Revolutionary Musculoskeletal Assessment</h4>
								<p className="mt-0 mb-32 font-md font-regular text-white">
									Step into the future of medical imaging with our Open MRI at MSK House. This advanced technology
									offers unparalleled clarity in diagnosing musculoskeletal conditions, all in a comfortable, open
									environment. Say goodbye to the discomfort of traditional MRI and experience precision imaging that
									adapts to your needs. Whether it’s pinpointing pain or monitoring recovery, our Open MRI delivers
									fast, accurate results—empowering you to take control of your health without the confinement or stress
									of conventional scans.
								</p>
								<Stack spacing={2} direction="row" alignItems="center">
									<Button
										size="large"
										className="primary-button blue font-medium"
										style={{ borderRadius: 5, minHeight: 45 }}
										onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/mri`, "_blank")}
									>
										Book Scan
									</Button>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} className="left-container">
								<div className="hero-video">
									<video preload="auto" loop autoPlay muted controls={false} playsInline>
										<source src={require("../../../assets/videos/mri-landing.mp4")} type="video/mp4" />
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
