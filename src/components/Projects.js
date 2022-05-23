import React from "react";

const Projects = () => {
  return (
    <div name="projects" className="bg-[#E9C46A] w-full md:h-screen">
      Projects
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Projects
          </p>
          <p className="py-6">Some of the things I've done!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
