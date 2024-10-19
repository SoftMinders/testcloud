import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import {Button, Grid, Stack} from "@mui/material";

const Pricing = () => {

    return (
        <section className={classNames("pricing section")} style={{background: "#F3F5F8"}}>
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
                            <Grid item xs={12} md={4} className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner has-shadow">
                                    <Stack spacing={4} justifyContent="space-evenly" className="pricing-item-content">
                                        <div className="pricing-item-header mb-24">
                                            <div className="pricing-item-price ">
                                                <span
                                                    className="pricing-item-price-amount font-medium h3">Open MRI Scan</span>
                                            </div>
                                            <div className="pricing-item-price text-center mt-24">
                                                <span className="pricing-item-price-currency h3 color-blue">£</span>
                                                <span
                                                    className="pricing-item-price-amount h1 font-semibold color-blue"> 450</span>
                                            </div>
                                        </div>
                                        <div className="pricing-item-features mb-40">
                                            <div
                                                className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
                                                What’s included
                                            </div>
                                            <ul className="pricing-item-features-list list-reset text-xs mb-32">
                                                <li className="is-checked">
													<span style={{width: "calc(100% - 40px)"}}>
														MRI scan for 1 body part (Musculoskeletal only)
													</span>
                                                </li>
                                                <li className="is-checked">Relaxed Musculoskeletal Scan</li>
                                                <li className="is-checked">Comprehensive Image Analysis</li>
                                                <li className="is-checked">Personalized Report</li>
                                                <li className="is-checked">Expert Radiologist Consultation</li>
                                                <li className="is-checked">Detailed Diagnostic Review</li>
                                                <li className="is-checked">
                                                    <span style={{width: "calc(100% - 40px)"}}>Tailored Recommendations for Treatment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Stack>
                                    <div className="pricing-item-cta text-center mb-8">
                                        <Button
                                            onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/mri`, "_blank")}
                                            className="outlined-button blue"
                                            size="large"
                                        >
                                            Order now
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner has-shadow">
                                    <Stack spacing={4} justifyContent="space-evenly" className="pricing-item-content">
                                        <div className="pricing-item-header mb-24">
                                            <div className="pricing-item-price ">
                                                <span className="pricing-item-price-amount font-medium h3">Open MRI Scan - 2 parts</span>
                                            </div>
                                            <div className="pricing-item-price text-center mt-24">
                                                <span className="pricing-item-price-currency h3 color-blue">£</span>
                                                <span
                                                    className="pricing-item-price-amount h1 font-semibold color-blue"> 730</span>
                                            </div>
                                        </div>
                                        <div className="pricing-item-features mb-40">
                                            <div
                                                className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
                                                What’s included
                                            </div>
                                            <ul className="pricing-item-features-list list-reset text-xs mb-32">
                                                <li className="is-checked">
													<span style={{width: "calc(100% - 40px)"}}>
														MRI scan for 2 body parts (Musculoskeletal only)
													</span>
                                                </li>
                                                <li className="is-checked">Relaxed Musculoskeletal Scan</li>
                                                <li className="is-checked">Comprehensive Image Analysis</li>
                                                <li className="is-checked">Personalized Report</li>
                                                <li className="is-checked">Expert Radiologist Consultation</li>
                                                <li className="is-checked">Detailed Diagnostic Review</li>
                                                <li className="is-checked">
                                                    <span style={{width: "calc(100% - 40px)"}}>Tailored Recommendations for Treatment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Stack>
                                    <div className="pricing-item-cta text-center mb-8">
                                        <Button
                                            onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/mri`, "_blank")}
                                            className="outlined-button blue"
                                            size="large"
                                        >
                                            Order now
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner has-shadow">
                                    <Stack spacing={4} justifyContent="space-evenly" className="pricing-item-content">
                                        <div className="pricing-item-header mb-24">
                                            <div className="pricing-item-price ">
                                                <span className="pricing-item-price-amount font-medium h3">Open MRI Scan - 3 parts</span>
                                            </div>
                                            <div className="pricing-item-price text-center mt-24">
                                                <span className="pricing-item-price-currency h3 color-blue">£</span>
                                                <span
                                                    className="pricing-item-price-amount h1 font-semibold color-blue">1010</span>
                                            </div>
                                        </div>
                                        <div className="pricing-item-features mb-40">
                                            <div
                                                className="pricing-item-features-title font-medium h6 text-xs text-color-high mb-24">
                                                What’s included
                                            </div>
                                            <ul className="pricing-item-features-list list-reset text-xs mb-32">
                                                <li className="is-checked">
													<span style={{width: "calc(100% - 40px)"}}>
														MRI scan for 3 body parts (Musculoskeletal only)
													</span>
                                                </li>
                                                <li className="is-checked">Relaxed Musculoskeletal Scan</li>
                                                <li className="is-checked">Comprehensive Image Analysis</li>
                                                <li className="is-checked">Personalized Report</li>
                                                <li className="is-checked">Expert Radiologist Consultation</li>
                                                <li className="is-checked">Detailed Diagnostic Review</li>
                                                <li className="is-checked">
                                                    <span style={{width: "calc(100% - 40px)"}}>Tailored Recommendations for Treatment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Stack>
                                    <div className="pricing-item-cta text-center mb-8">
                                        <Button
                                            onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/mri`, "_blank")}
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
