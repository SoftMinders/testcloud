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
						<AccordionItem title="What is DNA testing and how does it work?">
							DNA testing analyses over 300 genetic markers to provide insights into your health, nutrition, fitness,
							and potential disease risks. By collecting a small saliva sample, we examine your genetic code to uncover
							personal traits, health predispositions, and other critical insights.
						</AccordionItem>
						<AccordionItem title="How is DNA testing different from other health assessments?">
							DNA testing is a non-invasive, advanced solution that goes beyond traditional health assessments by
							providing insights tailored specifically to your genetic makeup. Unlike blood tests or scans, DNA testing
							examines your unique genetic code, giving a more personalised and comprehensive view of your health.
						</AccordionItem>
						<AccordionItem title="What areas of my health will the test cover?">
							The test covers a wide range of health areas including cardiac risk, hormone balance, skin health,
							fatigue, ageing, neuro health, lung and kidney health, sensitivities, and more. You’ll also receive
							insights into psychological traits and stress management.
						</AccordionItem>
						<AccordionItem title="Who can benefit from DNA testing?">
							Anyone can benefit from DNA testing, whether you’re looking to optimise your diet, enhance your fitness,
							manage health risks, or simply get a better understanding of your body. It’s designed for individuals of
							all ages, from young adults to seniors.
						</AccordionItem>
						<AccordionItem title="How long does it take to get my DNA results?">
							Your DNA test results will typically be available within 4 weeks. For epigenetic testing, which estimates
							your biological age, results may take up to 8 weeks. We’ll keep you updated on the progress throughout the
							process.
						</AccordionItem>
						<AccordionItem title="How can I use my DNA test results to improve my health?">
							Your DNA test results will offer actionable recommendations to optimise your diet, fitness routine, and
							lifestyle. You can use this information to tailor your habits and make informed decisions that align with
							your genetic strengths and needs, improving your overall well-being.
						</AccordionItem>
						<AccordionItem title="Is my data secure?">
							Yes, we prioritise your privacy. Your genetic data is encrypted and securely stored, and we will never
							share your information without your explicit consent.
						</AccordionItem>
						<AccordionItem title="Can DNA testing help with weight management?">
							Yes, DNA testing can reveal how your body responds to certain foods and exercises, helping you understand
							your metabolism and tailor your diet and fitness regimen for better weight management and health outcomes.
						</AccordionItem>
						<AccordionItem title="What if I have food intolerances or sensitivities?">
							Our DNA test will identify genetic predispositions to intolerances such as gluten, dairy, and fructose.
							This allows you to adjust your diet and avoid foods that may trigger adverse reactions, improving your
							digestive health.
						</AccordionItem>
						<AccordionItem title="How do I collect my DNA sample?">
							Collecting your sample is simple. After registering your account, you’ll receive a kit with detailed
							instructions. You’ll provide a small saliva sample, scan the QR code to link it to your account, and mail
							it back to us in the prepaid envelope provided.
						</AccordionItem>
						<AccordionItem title="What is biological age and how is it determined?">
							Biological age reflects the true health of your body, which may be younger or older than your actual
							(chronological) age. By analysing specific epigenetic markers, our test can estimate your biological age,
							offering a more accurate picture of your internal ageing process.
						</AccordionItem>
						<AccordionItem title="What is included in the DNA12 monthly health assessment?">
							DNA12 offers a monthly, personalised health assessment that tracks key areas such as cardiac health,
							fatigue, hormones, organ function, neuro health, and more. This ongoing assessment helps you monitor and
							improve your health based on your unique genetic profile.
						</AccordionItem>
						<AccordionItem title="How do I interpret my DNA test results?">
							Your results will come with clear explanations and actionable steps. You’ll receive personalised reports
							on your health, diet, fitness, vitamins, and more, including a detailed action plan and guidance to
							improve specific areas of your health.
						</AccordionItem>
						<AccordionItem title="How do I get started?">
							Getting started is easy. Visit our website to register your account, follow the instructions to submit
							your saliva sample, and we’ll take care of the rest. Once your results are ready, you’ll be notified and
							can review them online.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
