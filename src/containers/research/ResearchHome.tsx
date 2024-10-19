import React, { useRef } from "react";
import classNames from "classnames";
import HeroSplit from "components/research/sections/HeroSplit";
import News from "components/research/sections/News";
import { motion, useInView } from "framer-motion";
import { FixedFloatingButtons } from "../../components";

export const ResearchHome = (): React.ReactElement => {
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
    const newsRef = useRef(null);

    // Use useInView hook to trigger animations when each section is in view
    const isHeroSplitInView = useInView(heroSplitRef, { once: false });
    const isNewsInView = useInView(newsRef, { once: false });

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

            <FixedFloatingButtons />
        </div>
    );
};
