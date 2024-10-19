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
			heading: "Seamless and Comfortable MRI Experience",
			quote:
				"I was quite nervous about getting an MRI, but Regen PhD made the entire experience seamless. The staff explained every step and ensured I was comfortable throughout the procedure. The machine was state-of-the-art, and I didn’t feel rushed at any point. The results were fast, and the follow-up with the doctor was reassuring. Highly recommend Regen PhD for anyone in need of an MRI!",
			customerName: "Michael Roberts",
		},
		{
			heading: "Quick and Professional MRI Service",
			quote:
				"My MRI scan at Regen PhD was handled with great professionalism. I appreciated how quick the entire process was without sacrificing quality. The technicians were highly skilled, and the staff treated me with the utmost care. I received my results sooner than expected, which was a relief. Thank you to the Regen PhD team for making my MRI scan experience stress-free.",
			customerName: "Emily Harris",
		},
		{
			heading: "Top-Notch MRI Facility with Caring Staff",
			quote:
				"Regen PhD offers an incredible MRI service. From scheduling the appointment to the scan itself, everything was handled with care. The staff made sure I was comfortable and informed throughout. I appreciated their attention to detail, and the facility was modern and clean. I felt in good hands, and the results were thorough and clear. I would definitely recommend them!",
			customerName: "James Coleman",
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
