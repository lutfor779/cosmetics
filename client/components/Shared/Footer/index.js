import Link from 'next/link';
import React from 'react'
import {FaLocationArrow} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaCcPaypal} from "react-icons/fa";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import {FaCcAmex} from "react-icons/fa";
import {FaWifi} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPinterestP} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaGooglePlusG} from "react-icons/fa";
import name from "../../../assets/images/footer-logo.png"
import Image from "next/image";
import logo from "../../../assets/images/logo.png"


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
    <section className="container m-auto p-5 py-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1st-part */}
        <div className='flex'>
         <ul>
            <li className="bg-[#ebf1f4] p-5 rounded-full text-[#445a69]">
                <FaLocationArrow className="h-7 w-7 bg-[#ebf1f4]" />
              </li>
         </ul>
          <div className=" px-5 text-xl font-medium">
						Cosmitek, 789 Main rd, Anytown,<br/>
             CA 12345 USA
 					</div>
        </div>
        {/* 2nd-part */}
        <div>
          <ul className='flex'>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full">
              <a href=""><FaFacebookF className="h-7 w-7" /></a>
            </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
              <a href=""><FaTwitter className="h-7 w-7" /></a>
            </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
 					    <a href=""><FaGooglePlusG className="h-7 w-7" /></a>
 					  </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
              <a href=""><FaWifi className="h-7 w-7" /></a>
            </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
              <a href=""><FaEnvelope className="h-7 w-7" /></a>
            </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
              <a href=""><FaPinterestP className="h-7 w-7" /></a>
            </li>
            <li className="bg-[#ebf1f4] hover:bg-[#f85457] hover:text-[#fff] text-[#445a69] p-5 rounded-full ml-5">
              <a href=""><FaYoutube className="h-7 w-7" /></a>
            </li>
          </ul>
        </div>
      </div>
     <hr className='mt-20 bg-[#ebf1f4]'/>
      {/* footer-buttom */}
          <div class="grid grid-cols-5 gap-4 mt-20">
            <div className='col-span-2 flex items-center gap-1'>
              <div className="w-24">
                  <Image className='bg-contain' src={logo} alt="image" />
              </div>
              <div>
                <Image className="w-25" src={name} alt="image" />
                <h4 className="text-2xl">+888 456-7890</h4>
                <div className='flex mt-10'>
                  <FaCcPaypal className="h-10 w-20 px-2 text-[#c7cdd2]"/>
                  <FaCcVisa className="h-10 w-20 px-2 text-[#c7cdd2]"/>
                  <FaCcMastercard className="h-10 w-20 px-2 text-[#c7cdd2]"/>
                  <FaCcAmex className="h-10 w-20 px-2 text-[#c7cdd2]"/>
                </div>
              </div>
            </div>
        {/* <div>02</div>
        <div>03</div> */}
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
      <hr className='mt-20 bg-[#ebf1f4]'/>
      {/* footer-last-buttom */}
      <div className="grid grid-cols-7 gap-3 mt-10">
        <div className='col-span-3'>
          <span className="text-[#c7cdd2]">© 2020 themesground. All Rights Reserved.</span>
        </div>
        <div>
          <ul>
            <li className="text-[#c7cdd2] hover:text-[#f85457]">
              <a href="">Shopify Themes</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[#c7cdd2] hover:text-[#f85457]">
              <a href="">Woocommerce Themes</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[#c7cdd2] hover:text-[#f85457]">
              <a href="">Opencart Themes</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[#c7cdd2] hover:text-[#f85457]">
              <a href="">Magento Themes</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer