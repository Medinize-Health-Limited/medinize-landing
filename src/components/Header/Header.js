import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = ({children}) => {


const navItem = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/services",
            name: "Services",
        },
        {
            path: "/about",
            name: "About",

        },
        {
            path: "/communities",
            name: "Communities",
 
        },
        {
            path: "/faq",
            name: "FAQs",
 
        },
        {
            path: "/contact",
            name: "Contact",
 
        },
]

    return (
        <div>
            <div className=' md:flex md:flex-row md:justify-between md:items-center bg-[#F6FFF5] rounded-[10px] pr-8 mt-8'>
                <img src='./images/logo.png' className=''/>
                <nav className=''>
                    <ul className=' md:space-x-10'>
                        {
                            navItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className='link text-[13px] text-[#1E1E1E]' activeclassName="active">
                                        {item.name}
                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
                <div className=' md:space-x-10'>
                    <button className="text-[13px] text-[#358E07] font-semibold">Login</button>
                    <button className='sign-up bg-[#358E07] text-[13px] text-white py-2 px-6 rounded-[5rem]'>Sign up</button>
                </div>
            </div>
            <div className=''>
                <div>{children}</div>
            </div>
        </div>
       
    )
}

export default Header;