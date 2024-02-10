import React, { useEffect } from "react";
import './Sub.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);


    
    return (
        <div className="subscribe mt-28 py-[4.2rem]" data-aos='slide-up'>
            <div className="mx-auto text-center">
                <h1 className="md:text-[2.5rem] text-[1.5rem] text-[#fff] font-bold text-center">Subscribe to our <span className="text-[#358E07]">Newsletter</span></h1>   
            </div>
            <p className="text-center text-[#ffffffc9] flex md:w-[35%] w-[90%] mx-auto mt-5 md:leading-[30px] leading-[27px]">
                Be the first to receive exclusive updates, health tips and exciting news from Medinize. Join our growing community of subscribers today.
            </p>

            <form className="md:flex md:flex-row md:justify-between md:items-center md:w-[45%] w-[85%] md:space-y-0 space-y-6 mx-auto mt-6 md:space-x-8">
                <input placeholder="Enter Your Email" className="w-full pl-4 md:py-2 py-[0.8rem] md:rounded-[.4rem] rounded-full md:w-[75%] text-[.9rem] outline-none"/>
                <button className="w-full md:w-[30%] bg-[#358E07] text-white md:rounded-[.4rem] rounded-full px-8 md:py-[.6rem] py-[.8rem] md:text-[12px] hover:bg-[#349105e1]">
                    Subscribe
                </button>
            </form>  
        </div>   
    )
}

export default Subscribe;