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
					title: "Comfort in Every Detail",
					paragraph:
						"Step into a new era of healthcare where your comfort meets precision. Embrace the perfect balance of relaxation and detailed diagnostics on your journey to optimal well-being.",
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
					<source src={require("../../../assets/videos/mri-comfort-detail-video.mp4")} type="video/mp4" />
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
				video={require("../../../assets/videos/mri-comfort-detail-video.mp4")}
				videoTag="iframe"
			/>
		</div>
	);
};

export default SecondHeroSection;
