import React, { useEffect } from "react";
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { visions, values } from "./aboutdata.js";
import Subscribe from "../../components/Subscribe/Subscribe.js";
import Footer from "../../components/Footer/Footer.js";

const About = () => {

    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);


    return (
        <div>
            <div className="mx-[25px]">
            <div className="md:flex md:flex-row md:justify-between md:w-[90%] mx-auto md:mt-16 mt-6">
                <div className="md:w-[50%] w-full">
                    <div className="">
                        <h1 className="md:text-[2.8rem] text-[1.6rem] font-black md:leading-[52px]">Pioneering The Future of Health Care</h1>
                    </div>
                    <p className="md:text-[13px] text-[14.5px] text-[#454343] mt-6 leading-6 text-justify md:w-[80%]">Welcome to Medinize, where we treat more than symptoms: we nurture well-being. Your health is not just a diagnosis, it is an ongoing journey. 
                        Join us in exploring the endless possibilities of health care innovation.</p>
                    <div className='md:space-x-4 mt-6 md:w-[70%] w-full md:flex md:flex-row md:justify-between md:space-y-0 space-y-3'>
                        <button className="book bg-[#358E07] md:text-[13px] text-[14.5px] w-full md:w-[50%] text-white py-3 py-[.8rem] px-6 rounded-[5rem]">Book an appointment</button>
                        <button className='access md:bg-[#fff] md:text-[13px] text-[14.5px] text-[#358E07] md:w-[50%] w-full py-3 px-6 md:rounded-[5rem]'>Access Community</button>
                    </div>
                </div>
                <img src="./images/aboutpic.png" className="md:h-[40%] md:w-[42%] md:mt-0 mt-6"/>
            </div>

            <div className="md:mt-24 mt-16 md:w-[90%] mx-auto">
                <h2 className="md:text-[2rem] text-[1.6rem] text-[#1E1E1E] font-semibold text-center">Our Story</h2>
                <p className="md:text-[14px] text-14.5px] leading-7 md:mt-10 mt-8 text-[#454343] text-justify" data-aos='slide-up'>
                    At Medinize, our journey is fueled by a profound belief — that healthcare should be accessible to all. 
                    Within the complex landscape of Nigerian healthcare, where over 120 million people lack recent doctor visits and 98% are without 
                    health insurance, we recognized an urgent need for change. A stark reality of 52% experiencing delays in diagnosis, 30% struggling 
                    with health costs, and almost 40% earning less than 100,000 naira monthly spurred our commitment. The absence of quality health data 
                    further compounded the challenges. In response, Medinize was born, driven by the mission to make healthcare universally accessible and 
                    affordable. Through our user-friendly interface, we seamlessly connect patients and doctors, offering a personalized healthcare experience. 
                    Medinize provides Telehealth services, Digital Health Records, and Community Health platforms, addressing challenges with solutions that break 
                    barriers. Our story is a journey of innovation and dedication, where we confront challenges head-on, fostering a sense of belonging and support 
                    in a unique therapy experience and a supportive community. Welcome to the Medinize  – where every health journey finds support, and every 
                    individual is empowered to make informed decisions for their well-being.
                </p>
            </div>

            <div className="vision md:flex md:flex-row md:justify-between md:w-[90%] mx-auto md:mt-16 mt-12 md:py-[6rem] md:px-[8rem] py-[1rem] px-[1rem] md:space-y-0 space-y-3" data-aos='slide-up'>
                {
                    visions?.map((vision, index) => (
                        <div key={index} className="bg-[#fff] md:w-[40%] w-full md:px-6 px-5 py-7 md:h-[200px] space-y-3 rounded-[.3rem] shadow-md border-gray-100" data-aos='slide-up'>
                            <img src={vision.icon} className="h-5 w-5 mx-auto"/>
                            <h3 className="md:text-[14px] text-[14.5px] font-bold text-center text-[#226802]">{vision.title}</h3>
                            <p className="md:text-[12px] text-[14.5px] text-[#454343] md:leading-[20px] leading-[23px] text-justify ">{vision.content}</p>
                        </div>
                    ))
                }
            </div>

            <div className="md:pt-[6rem] pt-[4rem]" data-aos='slide-up'>
                <h2 className="md:text-[2rem] text-[1.6rem] text-[#358E07] font-semibold text-center" data-aos='slide-up'>Core Values</h2>
                <div className="md:grid md:grid-cols-2 md:gap-20 md:w-[90%] mx-auto md:px-[8rem] mt-8 md:space-y-0 space-y-4">
                    {
                        values?.map((value, index) => (
                            <div key={index} className=" border w-full md:px-6 px-5 py-7 md:h-[220px] space-y-2 rounded-[.3rem] shadow-md border-gray-100" data-aos='slide-up'>
                                <img src={value.icon} className="h-8 w-8 mx-auto"/>
                                <h3 className="md:text-[14px] text-[14.5px] text-center font-bold text-[#226802]">{value.title}</h3>
                                <p className="md:text-[12px] text-[14.5px] text-[#454343] md:leading-[20px] leading-[23px]">{value.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default About;