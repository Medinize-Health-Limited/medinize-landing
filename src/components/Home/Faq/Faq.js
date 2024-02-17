import React, { useEffect, useState } from "react";
import './Faq.css';
import { faqs } from './Faqs.js';
import FaqComp from "./FaqComp.js";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Faq = () => {
    const [questions, setQuestions] = useState(faqs);

    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);


    return (
        <div className="md:mt-20 mt-11">
            <div className="mx-auto md:w-[40%] relative" data-aos='slide-up'>
                <div className="mx-auto md:w-[100%] w-[87%]">
                    <h1 className="md:text-[2rem] text-[1.4rem] text-[#1E1E1E] font-bold text-center">Frequently Asked <span className="text-[#358E07]">Questions</span></h1>
                    <div className="text-center">
                        <img src="./images/fronds.png" className="md:w-[50%] w-[50%] float-right"/>
                    </div>
                </div>

                <img src="./images/love.png" className="hidden md:block absolute top-px right-[0px] h-8 w-11"/> 

                <p className="md:text-[13px] text-[14.5px] text-[#454343] md:font-semibold text-center flex w-[75%] leading-[22px] mx-auto mt-5">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </p>    
            </div>

            {/* <FaqComp /> */}
            <div data-aos='slide-up'>
                {
                    questions.map((question) => {
                        return(
                            <FaqComp key={question.id} {...question} />
                        )
                    })
                }
            </div>
        </div>
       
    )
}

export default Faq;