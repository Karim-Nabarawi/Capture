import React, { useEffect } from "react";

//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

// Animation
import { motion, useAnimation } from "framer-motion";
import { scrollRevelAnim } from "../animation";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.45 });
  useEffect(() => {
    view ? controls.start("show") : controls.start("hidden");
  }, [view, controls]);
  return (
    <motion.div variants={scrollRevelAnim} animate={controls} initial="hidden" ref={element} className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <Card imgSrc={clock} title={"Efficient"} text={"Lorem ipsum dolor sit amet."} />
          <Card imgSrc={teamwork} title={"Teamwork"} text={"Lorem ipsum dolor sit amet."} />
          <Card imgSrc={diaphragm} title={"Diaphragm"} text={"Lorem ipsum dolor sit amet."} />
          <Card imgSrc={money} title={"Affordable"} text={"Lorem ipsum dolor sit amet."} />
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Services" />
      </div>
    </motion.div>
  );
};

const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
export default ServicesSection;
