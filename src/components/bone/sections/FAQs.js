import React from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

const FAQs = () => {
	return (
		<section className={classNames("features-tabs section center-content")} style={{ paddingTop: 0 }}>
			<div className="container">
				<div className={classNames("features-tabs-inner section-inner")}>
					<SectionHeader data={{ title: "Frequently Asked Questions" }} className="center-content" />
					<Accordion>
						<AccordionItem title="What is a R.E.M.S. echolight scan?">
							A R.E.M.S. (Radiofrequency Echographic Multi-Spectrometry) echolight scan is a cutting-edge, non-invasive
							bone density test that uses ultrasound technology to assess the strength and density of your bones without
							exposing you to radiation. It provides accurate and detailed insights into your bone health, particularly
							in areas like the lumbar vertebrae and femoral neck.
						</AccordionItem>
						<AccordionItem title="Is R.E.M.S. better than DEXA for bone density testing?">
							Yes, R.E.M.S. offers several advantages over DEXA (Dual-Energy X-ray Absorptiometry). It is
							radiation-free, making it safer for repeated use, and it provides highly accurate bone density
							measurements. Additionally, R.E.M.S. can be more comfortable for patients, as it does not require the same
							level of positioning and exposure as DEXA.
						</AccordionItem>
						<AccordionItem title="What is the cost of a R.E.M.S. scan?">
							The cost for a R.E.M.S. scan is £159. If you require a detailed report analysis, it is an additional £60.
							For a package that includes both the scan and the report analysis, the total cost is £199.
						</AccordionItem>
						<AccordionItem title="How long does a R.E.M.S. echolight scan take?">
							A R.E.M.S. echolight scan typically takes about 15-20 minutes to complete. This makes it a quick and
							efficient option for assessing bone density.
						</AccordionItem>
						<AccordionItem title="Can a R.E.M.S. scan be used for ongoing monitoring of bone health?">
							Yes, the R.E.M.S. scan is ideal for regular monitoring due to its accuracy and radiation-free technology,
							making it safe for frequent assessments.
						</AccordionItem>
						<AccordionItem title="Who is recommended to get a R.E.M.S. scan?">
							The R.E.M.S. scan is recommended for individuals of all ages who want to assess or monitor their bone
							health, especially those with risk factors for osteoporosis or a history of fractures.
						</AccordionItem>
						<AccordionItem title="What can I expect during my first echolight scan appointment?">
							During your first R.E.M.S. echolight scan appointment, you will be asked to lie down comfortably while the
							ultrasound device is applied to specific areas, such as the lumbar spine. The procedure is painless and
							non-invasive, and the results are available almost immediately. After the scan, your specialist will
							discuss the findings with you, if needed.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
