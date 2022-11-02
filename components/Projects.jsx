import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolioImg from "../public/assets/projects/portfolio.png";
import ProjectItem from "./ProjectItem";
import horizonImg from "../public/assets/projects/horizon.png";

const Projects = () => {
  return (
    <div id="projects" className=" w-full">
      <div className=" max-w-[1240] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Projets / Réalisations
        </p>
        <h2 className="py-4">Ce que j'ai réalisé</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio SIO"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            techno="NextJS & Tailwind"
          />
          <ProjectItem
            title="Alerte horizon"
            backgroundImg={horizonImg}
            projectUrl="/portfolio"
            techno="Symfony & bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
