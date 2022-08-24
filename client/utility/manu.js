import img1 from "../assets/images/menu/menu-img1.jpg";
import img2 from "../assets/images/menu/menu-img2.jpg";

export const menu = [
	{ id: 1, title: "Home" },
	{
		id: 2,
		title: "Grooming",
		children: [
			{
				title: "Skin Care",
				children: [
					"Cream & Moisturizers",
					"Body Lotions",
					"Face Wash",
					"De-tan Clean Up",
					"Sunscreens",
					"Facial Kits",
					"Face Masks",
				],
			},
			{
				title: "Hair Care",
				children: [
					"Shampoos",
					"conditioners",
					"Hair oil and Treatments",
					"Hair Colour",
					"Styling Creams",
					"Hair Serums",
					"Hair Shine & Glow",
				],
			},
			{
				title: "Luxury Beauty",
				children: [
					"Perfumes",
					"Skin Care",
					"Hair Care",
					"Mens Grooming",
					"Makeup & Nails",
					"Gift Sets",
					"Body Massage",
				],
			},
			{
				title: "Mens Grooming",
				children: [
					"Face Wash & Creams",
					"Body Wash",
					"Shower Gels",
					"Hair Care",
					"Perfumes",
					"Deodorants",
					"Beard Grooming",
				],
			},
		],
		image: img1,
	},
	{
		id: 3,
		title: "Make up",
		children: [
			{
				title: "Eyes",
				children: [
					"Kajal",
					"Eyeliners",
					"Mascaras",
					"Eyeshadows",
					"Smokey eye",
					"Cut crease",
					"eyebrow pencil",
				],
			},
			{
				title: "Face",
				children: [
					"Fruit facial",
					"Anti tan facila",
					"Instaglow facial",
					"skin tightning facial",
					"rediant gold facial",
					"lotus whiteglow facial",
					"o3+ whitening facial",
				],
			},
			{
				title: "Lips",
				children: [
					"Lipsticks",
					"Lip glosses",
					"Lip liners",
					"Lip care",
					"Sheer lipstick",
					"Semi-Matte lipstick",
					"cream lipstick",
				],
			},
			{
				title: "Hair",
				children: [
					"hair spa",
					"hair cut",
					"hair smoothing",
					"hair styling",
					"hair straichtening",
					"hair colouring",
					"hair treatments",
				],
			},
		],
		image: img2,
	},
	{ id: 4, title: "Cosmetics" },
	{ id: 5, title: "Blog" },
];
