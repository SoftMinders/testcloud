import React from "react";
import classNames from "classnames";
import {Grid} from "@mui/material";
import Forbes from "../../assets/Images/forbes.png"
import Economist from "../../assets/Images/economist.png"
import Guardian from "../../assets/Images/guardian.png"
import NewScientist from "../../assets/Images/new-scientist.png"
import Telegraph from "../../assets/Images/telegraph.png"
import Times from "../../assets/Images/times.png"

class News extends React.Component {
    render() {
        return (
            <section className={classNames("featured-in-section section")} style={{paddingTop: 0}}>
                <div className="container">
                    <div className={classNames("section-inner")}>
                        <p className="font-md mb-0 gradient-text font-medium">Number 1 International Best seller </p>
                        <h2>
                            Regeneration by <span className="font-bold">Design</span>
                        </h2>
                        <div>
                            <img src={require("../../assets/Images/home/featured-img.png")} className="featured-image"
                                 alt="Regeneration by design"/>
                        </div>

                        <h2 className="subtitle">
                            <span className="font-bold">Featured</span> In
                        </h2>
                        <Grid container spacing={2}>
                            <Grid item xs={4} md={4} className="text-center">
                                <img src={Forbes} alt="Forbes" className="news-image"/>
                            </Grid>
                            <Grid item xs={4} md={4} className="text-center">
                                <img src={Economist} alt="Economist" className="news-image"/>
                            </Grid>
                            <Grid item xs={4} md={4} className="text-center">
                                <img src={Guardian} alt="Guardian" className="news-image"/>
                            </Grid>
                            <Grid item xs={4} md={4} className="text-center" style={{paddingTop: 30}}>
                                <img src={NewScientist} alt="NewScientist" className="news-image"/>
                            </Grid>
                            <Grid item xs={4} md={4} className="text-center" style={{paddingTop: 30}}>
                                <img src={Telegraph} alt="Telegraph" className="news-image"/>
                            </Grid>
                            <Grid item xs={4} md={4} className="text-center" style={{paddingTop: 30}}>
                                <img src={Times} alt="Times" className="news-image"/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
