import React from "react";
import malwareRemoval from "../../assets/images/services/malware-removal.jpg";
import cloudSecurity from "../../assets/images/services/cloud-security.jpg";
import securityNews from "../../assets/images/services/security-news.jpg";
import darkweb from "../../assets/images/Landing/darkweb.jpg";
import securityAudit from "../../assets/images/services/audit.jpg";
import vulnerability from "../../assets/images/services/vulnerabilty_testing.jpg";
import ransom from "../../assets/images/services/ramsomware.png";
import secu_audit from "../../assets/images/services/secu_audit.jpg";
import secu_center from "../../assets/images/services/secu_center.png";
import response from "../../assets/images/services/response.jpg";
import penetration_testing from "../../assets/images/services/penetration-testing.png";
import consulting from "../../assets/images/services/consulting.jpg";
import education from "../../assets/images/services/education.jpg";
import "./Landing.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const services = [
	{
		title: "Cyber Security Consulting",
		text: "Expert guidance and strategies to fortify your digital defenses against evolving cyber threats.",
		img: consulting,
		link: "#cyber-security-consulting",
	},
	{
		title: "Compilance Security Program",
		text: "A comprehensive framework ensuring your organization meets and exceeds industry-specific compliance standards",
		img: malwareRemoval,
		link: "#compilance-security-program",
	},
	{
		title: "Cloud Access Security Broker",
		text: "Empowering your organization with control and visibility over cloud environments.",
		img: cloudSecurity,
		link: "#cloud-access-security-broker",
	},
	{
		title: "Digital Forensics & Dark Web",
		text: "Our experts employ cutting-edge techniques to analyze digital artifacts, reconstruct events, and monitor illicit activities on the Dark Web.",
		img: darkweb,
		link: "#digital-forensics-dark-web",
	},
	{
		title: "Cyber Awareness Education",
		text: "Empower individuals and organizations with essential knowledge to navigate the digital world securely.",
		img: education,
		link: "#cyber-awareness-education",
	},
	{
		title: "Data Loss Prevention",
		text: "A security solution that identifies and helps prevent unsafe or inappropriate sharing, transfer, or use of sensitive data.",
		img: securityAudit,
		link: "#data-loss-prevention",
	},
	{
		title: "Incident Response & Ransom Payment",
		text: "A clear roadmap for navigating high-stakes cyber incidents. Our experts guide you through incident response and provide strategic advice.",
		img: ransom,
		link: "#incident-response-ransom-payment",
	},
	{
		title: "Managed Security Services",
		text: "Comprehensive 24/7 monitoring, threat detection, and incident response to safeguard your digital assets.",
		img: securityNews,
		link: "#managed-security-services",
	},
	{
		title: "Managed Detection & Response (MDR)",
		text: "Proactive defense with continuous monitoring, threat hunting, and rapid incident response.",
		img: response,
		link: "#managed-detection-response",
	},
	{
		title: "Penetration Testing",
		text: "Rigorous testing to uncover vulnerabilities in systems, applications, and networks. Our ethical hackers simulate real-world cyberattacks.",
		img: penetration_testing,
		link: "#penetration-testing",
	},
	{
		title: "Security Assessment & Audit",
		text: "Meticulous examination of your security infrastructure, identifying potential weaknesses and areas for improvement.",
		img: secu_audit,
		link: "#security-assessment-audit",
	},
	{
		title: "Security Operation Center (SOC)",
		text: "Continuous monitoring, incident response, and vigilant threat hunting to safeguard your digital assets.",
		img: secu_center,
		link: "#security-operation-center",
	},
	{
		title: "Vulnerability Testing",
		text: "Thorough evaluation of your digital infrastructure to identify potential weaknesses. Our testing uncovers points of entry for cyber threats.",
		img: vulnerability,
		link: "#vulnerability-testing",
	},
];

const ServicesDesktop = () => {
	const slides = [];
	for (let i = 0; i < services.length; i += 3) {
		slides.push(services.slice(i, i + 3));
	}

	return (
		<Swiper
			id="servicesCarousel"
			className="carousel carousel-dark slide"
			data-bs-ride="carousel"
			spaceBetween={50}
			slidesPerView={3}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<div>
				{slides.map((group, index) => (
					<div
						className={`carousel-item ${index === 0 ? "active" : ""}`}
						key={index}
					>
						<div className="acostado">
							{group.map((service, serviceIndex) => (
								<div className="col-md-4" key={serviceIndex}>
									<div className="home-card">
										<a href={service.link}>
											<h2 className="home-cardTitle">{service.title}</h2>
											<p className="home-cardText">{service.text}</p>
											<img
												className="home-img"
												src={service.img}
												alt={service.title}
											/>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev custom-prev"
				type="button"
				data-bs-target="#servicesCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next custom-next"
				type="button"
				data-bs-target="#servicesCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</Swiper>
	);
};

export default ServicesDesktop;
