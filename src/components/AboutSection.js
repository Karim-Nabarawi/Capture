import React from "react";

//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

//Import images
import home1 from "../img/home1.png";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas you have. We have professionals with amazaing skills
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </div>
      <Wave />
    </div>
  );
};
export default AboutSection;
