import React from "react";
import Footer from "../navbar/footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<div className="flex-grow min-h-[75vh] ">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default HomeLayout;
