import React, { useEffect } from "react";
import './Use.css';
import { uses } from './uses.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Use = () => {

    useEffect(() => {
        AOS.init({duration: 1200});
    }, []);
    

    return (
        <div className="md:flex md:flex-row md:justify-between mx-auto md:w-[70%] w-[100%] md:space-x-14 mt-10">
            <img data-aos='slide-up' src="./images/steth.png" className="h-[400px] w-[500px] hidden md:block"/>
            <div className="mt-12" data-aos='slide-up'>
                <div className="mx-auto w-[80%] md:w-[100%]">
                    <h1 className="md:text-[2rem] text-[1.5rem] text-[#1E1E1E] font-bold text-center">How to Use <span className="text-[#358E07]">Medinize</span></h1>
                    <div className="text-center">
                        <img src="./images/fronds.png" className="md:w-[55%] w-[55%] float-right"/>
                    </div>     
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-6 md:w-[100%] w-[87%] mx-auto mt-8 space-y-3 md:space-y-0">
                    {
                        uses?.map((use, index) => (
                            <div className="border flex flex-row justify-between space-x-3 border-dashed md:p-3 p-4 rounded-[.3rem]" data-aos='slide-up'>
                                <img src={use.icon} className="w-4 h-4"/>
                                <div className="space-y-2">
                                    <h3 className="md:text-[11px] text-[14.5px] font-bold text-[#1A1A1A]">{use.header}</h3>
                                    <p className="md:text-[10px] text-[14.5px] text-[#454343] md:leading-[13px] leading-[20px]">{use.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <img data-aos='slide-up' src="./images/steth.png" className="md:hidden block w-[90%] mx-auto mt-3 md:mt-0"/>
            </div>
            
        </div>   
    )
}

export default Use;