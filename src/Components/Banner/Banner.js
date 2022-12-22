import React from "react";
import Lottie from "lottie-react";
import animation from "../Assets/animation.json";
import { Link } from "react-router-dom";
import { FaDownload } from 'react-icons/fa';
import resume from '../Resume/Kazi-Omar-Faruque-Rahat-Resume.pdf';
import Typical from "react-typical";

const Banner = () => {
  return (
    <div className="bg-slate-200 flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl pb-20">
      <div className="lg:max-w-lg lg:pr-5 lg:mb-0 pt-10">
            <div className="max-w-xl mt-20 ml-16">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span style={{whiteSpace: 'nowrap'}}>Welcome To The Portfolio Of
                  
                  </span>
                <br className="hidden md:block" />
                <span className="text-slate-600 text-5xl">

                  {/* Kazi Omar Faruque */}
                  <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    "Kazi",
                    2000, 
                    "Omar",
                    2000,
                    "Faruque",
                    2000
                  ]}
                  ></Typical>
                  </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              A <span className='text-2xl font-bold text-slate-600'>Front-End Developer</span> with knowledge of Back-End. I love challenges and also love teamwork but can manage to work independently. Always eager to learn new traits and technologies.
              </p>
              <div className='mt-4'>
                    <a className='downlaod' href={resume} download={resume}>
                        <button className="btn btn-success">
                            Download Resume <FaDownload className='ml-3'></FaDownload> </button></a>
                    <Link to='/contact' className=' ' >
                        <button className="btn btn-success hireMe hidden lg:block mt-4" >
                            Contact With Me </button></Link>
                </div>
            </div>
            <hr className="mb-6 ml-16 border-gray-400 mt-6" />
          </div>
      <div className="lg:w-2/5 animation">
        <Lottie animationData={animation}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
