import React from "react";
import img1 from "../../../assets/images/homepage/feature/icon1.png";
import img2 from "../../../assets/images/homepage/feature/icon2.png";
import img3 from "../../../assets/images/homepage/feature/icon3.png";
import img4 from "../../../assets/images/homepage/feature/icon4.png";
import Treatment from "./Treatment";

const data = [
	{
		id: 1,
		image: img1,
		content1: "Hardware",
		content2: "cosmetology",
	},
	{
		id: 2,
		image: img2,
		content1: "Aesthetic",
		content2: "cosmetology",
	},
	{
		id: 3,
		image: img3,
		content1: "Injection",
		content2: "cosmetology ",
	},
	{
		id: 4,
		image: img4,
		content1: "Laser",
		content2: "cosmetology",
	},
];

const Treatments = () => {
	return (
		<div className="m-8">
			<h2 className="text-center font-medium text-4xl">Special Treatments</h2>
			<p className="text-center m-2">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{data.map((item) => (
					<Treatment key={item.id} details={item} />
				))}
			</div>
		</div>
	);
};

export default Treatments;
