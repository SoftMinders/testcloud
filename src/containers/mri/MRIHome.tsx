import React, { useRef } from "react";
import classNames from "classnames";
import HeroSplit from "components/mri/sections/HeroSplit";
import FeaturesTiles from "components/mri/sections/FeaturesTiles";
import BoneDensity from "components/mri/sections/BoneDensity";
import News from "components/mri/sections/News";
import { motion, useInView } from "framer-motion";
import SecondHeroSection from "components/mri/sections/SecondHeroSection";
import FAQs from "components/mri/sections/FAQs";
import Pricing from "components/mri/sections/Pricing";
import Testimonials from "components/mri/sections/Testimonials";
import { FixedFloatingButtons } from "../../components";

export const MRIHome = (): React.ReactElement => {
	// Define animations for sliding from left and right
	const leftToRight = {
		hidden: { opacity: 0, x: -100, y: 0 },
		visible: { opacity: 1, x: 0, y: 0 },
	};

	const rightToLeft = {
		hidden: { opacity: 0, x: 100, y: 0 },
		visible: { opacity: 1, x: 0, y: 0 },
	};

	const transition = { duration: 0.8, ease: "easeInOut" };

	// Create refs for each section
	const heroSplitRef = useRef(null);
	const secondHeroRef = useRef(null);
	const featuresTilesRef = useRef(null);
	const boneDensityRef = useRef(null);
	const newsRef = useRef(null);
	const pricingRef = useRef(null);
	const testimonialsRef = useRef(null);
	const faqsRef = useRef(null);

	// Use useInView hook to trigger animations when each section is in view
	const isHeroSplitInView = useInView(heroSplitRef, { once: false });
	const isSecondHeroInView = useInView(secondHeroRef, { once: false });
	const isFeaturesTilesInView = useInView(featuresTilesRef, { once: false });
	const isBoneDensityInView = useInView(boneDensityRef, { once: false });
	const isNewsInView = useInView(newsRef, { once: false });
	const isPricingInView = useInView(pricingRef, { once: false });
	const isTestimonialsInView = useInView(testimonialsRef, { once: false });
	const isFaqsInView = useInView(faqsRef, { once: false });

	return (
		<div className="bone">
			<motion.div
				ref={heroSplitRef}
				initial="hidden"
				animate={isHeroSplitInView ? "visible" : "hidden"}
				variants={leftToRight}
				transition={transition}
			>
				<HeroSplit hasBgColor invertColor />
			</motion.div>
			<motion.div
				ref={secondHeroRef}
				initial="hidden"
				animate={isSecondHeroInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<SecondHeroSection />
			</motion.div>
			<motion.div
				ref={featuresTilesRef}
				initial="hidden"
				animate={isFeaturesTilesInView ? "visible" : "hidden"}
				variants={leftToRight}
				transition={transition}
			>
				<FeaturesTiles />
			</motion.div>
			<motion.div
				ref={boneDensityRef}
				initial="hidden"
				animate={isBoneDensityInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<BoneDensity topDivider bottomOuterDivider />
			</motion.div>
			<motion.div
				ref={pricingRef}
				initial="hidden"
				animate={isPricingInView ? "visible" : "hidden"}
				variants={leftToRight}
				transition={transition}
			>
				<Pricing />
			</motion.div>
			<motion.div
				ref={faqsRef}
				initial="hidden"
				animate={isFaqsInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<FAQs />
			</motion.div>
			<motion.div
				ref={testimonialsRef}
				initial="hidden"
				animate={isTestimonialsInView ? "visible" : "hidden"}
				variants={leftToRight}
				transition={transition}
			>
				<Testimonials />
			</motion.div>
			<motion.div
				ref={newsRef}
				initial="hidden"
				animate={isNewsInView ? "visible" : "hidden"}
				variants={rightToLeft}
				transition={transition}
			>
				<News className="illustration-section-01" />
			</motion.div>
			<div className="text-center" style={{ padding: "80px 20px", background: "#F3F5F8" }}>
				<div style={{ maxWidth: "1000px", margin: "auto" }}>
					<h2 className={classNames("mt-0 font-bold gradient-text mb-16")}>Stay Young, Be Strong, Live Forever</h2>
					<p className="m-0 font-regular font-mlg">
						Unlock the secrets to lifelong vitality with the latest in scientific advancements with personalised care.
						Prevent age-related decline or enhance your current health, live your best life—today, tomorrow, and beyond.
					</p>
				</div>
			</div>
			<FixedFloatingButtons service="mri" />
		</div>
	);
};
