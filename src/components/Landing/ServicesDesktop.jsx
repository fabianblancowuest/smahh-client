import malwareRemoval from "../../assets/images/services/malware-removal.jpg";
import cloudSecurity from "../../assets/images/services/cloud-security.jpg";
import securityNews from "../../assets/images/services/security-news.jpg";
import darkweb from "./../../assets/images/Landing/darkweb.jpg";
import securityAudit from "../../assets/images/services/audit.jpg";
import vulnerability from "./../../assets/images/services/vulnerabilty_testing.jpg";
import ransom from "./../../assets/images/services/ramsomware.png";
import secu_audit from "./../../assets/images/services/secu_audit.jpg";
import secu_center from "./../../assets/images/services/secu_center.png";
import response from "./../../assets/images/services/response.jpg";
import penetration_testing from "./../../assets/images/services/penetration-testing.png";
import consulting from "./../../assets/images/services/consulting.jpg";
import education from "./../../assets/images/services/education.jpg";
// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./Landing.css";

const ServicesDesktop = () => {
	return (
		<Swiper
			// modules
			modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
			// effect="fade"
			grabCursor={true}
			spaceBetween={0}
			slidesPerView={3}
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			// effect="fade"
			// direction="vertical"
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<div className="home-card">
					<a href="#cyber-security-consulting">
						<h2 className="home-cardTitle">Cyber Security Consulting</h2>
						<p className="home-cardText">
							Expert guidance and strategies to fortify your digital defenses
							against evolving cyber threats.
						</p>
						<img className="home-img" src={consulting}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#compilance-security-program">
						<h2 className="home-cardTitle">Compilance Security Program</h2>
						<p className="home-cardText">
							A comprehensive framework ensuring your organization meets and
							exceeds industry-specific compliance standards
						</p>
						<img className="home-img" src={malwareRemoval}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#cloud-access-security-broker">
						<h2 className="home-cardTitle">Cloud Access Security Broker</h2>
						<p className="home-cardText">
							Empowering your organization with control and visibility over
							cloud environments.
							<img className="home-img" src={cloudSecurity}></img>
						</p>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#digital-forensics-dark-web">
						<h2 className="home-cardTitle">Digital Forensics & Dark Web</h2>
						<p className="home-cardText">
							Our experts employ cutting-edge techniques to analyze digital
							artifacts, reconstruct events, and monitor illicit activities on
							the Dark Web.
						</p>
						<img className="home-img" src={darkweb}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#cyber-awareness-education">
						<h2 className="home-cardTitle">Cyber Awareness Education</h2>
						<p className="home-cardText">
							Empower individuals and organizations with essential knowledge to
							navigate the digital world securely.
						</p>
						<img className="home-img" src={education}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#data-loss-prevention">
						<h2 className="home-cardTitle">Data Loss Prevention</h2>
						<p className="home-cardText">
							A security solution that identifies and helps prevent unsafe or
							inappropriate sharing, transfer, or use of sensitive data.
						</p>
						<img className="home-img" src={securityAudit}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#incident-response-ransom-payment">
						<h2 className="home-cardTitle reduce-size-text">
							Incident Response & Ransom Payment
						</h2>
						<p className="home-cardText">
							A clear roadmap for navigating high-stakes cyber incidents. Our
							experts guide you through incident response and provide strategic
							advice.
						</p>
						<img className="home-img" src={ransom}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#managed-security-services">
						<h2 className="home-cardTitle">Managed Security Services</h2>
						<p className="home-cardText">
							Comprehensive 24/7 monitoring, threat detection, and incident
							response to safeguard your digital assets.
						</p>
						<img className="home-img" src={securityNews}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#managed-detection-response">
						<h2 className="home-cardTitle">
							Managed Detection & Response (MDR)
						</h2>
						<p className="home-cardText">
							Proactive defense with continuous monitoring, threat hunting, and
							rapid incident response.
						</p>
						<img className="home-img" src={response}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#penetration-testing">
						<h2 className="home-cardTitle">Penetration Testing</h2>
						<p className="home-cardText">
							Rigorous testing to uncover vulnerabilities in systems,
							applications, and networks. Our ethical hackers simulate
							real-world cyberattacks.
						</p>
						<img className="home-img" src={penetration_testing}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#security-assessment-audit">
						<h2 className="home-cardTitle">Security Assessment & Audit</h2>
						<p className="home-cardText">
							Meticulous examination of your security infrastructure,
							identifying potential weaknesses and areas for improvement.
						</p>
						<img className="home-img" src={secu_audit}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#security-operation-center">
						<h2 className="home-cardTitle">Security Operation Center (SOC)</h2>
						<p className="home-cardText">
							Continuous monitoring, incident response, and vigilant threat
							hunting to safeguard your digital assets
						</p>
						<img className="home-img" src={secu_center}></img>
					</a>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="home-card">
					<a href="#vulnerability-testing">
						<h2 className="home-cardTitle">Vulnerability Testing</h2>
						<p className="home-cardText">
							Thorough evaluation of your digital infrastructure to identify
							potential weaknesses. Our testing uncovers points of entry for
							cyber threats.
						</p>
						<img className="home-img" src={vulnerability}></img>
					</a>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default ServicesDesktop;
