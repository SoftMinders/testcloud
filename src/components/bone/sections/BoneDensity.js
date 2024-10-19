import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image1 from "assets/Images/bone/fragility.png";
import Image2 from "assets/Images/bone/t-score.png";
import Image3 from "assets/Images/bone/t-score-mask.png";
import { Grid, Stack } from "@mui/material";

class BoneDensity extends React.Component {
	render() {
		return (
			<section className={classNames("features-tabs section center-content")}>
				<div className="container">
					<div className={classNames("features-tabs-inner section-inner")}>
						<SectionHeader
							className="center-content"
							data={{
								title: "Bone Mineral Density",
								paragraph:
									"Bone density, or bone mineral density (BMD), is a critical parameter reflecting the concentration of minerals, primarily calcium and phosphorus, per unit volume of bone tissue. This assess skeletal health, providing a measure that helps diagnose osteoporosis—a condition characterized by reduced bone strength and increased fracture risk.",
							}}
						/>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<img
									className="border"
									src={Image1}
									alt="Fragility Score"
									style={{ width: "100%", borderRadius: 10 }}
								/>
							</Grid>
							<Grid className="p-4" item xs={12} md={6}>
								<Stack style={{ borderRadius: 10 }} direction="row" alignItems="center">
									<img src={Image2} alt="T-Score" style={{ width: "50%" }} />
									<img src={Image3} alt="T-Score" style={{ width: "50%" }} />
								</Stack>
								<h5 className="font-semibold text-start mt-4" style={{ color: "#454B5E" }}>
									T-Score
								</h5>
							</Grid>
						</Grid>
					</div>
				</div>
			</section>
		);
	}
}

export default BoneDensity;
