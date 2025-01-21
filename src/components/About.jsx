import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-500">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Andrea, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I'm a Frontend Developer with 2 years of experience. I've worked
              with Angular, React, TypeScript, and have some experience with
              Node.js.
            </p>
            <br />
            <p>
              I’m passionate about building engaging user experiences, solving
              challenges, and continuously learning new technologies. I’m eager
              to contribute to impactful software development projects and
              collaborate with teams to bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
