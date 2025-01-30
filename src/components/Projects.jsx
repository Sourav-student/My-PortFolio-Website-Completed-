import React from 'react';
import './style.css';
import Rock from '../images/rock.png';
import weather from '../images/weather.png';
import Tic from '../images/Tic.png';
import Spotify from '../images/spotify.png';
import Calculator from '../images/calculator.png';
import recipe from '../images/recipe.png';
import qr from '../images/qr.png';

const Projects = () => {
  return (
    <>
      <div className='bg-gradiante'>
        <h1 className="text-[35px] flex font-semibold pb-2 pt-10 pl-3 hover:text-[40px] gap-2 text-[#bbff00]">
          My Some Projects
        </h1>
        <div className="flex flex-wrap gap-[50px] p-8">
          <div className='cursor-pointer max-w-[700px] min-w-[100px] '>
            <a href="https://sourav-rock-paper-scissors.vercel.app/ " target="_blank">
              <img src={Rock} alt="Rock Paper Sciosser" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Rock Paper Scissors</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px]'>
            <a href="https://forecasthub.vercel.app/" target="_blank">
              <img src={weather} alt="task management Website" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Weather Website</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px]'>
            <a href="https://qrcodegenerator-inky.vercel.app/" target="_blank">
              <img src={qr} alt="task management Website" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>QR Code Generator</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px]'>
            <a href="https://foods-recipe-alpha.vercel.app/" target="_blank">
              <img src={recipe} alt="task management Website" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Get Recipe</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px] '>
            <a href="https://sourav-tic-tac-toe.vercel.app/" target="_blank">
              <img src={Tic} alt="Tic Tac Toe" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Tic Tac Toe</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px]'>
            <a href="/" target="_blank">
              <img src={Spotify} alt="Spotify" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Spotify</p>
            </a>
          </div>
          <div className='cursor-pointer max-w-[700px] min-w-[100px] '>
            <a href="calculate-ecru.vercel.app" target="_blank">
              <img src={Calculator} alt="Calculator" className=' h-auto w-auto rounded-xl border-[3px] border-yellow-500 transition-all3 ' />
              <p className=' font-bold text-[25px] text-yellow-300'>Calculator</p>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Projects;
