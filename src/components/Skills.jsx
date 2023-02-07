import React from "react";
import { skillsSection } from "@/portfolio";
import DisplayLottie from "./DisplayLottie";
import { Fade } from "react-reveal";
import SkillsIcon from "./SkillsIcon";
import codingPerson from "@/assets/lottie/codingPerson";

const Skills = () => {
  return (
    <div
      className="w-[90%] p-[20px_10px] m-[0px_auto] py-16 pt-32 grid lg:grid-cols-5 gap-8"
      id="skills"
    >
      <div className="col-span-3 md:col-span-2 w-full overflow-hidden">
        <Fade left duration={1000}>
          <div className="md:order-2">
            <DisplayLottie animationData={codingPerson} />
          </div>
        </Fade>
      </div>
      <div className="col-span-3 w-full overflow-hidden">
        <Fade right duration={1000}>
          <div className="ml-12 md:ml-0 md:m-5 flex flex-col">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
              Skills
            </p>
            <h2 className="lg:text-4xl md:text-3xl py-4">
              {skillsSection.title}{" "}
            </h2>
            <p className="text-[#868e96] pb-4">{skillsSection.subTitle}</p>
            <div>
              <SkillsIcon />
            </div>
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p key={i} className="flex p-1 gap-2">
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
