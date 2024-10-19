import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import { Grid, Stack } from "@mui/material";

class FeaturesTiles extends React.Component {
	render() {
		return (
			<div style={{ background: "#F3F5F8" }}>
				<section style={{ padding: 0 }} className={classNames("features-tiles section")}>
					<div style={{ maxWidth: 1000, margin: "auto" }}>
						<div className={classNames("features-tiles-inner section-inner")}>
							<SectionHeader
								className="center-content"
								data={{
									title: "Advantages of S-Scan Open MRI",
									paragraph: "",
								}}
							/>
							<Stack spacing={8} className="feature-tiles px-4">
								<Grid container spacing={2}>
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="In-Depth Bone Analysis"
											src={require("../../../assets/Images/mri/open-design.webp")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-02 font-semibold">Open Design and Unmatched Comfort </h4>
											<p className="mb-0 mt-12 font-md font-regular">
												The open design of the S-scan significantly enhances patient comfort by alleviating the feelings
												of claustrophobia often associated with traditional MRI machines. Providing a more relaxed
												experience, making it easier for patients of all sizes, including those with anxiety or mobility
												issues, to undergo necessary imaging. The wide, asymmetric table and open gantry ensure that
												positioning is straightforward, minimizing discomfort and ensuring that the patient remains
												comfortable throughout the procedure.
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Advanced Diagnostics</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												This technology goes beyond standard imaging by offering real-time positioning and dynamic
												motion capabilities. This capture images with exceptional precision, particularly when
												evaluating joints, soft tissues, and complex musculoskeletal conditions.
											</p>
										</Stack>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<img
											alt="Rapid and precise diagnostics"
											src={require("../../../assets/Images/mri/advanced-diagnostic.webp")}
											style={{ width: "100%" }}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="Proactive Approach"
											src={require("../../../assets/Images/mri/high-quality-image.jpg")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">High-Quality Imaging</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												The S-scan is equipped with eXP technology, which optimizes both the speed and quality of MRI
												scans. This advanced system reduces scan times by up to 41%, while still producing
												high-definition images with remarkable clarity.
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Engineered for MSK Excellence</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Its custom protocols and dedicated RF coils cover the entire spectrum of MSK anatomy, from the
												foot to the cervical spine. This specialization ensures that every scan provides the
												comprehensive, high-resolution images required for precise diagnosis and effective treatment
												planning, making it an invaluable tool in the care of musculoskeletal disorders.
											</p>
										</Stack>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<img
											style={{ width: "100%" }}
											alt="Ideal for Diverse range"
											src={require("../../../assets/Images/bone/diverse-range.png")}
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
