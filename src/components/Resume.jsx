import React from 'react';
import Resume1 from '../images/Resume1.jpg'
import qr from '../images/download (2).png'
const Resume = () => {
  return (
    <>
    <div className='flex p-5 flex-col items-center text-white bg-gradiante'>
      <p>My Digital Resume</p>
      <img src={qr} alt="QR_Resume" />
    </div>
      <div className='h-auto w-auto flex justify-center p-5 transition-all bg-gradiante'>
        <img src={Resume1} alt="My Resume" className='h-auto w-auto border-[3px] border-yellow-600' />
      </div>
    </>
  );
}

export default Resume;
