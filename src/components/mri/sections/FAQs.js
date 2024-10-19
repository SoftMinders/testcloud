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
						<AccordionItem title="What is an open MRI?">
							An open MRI scanner is designed differently from a traditional scanner. It is better suited for people
							with claustrophobia or anxiety. Instead of lying on a flat bed and entering a traditional tunnel-shaped
							scanner, an open MRI allows you to see the whole room around you more clearly and focuses on one body part
							rather than the whole body.
						</AccordionItem>
						<AccordionItem title="Can I wear makeup?">
							Please try to avoid makeup or mascara because some of these materials can create artifacts and interfere
							with the scan images.
						</AccordionItem>
						<AccordionItem title="Can I wear my wedding ring?">
							Prior to entering the MRI scanning room, you will be asked to remove all metallic objects, including
							hearing aids, dentures, body piercings, and medical patches. This includes your sentimental jewelry.
						</AccordionItem>
						<AccordionItem title="Is an MRI scan safe?">
							Yes, MRI scanning is a painless, safe, and non-invasive medical imaging technique. However, not everyone
							is a suitable candidate for an MRI, e.g., people with implants or pacemakers.
						</AccordionItem>
						<AccordionItem title="My pacemaker is 'MRI safe,' so can I still have an MRI?">
							No, we do not accept patients with pacemakers or implantable devices. Some pacemakers are MRI safe, but
							they still must be electronically disabled by a cardiologist, which we do not have available here at our
							clinic.
						</AccordionItem>
						<AccordionItem title="Can I have an MRI scan if I am in a wheelchair or have mobility issues?">
							If you have some mobility and can stand or move with support, we&apos;re here to assist you during your
							MRI. While wheelchairs can&apos;t enter the scan area due to safety reasons, our team is ready to help you
							get on and off the bed comfortably. We do ask that you&apos;re able to assist to some extent for a
							smoother experience.
						</AccordionItem>
						<AccordionItem title="How long does a scan take?">
							An MRI scan usually takes between 30 to 40 minutes, but the actual duration of the scan varies depending
							on the size of the area being scanned and the number of images that need to be taken.
						</AccordionItem>
						<AccordionItem title="Is an MRI scan noisy?">
							Yes, MRI scanners produce loud tapping sounds due to the magnetic fields cycling on and off to capture
							images. To make the experience more comfortable, we provide earplugs or headphones, and you may have the
							option to listen to music during the scan. This helps to minimize the noise and makes the procedure more
							relaxing.
						</AccordionItem>
						<AccordionItem title="Is an MRI scan comfortable?">
							Yes, our MRI scanner is designed with your comfort in mind. We provide pads, cushions, and supports to
							ensure you remain comfortable throughout the procedure. Being comfortable is key, as it helps you stay
							still during the scan, which is important for capturing clear images.
						</AccordionItem>
						<AccordionItem title="When will I receive my MRI Scan results?">
							Our Consultant Radiologist will carefully analyze your scan and prepare a detailed report. We strive to
							deliver your results, both to you and your GP or referrer, via email within three working days.
						</AccordionItem>
						<AccordionItem title="What happens after the scan?">
							After your MRI scan, you can immediately return to your normal activities, as there are no side effects. A
							Consultant will thoroughly review your scan images and prepare a detailed report, which will be sent to
							your referrer. If there’s anything that requires urgent attention, you’ll be contacted right away.
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
