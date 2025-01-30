import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import Github from '../images/github.png'
import Linkedin from '../images/images.png'

const Footer = () => {
    return (
        <>
            <div className='bg-gradiante p-6 flex flex-col gap-5 text-white'>
                <p className='font-medium text-[17px]'>This is {String.fromCharCode(169)} by Sourav Kumar Bera</p>
                <ul className="flex justify-evenly gap-3 flex-wrap">
                    <NavLink to="/Projects">
                        <li className="text-[17px] space-y-8 space-x-5 font-medium hover:underline cursor-pointer text-balance ">Projects</li>
                    </NavLink>
                    <NavLink to="/About_me">
                        <li className="text-[17px] space-y-8 space-x-5 font-medium hover:underline cursor-pointer text-balance ">About me</li>
                    </NavLink>
                    <NavLink to="/Contact_me">
                        <li className="text-[17px] space-y-8 space-x-5 font-medium hover:underline cursor-pointer text-balance ">Contact me</li>
                    </NavLink>

                    <NavLink to="/My_Resume">
                        <li className="text-[17px] space-y-8 space-x-5 font-medium hover:underline cursor-pointer text-balance ">My Resume</li>
                    </NavLink>
                </ul>
                <ul className=' flex justify-between text-[17px] font-medium flex-wrap'>
                    <NavLink to="https://linkedin.com/in/sourav-kumar-bera-93254b325">
                        <li className="text-[17px] gap-2 font-medium hover:underline cursor-pointer flex "><img src={Linkedin} alt="Linkedin" className=' h-5' /><p className=' mt-0 mb-0 p-0 '>Linkedin</p></li>
                    </NavLink>
                    <NavLink to="https://mail.google.com/">
                        <li className="text-[17px] space-y-8 space-x-5 font-medium hover:underline cursor-pointer text-balance ">souravbera620595@gmail.com</li>
                    </NavLink>
                    <NavLink to="https://github.com/Sourav-student">
                        <li className="text-[17px] gap-2 font-medium hover:underline cursor-pointer flex ">
                            <img src={Github} alt="Linkedin" className=' h-5' />
                            <p>GitHub</p>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}

export default Footer;
