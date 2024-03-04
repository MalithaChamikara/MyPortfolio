"use client";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Next js Portfolio Website",
    description: "My Personal portfolio",
    images: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Simple React Blog site",
    description: "Create your own blog and post it",
    images: "/images/projects/2.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Sports Unit Poject",
    description: "Final Year project of my university",
    images: "/images/projects/3.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Travel Managemengt",
    description: "Tourism aid desktop application using java",
    images: "/images/projects/4.png",
    tag: ["All", "Desktop"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  console.log(projectsData);
  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });
  console.log(filteredProjects);

  const handleTagChange = (newTag) => {
    {
      setTag(newTag);
    }
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Desktop"
          onClick={handleTagChange}
          isSelected={tag === "Desktop"}
        />
      </div>

      <div className="grid gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.images}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
