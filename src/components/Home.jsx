import React, { useEffect, useState } from 'react';
import Skills from './skills';
import Projects2 from './projects2';
import Linkedin from '../images/download (1).png';
import Github from '../images/download.jpg';
import My_photo from '../assets/my_photo.jpg';
import './style.css';

const Home = () => {
    const name = "Sourav Kumar Bera";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const animate = () => {
            // Update displayed text based on the current index
            setDisplayedText(name.slice(0, index));

            if (!isDeleting && index < name.length) {
                // Typing animation
                setIndex(prev => prev + 1);
            } else if (isDeleting && index > 0) {
                // Deleting animation
                setIndex(prev => prev - 1);
            } else {
                // Switch direction when typing or deleting is complete
                setIsDeleting(prev => !prev);
            }
        };

        // Speed: typing is slower, deleting is faster
        const speed = isDeleting ? 400 : 400;
        const timeout = setTimeout(animate, speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, name]);

    return (
        <>
            <main>
                <div className="flex flex-wrap justify-center p-3 space-x-10 pt-10 pb-10 bg-gradiante">
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[26px] w-auto h-12 flex gap-3 cursor-pointer bg-gradiante5'>{displayedText}|</p>
                        <img src={My_photo} alt="My Photo" className="h-[300px] mt-[20px] rounded-3xl animinate-bounce2 cursor-pointer border-amber-400 border-[6px] hover:transition-all" />
                    </div>
                    <div>
                        <p className="text-cyan-50 font-mono text-[45px]">
                            I am a <b className=' text-purple-500 font-sans'>Full Stack Web Developer</b>
                        </p>
                        <p className="text-cyan-50 font-mono text-25">
                            Weaving together Front-End magic and Back-End wizardry to create captivating web experiences.
                        </p>
                        <h1 className="text-[35px] font-semibold underline pb-2 flex gap-3 bg-gradiante7">About me</h1>
                        <p className="text-cyan-50 font-mono tx-size">
                            Hello,My name is Sourav Kumar Bera a B.Tech Student at Haldia Institute Of Technology, Haldia. I am corrently pursuing Undergraduate degree in Computer Science and Engineering (2024-2028), with a keen intrest in exploring the latest advancements in technology.
                        </p>
                    </div>
                </div>
                <div className='flex gap-5 bg-gradiante p-3 pl-12'>
                    <a href="https://linkedin.com/in/sourav-kumar-bera-93254b325" target="_blank"><img src={Linkedin} alt="Linkedin" className='h-7' /></a>
                    <a href="https://github.com/Sourav-student" target="_blank"><img src={Github} alt="Github" className='h-7' /></a>
                </div>
                <Skills />
                <Projects2 />
            </main>
        </>
    );
}

export default Home;
