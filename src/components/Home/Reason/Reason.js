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
        <div className="mt-14">
            <div className="mx-auto w-[30%]">
                <h1 className="text-[2rem] text-[#1E1E1E] font-bold text-center">Why Choose <span className="text-[#358E07]">Medinize</span></h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="w-[55%] float-right"/>
                </div>     
            </div>

            <div className="md:flex md:flex-row md:justify-between md:items-center mx-auto w-[85%] space-x-10 mt-12">
                    {
                        reasons?.map((reason, index) => (
                            <div key={index} className=" border text-center w-[25%] px-3 py-7 h-[220px] space-y-2 rounded-[.3rem] shadow-md border-gray-100">
                                <img src={reason.icon} className="h-8 w-8 mx-auto"/>
                                <h3 className="text-[14px] font-bold text-[#226802]">{reason.header}</h3>
                                <p className="text-[12px] text-[#111111] leading-[20px]">{reason.content}</p>
                            </div>
                            
                        ))
                    }
            </div>
            
        </div>
       
    )
}

export default Reason;