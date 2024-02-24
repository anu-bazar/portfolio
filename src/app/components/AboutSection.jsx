"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End: HTML5, CSS3, JavaScript</li>
        <li>Back-End: Python, Flask, MySQL, MongoDB</li>
        <li>Version control: Git, GitHub</li>
        <li>Data analysis: ggplot2, dplyr, tidyverse (R). Pandas, Matplotlib, Seaborn (Python). Jupyter/Google CoLab.</li>
        <li>Additional tools/skills that I'm familiar with: RESTful APIs, asynchronous programming in JS, React, Unit testing, Code Review</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>MSc. Bioinformatics, Eötvös Loránd University, Budapest (HU) </li>
        <li>BSc. Biological Sciences, University of Debrecen, Budapest (HU) </li>
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CFG Software Stream - Code First Girls (2023)</li>
        <li>Data Analyst in Python Path - Dataquest.io (2020)</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Scientific and passionate data analyst with over 2.5 years of experience in research
           seeking to leverage extensive background in complex data analysis, statistics
            and pipeline automation. Proficient in Python and R programming, I have acquired 
            a solid foundation in both front-end and back-end development in the CFG Degree
             Bootcamp's Software specialization. My education has equipped me with the skills
              necessary to design, develop, and deploy full-stack web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;