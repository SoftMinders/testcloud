import React from "react";
import classNames from "classnames";
import SectionHeader from "../bone/sections/partials/SectionHeader";
import {Grid, Stack} from "@mui/material";
import LincolnUniversity from "../../assets/Images/home/lincoln-university.png"
import MSKDoctors from "../../assets/Images/home/msk-doctors.png"
import Bullet from "../../assets/Images/home/bullet.png"
import Book from "../../assets/Images/home/book.png"

class News extends React.Component {
    render() {
        return (
            <section className={classNames("info-section news section")} style={{paddingTop: 0}}>
                <div className="container">
                    <div className={classNames("news-inner section-inner")}>
                        <SectionHeader
                            className="center-content reveal-from-bottom"
                            data={{
                                title: "",
                                paragraph: "",
                            }}
                        />
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6} className="divider grid-section">
                                <h3 className="font-semibold" style={{marginBottom: 30}}>
                                    World leading Science
                                </h3>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <img src={MSKDoctors} alt="MSK Doctors" className="info-section-image"/>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <img src={LincolnUniversity} alt="Lincoln University"
                                             className="info-section-image"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} className="grid-section">

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <div style={{ width: "100%" }}>
                                        <h5 className="font-medium gradient-text" style={{marginBottom: 10}}>
                                            Design By
                                        </h5>
                                        <h3 className="font-semibold" style={{marginBottom: 30}}>
                                            Prof Paul Lee
                                        </h3>

                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={Bullet}/>
                                            Regeneration by Design

                                        </p>
                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={Bullet}/>
                                            The Science of Superhuman aging
                                        </p>
                                        <p className="font-md">
                                            <img className="mr-4 bullet-img" alt="bullet" src={Bullet}/>
                                            Number 1 International best-selling book

                                        </p>
                                    </div>
                                    <img className="mr-4 book-img" alt="Regenman Book" src={Book}/>

                                </Stack>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
