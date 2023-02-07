import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { socialMediaLinks } from "@/portfolio";

const ConnectIcon = ({ cName }) => {
  return (
    <div className={cName}>
      <Link
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
      >
        <i className="fab fa-linkedin-in bg-linkedin hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        <i className="fab fa-github bg-github hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={socialMediaLinks.gitlab}
        target="_blank"
        rel="noopener noreferrer"
        title="Gitlab"
      >
        <i className="fab fa-gitlab bg-gitlab hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={`mailto:${socialMediaLinks.gmail}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
      >
        <i className="fa-solid fa-envelope bg-google hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={socialMediaLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <i className="fab fa-facebook-f bg-faceBook hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={socialMediaLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <i className="fab fa-instagram bg-instagram hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
      <Link
        href={socialMediaLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        <i className="fab fa-twitter bg-twitter hover:bg-black shadow-lg shadow-gray-400 icon"></i>
      </Link>
    </div>
  );
};

export default ConnectIcon;
