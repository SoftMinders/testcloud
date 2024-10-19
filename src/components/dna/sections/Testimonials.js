import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack } from "@mui/material";

const Testimonials = () => {
	const [sliderRef, setSliderRef] = useState(null);
	const [activeSlide, setActiveSlide] = useState(0);
	const [centerPadding, setCenterPadding] = useState("200px");

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setCenterPadding("50px");
			} else if (window.innerWidth < 1024) {
				setCenterPadding("100px");
			} else {
				setCenterPadding("200px");
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Call initially to set the correct padding

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const testimonials = [
		{
			heading: "Comprehensive and Detailed DNA Analysis",
			quote:
				"I recently had a DNA scan at Regen PhD, and the entire experience was remarkable. The process was simple, and the results were incredibly detailed. The staff took the time to explain what the findings meant and how I could use this information for my health. I highly recommend Regen PhD for anyone looking for a comprehensive DNA analysis!",
			customerName: "Olivia Mitchell",
		},
		{
			heading: "Innovative DNA Testing with Excellent Support",
			quote:
				"Regen PhD’s DNA scan service was beyond my expectations. The staff was friendly and knowledgeable, and the test itself was quick and easy. The results were fascinating, providing insights into my genetic health that I hadn’t considered before. The follow-up consultation was very informative, helping me understand how to apply the data. Great experience overall!",
			customerName: "David Richardson",
		},
		{
			heading: "Highly Informative and Easy DNA Scan Process",
			quote:
				"I went for a DNA scan at Regen PhD and was impressed by how informative the entire process was. The procedure was painless, and I was given a wealth of information about my genetic makeup that will help me in the future. The staff was very helpful, walking me through each detail of the results. I would definitely recommend this service to anyone looking to learn more about their health through genetics.",
			customerName: "Samantha Walker",
		},
	];


	const sliderSettings = {
		slidesToScroll: 1,
		slidesToShow: 1,
		centerMode: true,
		arrows: false,
		centerPadding,
		beforeChange: (current, next) => setActiveSlide(next),
	};

	return (
		<div style={{ background: "#F3F5F8" }}>
			<div className="testimonial-container">
				<div className="text-column">
					<div className="section-header">
						<div className="container-md">
							<Stack direction="row" justifyContent="center" flexWrap="wrap" alignItems="center" spacing={2}>
								<div className="testimonial-faces mt-4">
									<img alt="Testimonial Faces" src={require("../../../assets/Images/bone/face-1.webp")} />
									<img alt="Testimonial Faces" src={require("../../../assets/Images/bone/face-2.webp")} />
									<img alt="Testimonial Faces" src={require("../../../assets/Images/bone/face-3.webp")} />
								</div>
								<h2 className="mt-4 font-bold gradient-text">R.E.M.S. Customer Reviews</h2>
							</Stack>
						</div>
					</div>
					<Slider {...sliderSettings} className="testimonial-slider" ref={setSliderRef}>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className={`testimonial ${index === activeSlide ? "testimonial-active" : "testimonial-inactive"}`}
							>
								<div className="testimonial-heading font-semibold">{testimonial.heading}</div>
								<blockquote className="quote font-regular">{testimonial.quote}</blockquote>
								<div className="customer-info-and-controls-container">
									<div className="customer-info">
										<div className="customer-text-info">
											<div className="customer-name font-medium">- {testimonial.customerName}</div>
										</div>
									</div>
									<div className="controls">
										<button className="control-button" onClick={sliderRef?.slickPrev}>
											<ArrowLeftOutlined />
										</button>
										<div className="divider"></div>
										<button className="control-button" onClick={sliderRef?.slickNext}>
											<ArrowRightOutlined />
										</button>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
