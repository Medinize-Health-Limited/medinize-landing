import React from "react";
import './Hero.css';

const Hero = () => {



    return (
        <div>
            <div className="md:flex md:flex-row md:justify-between w-[90%] mx-auto mt-12">
                <div className="w-[50%] mt-20">
                    <div className="">
                        <h1 className="text-[2.8rem] text-[#1E1E1E] font-black leading-[52px]">Accelerate Your Health Plans with <span className="text-[#358E07]">Medinize</span></h1>
                        <img src="./images/fronds.png" className="w-[70%] float-right mr-14"/>
                    </div>
                    <p className="text-[14px] text-[#454343] mt-6 leading-6 text-justify w-[80%]">Our platform enables patients to easily manage health care needs from the comfort of their homes and have easy access to medical services. Unlock the power of medinize and accelerate towards a healthier future.</p>
                    <div className=' md:space-x-4 mt-6'>
                        <button className="book bg-[#358E07] text-[13px] text-white py-3 px-6 rounded-[5rem]">Book an appointment</button>
                        <button className='access bg-[#fff] text-[13px] text-[#358E07] py-3 px-6 rounded-[5rem]'>Access Community</button>
                    </div>
                </div>
                <img src="./images/doctor.png" className="h-[40%] w-[40%]"/>
            </div>
            <div className="md:flex md:flex-row md:justify-between md:items-center mt-8">
                <hr />
                <img src="./images/vector.png" className="vector p-[.4rem] h-6 w-7"/>
                <hr />
            </div>
        </div>
       
    )
}

export default Hero;