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
					title: "Transform Your Health Journey: Experience DNA Testing ",
					paragraph:
						"Step into the future with DNA testing. Regularly monitor your health with a bespoke approach tailored to your genetic blueprint, age, and unique needs. Unlock a deeper understanding of your health potential today.",
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
					<source src={require("../../../assets/videos/dna-video-2.mp4")} type="video/mp4" />
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
				video={require("../../../assets/videos/dna-video-2.mp4")}
				videoTag="iframe"
			/>
		</div>
	);
};

export default SecondHeroSection;
