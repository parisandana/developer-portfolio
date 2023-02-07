import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import ConnectIcon from "./ConnectIcon";

const Main = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div id="main" className="w-full h-screen text-center">
        <div className="max-w-[1248px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let&apos;s build something together.
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, I&apos;m <span className="text-[#551a8B]">Paris</span>{" "}
              <span className="animate-wave inline-block origin-[70%_70%]">
                {emoji("👋")}
              </span>
            </h1>
            <h2 className="py-4 text-gray-700">
              A DevOps & Fullstack Developer
            </h2>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              DevOps with background in designing, testing and implementing
              infrastructure and applications. Experienced 2+ years using source
              control tool and handling multiple VPS with Node.js backend.
              Create & maintain RPC blockhain node also AWS Lambda using
              Cloudformation and Serverless Framework. Also learning to be
              Fullstack Developer with Backend focused.
            </p>
            <ConnectIcon
              cName={
                "flex flex-wrap items-center justify-between max-w-[388px] m-auto py-4"
              }
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Main;
