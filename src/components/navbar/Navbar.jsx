import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { MdContactPhone, MdHome } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { GrBlog, GrProjects } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Handle link click and scroll to top
	const handleLinkClick = () => {
		setToggle(false);
		scrollToTop();
	};
	return (
		<nav
			className={
				toggle
					? "small_media"
					: "max-w-full bg-secondary font-bold text-black border min-h-[70.5px] flex items-center p-2 justify-around border-red-200 sticky top-0 left-0 right-0 z-10 "
			}
		>
			<div className=" flex items-center gap-4 cursor-pointer">
				<img
					className="w-11 h-11 rounded-full"
					src="/images/john1.png"
					alt="Profile Photo"
				/>
				<p className="">Obi Ross</p>
			</div>
			<ul className={toggle ? "nav_small_media" : "nav_big_screen"}>
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
					<IoPersonOutline className="nav_icons" />
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
			</ul>
			<div className="nav_toggle_btn" onClick={handleToggle}>
				{toggle ? <FaTimes /> : <GiHamburgerMenu />}
			</div>
		</nav>
	);
};

export default Navbar;
