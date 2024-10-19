import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import BoneDensityImage from "assets/Images/bone/bone-density.webp";
import ComparingREMSImage from "assets/Images/bone/comparing-rems.webp";
import OsteoporosisImage from "assets/Images/bone/osteoporosis.webp";
import { Button } from "antd";

class News extends React.Component {
	render() {
		return (
			<section className={classNames("news section")} style={{ paddingTop: 0 }}>
				<div className="container">
					<div className={classNames("news-inner section-inner")}>
						<SectionHeader
							className="center-content reveal-from-bottom"
							data={{
								title: "Blogs and Articles",
								paragraph: "",
							}}
						/>
						<div className={classNames("tiles-wrap")}>
							<div className="tiles-item reveal-from-bottom">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<Image src={ComparingREMSImage} alt="News 01" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/charlotte-barker/articles/comparing-rems-vs-dexa-scanners-a-comprehensive-guide-for-patients"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Comparing REMS vs. DEXA Scanners: A Comprehensive Guide for Patients
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												Explore the differences between REMS (Radiofrequency Echographic Multi-Spectrometry) and DEXA
												(Dual-Energy X-ray Absorptiometry) scans for assessing bone …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/charlotte-barker/articles/comparing-rems-vs-dexa-scanners-a-comprehensive-guide-for-patients"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												View Article
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<Image src={BoneDensityImage} alt="News 02" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/charlotte-barker/articles/bone-density-scan-results-what-they-mean-for-your-risk-of-fracture-and-osteoporosis"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Bone Density Scan Results: What They Mean for Your Risk of Fracture and Osteoporosis
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												A bone density scan, or DEXA scan, evaluates bone health to diagnose osteoporosis and assess
												fracture risk. Results are given …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/charlotte-barker/articles/bone-density-scan-results-what-they-mean-for-your-risk-of-fracture-and-osteoporosis"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												View Article
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<Image src={OsteoporosisImage} alt="News 03" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/ella-mcaleese/articles/osteoporosis-causes-aging-hormonal-changes-and-lifestyle-factors"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Osteoporosis Causes: Aging, Hormonal Changes, and Lifestyle Factors
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												Discover the causes and impacts of osteoporosis, a common bone disease leading to fractures and
												mobility issues. Learn about key …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/ella-mcaleese/articles/osteoporosis-causes-aging-hormonal-changes-and-lifestyle-factors"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												View Article
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center mt-xxl-4">
							<Button
								size="large"
								className="primary-button blue font-medium"
								style={{ minHeight: 45, marginTop: 40, lineHeight: "42px" }}
								href="/research"
							>
								Research Articles
							</Button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default News;
