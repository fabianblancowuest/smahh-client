import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/actions/actions";
import styles from "./ProfileMenu.module.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { RiLockPasswordLine, RiLogoutCircleLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi"; // Importa el ícono de edición

const ProfileMenu = (props) => {
	const { toggleProfile, handleLinkClick } = props;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogOut = () => {
		Swal.fire({
			title: "Are you sure you want to log out?",
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "Yes",
			denyButtonText: "No",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(logOut(true));
				navigate("/");
			}
		});
	};

	return (
		<div className={styles.dropdown}>
			<div
				className={styles.menuItem}
				onClick={() => (toggleProfile(), handleLinkClick())}
			>
				<Link className={styles.link} to="/profile">
					<FiEdit2 className={styles.icon} />
					<span>Edit Profile</span>
				</Link>
			</div>

			<div
				className={styles.menuItem}
				onClick={() => (toggleProfile(), handleLinkClick())}
			>
				<Link className={styles.link} to="profile/editpassword">
					<RiLockPasswordLine className={styles.icon} />
					<span>Change Password</span>
				</Link>
			</div>

			<div className={styles.menuItem} onClick={handleLogOut}>
				<span>
					<RiLockPasswordLine className={styles.icon} />
					<span>Log Out</span>
				</span>
			</div>
		</div>
	);
};

export default ProfileMenu;
