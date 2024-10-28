import ProjectCard from "./ProjectCard";

import { projects } from "@/lib/consts";

export default function Projects() {
  return (
    <div className="w-full mb-10 flex flex-col justify-start items-center">
      <main className="p-6 max-sm:p-0 mx-auto max-w-4xl bg-black text-white mt-32 max-sm:mt-14 w-2/3 max-sm:w-5/6 flex-grow flex-col">
        <div className="flex flex-col gap-2 mb-20">
          <p className="text-5xl max-sm:text-4xl font-bold">Projects</p>
          <p className="text-md max-sm:text-sm font-semibold text-zinc-400">
            Explore some of my projects
          </p>
        </div>
        <div className="flex flex-col gap-8 text-lg text-justify">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              backgroundImage={project.backgroundImage}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              linkToProject={project.linkToProject}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
