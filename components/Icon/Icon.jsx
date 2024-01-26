import React from "react";
import { string } from "prop-types";
import isEqual from "lodash/isEqual";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaCircleNodes } from "react-icons/fa6";
import { BsDiagram3Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { AiOutlineTool } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const Icon = ({ icon }) => {
  return (
    <>
      {isEqual(icon, "HAMBURGER") ? (
        <GiHamburgerMenu />
      ) : isEqual(icon, "CROSS") ? (
        <RxCross2 />
      ) : isEqual(icon, "STAR") ? (
        <FaStar />
      ) : isEqual(icon, "STAR_EMPTY") ? (
        <FaRegStar />
      ) : isEqual(icon, "GESTION") ? (
        <BsDiagram3Fill />
      ) : isEqual(icon, "LEADER") ? (
        <FaDiagramProject />
      ) : isEqual(icon, "COMMUNICATION") ? (
        <FaCircleNodes />
      ) : isEqual(icon, "USER") ? (
        <FaUserAlt />
      ) : isEqual(icon, "TEAM") ? (
        <FaUsers />
      ) : isEqual(icon, "HTML") ? (
        <FaHtml5 />
      ) : isEqual(icon, "CSS") ? (
        <FaCss3Alt />
      ) : isEqual(icon, "JAVASCRIPT") ? (
        <DiJavascript />
      ) : isEqual(icon, "REACT") ? (
        <FaReact />
      ) : isEqual(icon, "NODE") ? (
        <FaNodeJs />
      ) : isEqual(icon, "PEN") ? (
        <FaPen />
      ) : isEqual(icon, "MAIL") ? (
        <IoMail />
      ) : isEqual(icon, "BUILDING") ? (
        <FaBuilding />
      ) : isEqual(icon, "PHONE") ? (
        <FaPhone />
      ) : isEqual(icon, "MESSAGE") ? (
        <FaMessage />
      ) : isEqual(icon, "CODE") ? (
        <FaCode />
      ) : isEqual(icon, "TOOLS") ? (
        <AiOutlineTool />
      ) : isEqual(icon, "TALK") ? (
        <FaRegCommentDots />
      ) : isEqual(icon, "SEND") ? (
        <FaPaperPlane />
      ) : null}
    </>
  );
};

Icon.propTypes = {
  icon: string.isRequired,
};

export default Icon;