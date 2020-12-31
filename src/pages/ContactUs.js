import React from "react";

import ScrollTop from "../components/ScrollTop";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="contact"
      style={{ background: "#fff" }}
    >
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </div>
      </div>
      <Social socialInfo={"Send Us A Message"} />
      <Social socialInfo={"Send An Email"} />
      <Social socialInfo={"Social Media"} />
    </motion.div>
  );
};

const Social = ({ socialInfo }) => {
  return (
    <div className="hide">
      <motion.div variants={titleAnim} className="social">
        <div className="circle"></div>
        <h2>{socialInfo}</h2>
      </motion.div>
      <ScrollTop />
    </div>
  );
};

export default ContactUs;
