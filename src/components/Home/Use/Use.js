import React, { useEffect } from "react";
import './Use.css';
import { uses } from './uses.js'

const Use = () => {

    

    return (
        <div className="md:flex md:flex-row md:justify-between mx-auto w-[70%] space-x-14 mt-10">
            <img src="./images/steth.png" className="h-[400px] w-[500px]"/>
            <div className="mt-12">
                <div className="mx-auto">
                    <h1 className="text-[2rem] text-[#1E1E1E] font-bold text-center">How to Use <span className="text-[#358E07]">Medinize</span></h1>
                    <div className="text-center">
                        <img src="./images/fronds.png" className="w-[55%] float-right"/>
                    </div>     
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-6 w-[100%] mt-8">
                    {
                        uses?.map((use, index) => (
                            <div className="border md:flex md:flex-row md:justify-between space-x-3 border-dashed p-3 rounded-[.3rem]">
                                <img src={use.icon} className="w-4 h-4"/>
                                <div className="space-y-2">
                                    <h3 className="text-[11px] font-bold text-[#1A1A1A]">{use.header}</h3>
                                    <p className="text-[10px] text-[#111827] leading-[13px]">{use.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>   
    )
}

export default Use;