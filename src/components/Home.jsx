import React from 'react'
import pic from "/pfp.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className="flex flex-col md:flex-row">
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className="text-xl">Welcome to My Digital Space</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hey! I'm a</h1>
                {/* <span className='text-red-700 font-bold'>Developer</span> */}
                <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
            I specialize in web development, software engineering, and problem-solving. My journey in tech has been filled with exciting projects and continuous learning. Explore my portfolio to see my work and growth over the years. I'm always open to new opportunities. Let's connect and create something amazing together!
            </p>
            <br />
            {/* Social media icons */}
            <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
                <h1 className="font-bold text-center">Get in touch</h1>
                <ul className='flex space-x-5'>
                    <li>
                        <a href="https://www.linkedin.com/in/shxxxam/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a>
                    </li>
                    <li>
                        <a href="https://github.com/shxxxam" target='_blank'><FaGithub className='text-2xl cursor-pointer' /></a></li>
                    <li>
                        <a href="https://x.com/ShxxxaM" target='_blank'><FaSquareXTwitter className='text-2xl cursor-pointer' /></a></li>
                    <li>
                        <a href="mailto:shxxxam@gmail.com" target='_blank'><MdEmail className='text-2xl cursor-pointer' /></a></li>
                </ul>
            </div>
            <div className='space-y-2'>
                <h1 className="font-bold">Currently working on</h1>
                <div className='flex space-x-5'>
                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                    <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                    <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                    <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                </div>
            </div>
            </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
            <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="Profile Photo" />
        </div>
        </div>
    </div>

    <hr />
    </>
  )
}

export default Home