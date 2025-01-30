import React, { useEffect, useState } from 'react';
import Skills from './skills';
import My_photo from '../assets/my_photo.jpg';
import './style.css';
import SkillsC from './SkillsC';

const About = () => {
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
    const speed = isDeleting ? 100 : 200;
    const timeout = setTimeout(animate, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, name]);

  return (
    <>
      <main>
        <div className="flex flex-wrap justify-center p-3 bg-gradiante space-x-10 pt-10 pb-10">
          <div className='flex flex-col'>
            <p className='font-semibold text-[26px] w-auto h-12 flex gap-3 cursor-pointer bg-gradiante5'>{displayedText}|</p>
            <img src={My_photo} alt="My Photo" className="h-[300px] mt-[20px] rounded-2xl animinate-bounce2 cursor-pointer border-amber-400 border-[6px] hover:transition-all" />
          </div>
          <div>
            <h1 className="text-[35px] font-semibold underline pb-2 flex gap-3 bg-gradiante7">About me</h1>
            <p className="text-cyan-50 font-mono tx-size">
              Hello,My name is Sourav Kumar Bera a B.Tech Student at Haldia Institute Of Technology, Haldia. I am corrently pursuing Undergraduate degree in Computer Science and Engineering (2024-2028), with a keen intrest in exploring the latest advancements in technology.
            </p>
            <p className="text-cyan-50 font-mono tx-size mt-10">
              Simultaneously, I've also ventured into the world of web development, where I've honed my skills in programming languages such as HTML, CSS, JavaScript, and frameworks like React and Node.js.
            </p>
            <p className="text-cyan-50 font-mono tx-size mt-10">
              With a strong foundation in computer science and a creative flair for coding, I'm eager to leverage my technical expertise to build innovative solutions that make a meaningful impact. I'm excited to collaborate with like-minded individuals, learn from industry experts, and continue growing as a developer and engineer.
            </p>
            <p className="text-cyan-50 font-mono tx-size mt-10">
              I'm excited to collaborate on projects, learn from others, and contribute my skills to create impactful digital experiences. Let's connect and explore the world of technology together!"
            </p>
            <p className="text-cyan-50 font-mono tx-size mt-10">
              <b>Interests</b>
              <hr />
              - Participating in hackathons and coding challenges
              <br /><br />
              - Attending web development conferences and meetups
              <br /><br />
              - Contributing to open-source projects
              <br /><br />
              - Mentoring junior developers
              <br /><br />
              - Learning new programming languages and technologies
              <br /><br />
            </p>
          </div>
        </div>
      </main>
      <Skills />
      <SkillsC />
    </>
  )
}

export default About