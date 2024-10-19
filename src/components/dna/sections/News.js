import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import UnderstandingDNAImage from "assets/Images/dna/understanding-dna.webp";
import EpigeneticsImage from "assets/Images/dna/epigenetics.jpg";

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
										<Image src={UnderstandingDNAImage} alt="News 01" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/ella-mcaleese/articles/understanding-dna-testing-what-patients-need-to-know"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													Understanding DNA Testing: What Patients Need to Know
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												Discover the essentials of DNA testing, including its uses in health and ancestry analysis.
												Learn about the collection process, potential …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/ella-mcaleese/articles/understanding-dna-testing-what-patients-need-to-know"
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
										<Image src={EpigeneticsImage} alt="News 02" width={344} height={254} />
									</figure>
									<div className="news-item-content">
										<div className="news-item-body">
											<h3 className="news-item-title h5 mt-0 mb-8">
												<a
													href="https://mskdoctors.com/doctors/tanvi-verma/articles/what-is-epigenetics-unraveling-the-science-behind-genetic-expression"
													target="_blank"
													className="font-medium"
													rel="noreferrer"
												>
													What is Epigenetics? Unraveling the Science Behind Genetic Expression
												</a>
											</h3>
											<p className="mb-16 font-legacy font-regular">
												… off by environmental factors, lifestyle, and experiences without altering the DNA sequence.
												Learn about epigenetic modifications like DNA methylation, histone …
											</p>
										</div>
										<div className="news-item-more text-xs mb-8">
											<a
												href="https://mskdoctors.com/doctors/tanvi-verma/articles/what-is-epigenetics-unraveling-the-science-behind-genetic-expression"
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
