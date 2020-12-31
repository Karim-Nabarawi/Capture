import React from "react";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, sliderAnim, sliderContainerAnim } from "../animation";
import { useScroll } from "../components/useScroll";

import ScrollTop from "../components/ScrollTop";

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="work"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainerAnim}>
        <motion.div variants={sliderAnim} className="frame1"></motion.div>
        <motion.div variants={sliderAnim} className="frame2"></motion.div>
        <motion.div variants={sliderAnim} className="frame3"></motion.div>
        <motion.div variants={sliderAnim} className="frame4"></motion.div>
      </motion.div>
      <Movie title={"The Athelete"} imgSrc={athlete} goTo={"./work/the-athlete"} />
      <MovieAnim title={"The Racer"} imgSrc={theracer} goTo={"./work/the-racer"} />
      <MovieAnim title={"Good Times"} imgSrc={goodtimes} goTo={"./work/good-times"} />
      <ScrollTop />
    </motion.div>
  );
};

const MovieAnim = ({ title, imgSrc, goTo }) => {
  const [element, controls] = useScroll();
  return (
    <motion.div variants={fade} animate={controls} initial="hidden" ref={element}>
      <div className="movie">
        <motion.h2 variants={fade}>{title}</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to={goTo}>
          <div className="hide">
            <motion.img variants={photoAnim} src={imgSrc} alt={title} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const Movie = ({ title, imgSrc, goTo }) => {
  return (
    <div className="movie">
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={goTo}>
        <div className="hide">
          <motion.img variants={photoAnim} src={imgSrc} alt={title} />
        </div>
      </Link>
    </div>
  );
};
export default OurWork;
