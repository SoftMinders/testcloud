import React from "react";
import classNames from "classnames";
import Image from "../../bone/elements/Image";
import FuggleImage from "assets/Images/bone/fuggle.webp";
import IshizuImage from "assets/Images/bone/ishizu.webp";
import RamirezImage from "assets/Images/bone/ramirez.webp";
import CaffarelliImage from "assets/Images/bone/caffarelli.jpg";
import SectionHeader from "../../bone/sections/partials/SectionHeader";

export const getCloudFrontUrl = (path) => `https://d1xtnuaiurb7bb.cloudfront.net/${path}`;

const pdfs = [
	{
		title: "Longitudinal changes of the femoral bone mineral density from first to third trimester of pregnancy",
		desc: "The findings highlight the importance of monitoring bone health during pregnancy, as the reduction in BMD can increase the risk of bone fragility and potentially lead to conditions such as osteopenia or osteoporosis.",
		image: RamirezImage,
		url: getCloudFrontUrl("pdfs/Ramirez-Zegarra-et-al_ACER-2024.pdf"),
	},
	{
		title: "The Advantages of Radiofrequency Echographic MultiSpectrometry",
		desc: "The findings suggest that REMS can better identify osteoporosis in OA patients, potentially improving treatment outcomes and reducing the risk of fractures...",
		image: CaffarelliImage,
		url: getCloudFrontUrl("pdfs/Caffarelli-et-al.-Osteoarthritis-at-Spine-Dagnostics-2024-3.pdf"),
	},
	{
		title:
			"Radiofrequency Echographic Multispectrometry (REMS) can Overcome the Effects of Structural Internal Artifacts and Evaluate Bone Fragility Accurately",
		desc: "The article finds that REMS consistently reports lower BMD values than DXA, especially in the lumbar spine, due to its ability to overcome internal artefacts such as vertebral deformities and abdominal aortic calcifications, which often cause DXA to overestimate BMD. The results suggest REMS offers a more accurate assessment of bone fragility, particularly in patients with conditions like diabetes or severe vertebral fractures.",
		image: IshizuImage,
		url: getCloudFrontUrl("pdfs/Ishizu-et-al_CTI-2023_online.pdf"),
	},
	{
		title:
			"Radiofrequency echographic multi spectrometry (REMS) in the diagnosis and management of osteoporosis: state of the art",
		desc: "The article shows strong correlation between REMS and DXA BMD measures, and REMS has demonstrated superior fracture prediction through its Fragility Score, offering new potential for personalised bone health monitoring and management, particularly in contexts where DXA is unavailable....",
		image: FuggleImage,
		url: getCloudFrontUrl("pdfs/Fuggle-et-al.-ESCEO-Consensus-Paper-ACER-2024pdf-2 (1).pdf"),
	},
];
class News extends React.Component {
	render() {
		return (
			<section className={classNames("news section")} style={{ paddingTop: 0 }}>
				<div className="container">
					<div className={classNames("news-inner section-inner")}>
						<SectionHeader
							className="center-content reveal-from-bottom"
							data={{
								title: "Articles",
								paragraph: "",
							}}
						/>
						<div className={classNames("tiles-wrap")}>
							{pdfs.map((p) => (
								<div key={p.title} className="tiles-item reveal-from-bottom" data-reveal-delay="400">
									<div className="tiles-item-inner has-shadow">
										<figure className="news-item-image m-0">
											<Image src={p.image} alt="News 03" width={344} height={254} />
										</figure>
										<div className="news-item-content">
											<div className="news-item-body">
												<h3 className="news-item-title h5 mt-0 mb-8">
													<a href={p.url} target="_blank" className="font-medium" rel="noreferrer">
														{p.title}
													</a>
												</h3>
												<p className="mb-16 font-legacy font-regular">{p.desc}</p>
											</div>
											<div className="news-item-more text-xs mb-8">
												<a href={p.url} target="_blank" className="font-medium" rel="noreferrer">
													Read more
												</a>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default News;
