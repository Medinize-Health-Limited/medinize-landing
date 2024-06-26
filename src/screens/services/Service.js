import React from "react";
import { servicedata, steps } from "./serviceadata.js";
import ServiceComp from "./ServiceComp.js";
import Subscribe from "../../components/Subscribe/Subscribe.js";
import Footer from "../../components/Footer/Footer.js";

const Services = () => {

    return (
        <div>
            <div className="md:flex md:flex-row md:justify-between md:w-[80%] w-[87%] mx-auto md:mt-16 mt-6 md:space-x-10">
                <div className="md:w-[35%] w-full">
                    <h6 className="text-[0.8rem] tracking-[0.2rem] text-[#358E07] font-semibold">SERVICES</h6>
                    <h1 className="md:text-[2.5rem] text-[1.6rem] font-black md:leading-[52px] mt-4">Discover a new era of healthcare with Medinize</h1>
                </div>
                <div className="md:w-[50%] w-full mt-4">
                    <p className="md:text-[13px] text-[14.5px] text-[#454343] mt-6 leading-6 text-justify">Welcome to the future of healthcare innovation—Our mission and goal at Medinize is to introduce you to groundbreaking features designed to revolutionize the way you engage with your health. By providing you the platform where to have easy access, we provide easy care for everyone.</p>
                    <p className="md:text-[13px] text-[14.5px] text-[#454343] mt-6 leading-6 text-justify">While experiencing the convenience of Clinical Appointments, the efficiency of E-Records, and the support of our thriving Health Community. Join the ranks of those embracing innovation in health management with Medinize, your all-in-one solution for a healthier tomorrow.</p>
                </div>
            </div>


            <div className="w-[80%] mx-auto mt-14">
                    {
                        servicedata?.map((question) => {
                            return(
                                <ServiceComp key={question.id} {...question} />
                            )
                        })
                    }
            </div>

            <div className="md:w-[70%] w-[90%] mx-auto md:flex md:flex-row md:justify-between mt-10">
                <div className="">
                    <div className="md:w-[50%] w-[90%] md:mx-0 mx-auto">
                        <h1 className="md:text-[1.3rem] text-[1.1rem] md:text-left text-center text-[#454343] font-semibold">How To Use <span className="text-[#358E07]">Medinize</span></h1>
                        <div className="text-center">
                            <img src="./images/fronds.png" className="md:w-[60%] w-[55%] md:ml-[5rem] ml-[7rem]"/>
                        </div>   
                    <h3 className="font-black md:text-[1.6rem] md:text-left text-center mt-3">Your simplified healthcare journey begins here</h3>  
                    <p className="mt-4 w-full text-[0.8rem] md:text-left text-center">all in one app, all for you</p>
                    </div>
                </div>

                <div className="mt-10 md:w-auto w-[80%] mx-auto">
                    {
                        steps?.map((step) => (
                            <div className="flex flex-row items-center">
                                <h1 className="md:text-[3rem] text-[2.1rem] md:w-auto w-[2rem] font-black">{step.number}</h1>
                                <p className="ml-10 font-semibold">{step.action}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    )
}

export default Services;