import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import GifImage from "assets/Images/mri/mri-assessment.gif";
import MRIScans from "assets/Images/mri/mri-joint-scans.png";
import { Grid } from "@mui/material";

class BoneDensity extends React.Component {
	render() {
		return (
			<section className={classNames("features-tabs section center-content")} style={{ paddingTop: 0 }}>
				<div className="container">
					<div className={classNames("features-tabs-inner section-inner")}>
						<SectionHeader
							className="center-content"
							data={{
								title: "Open MRI Scan",
								paragraph:
									"The S-scan MRI offers precise, high-resolution imaging tailored for musculoskeletal conditions. It captures detailed views of joints, soft tissues, and bones, enabling accurate diagnosis of issues like ligament injuries and early arthritis. This advanced technology excels in real-time dynamic movements, enhancing the understanding of musculoskeletal function.",
							}}
						/>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<img src={MRIScans} alt="Fragility Score" style={{ width: "100%", borderRadius: 10 }} />
							</Grid>
							<Grid item xs={12} md={6}>
								<img src={GifImage} alt="Fragility Score" style={{ width: "100%", height: "100%", borderRadius: 10 }} />
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		);
	}
}

export default BoneDensity;
