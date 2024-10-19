import React from "react";
import classNames from "classnames";
import {Button, Grid, Stack} from "@mui/material";
import {ArrowRightOutlined} from "@ant-design/icons";

const HeroSplit = ({hasBgColor, invertColor, ...props}) => {
    return (
        <section
            {...props}
            className={classNames("hero home-hero-section section", hasBgColor && "has-bg-color", invertColor && "invert-color")}
        >
            <div className="container">
                <div className={classNames("hero-inner home-hero section-inner")}>
                    <div className={classNames("split-wrap")}>
                        <Grid container spacing={2} alignItems="center" className="py-4">
                            <Grid item xs={12} md={6} className="title-section">
                                <h1 className="mt-0 mb-24 title">
                                    <span className="sub">Stay <span className="font-bold">Young</span>,</span>
                                    <span className="sub">Be <span className="font-bold">Strong</span>,</span>
                                    <span className="sub">Live <span className="font-bold">Forever</span>,</span>
                                </h1>
                                <Stack direction="row" alignItems="center" spacing={2} className="buttons-row">
                                    <Button
                                        style={{
                                            padding: "10px 30px",
                                            background: "white",
                                            color: "var(--blue-secondary)"
                                        }}
                                        onClick={() => window.open("/bone", "_self")}
                                        className="font-semibold font-md"
                                    >
                                        <img
                                            src={require("../../assets/Images/home/bone.png")}
                                            width={24}
                                            height={24}
                                            alt="Bone Scan"
                                        />
                                        <div className="mt-2">Bone Scan <ArrowRightOutlined style={{paddingLeft: 10}}/></div>
                                    </Button>
                                    <Button
                                        style={{
                                            padding: "10px 30px",
                                            background: "white",
                                            color: "var(--yellow-primary)"
                                        }}
                                        onClick={() => window.open("/mai", "_self")}
                                        className="font-semibold font-md"
                                    >
                                        <img
                                            src={require("../../assets/Images/home/mai.png")}
                                            width={24}
                                            height={24}
                                            alt="MAI Motion"
                                        />
                                        <div className="mt-2">MAI Motion <ArrowRightOutlined style={{paddingLeft: 10}}/></div>
                                    </Button>
                                    <Button
                                        style={{
                                            padding: "10px 30px",
                                            background: "white",
                                            color: "var(--green-primary)"
                                        }}
                                        onClick={() => window.open("/dna", "_self")}
                                        className="font-semibold font-md"
                                    >
                                        <img
                                            src={require("../../assets/Images/home/dna.png")}
                                            width={24}
                                            height={24}
                                            alt="eDNA"
                                        />
                                        <div className="mt-2">eDNA <ArrowRightOutlined style={{paddingLeft: 10}}/></div>
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} className="home-hero-image">
                                <img src={require("../../assets/Images/home/hero-image.png")} alt="Regen Phd"/>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSplit;
