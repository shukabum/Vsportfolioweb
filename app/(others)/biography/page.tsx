"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

import Head from "next/head";
import useCollapse from "react-collapsed";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./bio.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>Shubham - About</title>
        <meta name="description" content="About Shubham" />
      </Head>
      <div>
        <BoxLayout sideBar={<FlexSideBar />} navTitle="Biography.js">
          <div className={styles.About}>
            <div className={styles.AboutInfo}>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code></code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m Shubham Sharma, a Software Developer.</code>
                </span>
                <br />
               
                
              </pre>
            </div>
            <div className={styles.AboutCodePreview}></div>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}

const FlexSideBar = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setFirstDrawerOpen(false);
      setSecondDrawerOpen(false);
    }
  }, []);

  return (
    <div
      className={[sidebarStyles.SideBar, sidebarStyles.SideBarFlex].join(" ")}
    >
      <div className={sidebarStyles.SideBarFlexLeft}>
        <RiTerminalBoxFill fill="#607B96" size={20} />
        <RiGamepadFill fill="#607B96" size={20} />
        <RiUser4Fill fill="#607B96" size={20} />
      </div>
      <div className={sidebarStyles.SideBarFlexRight}>
        <Sidebar
          contents={[
            {
              title: "personal-info",
              content: [
                <Dropdown
                  key={0}
                  folderFill="#E99287"
                  title="bio"
                  entries={["Biography"]}
                  isActive={true}
                />,
                <Dropdown
                  key={1}
                  folderFill="#43D9AD"
                  title="interests"
                  entries={["Hobbies"]}
                />,
                <Dropdown
                  key={2}
                  folderFill="#3A49A4"
                  title="education"
                  entries={["High-school", "University"]}
                />,
              ],
            },
            {
              title: "contacts",
              content: [
                <a key={0} href="mailto:s_sharma2@me.iitr.ac.in">
                  <IoMail fill="#607b96" />
                  <span>s_sharma2@me.iitr.ac.in</span>
                </a>,
                <a key={1} href="tel:+919418479698">
                  <IoCall fill="#607b96" />
                  <span>(+91) 9418479698</span>
                </a>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
