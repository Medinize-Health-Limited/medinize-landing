import React from "react";
import './Hero.css';

const Hero = () => {



    return (
        <div className="mx-[35px]">
            <div className="md:flex md:flex-row md:justify-between md:w-[90%] mx-auto md:mt-12 md:mt-10 mt-6">
                <div className="md:w-[50%] w-full md:mt-20">
                    <div className="">
                        <h1 className="md:text-[2.8rem] text-[1.6rem] text-[#1E1E1E] font-black md:leading-[52px]">Accelerate Your Health <br />
                        Plans with <span className="text-[#358E07]">Medinize</span></h1>
                        <img src="./images/fronds.png" className="md:w-[70%] w-[50%] float-right mr-14"/>
                    </div>
                    <p className="text-[14px] text-[#454343] mt-6 leading-6 text-justify md:w-[80%]">Our platform enables patients to easily manage health care needs from the comfort of their homes and have easy access to medical services. Unlock the power of medinize and accelerate towards a healthier future.</p>
                    <div className='md:space-x-4 mt-6 md:w-[70%] w-full md:flex md:flex-row md:justify-between md:space-y-0 space-y-3'>
                        <button className="book bg-[#358E07] md:text-[13px] w-full md:w-[50%] text-white py-3 py-[.8rem] px-6 rounded-[5rem]">Book an appointment</button>
                        <button className='access md:bg-[#fff] md:text-[13px] text-[14px] text-[#358E07] md:w-[50%] w-full py-3 px-6 md:rounded-[5rem]'>Access Community</button>
                    </div>
                </div>
                <img src="./images/doctor.png" className="md:h-[40%] md:w-[40%] md:mt-0 mt-6"/>
            </div>
            <div className="hidden md:block md:flex md:flex-row md:justify-between md:items-center mt-8">
                <hr />
                <img src="./images/vector.png" className="vector p-[.4rem] h-6 w-7"/>
                <hr />
            </div>
        </div>
       
    )
}

export default Hero;