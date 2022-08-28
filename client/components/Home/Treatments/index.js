import React from "react";
import bg4 from "../../../assets/images/background/treatments//treatment4.jpg";
import bg1 from "../../../assets/images/background/treatments/treatment1.png";
import bg2 from "../../../assets/images/background/treatments/treatment2.jpg";
import bg3 from "../../../assets/images/background/treatments/treatment3.jpg";
import img1 from "../../../assets/images/homepage/treatments/icon1.png";
import img2 from "../../../assets/images/homepage/treatments/icon2.png";
import img3 from "../../../assets/images/homepage/treatments/icon3.png";
import img4 from "../../../assets/images/homepage/treatments/icon4.png";
import Treatment from "./Treatment";

const data = [
	{
		id: 1,
		image: img1,
		content1: "Hardware",
		content2: "cosmetology",
		bgImage: bg1,
		details: "Reveal your natural Cosmitek and show the path to excellence",
	},
	{
		id: 2,
		image: img2,
		content1: "Aesthetic",
		content2: "cosmetology",
		bgImage: bg2,
		details: "Reveal your natural Cosmitek and show the path to excellence",
	},
	{
		id: 3,
		image: img3,
		content1: "Injection",
		content2: "cosmetology ",
		bgImage: bg3,
		details: "Reveal your natural Cosmitek and show the path to excellence",
	},
	{
		id: 4,
		image: img4,
		content1: "Laser",
		content2: "cosmetology",
		bgImage: bg4,
		details: "Reveal your natural Cosmitek and show the path to excellence",
	},
];

const Treatments = () => {
	return (
		<section className="container m-auto p-5 py-12">
			{/* title */}
			<div>
				<h2 className="text-center font-medium text-4xl">Special Treatments</h2>
				<p className="text-center m-2">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>

			{/* content */}
			<div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{data.map((item) => (
					<Treatment key={item.id} content={item} />
				))}
			</div>
		</section>
	);
};

export default Treatments;
