import React, { useEffect } from "react";
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {

    
    return (
        <div>
            <div className="mt-14 w-[80%] mx-auto">
            <div className="md:flex md:flex-row md:justify-between">
                <div className="space-y-3">
                    <img src="./images/logo.png"/>
                    <p className="text-[.8rem]">(+234)808729002</p>
                    <p className="text-[.8rem]">medinizehealthlimited@gmail.com</p>
                </div>
                <div className="md:flex md:flex-row md:justify-between space-x-16 mt-4">
                    <ul className="links space-y-3">
                        <li>Company</li>
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/faq'}>FAQs</Link></li>
                        <li><Link to={'/'}>Blog</Link></li>
                    </ul>
                    <ul className="links space-y-3">
                        <li>Product</li>
                        <li><Link to={'/'}>Community</Link></li>
                        <li><Link to={'/'}>Telemedicine</Link></li>
                    </ul>
                    <ul className="links space-y-3">
                        <li>Legal</li>
                        <li><Link to={'/'}>Terms of service</Link></li>
                        <li><Link to={'/'}>Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="md:flex md:flex-row md:justify-between">
                <span></span>
                <ul className="flex flex-row justify-between items-center space-x-3 mt-6">
                    <li><img className="h-6 w-6" src="./images/facebook.png"/></li>
                    <li><img className="h-6 w-6" src="./images/instagram.png"/></li>
                    <li><img className="h-6 w-6" src="./images/youtube.png"/></li>
                    <li><img className="h-6 w-6" src="./images/linkedin.png"/></li>
                    <li><img className="h-6 w-6" src="./images/twitter.png"/></li>
                </ul>
            </div>
            </div> 
            <hr  className="line w-full mt-6"/>
            <p className="text-center text-[.8rem] text-[#1E1E1E] py-6">2023 Medinize-All Right Reserved</p>
        </div>  
    )
}

export default Footer;