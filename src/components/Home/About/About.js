import React, { useEffect } from "react";
import './About.css';
import { Link } from "react-router-dom";

const About = () => {

    

    return (
        <div className="bg-image mt-28 py-[4.2rem]">
            <div className="mx-auto w-[28%]">
                <h1 className="text-[2rem] text-[#fff] font-bold text-center">About Us Medinize </h1>
                <div className="text-center">
                    <img src="./images/fronds.png" className="w-[55%] float-right"/>
                </div>     
            </div>
            <p className="text-center text-[#fff] flex w-[45%] mx-auto mt-10 leading-[32px]">
                At  Medinize, we believe that everyone should have access to healthcare resources and be able to make informed decisions about their health. 
                Through our user-friendly interface, we aim to bridge the gap between patients and doctors creating a smooth and personalized healthcare experience....
            </p>
            <button className="bg-[#358E07] text-white rounded-[5rem] px-6 py-3 text-[12px] mx-auto flex mt-10 hover:bg-[#349105e1]">
                <Link to={'/about'}>See more</Link>
            </button>  
        </div>   
    )
}

export default About;