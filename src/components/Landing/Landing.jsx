import logobanner from "./../../assets/images/Landing/banner-logo.png";
import sectionsData from "./sectionsData";
import ServicesMobile from "./ServicesMobile";
import ServicesDesktop from "./ServicesDesktop";
import "./Landing.css";

const Landing = () => {
	const isMobile = window.innerWidth <= 768;
	return (
		<div className="home-container">
			<section className="home-mainHeader">
				<img src={logobanner}></img>
				<span className="home-description">World Class Cyber Security</span>
				<h1 className="home-title">Real-Time Monitoring Your Infrastructure</h1>
				<p className="home-description">
					Cyber security is the protection from the theft to protect of our
					computer systems and networks or being damaged of our hardware and
					software.
				</p>
			</section>
			<article id="principal-main" className="home-principalMain">
				<div className="home-cards">
					{isMobile ? <ServicesMobile /> : <ServicesDesktop />}
				</div>
			</article>
			<main className="home-landingMain">
				{sectionsData.map((section, index) => (
					<section key={index} className="home-sectionService" id={section.id}>
						<h2 className="home-section-title">{section.title}</h2>
						<img src={section.image} alt={section.alt} />
						<p>{section.description}</p>
					</section>
				))}
			</main>
		</div>
	);
};

export default Landing;
