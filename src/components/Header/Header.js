import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = ({children}) => {

    const [isToggled, setIsToggled] = useState(false);

    const showSideNav = () => {
        setIsToggled(!isToggled)
    }


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
            <div className='flex flex-row justify-between items-center md:bg-[#F6FFF5] rounded-[10px] pr-5 md:mt-8 mt-4 md:mx-[35px]'>
                <img src='./images/logo.png' className='-ml-4'/>
                <nav className='md:block hidden'>
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
                <div className='md:block hidden md:space-x-10'>
                    <button className="text-[13px] text-[#358E07] font-semibold">Login</button>
                    <button className='sign-up bg-[#358E07] text-[13px] text-white py-2 px-6 rounded-[5rem]'>Sign up</button>
                </div>
                <img src="./images/hamburger.png" className='md:hidden block' onClick={showSideNav}/>
            </div>

            <div className=''>
                <div>{children}</div>
            </div>

            <div className= {isToggled ? 'md:hidden block side-nav pt-3 w-[100%] -mr-2 px-4 mx-auto' : 'hidden'}>
                    <div className='flex flex-row justify-between items-center'>
                        <span></span>
                        <img className= {isToggled ? 'block' : 'hidden'} src="./images/close.png" onClick={showSideNav}/> 
                    </div>
                    
                    <div className= { isToggled ? 'block mt-8 text-center' : 'hidden'}>
                        <div className='side-navs'>
                            <ul className='space-y-5 grid'>
                                {
                                    navItem.map((item, index) => (
                                        <NavLink to={item.path} key={index} onClick={showSideNav} className='link text-[#1E1E1E] w-auto' >
                                            {item.name}
                                        </NavLink>
                                    ))
                                }   
                            </ul>
                        </div>
                        <div className='space-y-5 grid mt-8'>
                            <button className="text-[#358E07] font-semibold">Login</button>
                            <button className='sign-up bg-[#358E07] text-white md:py-3 py-[.8rem] px-6 rounded-[5rem]'>Sign up</button>
                        </div>
                    </div>
            </div>
        </div>
       
    )
}

export default Header;