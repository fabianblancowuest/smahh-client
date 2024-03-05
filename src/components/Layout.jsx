import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Login from "./Login/Login";
import TicketForm from "./TicketForm/TicketForm";
import AllTickets from "./AllTickets/AllTickets";
import SignUp from "./SignUp/SIgnUp";
import Landing from "./Landing/Landing";
import Contact from "./Contact/Contact";
import Dashboard from "./Dashboard/Dashboard";
import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import ChangePassword from "./ChangePassword/ChangePassword";
import "./Layout.css";
// import Slider from "react-slick";
import Slidere from "./Slider/Slidere";

const Layout = () => {
	const userType = useSelector((state) => state.userType);

	const navigate = useNavigate();

	React.useEffect(() => {
		if (userType === "user") {
			navigate("/");
		} else if (userType === "staff") {
			navigate("/");
		}
	}, [userType]);

	return (
		<div>
			{!userType && (
				<Routes>
					<Route path="/*" element={<CommonRoutes />} />
				</Routes>
			)}

			{userType === "user" && (
				<Routes>
					<Route path="/*" element={<UserRoutes />} />
				</Routes>
			)}

			{userType === "staff" && (
				<Routes>
					<Route path="/*" element={<StaffRoutes />} />
				</Routes>
			)}
		</div>
	);
};

const CommonRoutes = () => {
	return (
		<div className="main-container">
			<Nav className="content" />
			<div className="content">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/slider" element={<Slidere />}></Route>
				</Routes>
			</div>
			<Footer className="footer" />
		</div>
	);
};

const UserRoutes = () => {
	return (
		<div className="main-container">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<Landing></Landing>} />
					<Route path="/tickets" element={<AllTickets />} />
					<Route path="/about" element={<About />} />
					<Route path="/riseticket" element={<TicketForm />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/editpassword" element={<ChangePassword />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

const StaffRoutes = () => {
	return (
		<div className="main-container">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/editpassword" element={<ChangePassword />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
