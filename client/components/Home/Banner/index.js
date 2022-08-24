import React from "react";
// slider
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// images
import img1 from "../../../assets/images/homepage/banner/slide-1.jpg";
import img2 from "../../../assets/images/homepage/banner/slide-2.jpg";
// component
import SingleItem from "./SingleItem";

const Banner = () => {
	const images = [img1, img2, img1, img2];

	return (
		<div>
			<Swiper
				loop={true}
				spaceBetween={30}
				effect={"fade"}
				navigation={true}
				pagination={false}
				keyboard={{
					enabled: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, EffectFade, Keyboard, Navigation]}
				className="mySwiper"
			>
				{images.map((item, index) => (
					<SwiperSlide key={index}>
						<SingleItem image={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
