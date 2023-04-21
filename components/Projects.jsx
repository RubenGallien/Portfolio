import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import mediatekDocImg from "../public/assets/projects/MediatekDocuments.png";
import horizonImg from "../public/assets/projects/horizon.png";
import mediatekImg from "../public/assets/projects/mediatek.png";
import GrisbiImg from "../public/assets/projects/grisbi.png";

const Projects = () => {
  return (
    <div id="project" className=" w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Projets / Réalisations
        </p>
        <h2 className="py-4">Ce que j&apos;ai réalisé</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Alerte horizon"
            backgroundImg={horizonImg}
            projectUrl="/horizon"
            techno="Symfony & bootstrap"
            categorie="Stages"
          />
          <ProjectItem
            title="Mediatek Formations"
            backgroundImg={mediatekImg}
            projectUrl="/mediatek"
            techno="Symfony / Twig"
            categorie="Epreuve E5"
          />
          <ProjectItem
            title="Grisbi Api"
            backgroundImg={GrisbiImg}
            projectUrl="/grisbi"
            techno="C# / React"
            categorie="Stages"
          />
            <ProjectItem
            title="Mediatek Documents"
            backgroundImg={mediatekDocImg}
            projectUrl="/mediatekDoc"
            techno="C# / PHP "
            categorie="Epreuve E5"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
