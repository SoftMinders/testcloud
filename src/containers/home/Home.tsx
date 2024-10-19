import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import HeroSplit from "components/home/HeroSplit";
import FeaturesTiles from "components/home/FeaturesTiles";
import { motion, useInView } from "framer-motion";
import FAQs from "components/bone/sections/FAQs";
import NewsMedia from "../../components/home/NewsMedia";
import InfoSection from "../../components/home/InfoSection";
import SectionHeader from "../../components/bone/sections/partials/SectionHeader";
import Blogs from "../../components/home/Blogs";
import GoalSection from "../../components/home/GoalSection";
import { Fab } from "@mui/material";
import { Tooltip } from "antd";

const fabs = [
    {
        tooltip: "Bone Scan",
        bottom: "calc(50% + 80px)",
        image: require("../../assets/Images/home/bone.png"),
        link: "/bone",
        alt: "Bone Scan",
    },
    {
        tooltip: "MAI Motion",
        bottom: "50%",
        image: require("../../assets/Images/home/mai.png"),
        link: "/mai",
        alt: "MAI Motion",
    },
    {
        tooltip: "eDNA",
        bottom: "calc(50% - 80px)",
        image: require("../../assets/Images/home/dna.png"),
        link: "/dna",
        alt: "eDNA",
    },
];

export const Home = (): React.ReactElement => {
    const isMobile = window.innerWidth < 768;
    const [showFabs, setShowFabs] = useState(false);

    // Define animations for sliding from left and right
    const leftToRight = {
        hidden: { opacity: 0, x: -100, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
    };

    const rightToLeft = {
        hidden: { opacity: 0, x: 100, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
    };
    const fabAnimation = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, scale: "easeInOut", delay: i * 0.3 },
        }),
    };
    const transition = { duration: 0.8, ease: "easeInOut" };

    // Create refs for each section
    const heroSplitRef = useRef(null);
    const blogRef = useRef(null);
    const faqsRef = useRef(null);
    const goalRef = useRef(null);
    const infoRef = useRef(null);
    const featureTilesRef = useRef(null);
    const secondSectionRef = useRef(null);

    // Use useInView hook to trigger animations when each section is in view
    const isHeroSplitInView = useInView(heroSplitRef, { once: false });
    const isSecondSectionInView = useInView(secondSectionRef, { once: false });
    const isInfoSplitInView = useInView(infoRef, { once: false });
    const isFeatureTilesSplitInView = useInView(featureTilesRef, { once: false });
    const isGoalSplitInView = useInView(goalRef, { once: false });
    const isTestimonialsInView = useInView(blogRef, { once: false });
    const isFaqsInView = useInView(faqsRef, { once: false });

    // State to control fab visibility

    useEffect(() => {
        const handleScroll = (): void => {
            if (heroSplitRef.current) {
                const rect = (heroSplitRef.current as any).getBoundingClientRect();
                const halfHeight = rect.height / 2;
                setShowFabs(rect.bottom <= halfHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.div className="bone">
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
                    ref={secondSectionRef}
                    className="second-section"
                    style={{ paddingTop: 50 }}
                    initial="hidden"
                    animate={isSecondSectionInView ? "visible" : "hidden"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <div className="container">
                        <div className={classNames("news-inner section-inner")}>
                            <SectionHeader
                                className="center-content reveal-from-bottom"
                                data={{
                                    title: "",
                                    paragraph:
                                        "Is at the forefront of proactive health design and management, blending cutting-edge science with personalised wellness strategies to revolutionise how we approach aging and well-being with digital technology.",
                                }}
                            >
                                <h2 className="gradient-text font-bold text-center">
                                    Regeneration Personal Health Design <br />
                                    (Regen PhD)
                                </h2>
                            </SectionHeader>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={infoRef}
                    initial="hidden"
                    animate={isInfoSplitInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <InfoSection />
                </motion.div>

                <motion.div
                    ref={goalRef}
                    initial="hidden"
                    animate={isGoalSplitInView ? "visible" : "hidden"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <GoalSection />
                </motion.div>
                <motion.div
                    ref={featureTilesRef}
                    initial="hidden"
                    animate={isFeatureTilesSplitInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <FeaturesTiles />
                </motion.div>

                <motion.div
                    className="text-center"
                    style={{ padding: "100px 20px 40px" }}
                    initial="hidden"
                    animate="visible"
                    variants={rightToLeft}
                    transition={transition}
                >
                    <NewsMedia />
                </motion.div>

                <motion.div
                    ref={faqsRef}
                    initial="hidden"
                    animate={isFaqsInView ? "visible" : "hidden"}
                    variants={leftToRight}
                    transition={transition}
                >
                    <FAQs />
                </motion.div>

                <motion.div
                    ref={blogRef}
                    initial="hidden"
                    animate={isTestimonialsInView ? "visible" : "hidden"}
                    variants={rightToLeft}
                    transition={transition}
                >
                    <Blogs />
                </motion.div>

                <motion.div
                    className="text-center"
                    style={{ padding: "80px 20px", background: "#faf8f5" }}
                    initial="hidden"
                    animate="visible"
                    variants={leftToRight}
                    transition={transition}
                >
                    <motion.div style={{ maxWidth: "1000px", margin: "auto" }}>
                        <h2 className={classNames("mt-0 font-bold gradient-text mb-16")}>
                            Stay Young, Be Strong, Live Forever
                        </h2>
                        <p className="m-0 font-regular font-mlg">
                            Unlock the secrets to lifelong vitality with the latest in scientific advancements with
                            personalised care. Prevent age-related decline or enhance your current health, live your
                            best life—today, tomorrow, and beyond.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
            {showFabs &&
                fabs.map((fab, index) => (
                    <motion.div
                        key={fab.tooltip}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        whileHover="hover"
                        variants={fabAnimation}
                    >
                        <Tooltip title={fab.tooltip} placement="left">
                            <Fab
                                sx={{
                                    padding: isMobile ? 2 : 4,
                                    position: "fixed",
                                    bottom: fab.bottom,
                                    transform: "translateY(50%)",
                                    right: (theme) => theme.spacing(2),
                                    background: "white",
                                }}
                                onClick={() => window.open(fab.link, "_self")}
                            >
                                <img
                                    src={fab.image}
                                    width={isMobile ? 24 : 36}
                                    height={isMobile ? 24 : 36}
                                    alt={fab.alt}
                                />
                            </Fab>
                        </Tooltip>
                    </motion.div>
                ))}
        </>
    );
};
