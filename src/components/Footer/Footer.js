import React, { useEffect } from "react";
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {

    
    return (
        <div>
            <div className="md:mt-14 mt-6 w-[87%] mx-auto">
            <div className="md:flex md:flex-row md:justify-between">
                <div className="space-y-3">
                    <img src="./images/logo.png" className="-ml-10"/>
                    <p className="text-[#454343] md:text-[.8rem] text-[1rem]">(+234)808729002</p>
                    <p className="text-[#454343] md:text-[.8rem] text-[1rem]">medinizehealthlimited@gmail.com</p>
                </div>
                <div className="md:flex md:flex-row md:justify-between md:space-x-16 mt-4 md:space-y-0 space-y-5">
                    <ul className="links md: space-y-2">
                        <li>Company</li>
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/faq'}>FAQs</Link></li>
                        {/* <li><Link to={'/'}>Blog</Link></li> */}
                    </ul>
                    <ul className="links md:space-y-3 space-y-2">
                        <li>Product</li>
                        <li>Community</li>
                        <li>Telemedicine</li>
                    </ul>
                    <ul className="links md:space-y-3 space-y-2">
                        <li>Legal</li>
                        <li>Terms of service</li>
                        <li>Policy</li>
                    </ul>
                </div>
            </div>

            <div className="md:flex md:flex-row md:justify-between">
                <span></span>
                <ul className="flex flex-row justify-between items-center space-x-3 mt-6 md:w-[20%] w-[50%]">
                    <li><Link to={'https://www.facebook.com/profile.php?id=61555238138288&mibextid=ZbWKwL'}><img className="h-6 w-6" src="./images/facebook.png"/></Link></li>
                    <li><Link to={'https://www.instagram.com/medinize_?igsh=ZGtoZDJmbHp5OHFy'}><img className="h-6 w-6" src="./images/instagram.png"/></Link></li>
                    {/* <li><Link to={'/'}><img className="h-6 w-6" src="./images/youtube.png"/></Link></li> */}
                    <li><Link to={'https://www.linkedin.com/company/medinize/'}><img className="h-6 w-6" src="./images/linkedin.png"/></Link></li>
                    <li><Link to={'https://x.com/Medinize_?t=nCGOx0j73ynOs7MfB5vbCg&s=09'}><img className="h-6 w-6" src="./images/twitter.png"/></Link></li>
                </ul>
            </div>
            </div> 
            <hr  className="line w-full mt-6"/>
            <p className="text-center text-[.8rem] text-[#454343] py-6">2023 Medinize-All Right Reserved</p>
        </div>  
    )
}

export default Footer;