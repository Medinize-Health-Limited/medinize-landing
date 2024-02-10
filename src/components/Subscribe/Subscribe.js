import React, { useEffect } from "react";
import './Sub.css';

const Subscribe = () => {

    
    return (
        <div className="subscribe mt-28 py-[4.2rem]">
            <div className="mx-auto text-center">
            <h1 className="text-[2.5rem] text-[#fff] font-bold text-center">Subscribe to our <span className="text-[#358E07]">Newsletter</span></h1>   
            </div>
            <p className="text-center text-[#fff] flex w-[35%] mx-auto mt-5 leading-[30px]">
                Be the first to receive exclusive updates, health tips and exciting news from Medinize. Join our growing community of subscribers today.
            </p>

            <form className="md:flex md:flex-row md:justify-between md:items-center w-[45%] mx-auto mt-6">
                <input placeholder="Enter Your Email" className="pl-3 py-2 rounded-[.4rem] w-[75%] text-[.9rem] outline-none"/>
                <button className="bg-[#358E07] text-white rounded-[.4rem] px-8 py-[.6rem] text-[12px] hover:bg-[#349105e1]">
                    Subscribe
                </button>
            </form>  
        </div>   
    )
}

export default Subscribe;