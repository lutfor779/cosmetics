import React from "react";
import { CgHeart, CgMenu, CgProfile, CgShoppingCart } from "react-icons/cg";
import SingleItem from "./SingleItem";

const data = ["MY ACCOUNT", "WISHLIST", "CHECKOUT", "BLOG"];

const index = () => {
	return (
		<ul className="flex gap-3">
			<SingleItem IconName={CgHeart} number={25} />
			<SingleItem IconName={CgShoppingCart} number={5} />
			<SingleItem IconName={CgProfile} hoverData={data} />
			<span className="block lg:hidden">
				<SingleItem IconName={CgMenu} />
			</span>
		</ul>
	);
};

export default index;
