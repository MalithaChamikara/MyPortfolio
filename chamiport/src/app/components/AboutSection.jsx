"use client";
import Image from "next/image";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React js</li>
        <li>Node js</li>
        <li>Express js</li>
        <li>Next js</li>
        <li>Laravel</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Nalanda College,Colombo</li>
        <li>University of Ruhuna,Matara</li>
        <li>Esoft Metro Campus</li>
        <li>British Council</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fundamentals of python(University Of Moratuwa)</li>
        <li>Fundamentals of Web Development(University Of Moratuwa)</li>
        <li>Java Programming Course</li>
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
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 ">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-white text-base">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, HTML, CSS, and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>

          <div className="fflex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "Certifications"}
            >
              Certifications
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
