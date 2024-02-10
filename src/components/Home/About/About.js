import React, { useEffect } from "react";
import './About.css';
import { Link } from "react-router-dom";

const About = () => {

    

    return (
        <div className="bg-image md:mt-28 mt-6 md:py-[3.4rem] py-[1.6rem]">
            <div className="mx-auto md:w-[28%] w-[65%]">
                <h1 className="md:text-[2rem] text-[1.5rem] text-[#fff] font-bold text-center">About Us Medinize </h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="md:w-[55%] w-[60%] float-right"/>
                </div>     
            </div>
            <p className="text-center text-[#fff] flex md:w-[45%] w-[88%] mx-auto md:mt-10 mt-6 leading-[32px]">
                At  Medinize, we believe that everyone should have access to healthcare resources and be able to make informed decisions about their health. 
                Through our user-friendly interface, we aim to bridge the gap between patients and doctors creating a smooth and personalized healthcare experience....
            </p>
            <button className="hidden md:block bg-[#358E07] text-white rounded-[5rem] px-6 py-3 text-[12px] mx-auto flex mt-6 hover:bg-[#349105e1]">
                <Link to={'/about'}>See more</Link>
            </button>  
            <button className="md:hidden block bg-[#358E07] text-white rounded-[5rem] px-6 py-3 text-[12px] mx-auto mt-6 w-[80%] hover:bg-[#349105e1]">
                <Link to={'/about'}>See more</Link>
            </button>
        </div>   
    )
}

export default About;