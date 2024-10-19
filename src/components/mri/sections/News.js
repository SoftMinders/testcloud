import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import UnderstandingOpenMRI from "assets/Images/mri/understanding-open-mri.webp";
import ExploringOpenMRI from "assets/Images/mri/exploring-open-mri.webp";
import OpenedClosedMRI from "assets/Images/mri/opened-vs-closed-mri.webp";

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
										<Image src={UnderstandingOpenMRI} alt="News 01" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/charlotte-barker/articles/understanding-open-mri-scans-advantages-and-suitability-for-musculoskeletal-diagnosis"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Understanding Open MRI Scans: Advantages and Suitability for Musculoskeletal Diagnosis
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												… a significant advancement in medical imaging. Distinguished from traditional closed MRI
												machines, Open MRIs offer a patient-friendly alternative with …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/charlotte-barker/articles/understanding-open-mri-scans-advantages-and-suitability-for-musculoskeletal-diagnosis"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												Read more
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<Image src={ExploringOpenMRI} alt="News 02" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/morgan-l/articles/exploring-the-advantages-of-open-mri-a-patient-centric-approach"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Exploring the Advantages of Open MRI: A Patient-Centric Approach
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												… that addresses the claustrophobia and discomfort associated with traditional closed MRI
												machines. Open MRI offers a patient-friendly alternative, providing …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/morgan-l/articles/exploring-the-advantages-of-open-mri-a-patient-centric-approach"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												Read more
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
								<div className="tiles-item-inner has-shadow">
									<figure className="news-item-image m-0">
										<Image src={OpenedClosedMRI} alt="News 03" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/charlotte-barker/articles/open-vs-closed-mri-scanners-understanding-their-reliability-for-musculoskeletal-imaging"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Open vs Closed MRI Scanners: Understanding Their Reliability for Musculoskeletal Imaging
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												Explore the advantages of open MRI scanners over traditional closed options with our
												comprehensive guide. Delve into the science of …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/charlotte-barker/articles/open-vs-closed-mri-scanners-understanding-their-reliability-for-musculoskeletal-imaging"
												target="_blank"
												className="font-medium"
												rel="noreferrer"
											>
												Read more
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default News;
