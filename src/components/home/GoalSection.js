import React from 'react';
import {Grid, Stack} from "@mui/material";
import classNames from "classnames";

const slides = [
    {
        title: <>Discover how to <span className="bold-line font-bold gradient-text">Stay Young</span> with your
            biological
            profile.</>,
        alt: "Discover how to Stay Young with your biological profile.",
        image: require("../../assets/Images/home/how-it-works-1.png")
    },
    {
        title: <>Commit to <span className="bold-line font-bold gradient-text">Be Strong</span> for your bone to
            physical
            movement.</>,
        alt: "Commit to Be Strong for your bone to physical movement.",
        image: require("../../assets/Images/home/how-it-works-2.png")
    },
    {
        title: <>Champion a <span className="bold-line font-bold gradient-text">Live Forever</span> legacy for a
            healthier, longer
            life for all.</>,
        alt: "Champion a Live Forever legacy for a healthier, longer life for all.",
        image: require("../../assets/Images/home/how-it-works-3.png")
    }
];

class GoalSection extends React.Component {

    render() {
        return (
            <div>
                <section className={classNames("features-tiles section")}>
                    <div style={{maxWidth: 1000, margin: "auto"}}>
                        <div className={classNames("features-tiles-inner goal-section")}>
                            <h2 className="font-medium text-center gradient-text">Our goal is <span
                                className="font-bold">simple</span></h2>

                            <Stack spacing={8} className="feature-tiles px-4 pt-4">
                                <Grid container spacing={4}>
                                    {slides.map((slide, index) => (
                                        <Grid key={index} item xs={12} md={4} className="position-relative">
                                            <img
                                                style={{width: "100%"}}
                                                alt={slide.alt}
                                                src={slide.image}
                                            />
                                            <Slide index={index} slide={slide}/>
                                        </Grid>

                                    ))}
                                </Grid>

                            </Stack>
                        </div>
                    </div>
                </section>
            </div>
        )
            ;
    }
}

const Slide = (props) => <Stack justifyContent="center" className="mt-4">
    <p className="mt-02 mb-0 font-mlg text-center">{props.slide.title}</p>
</Stack>

export default GoalSection;
