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
									title: "Advantages of REMS",
									paragraph: "",
								}}
							/>
							<Stack spacing={8} className="feature-tiles px-4">
								<Grid container spacing={2}>
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="In-Depth Bone Analysis"
											src={require("../../../assets/Images/bone/depth-analysis.png")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-02 font-semibold">In-Depth Bone Analysis</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												R.E.M.S. scans provide a more sensitive and detailed analysis of bone density along with
												assessing bone fragility index and calculating a 5-year fracture risk. Overall, providing a more
												comprehensive report on bone health
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Rapid and precise diagnostics</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Clients benefit from the detailed results immediately after their scan, eliminating any waiting
												period or uncertainty. This rapid feedback allows for swift and informed decisions about their
												bone health management, ensuring timely and effective care.
											</p>
										</Stack>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<img
											alt="Rapid and precise diagnostics"
											src={require("../../../assets/Images/bone/diagnostics.png")}
											style={{ width: "100%" }}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<img
											style={{ width: "100%" }}
											alt="Proactive Approach"
											src={require("../../../assets/Images/bone/proactive-approach.png")}
										/>
									</Grid>
									<Grid item xs={12} md={6} className="left-container">
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Proactive Approach</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Assessing bone health becomes simpler and more accessible fostering early detection and timely
												management. Everyone can now take charge of their bone health.
											</p>
										</Stack>
									</Grid>
								</Grid>
								<Grid container spacing={3} className="reverse-column">
									<Grid item xs={12} md={6}>
										<Stack justifyContent="center" style={{ height: "100%" }}>
											<h4 className="mt-0 font-semibold">Ideal for Diverse range</h4>
											<p className="mb-0 mt-12 font-md font-regular">
												Available to everyone, from young adults aged 21 to senior citizens, making early bone health
												monitoring accessible to a broader demographic.
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
