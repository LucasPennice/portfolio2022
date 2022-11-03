/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from "react";
import { useState, useEffect } from "react";
import { motion as m, MotionValue, useScroll } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import DesktopWorkSection from "./Desktop/DesktopWorkSection";

export interface WorkExperience {
  company: string;
  role: string;
  from: string;
  to: string;
}

const workExperienceArr: WorkExperience[] = [
  { company: "Creator Set", from: "2021", to: "2022", role: "Front End Dev" },
  { company: "Tracker Wallet", from: "2021", to: "2022", role: "Front End Dev" },
];

const WorkSection = ({ openDetails }: { openDetails(workExperience: WorkExperience): void }) => {
  return (
    <div style={{ maxWidth: 2500, margin: "0 auto" }} className="w-full flex-col justify-start items-center">
      <DesktopWorkSection openDetails={openDetails} workExperienceArr={workExperienceArr} />
      <MobileWork openDetails={openDetails} />
    </div>
  );
};

function MobileWork({ openDetails }: { openDetails(workExperience: WorkExperience): void }) {
  return <div className="xl:hidden block">Mobile</div>;
}

export default WorkSection;
