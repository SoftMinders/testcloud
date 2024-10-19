import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import { Button, Grid, Stack } from "@mui/material";
import { useAuth } from "hooks";

const Pricing = () => {
	const { toggleOpenRiskModal } = useAuth();

	return (
		<section className={classNames("pricing section")} style={{ background: "#F3F5F8" }}>
			<div className="container">
				<div className={classNames("pricing-inner section-inner")}>
					<SectionHeader
						className="center-content invert-color"
						data={{
							title: "Tailored pricing plans designed for you",
							paragraph: "",
						}}
					/>
					<div className={classNames("tiles-wrap")}>
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={12} md={4} className="tiles-item check-risk-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow">
									<div className="pricing-item-content">
										<div className="pricing-item-header pb-24 mb-24">
											<div className="pricing-item-price mb-8">
												<span className="pricing-item-price-amount h1 text-white">
													Decide whether a bone scan is needed
												</span>
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div
												style={{ lineHeight: 2 }}
												className="pricing-item-features-title h6 text-xs text-white mb-24"
											>
												Take our FREE online quiz to quickly assess your risk for bone-related issues. No more guessing
												– get clear insights based on your specific parameters and decide if a bone scan is necessary
												for you. Don’t wait for symptoms to show; proactive health starts here! Click to start your
												journey to stronger bones.
											</div>
										</div>
									</div>
									<div className="pricing-item-cta text-center mt-12">
										<Button onClick={() => toggleOpenRiskModal(true)} className="primary-button blue" size="large">
											Check Your Risk
										</Button>
									</div>
								</div>
							</Grid>
							<Grid item xs={12} md={4} className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow">
									<Stack spacing={4} justifyContent="space-evenly" className="pricing-item-content">
										<div className="pricing-item-header mb-24">
											<div className="pricing-item-price ">
												<span className="pricing-item-price-amount font-medium h3">Bone Scan R.E.M.S.</span>
											</div>
											<div className="pricing-item-price text-center mt-24">
												<span className="pricing-item-price-currency h3 color-blue">£</span>
												<span className="pricing-item-price-amount h1 font-semibold color-blue">199</span>
											</div>
										</div>
										<div className="pricing-item-features mb-40">
											<div className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
												What’s included
											</div>
											<ul className="pricing-item-features-list list-reset text-xs mb-32">
												<li className="is-checked">R.E.M.S. Bone Density Scan</li>
												<li className="is-checked">Expert Analysis</li>
												<li className="is-checked">Balance Assessment</li>
												<li className="is-checked">Specialist Consultation</li>
												<li className="is-checked">Osteoporosis Risk Report</li>
												<li className="is-checked">Recommendations</li>
											</ul>
										</div>
									</Stack>
									<div className="pricing-item-cta text-center mb-8">
										<Button
											onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/bone`, "_blank")}
											className="outlined-button blue"
											size="large"
										>
											Order now
										</Button>
									</div>
								</div>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
