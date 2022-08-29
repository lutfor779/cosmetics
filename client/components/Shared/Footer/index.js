import logo from "../../../assets/images/logo.png"
import name from "../../../assets/images/name.png"
import Image from "next/image";
// import {FaCcPaypal } from "react-icons/cg";
// import { IoLocationSharp } from "react-icons/cg";

const Footer = () => {
	const footers=[
		{
			"title": "Shopping Guide",
			"blog": 'Blog',
			"Information": "FAQs",
			"Payment": "Payment",
			"Shipment": "Shipment",
            "order": "order",
			"policy":"Return policy"
		},
		{
			"title": "Style Advisor",
			"blog":"Your Account",
			"Information":"Information",
			"Payment":"Addresses",
			"Shipment":"Discount",
            "order":"Orders History",
			"policy":"Order Tracking"
		},
		{
			"title": "Information",
			"blog":"Site Map",
			"Information":"Search Terms",
			"Payment":"Advanced Search",
			"Shipment":"About Us",
            "order":"Contact Us",
			"policy":"Suppliers"
		}		
	]

	return (
		<div className="grid justify-items-center">
		{/* ICONS */}
		{/* <div><IoLocationSharp className="h-6 w-6" /></div> */}
			<div>
				{/* 1st-part */}
				<div className="grid grid-cols-4 gap-30 py-20">
					<div className="pl-10">
						<div className="flex items-center">
							<div>
							  <Image src={logo} alt="image" />
							</div>
							<div>
								<Image src={name} alt="image" />
								<h4 className="text-xl">+888 456-7890</h4>
								{/* <h3><FaCcPaypal /></h3> */}
							</div>
						</div>
					</div>
                  {
					footers.map(footer=>(
					<div key={footer.title}>
						<h3 className="font-medium pl-20">{footer.title}<br/></h3>
						<ul className="pl-20">
							<li className="hover:text-[#f85457]">
								<a href="">{footer.blog}</a>
							</li>
							<li className="hover:text-[#f85457]">
								<a href="">{footer.Information}</a>
							</li>
							<li className="hover:text-[#f85457]">
								<a href="">{footer.Payment}</a>
							</li>
							<li className="hover:text-[#f85457]">
								<a href="">{footer.Shipment}</a>
							</li>
							<li className="hover:text-[#f85457]">
								<a href="">{footer.order}</a>
							</li>
							<li className="hover:text-[#f85457]">
								<a href="">{footer.policy}</a>
							</li>
						</ul>
					</div>
						
					))
				  }
				</div>

			</div>
				{/* <hr className="border-gray-500 mt-6"/> */}
				{/* footer-bottom */}
				<div className="flex">
					<div className="mr-40 text-[#c7cdd2]">© 2020 themesground. All Rights Reserved.</div>
					<div>
					<ul className="flex gap-10">
							<li className="text-[#c7cdd2] hover:text-[#f85457]">
								<a href="">Shopify Themes</a>
							</li>
							<li className="text-[#c7cdd2] hover:text-[#f85457]">
								<a href="">Woocommerce Themes</a>
							</li>
							<li className="text-[#c7cdd2] hover:text-[#f85457]">
								<a href="">Opencart Themes</a>
							</li>
							<li className="text-[#c7cdd2] hover:text-[#f85457]">
								<a href="">Shopify Themes</a>
							</li>
							<li className="text-[#c7cdd2] hover:text-[#f85457]">
								<div>Magento Themes</div>
							</li>
						</ul>
					</div>
				</div>
		</div>
	);
};

export default Footer;
