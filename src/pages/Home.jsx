import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles

// Import Swiper modules (optional based on your needs)
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import your slice components
import SliceComponentOne from "../components/sliceComponents/SliceComponentOne";
import SliceComponentTwo from "../components/sliceComponents/SliceComponentTwo";
import SliceComponentThree from "../components/sliceComponents/SliceComponentThree";
import About from "./About";
import Blog from "./Blog";
import Services from "./Services";
import Contacts from "./Contacts";
import Skills from "./Skills";
import useTitle from "../hooks/useTitle";

const Home = () => {
	useTitle(
		"Home page",
		"https://th.bing.com/th/id/R.ba9bbc88be4c58a273889a17f7a94f00?rik=atehCeB3o639ew&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f14%2fGolden-Badge-Transparent-PNG.png&ehk=%2bHYV23vObrT9WFFHg1q4XY0a4uE4hI0OKIIi6sv%2b7L8%3d&risl=&pid=ImgRaw&r=0"
	);

	return (
		<div>
			<>
				<Swiper
					modules={[Pagination, Navigation, Autoplay]} // Register Swiper modules if needed
					spaceBetween={10} // Space between slides
					centeredSlides={true}
					autoplay={{
						delay: 5000, // Delay between slides in autoplay
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					speed={1000} // Duration of the slide transition in milliseconds
					className="height" // Adjust class name as needed
				>
					<SwiperSlide>
						<SliceComponentOne />
					</SwiperSlide>
					<SwiperSlide>
						<SliceComponentTwo />
					</SwiperSlide>
					<SwiperSlide>
						<SliceComponentThree />
					</SwiperSlide>
				</Swiper>
			</>
			<About />
			<Services />
			<Skills />
			<Contacts />
			<Blog />
		</div>
	);
};

export default Home;
