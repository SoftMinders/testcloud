import React from "react";
import classNames from "classnames";
import {Grid, Stack} from "@mui/material";

class FeaturesTiles extends React.Component {
    render() {
        return (
            <div>
                <section style={{padding: 0, background: "#F7FCFA"}} className={classNames("features-tiles section")}>
                    <div style={{maxWidth: 1000, margin: "auto"}}>
                        <div className={classNames("features-tiles-inner section-inner")}>
                            <h2 className="font-medium gradient-text text-center">How It <span
                                className="font-bold">Works</span></h2>

                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} className="position-relative">
                                        <img
                                            style={{width: "100%"}}
                                            alt="Understand how your body works"
                                            src={require("../../assets/Images/home/how-it-works-1.png")}
                                        />
                                        <div className="feature-image-overlay">
                                            <div className="bone box font-semibold">
                                                Bone Scan
                                            </div>
                                            <div className="mai box font-semibold">
                                                MAI Motion
                                            </div>
                                            <div className="dna box font-semibold">
                                                eDNA
                                            </div>
                                        </div>

                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold">1</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Understand</span> how your body works</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                                This is just placeholder text. Don’t be alarmed, this is just here to
                                                fill up space since your finalized copy isn’t ready yet. Once we have
                                                your content finalized, we’ll replace this placeholder text with your
                                                real content.
                                            </p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold">2</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Learn</span> what movements are important for you
                                            </h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                                This is just placeholder text. Don’t be alarmed, this is just here to
                                                fill up space since your finalized copy isn’t ready yet. Once we have
                                                your content finalized, we’ll replace this placeholder text with your
                                                real content.
                                            </p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            alt="Learn what movements are important for you"
                                            src={require("../../assets/Images/home/how-it-works-2.png")}
                                            style={{width: "100%"}}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <img
                                            style={{width: "100%"}}
                                            alt="Plan with Personal Health Design"
                                            src={require("../../assets/Images/home/how-it-works-3.png")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold">3</h2>
                                            <h4 className="mt-02"><span
                                                className="font-bold">Plan</span> with Personal Health Design</h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                                This is just placeholder text. Don’t be alarmed, this is just here to
                                                fill up space since your finalized copy isn’t ready yet. Once we have
                                                your content finalized, we’ll replace this placeholder text with your
                                                real content.
                                            </p>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="reverse-column">
                                    <Grid item xs={12} md={6}>
                                        <Stack justifyContent="center" style={{height: "100%"}}>
                                            <h2 className="mt-02 font-bold">4</h2>
                                            <h4 className="mt-02">Retest and see your health <span
                                                className="font-bold">progress</span></h4>
                                            <p className="mb-0 mt-12 font-md font-regular">
                                                This is just placeholder text. Don’t be alarmed, this is just here to
                                                fill up space since your finalized copy isn’t ready yet. Once we have
                                                your content finalized, we’ll replace this placeholder text with your
                                                real content.
                                            </p>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} className="left-container">
                                        <img
                                            style={{width: "100%"}}
                                            alt="Retest and see your health progress"
                                            src={require("../../assets/Images/home/how-it-works-4.png")}
                                        />
                                    </Grid>
                                </Grid>
                            </Stack>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FeaturesTiles;
