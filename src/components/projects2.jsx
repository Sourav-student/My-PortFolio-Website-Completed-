import React from 'react';
import './style.css'
import Rock from '../images/rock.png'
import weather from '../images/weather.png'

const projects2 = () => {
    return (
        <>
        <div className='bg-gradiante'>
            <h1 className="text-[35px] flex font-semibold pb-2 pt-10 pl-3 hover:text-[40px] gap-2 text-[#b7ec06]">
               My Some Projects
                </h1>
            <div className="flex flex-wrap gap-[50px] p-8">
                <div className='cursor-pointer max-w-[700px] min-w-[100px] '>
                    <a href="https://sourav-rock-paper-scissors.vercel.app/" target="_blank">
                        <img src={Rock} alt="Rock Paper Sciosser" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 ' />
                        <p className=' font-bold text-[20px] text-yellow-300'>Rock Paper Scissors(HTML, CSS and JavaScript- Front-End project)</p>
                    </a>
                </div>
                <div className='cursor-pointer max-w-[700px] min-w-[100px]'>
                    <a href="https://forecasthub.vercel.app/" target="_blank">
                        <img src={weather} alt="task management Website" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 '/>
                        <p className=' font-bold text-[20px] text-yellow-300'>Weather Website named as Forecasthub(HTML, CSS JavaScript and Rest API - Front-End project)</p>
                    </a>
                </div>
            </div>
            <p className=' font-bold text-25 text-yellow-300 p-10'>
                To see more projects made by me go to <b>'Projects'</b> section!!
            </p>
            </div>
        </>
    );
}

export default projects2;
