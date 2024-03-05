import React, { useState, useEffect } from "react";
import styles from "./Carrousel.module.css";
import img3 from "./../../../assets/images/About/security-team-1.jpg";
import img1 from "./../../../assets/images/About/security-team-1.webp";
import img2 from "./../../../assets/images/About/security-team-3.webp";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slides = [
		{
			text: "Explore our comprehensive range of cybersecurity solutions, including in-depth tutorials on creating robust passwords and setting up multi-factor authentication.",
			imageUrl: img1,
		},
		{
			text: "We offer step-by-step guides for implementing strong passwords and multi-factor authentication, strategies for detecting and mitigating phishing attacks, advice on securing your home network, and much more.",
			imageUrl: img2,
		},
		{
			text: "Thank you for joining us on this journey to establish a safer digital world. By working together and sharing knowledge, we can build a resilient online community that stands strong against cyber threats.",
			imageUrl: img3,
		},
	];

	useEffect(() => {
		const carouselInterval = setInterval(nextSlide, 7000); // Cambiar cada 6 segundos
		return () => clearInterval(carouselInterval);
	}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	return (
		<div className={styles.carrousel}>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`${styles.slide} ${
						index === currentIndex ? styles.active : ""
					}`}
				>
					<img
						src={slide.imageUrl}
						alt={`Slide ${index + 1}`}
						className={styles.carrouselImg}
					/>
					<p className={styles.carrouselParagraph}>{slide.text}</p>
				</div>
			))}
		</div>
	);
};

export default Carousel;
