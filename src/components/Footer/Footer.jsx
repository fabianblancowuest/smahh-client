import { NavLink } from "react-router-dom";
import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const navigation = {
	main: [
		{ name: "About", href: "/about" },
		{ name: "Blog", href: "#" },
		{ name: "Jobs", href: "#" },
		{ name: "Contact", href: "/contact" },
	],
	social: [
		{
			name: "Facebook",
			href: "https://www.facebook.com",
			icon: <FaFacebook />,
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com",
			icon: <FaInstagram />,
		},
		{
			name: "Twitter",
			href: "https://twitter.com",
			icon: <FaTwitter />,
		},
		{
			name: "GitHub",
			href: "https://github.com",
			icon: <FaGithub />,
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com",
			icon: <FaYoutube />,
		},
	],
};

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<nav aria-label="Footer" className="footer-nav">
					{navigation.main.map((item) => (
						<div key={item.name}>
							<NavLink to={item.href}>{item.name}</NavLink>
						</div>
					))}
				</nav>
				<div className="social-links">
					{navigation.social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i>{item.icon}</i>
							<span className="sr-only">{item.name}</span>
						</a>
					))}
				</div>
				<p className="copyright">
					&copy; 2023 Smahh. Smahh Cybersecurity Services 11A Tully Street,
					Kilbirnie 6022. All rights reserved. Website developed by Fabian
					Blanco Wuest & Luciano Ascuet (2023).
				</p>
			</div>
		</footer>
	);
}
