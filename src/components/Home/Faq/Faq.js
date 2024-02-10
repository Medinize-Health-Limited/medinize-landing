import React, { useEffect } from "react";
import './Faq.css';
import { faqs } from './Faqs.js';
import FaqComp from "./FaqComp.js";

const Faq = () => {

    return (
        <div className="mt-20">
            <div className="mx-auto w-[40%] relative">
                <h1 className="text-[2rem] text-[#1E1E1E] font-bold text-center">Frequently Asked <span className="text-[#358E07]">Questions</span></h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="w-[50%] float-right"/>
                </div>

                <img src="./images/love.png" className="absolute top-px right-[0px] h-8 w-11"/> 

                <p className="text-[13px] text-[#2E2E2E] font-semibold text-center flex w-[75%] leading-[22px] mx-auto mt-5">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </p>    
            </div>

            {/* <FaqComp /> */}
        </div>
       
    )
}

export default Faq;