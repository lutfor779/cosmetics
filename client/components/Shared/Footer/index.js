import logo from "../../../assets/images/logo.png"
import name from "../../../assets/images/name.png"
import Image from "next/image";
import {FaCcPaypal} from "react-icons/fa";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import {FaCcAmex} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaWifi} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPinterestP} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGooglePlusG} from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa";


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
	<>
	  	<div className="px-10 py-20">
		  <div className="grid grid-cols-4 grid-flow-col gap-4">
		       <div className="flex">
					<div className="bg-[#ebf1f4] p-5 rounded-full text-[#445a69]">
					  <FaLocationArrow className="h-7 w-7 bg-[#ebf1f4]" />
					</div>
					<p className="px-2 text-xl font-medium">
						Cosmitek, 789 Main rd, Anytown, CA 12345 USA
					</p>
				</div>

			   <div className="flex">
			       <div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-80">
				     <a href=""><FaFacebookF className="h-7 w-7" /></a>
				   </div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					   <a href=""><FaTwitter className="h-7 w-7" /></a>
					</div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					  <a href=""><FaGooglePlusG className="h-7 w-7" /></a>
					</div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					  <a href=""><FaWifi className="h-7 w-7" /></a>
					</div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					  <a href=""><FaEnvelope className="h-7 w-7" /></a>
					</div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					  <a href=""><FaPinterestP className="h-7 w-7" /></a>
					</div>
					<div className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
					  <a href=""><FaYoutube className="h-7 w-7" /></a>
					</div>
			    </div>
				{/* <hr /> */}
		 </div>
				
				
		</div>
		<div className="grid justify-items-center mt-10">
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
								
							</div>
						</div>
						<div className="flex py-5 px-10">
							<FaCcPaypal className="h-10 w-20 px-2"/>
							<FaCcVisa className="h-10 w-20 px-2"/>
							<FaCcMastercard className="h-10 w-20 px-2"/>
							<FaCcAmex className="h-10 w-20 px-2"/>
								
						</div>
						<hr className="w-full"/>
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
				{/* <hr className="bg-sky-600" /> */}
				{/* footer-bottom */}
				<div className="flex py-5">
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
	</>
	);
};

export default Footer;
