import React from 'react';
import { NavLink } from 'react-router-dom';
import burger from './burger.svg'
import close from './close.svg'
import '../App.css'
import './style.css'
const Nav = () => {
    return (
        <>
            <div className='tx-size2 sticky top-[0px] bg-gradiante z-50'>
                <div className=' flex justify-between pl-3 pr-3'>
                    <h1 className="bg-gradiante4 cursor-pointer font-[500] p-2 flex justify-center max-lg:text-[22px] 
                    " >Sourav's Portfolio</h1>
                    <nav>
                        <ul className=' flex gap-5 justify-center align-middle text-[27px] font-semibold text-yellow-300 max-lg:text-[22px] max-md:hidden'>
                            <NavLink to="/"><li className=' pt-2'>Home</li></NavLink>
                            <NavLink to="/Projects"><li className=' pt-2'>Projects</li></NavLink>
                            <NavLink to="/About_me"><li className=' pt-2'>About Me</li></NavLink>
                            <NavLink to="/Contact_me"><li className=' pt-2'>Contact Me</li></NavLink>
                            <NavLink to="/My_Resume"><li className=' pt-2'>Resume</li></NavLink>
                        </ul>
                    </nav>
                    <div className=' cursor-pointer flex justify-center align-middle md:hidden' onClick={() => {
                        document.getElementById("nav").style.display = "block";
                        document.getElementById("nav").style.top = "auto";
                    }}>
                        <img src={burger} alt="hame_burger" className=' h-12' />
                    </div>
                </div>
                <nav className=" text-white w-[100vw] absolute top-[-500px] bg-gradiante flex gap-5 display-none" id='nav'>
                    <img src={close} alt="cut navbar" className=' h-15 cursor-pointer absolute right-3' onClick={() => {
                        document.getElementById("nav").style.display = "none";
                        document.getElementById("nav").style.top = "-500px";
                    }} />

                    <ul className=' flex flex-col gap-5 text-yellow-300 justify-center text-center'>
                        <NavLink to="/">
                            <li className="text-[30px] pt-2.5 pb-2.5 space-y-8 space-x-5 font-semibold cursor-pointer w-[100vw] text-balance block hover:bg-cyan-600  mt-[35px]">Home</li>
                        </NavLink>
                        <NavLink to="/Projects">
                            <li className="text-[30px] pt-2.5 pb-2.5 space-y-8 space-x-5 font-semibold cursor-pointer w-[100vw] text-balance block hover:bg-cyan-600  ">Projects</li>
                        </NavLink>
                        <NavLink to="/About_me">
                            <li className="text-[30px] pt-2.5 pb-2.5 space-y-8 space-x-5 font-semibold cursor-pointer w-[100vw] text-balance block hover:bg-cyan-600  ">About me</li>
                        </NavLink>
                        <NavLink to="/Contact_me">
                            <li className="text-[30px] pt-2.5 pb-2.5 space-y-8 space-x-5 font-semibold cursor-pointer w-[100vw] text-balance block hover:bg-cyan-600  ">Contact me</li>
                        </NavLink>

                        <NavLink to="/My_Resume">
                            <li className="text-[30px] pt-2.5 pb-2.5 space-y-8 space-x-5 font-semibold cursor-pointer w-[100vw] text-balance block hover:bg-cyan-600  ">My Resume</li>
                        </NavLink>

                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Nav;
