import React from "react";
// imagess
import img1 from "../../../assets/images/homepage/bannercontainer/category1.jpg";
import img2 from "../../../assets/images/homepage/bannercontainer/category2.jpg";
import img3 from "../../../assets/images/homepage/bannercontainer/category3.jpg";
import SingleBanner from "./SingleBanner";

const data = [
	{
		id: 1,
		position: "start",
		image: img1,
		content: "Spring Summer Collection",
	},
	{
		id: 2,
		position: "center",
		image: img2,
		content: "New Arrivals Make Up Collection",
	},
	{
		id: 3,
		position: "end",
		image: img3,
		content: "S-S Awesome Fragrance Collection",
	},
];

const SubBanner = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3">
			{data.map((item) => (
				<SingleBanner key={item.id} details={item} />
			))}
		</div>
	);
};

export default SubBanner;
