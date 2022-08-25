import React from "react";
import { CgHeart, CgProfile, CgShoppingCart } from "react-icons/cg";
import SingleItem from "./SingleItem";

const data = ["MY ACCOUNT", "WISHLIST", "CHECKOUT", "BLOG"];

const index = () => {
	return (
		<ul>
			<SingleItem IconName={CgHeart} number={25} />
			<SingleItem IconName={CgShoppingCart} number={5} />
			<SingleItem IconName={CgProfile} hoverData={data} />
		</ul>
	);
};

export default index;
