import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdCastForEducation, MdContactPhone, MdHome } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GrBlog, GrProjects, GrServices } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Handle link click and scroll to top
	const handleLinkClick = () => {
		setToggle((prev) => !prev);
		scrollToTop();
	};
	return (
		<nav className="nav_full_screen">
			<div className=" flex items-center gap-4 cursor-pointer">
				<img
					className="w-12 h-12 rounded-full object-cover"
					src="/images/obi.png"
					alt="Profile Photo"
				/>
				<p className="">Obi Ross</p>
			</div>
			<ul className={toggle ? "nav_big_screen active" : "nav_big_screen"}>
				<Link
					to="/"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<MdHome className="nav_icons" />
					<span>Home</span>
				</Link>
				<Link
					to="services"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<GrServices className="nav_icons" />
					<span>Services</span>
				</Link>
				<Link
					to="about"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<IoPersonOutline className="nav_icons" />
					<span>About</span>
				</Link>
				<Link
					to="projects"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<GrProjects className="nav_icons" />
					<span>Projects</span>
				</Link>
				<Link
					to="skills"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<BsPersonWorkspace className="nav_icons" />
					<span>Skills</span>
				</Link>
				<Link
					to="blog"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<GrBlog className="nav_icons" />
					<span>Blog</span>
				</Link>
				<Link
					to="contact"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<MdContactPhone className="nav_icons" />
					<span>Contact</span>
				</Link>
				<Link
					to="eduction"
					className=" flex items-center gap-4"
					onClick={handleLinkClick}
				>
					<MdCastForEducation className="nav_icons" />
					<span>Eduction / CV</span>
				</Link>
			</ul>
			<div className="nav_toggle_btn" onClick={handleToggle}>
				{toggle ? <FaTimes /> : <GiHamburgerMenu />}
			</div>
		</nav>
	);
};

export default Navbar;
