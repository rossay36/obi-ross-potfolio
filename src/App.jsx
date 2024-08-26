import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeLayout from "./components/homeLayout/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import MissingPage from "./pages/MissingPage";
import Services from "./pages/Services";
import Education from "./pages/Education";

const App = () => {
	return (
		<div className=" bg-primary text-white">
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contacts />} />
					<Route path="/eduction" element={<Education />} />
					<Route path="*" element={<MissingPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
