import React from "react";
import { skillsSection } from "@/portfolio";

const SkillsIcon = () => {
  return (
    <div className="p-4">
      <ul className="text-5xl text-center text-[#868e96]">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <li
              key={i}
              className="inline-block mr-5 mb- hover:text-[#645beb]"
              name={skills.skillName}
            >
              <i className={skills.skillClass}></i>
              <p className="text-xs font-montserrat">{skills.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsIcon;
