import Image from "next/image";
import React from "react";
import logo from "../../../assets/images/logo.png";
import name from "../../../assets/images/name.png";

const Logo = () => {
	return (
		<div className="flex items-center gap-1">
			<div className="w-12">
				<Image src={logo} alt="conmetic" layout="responsive" />
			</div>

			<div className="w-40 hidden sm:block">
				<Image src={name} alt="conmetic" layout="responsive" />
			</div>
		</div>
	);
};

export default Logo;
