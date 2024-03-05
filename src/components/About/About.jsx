import React from "react";
import styles from "./About.module.css";
import about from "./../../assets/images/About/banner-bg-2.jpg";
import imgAbout from "./../../assets/images/About/about-img.jpg";
import Carousel from "./Carrousel/Carrousel";
import contactImg from "../../assets/images/About/solution-img.png";
// import Contact from "./../Contact/Contact";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className={styles.container}>
			<section className={styles.sectionContainer}>
				{/* <h2 className={styles.title}>About Our Cybersecurity Initiative</h2> */}
				<div className={styles.box1}>
					<img className={styles.aboutImg} src={about}></img>
					<p className={styles.description}>
						Welcome to our comprehensive Cybersecurity Initiative, where your
						digital safety is our top priority. In today's interconnected world,
						where every aspect of our lives relies on technology, the need for
						robust cybersecurity measures has never been more critical. Our
						mission is to equip you with the knowledge, tools, and strategies to
						navigate the complex landscape of cyber threats and ensure your
						online presence remains secure.
					</p>
				</div>
			</section>
			<section className={styles.sectionContainer}>
				{/* <h2 className={styles.title}>About Our Cybersecurity Initiative</h2> */}
				<div className={styles.box2}>
					<img src={imgAbout}></img>
					<p className={styles.description}>
						With the rapid advancement of technology, the digital realm offers
						unprecedented convenience and opportunities, but it also exposes us
						to a myriad of risks. From identity theft and financial fraud to
						data breaches and ransomware attacks, the range of cyber threats is
						vast and constantly evolving. Our Cybersecurity Initiative aims to
						demystify these threats, empower you with actionable insights, and
						foster a culture of digital vigilance.
					</p>
				</div>
			</section>
			<section className={styles.sectionContainer}>
				<Carousel></Carousel>
			</section>
			<section className={styles.sectionContainer}>
				<div className={styles.contactImg}>
					<img src={contactImg}></img>
					<Link to="/contact" className={styles.contactLink}>
						Contact Us
					</Link>
					<p className={styles.contactParagraph}>
						...And Start now your Fortified Digital Defense
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
