import React, { useEffect } from "react";
import AOS from 'aos';
import './Reason.css';
import { reasons } from './Reasons.js';
import 'aos/dist/aos.css';

const Reason = () => {

    
    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);


    return (
        <div className="md:mt-14 mt-10">
            <div className="mx-auto md:w-[30%] w-[70%]">
                <h1 className="md:text-[2rem] text-[1.5rem] text-[#1E1E1E] font-black text-center">Why Choose <span className="text-[#358E07]">Medinize</span></h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="md:w-[55%] w-[35%] float-right"/>
                </div>     
            </div>

            <div className="md:flex md:flex-row md:justify-between md:items-center mx-auto md:w-[85%] w-[70%] md:space-x-10 md:space-y-0 space-y-3 mt-12">
                    {
                        reasons?.map((reason, index) => (
                            <div key={index} className=" border text-center md:w-[25%] w-full md:px-3 px-7 py-7 md:h-[220px] space-y-2 rounded-[.3rem] shadow-md border-gray-100" data-aos='slide-up'>
                                <img src={reason.icon} className="h-8 w-8 mx-auto"/>
                                <h3 className="text-[14.5px] font-bold text-[#226802]">{reason.header}</h3>
                                <p className="md:text-[12px] text-[14.5px] text-[#454343] leading-[20px]">{reason.content}</p>
                            </div>
                            
                        ))
                    }
            </div>
            
        </div>
       
    )
}

export default Reason;