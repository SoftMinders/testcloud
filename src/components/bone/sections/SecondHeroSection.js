import React, { useState } from "react";
import SectionHeader from "./partials/SectionHeader";
import { Button } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import Modal from "../elements/Modal";

const SecondHeroSection = () => {
	const [openVideoModal, setOpenVideoModal] = useState(false);

	return (
		<div style={{ paddingTop: 100, paddingBottom: 50, background: "white" }}>
			<SectionHeader
				className="center-content"
				data={{
					title: "Revolutionize Your Bone Health: Get a Radiation-Free REMS Scan in London",
					paragraph:
						"Unlock the future of bone density analysis with REMS technology for accurate, radiation-free insights. Monitor your bone health regularly with a personalised approach designed to suit your age and unique needs.",
				}}
			/>
			<div className="second-hero">
				<video
					width="100%"
					height="100%"
					className="nectar-video-self-hosted"
					preload="auto"
					loop
					autoPlay
					muted
					controls={false}
					playsInline
				>
					<source src={require("../../../assets/videos/echolight.mp4")} type="video/mp4" />
				</video>
				<div className="play-button-section">
					<Button type="text" onClick={() => setOpenVideoModal(true)}>
						<PlayCircleFilled style={{ fontSize: 128, color: "white" }} />{" "}
					</Button>
				</div>
			</div>
			<Modal
				id="video-modal"
				show={openVideoModal}
				handleClose={() => setOpenVideoModal(false)}
				video={require("../../../assets/videos/echolight.mp4")}
				videoTag="iframe"
			/>
		</div>
	);
};

export default SecondHeroSection;
