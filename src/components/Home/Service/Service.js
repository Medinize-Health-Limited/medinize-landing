import React, { useEffect } from "react";
import AOS from 'aos';
// import './Reason.css';
import { services } from "./Services.js";
import 'aos/dist/aos.css';
import { Link, NavLink } from "react-router-dom";

const Service = () => {

    
    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);


    return (
        <div className="md:mt-28 mt-10 md:shadow-md md:border-gray-100 py-7 w-[85%] mx-auto md:rounded-[.3rem]">
            <div className="mx-auto md:w-[20%] w-[70%]" data-aos='slide-up'>
                <h1 className="text-[2rem] text-[#1E1E1E] font-bold text-center">Our <span className="text-[#358E07]">Services</span></h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="w-[70%] float-right"/>
                </div>     
            </div>

            <div className="md:flex md:flex-row md:justify-between md:items-center mx-auto md:w-[90%] w-full md:space-x-14 md:space-y-0 space-y-4 mt-8">
                    {
                        services?.map((service, index) => (
                            <div key={index} className="md:w-[33.3%] md:space-y-[.8rem] space-y-[1.1rem] text-center md:text-left" data-aos='slide-up'>
                                <img src={service.image} className="mx-auto border rounded-[.3rem]"/>
                                <h3 className="text-[15px] font-bold text-[#1A1A1A]">{service.header}</h3>
                                <p className="md:text-[12px] text-[14px] text-[#1E1E1E] md:leading-[19px] leading-[22px] md:text-justify">{service.content}...</p>
                                <div className="">
                                    <Link to={'/services'} className='underline md:text-[12px] text-[13px] text-[#358E07]'>Read Now</Link>
                                </div>
                            </div> 
                        ))
                    }
            </div>
            <button className="hidden md:block bg-[#358E07] text-white rounded-[5rem] px-6 py-3 text-[12px] mx-auto flex mt-10 hover:bg-[#349105e1]">
                <Link to={'/services'}>See more</Link>
            </button>  
        </div>   
    )
}

export default Service;