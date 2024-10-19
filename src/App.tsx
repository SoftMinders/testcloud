import React from "react";
import {Helmet} from "react-helmet";
import {Navigate, Route, Routes} from "react-router-dom";
import {BoneHome} from "./containers/bone/BoneHome";
import {MRIHome} from "./containers/mri/MRIHome";
import {DNAHome} from "./containers/dna/DNAHome";
import BoneLayoutDefault from "./components/bone/layout/Layout";
import {ResearchHome} from "./containers/research/ResearchHome";
import {Home} from "./containers/home/Home";

const routes = [
    {
        path: "/bone",
        component: BoneHome,
        className: "bone-layout",
        service: "bone",
        layout: true,
        title: "Bone Scan, Bone Regeneration - Cutting-Edge, Radiation-Free Bone Assessment",
        "description": "Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks associated with DEXA."
    },
    {
        path: "/mri",
        component: MRIHome,
        service: "mri",
        className: "mri-layout",
        title: "Precision Imaging Unmatched Comfort - Revolutionary Musculoskeletal Assessment",
        "description": "Step into the future of medical imaging with our Open MRI at MSK House. This advanced technology offers unparalleled clarity in diagnosing musculoskeletal conditions, all in a comfortable, open environment. Say goodbye to the discomfort of traditional MRI and experience precision imaging that adapts to your needs.",
        layout: true,
    },
    {
        path: "/dna",
        component: DNAHome,
        service: "dna",
        className: "dna-layout",
        title: "Advanced, Non-Invasive Genetic Insights - Unlock Your Genetic Health Potential",
        "description": "Discover a cutting-edge, non-invasive solution for assessing your genetic predispositions across a wide range of health areas. Our DNA testing provides a quick and precise analysis of over 300 genetic markers, offering deep insights into your overall well-being, from nutrition and fitness to disease risk.",
        layout: true,
    },
    {
        path: "/research",
        component: ResearchHome,
        service: "bone",
        className: "bone-layout",
        title: "Latest Research & Publications in REMS Bone Density scan",
        "description": "Solution to provide a quick and radiation-free assessment of the bone condition in the lumbar vertebrae and femoral neck. Ensuring accurate and efficient bone health evaluation without the risks associated with DEXA.",
        layout: true,
    },
    {
        path: "/",
        component: Home,
        className: "home-layout",
        title: "Stay Young, Be Strong, Live Forever",
        description: "Stay Young, Be Strong, Live Forever",
        layout: true,
    }
];

export const App = (): React.ReactElement => {

    return (
        <Routes>
            {routes.map(({ path, component: Component, title, description, className, layout, service }, index) => (
                <Route
                    key={index}
                    path={path}
                    element={
                        <>
                            {title ? (
                                <Helmet>
                                    <title>{title}</title>
                                    <link rel="canonical" href={`https://regenphd.com${path}`} />
                                    <meta name="description" content={description} />
                                    <meta property="og:title" content={title} />
                                    <meta property="og:description" content={description} />
                                    <meta name="twitter:title" content={title} />
                                    <meta name="twitter:description" content={description} />
                                </Helmet>
                            ) : null}
                            {layout ? (
                                <BoneLayoutDefault service={service} className={className}>
                                    <Component />
                                </BoneLayoutDefault>
                            ) : (
                                <Component />
                            )}
                        </>
                    }
                />
            ))}

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
