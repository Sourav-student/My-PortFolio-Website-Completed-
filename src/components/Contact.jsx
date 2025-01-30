import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import Github from '../images/github.png'
import Linkedin from '../images/images.png'
import Linkedin_screen from '../images/Linkedin.png'
import Github_screen from '../images/GitHub1.png'

const Contact = () => {
  return (
    <div>
      <ul className=' bg-gradiante p-10'>
        <h1 className='text-[40px] text-rose-700 font-bold'>Contact me on</h1>
        <NavLink to="https://linkedin.com/in/sourav-kumar-bera-93254b325" >
          <li className="text-[25px] gap-2 font-medium hover:underline pt-10 text-yellow-400 cursor-pointer flex "><img src={Linkedin} alt="Linkedin" className=' h-10' /><p className=' mt-0 mb-0 p-0 '>Linkedin</p></li>
          <img src={Linkedin_screen} alt="Linkedin_screen" className=' h-auto w-auto' />
        </NavLink>

        <NavLink to="https://github.com/Sourav-student">
          <li className="text-[25px] gap-2 font-medium hover:underline pt-10 text-yellow-400 cursor-pointer flex ">
            <img src={Github} alt="Linkedin" className=' h-10' />
            <p>GitHub</p>
          </li>
          <img src={Github_screen} alt="GitHub_screen" className=' h-auto w-auto' />
        </NavLink>

        <NavLink to="https://mail.google.com/">
          <li className="text-[20px] space-y-8 space-x-5 font-medium hover:underline pt-10 text-yellow-400 cursor-pointer ">souravbera620595@gmail.com</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Contact;
