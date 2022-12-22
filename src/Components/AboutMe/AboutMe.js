import React from 'react';
import image from '../Images/DSC_0025.JPG'

const AboutMe = () => {
    return (
        <div 
        id="about"
      style={{ padding: "100px" }}
      className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-300"
    >
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2 ml-16">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-2">
            <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About Me
            </h2>
          </div>
          <div className="max-w-xl mb-6">
              <p className="text-base text-gray-700 md:text-lg font-bold">
              I am from Chittagong, Bangladesh.I am a CSE student and a passionate <span className='text-2xl text-slate-500'>Front-End Developer</span> with knowledge of Back-End. I love challenges and also love teamwork but I can manage to work independently. I am always eager to learn new traits and technologies.
              </p>
            </div>
        </div>
        <div className=''>
          <img
            style={{height: '480px',width: '400px'}}
            className="w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default AboutMe;