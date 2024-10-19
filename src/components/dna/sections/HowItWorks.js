import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Tile01 from "../../../assets/Images/dna/website.png";
import Tile02 from "../../../assets/Images/dna/tell-us.png";
import Tile03 from "../../../assets/Images/dna/qr.png";
import Tile04 from "../../../assets/Images/dna/sample-tube.png";
import Tile05 from "../../../assets/Images/dna/envelope.png";
import Tile06 from "../../../assets/Images/dna/dna.png";
import Image from "../elements/Image";

class HowItWorks extends React.Component {
	render() {
		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			pushLeft,
			...props
		} = this.props;

		const outerClasses = classNames(
			"features-tiles section",
			topOuterDivider && "has-top-divider",
			bottomOuterDivider && "has-bottom-divider",
			hasBgColor && "has-bg-color",
			invertColor && "invert-color",
			className,
		);

		const innerClasses = classNames(
			"features-tiles-inner section-inner",
			topDivider && "has-top-divider",
			bottomDivider && "has-bottom-divider",
		);

		const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

		const sectionHeader = {
			title: "How It Works",
			paragraph: "Follow these simple steps to get started.",
		};

		return (
			<section {...props} className={outerClasses}>
				<div className="container">
					<div className={innerClasses}>
						<SectionHeader data={sectionHeader} className="center-content" />
						<div className={tilesClasses}>
							<FeatureTile
								imageSrc={Tile01}
								altText="Website icon"
								title="1. The Website"
								description="Open our fully-featured website from any search engine."
								highlight="Register And Sign In"
								revealDelay={200}
							/>
							<FeatureTile
								imageSrc={Tile02}
								altText="User icon"
								title="2. Tell Us About Yourself"
								description="We just need to take a few details from you."
								highlight="Make Sure To Follow The Next Step"
								revealDelay={200}
							/>
							<FeatureTile
								imageSrc={Tile03}
								altText="QR code icon"
								title="3. Find The QR Code On The Tube"
								description="The app will open a barcode scanner for you to scan the tube."
								highlight="Scan The QR Code Into The App"
								revealDelay={200}
							/>
							<FeatureTile
								imageSrc={Tile04}
								altText="Sample tube icon"
								title="4. Prepare The Sample Tube"
								description="Unscrew the lid and attach the saliva funnel."
								highlight="Fill To 4ml With Saliva"
								revealDelay={200}
							/>
							<FeatureTile
								imageSrc={Tile05}
								altText="Envelope icon"
								title="5. Locate The Return Envelope"
								description="Put the test tube into it and seal it well."
								highlight="Pop It In The Post Box*"
								revealDelay={200}
							/>
							<FeatureTile
								imageSrc={Tile06}
								altText="Waiting icon"
								title="6. Sit Tight"
								description="Your DNA results can take up to 4 weeks to be processed."
								highlight="We Will Keep You Informed"
								revealDelay={200}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const FeatureTile = ({ imageSrc, altText, title, description, highlight, revealDelay }) => (
	<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay={revealDelay}>
		<div className="tiles-item-inner">
			<div className="features-tiles-item-header">
				<div className="features-tiles-item-image mb-16" style={{ padding: 10 }}>
					<Image src={imageSrc} alt={altText} width={48} height={48} />
				</div>
			</div>
			<div className="features-tiles-item-content">
				<p className="font-lg mt-0 mb-8 font-semibold">{title}</p>
				<p className="m-0 font-md">
					{description}
					{highlight && <p className="font-medium font-md">{highlight}</p>}
				</p>
			</div>
		</div>
	</div>
);

export default HowItWorks;
