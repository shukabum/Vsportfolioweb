"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiEthereum,
  SiNodedotjs,
  SiOpensourceinitiative,
  SiJavascript,
  SiBlender,
  SiGithub,
  SiPython,
  SiRust,
  SiCplusplus,
} from "react-icons/si";
import Card from "@/components/Card/Card";
import styles from "./Projects.module.scss";

import projects from "@/extras/projects";
import Head from "next/head";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProjectTypes } from "@/types";

export default function Projects() {
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<ProjectTypes[]>([]);

  const filter = (filt: string) => {
    if (filters.includes(filt)) {
      return setFilters((valv) => [
        ...valv.filter((targetFilt) => targetFilt !== filt),
      ]);
    } else {
      return setFilters((filts) => [...filts, filt]);
    }
  };

  useEffect(() => {
    if (filters.length) {
      let filtedProjects = projects.filter((project) => {
        let vals = project.category.filter((projectCategory) => {
          if (filters.includes(projectCategory)) return true;
        });
        if (vals.length) return true;
      });
      setFilteredList(filtedProjects);
    } else {
      setFilteredList(projects);
    }
  }, [filters]);

  return (
    <>
      <Head>
        <title>Shubham - Projects</title>
        <meta name="description" content="Works from Shubham" />
      </Head>
      <div>
        <BoxLayout
          sideBar={
            <Sidebar
              contents={[
                {
                  title: "projects",
                  content: [
                    {
                      icon: <SiReact size={20} />,
                      name: "React",
                    },
                    {
                      icon: <SiHtml5 size={20} />,
                      name: "HTML5",
                    },
                    {
                      icon: <SiGithub size={20} />,
                      name: "Contribution",
                    },
                    {
                      icon: <SiNextdotjs size={20} />,
                      name: "NextJs",
                    },
                    {
                      icon: <SiTypescript size={20} />,
                      name: "Typescript",
                    },
                    {
                      icon: <SiNodedotjs size={20} />,
                      name: "NodeJs",
                    },
                    {
                      icon: <SiJavascript size={20} />,
                      name: "Javascript",
                    },
                    {
                      icon: <SiBlender size={20} />,
                      name: "Blender",
                    },
                    {
                      icon: <SiPython size={20} />,
                      name: "Python",
                    },
                    {
                      icon: <SiRust size={20} />,
                      name: "Rust",
                    },
                    {
                      icon: <SiCplusplus size={20} />,
                      name: "C++",
                    },
                  ].map((stack, index) => (
                    <div key={index}>
                      <input
                        id={`entry1${index}`}
                        type="checkbox"
                        checked={filters.includes(stack.name)}
                        onChange={() => filter(stack.name)}
                      />
                      <label htmlFor={`entry1${index}`}>
                        {stack.icon}
                        <span>{stack.name}</span>
                      </label>
                    </div>
                  )),
                },
              ]}
            />
          }
          navTitle={filters.length ? filters.join("; ") : "Projects.js"}
          resetEntries={() => setFilters([])}
        >
          <div className={styles.ProjectPreviews}>
            {React.Children.toArray(
              filteredList.map((project, index) => {
                return (
                  <div className={styles.ProjectPreviewsBlock}>
                    <div className={styles.ProjectPreviewsBlockHeader}>
                      <span>{`//`}</span>
                      <span>{`_${project.name}`}</span>
                    </div>
                    <Card
                      alt={project.name}
                      previewLink={project.previewLink}
                      mainType={project.mainType}
                      previewImg={project.previewImg}
                      description={project.description}
                      githubUrl={project.githubUrl}
                    />
                  </div>
                );
              })
            )}
          </div>
        </BoxLayout>
      </div>
    </>
  );
}
