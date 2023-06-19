import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from "../accrodion";

const AccordionWrap = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    <span className="question-tag">Q:</span>What services does
                    your IT consultancy firm provide?
                </AccordionTitle>
                <AccordionContent id="one">
                    We offer a wide range of services including
                    Software Development, API Integration, CRM implementation,
                    , SaaS solutions, Automation and Data Solutions. Our experienced team
                    is well-equipped to handle diverse IT needs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitle id="two">
                    <span className="question-tag">Q:</span>How can your services benefit my business?
                </AccordionTitle>
                <AccordionContent id="two">
                    Our services are designed to enhance your business efficiency, streamline processes, and drive growth. Whether it's automating repetitive tasks, integrating systems, developing custom software, or leveraging data insights, we help you optimize operations and achieve your business objectives.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="three">
                <AccordionTitle id="three">
                    <span className="question-tag">Q:</span>Are your solutions customizable to fit our specific requirements?
                </AccordionTitle>
                <AccordionContent id="three">
                    Absolutely! We understand that every business is unique. Our team works closely with you to understand your specific needs and tailor our solutions accordingly. We believe in delivering personalized and scalable solutions that align with your goals and requirements.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="four">
                <AccordionTitle id="four">
                    <span className="question-tag">Q:</span>What industries do you serve?
                </AccordionTitle>
                <AccordionContent id="four">
                    We serve a wide range of industries including but not limited to healthcare, finance, e-commerce, education, manufacturing, and technology. Our expertise spans across sectors, enabling us to provide effective solutions to various business domains.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="five">
                <AccordionTitle id="five">
                    <span className="question-tag">Q:</span>How experienced is your team?
                </AccordionTitle>
                <AccordionContent id="five">
                    Our team consists of highly experienced professionals with extensive knowledge and expertise in their respective fields. We have successfully completed numerous projects and have a proven track record of delivering quality solutions to our clients.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="six">
                <AccordionTitle id="six">
                    <span className="question-tag">Q:</span>How do you ensure the security of our data and information?
                </AccordionTitle>
                <AccordionContent id="six">
                    We take data security and privacy very seriously. We follow industry best practices and employ robust security measures to safeguard your data. We comply with relevant data protection regulations and maintain strict confidentiality throughout our engagement.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="seven">
                <AccordionTitle id="seven">
                    <span className="question-tag">Q:</span>What is your approach to project management and communication?
                </AccordionTitle>
                <AccordionContent id="seven">
                    We believe in open and transparent communication. Our project management approach ensures regular updates, milestone tracking, and collaboration with our clients. We keep you informed throughout the project lifecycle, allowing you to actively participate and provide feedback.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="eight">
                <AccordionTitle id="eight">
                    <span className="question-tag">Q:</span>Do you provide ongoing support and maintenance after project completion?
                </AccordionTitle>
                <AccordionContent id="eight">
                    Yes, we provide comprehensive post-project support and maintenance services. We offer various support packages to cater to your specific needs. Our team is always available to address any issues, provide updates, and ensure the smooth functioning of your systems.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="nine">
                <AccordionTitle id="nine">
                    <span className="question-tag">Q:</span>How can we get started with your services?
                </AccordionTitle>
                <AccordionContent id="nine">
                    Getting started is easy! Simply reach out to us through our contact page or give us a call. We will schedule a consultation to discuss your requirements, provide an initial assessment, and propose the most suitable solutions for your business.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="ten">
                <AccordionTitle id="ten">
                    <span className="question-tag">Q:</span>What sets your consultancy firm apart from others in the market?
                </AccordionTitle>
                <AccordionContent id="ten">
                    We differentiate ourselves through our deep industry
                    knowledge, commitment to excellence, and personalized
                    approach. Our experienced team, dedication to innovation,
                    and client-centric focus make us the ideal partner for
                    all your IT service and consultancy needs.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrap;
