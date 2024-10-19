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

			heading: "Professional and Thorough Bone Scan Experience",
			quote:
				"My experience at Regen PhD for a bone scan was exceptional. The staff were highly professional and made me feel comfortable throughout the entire process. The procedure was explained in detail, and I appreciated how thorough the technician was. The results were delivered promptly, and the follow-up care was excellent. I would highly recommend Regen PhD to anyone in need of a bone scan or any other medical services.",
			customerName: "Sarah Thompson",
		},
		{
			heading: "Efficient and Friendly Service",
			quote:
				"I had a bone scan done at Regen PhD, and I couldn’t be more satisfied with the service I received. The appointment was easy to schedule, and the staff were incredibly friendly and helpful. The process was quick and efficient, yet they took the time to answer all my questions. I left feeling reassured and confident in the care I received. Thank you to the entire team at Regen PhD for making this a positive experience!",
			customerName: "John Peterson",
		},
		{
			heading: "Exceptional Care and Attention to Detail",
			quote:
				" Regen PhD exceeded my expectations during my recent bone scan. From the moment I walked in, I was treated with care and respect. The staff went out of their way to make sure I was comfortable, and the technician who performed the scan was highly knowledgeable and detail-oriented. I felt like I was in great hands throughout the entire process. I highly recommend Regen PhD for their outstanding service and expertise.",
			customerName: "Lisa Bennett",
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
		<div>
			<div className="testimonial-container">
				<div className="text-column">
					<div className="section-header">
						<div className="container-md">
							<Stack direction="row" justifyContent="center" flexWrap="wrap" alignItems="center" spacing={2}>
								<div className="testimonial-faces mt-4">
									<img alt="Testimonial Faces" src={require("../../assets/Images/bone/face-1.webp")} />
									<img alt="Testimonial Faces" src={require("../../assets/Images/bone/face-2.webp")} />
									<img alt="Testimonial Faces" src={require("../../assets/Images/bone/face-3.webp")} />
								</div>
								<h2 className="mt-4 font-bold gradient-text">Customer Reviews</h2>
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
