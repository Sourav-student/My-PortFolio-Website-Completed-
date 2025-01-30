import React from 'react';
import bootstrap from '../images/bootstrap.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import mongodb from '../images/mongodb.png'
import nodejs from '../images/nodejs.png'
import expressjs from '../images/expressjs.png'
import react from '../images/react.png'
import './style.css'

const skills = () => {
    const skills = document.querySelectorAll("#skills");
    skills.forEach((skill) => {
        skill.addEventListener("touchstart", () => {
            document.querySelectorAll(".skillsAnimation").forEach((skilll) => {
                skilll.style.animation = "skillsAnimation 1.5s linear 0s 1 alternate";
                skilll.style.opacity = "1";
                skilll.style.top = "0";
            })
        })

        skill.addEventListener("wheel", () => {
            document.querySelectorAll(".skillsAnimation").forEach((skilll) => {
                skilll.style.animation = "skillsAnimation 1.5s linear 0s 1 alternate";
                skilll.style.opacity = "1";
                skilll.style.top = "0";
            })
        })
    })
    return (
        <>
            <div className="p-3 pb-2 pt-10 space-x-10 bg-gradiante">
                <h1 className="text-[35px] text-orange-600 flex gap-2 hover:text-[40px] transition-all font-semibold">My Skills</h1>

                <div className="flex flex-wrap gap-[20px] justify-center" id='skills'>
                    <div className="h-[280px] bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 bg-stone-300 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={html} alt="HTML5" className=' h-[200px] ' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 '>HTML5</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={css} alt="CSS" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>CSS</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={javascript} alt="JavaScript" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>JavaScript</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={mongodb} alt="MongoDB" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>MongoDB</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={expressjs} alt="Express Js" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>Express Js</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={react} alt="React" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>React</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills skillsAnimation" >
                        <img src={nodejs} alt="Node Js" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>Node Js</p>
                    </div>

                    <div className="h-[280px] bg-stone-300 bg-opacity-30 backdrop-blur-3xl backdrop-brightness-200 w-[280px] rounded-[50px] cursor-pointer flex flex-col justify-center items-center m-8 ml-0 border-[3px] border-x-orange-400 border-y-orange-600 hover:bg-yellow-300 transition-all hover:-translate-y-3.5 shadow-skills  skillsAnimation" >
                        <img src={bootstrap} alt="Bootstrap" className=' h-[150px]' />
                        <p className=' text-amber-900 font-extrabold text-[20px] border-[2px] border-black rounded-xl bg-opacity-35 bg-orange-400 font-sans p-2 mt-[30px] '>Bootstrap</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default skills;
