import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaAtom, FaVirus, FaUser, FaBars } from "react-icons/fa"; // Importa el ícono de usuario
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import { useLocation } from "react-router-dom";
import logo from "./../../assets/images/Landing/banner-logo.png";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	const user = useSelector((state) => ({
		userId: state.userId,
		userType: state.userType,
		userName: state.userName,
		userLastName: state.userLastName,
		userPhone: state.userPhone,
		email: state.userEmail,
	}));

	const { userType } = user;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Función para que siempre se muestren las vistas desde la parte superior de cada página
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleLinkClick = () => {
		setIsMenuOpen(false);
	};

	const handleGoToPrincipalMain = () => {
		navigate("/");
		setTimeout(() => {
			const element = document.getElementById("principal-main");
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}, 100); // Espera un momento para que se renderice la página antes de hacer scroll
		handleLinkClick();
	};

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		// if (isProfileOpen) {
		// 	setIsProfileOpen(false);
		// }

		// setIsProfileOpen(true);
	};

	const toggleProfile = () => {
		setIsProfileOpen(!isProfileOpen);
	};

	return (
		<div className={styles.container}>
			<FaBars className={styles.menuToggle} onClick={handleToggleMenu} />
			<nav
				className={`${styles.navContainer} ${isMenuOpen ? styles.open : ""}`}
			>
				<div className={styles.logoContainer}>
					<img src={logo}></img>
					<span className={styles.logoText}>SMAHH</span>
				</div>
				<div className={styles.navPrincipalBtns}>
					{!userType || userType === "user" ? (
						<ul>
							<li>
								<NavLink
									to="/about"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
									onClick={handleLinkClick}
								>
									ABOUT
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
									onClick={handleLinkClick}
								>
									CONTACT
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
									onClick={handleLinkClick}
								>
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink
									to=""
									className={styles.navLink}
									onClick={handleGoToPrincipalMain}
								>
									SERVICES
								</NavLink>
							</li>
						</ul>
					) : null}
				</div>

				{!userType ? (
					<div className={styles.logs}>
						<ul className={styles.logs}>
							<li>
								<NavLink
									to="/signup"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
									onClick={handleLinkClick}
								>
									SIGNUP
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/login"
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.navLink
									}
									onClick={handleLinkClick}
								>
									LOGIN
								</NavLink>
							</li>
						</ul>
					</div>
				) : null}

				{userType === "user" ? (
					<>
						<div className={styles.logs}>
							<ul>
								<li>
									<NavLink
										to="/riseticket"
										className={({ isActive }) =>
											isActive ? styles.activeLink : styles.navLink
										}
										onClick={handleLinkClick}
									>
										RAISE TICKET
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/tickets"
										className={({ isActive }) =>
											isActive ? styles.activeLink : styles.navLink
										}
										onClick={handleLinkClick}
									>
										VIEW TICKETS
									</NavLink>
								</li>
							</ul>
						</div>
					</>
				) : null}

				{userType === "staff" ? (
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? styles.activeLink : styles.navLink
								}
								onClick={handleLinkClick}
							>
								DASHBOARD
							</NavLink>
						</li>
					</ul>
				) : null}

				{userType === "user" || userType === "staff" ? (
					<div onClick={toggleProfile} className={styles.userLink}>
						<span>
							<FaUser className={styles.userIcon} />
							{user.userName} {user.userLastName}
						</span>
					</div>
				) : null}

				<div>
					{isProfileOpen && (
						<ProfileMenu
							toggleProfile={toggleProfile}
							handleLinkClick={handleLinkClick}
						/>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
