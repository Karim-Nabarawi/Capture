import React, { useState } from "react";

// Utilities
import { useScroll } from "./useScroll";

// Animation
import { motion, AnimateSharedLayout } from "framer-motion";
import { scrollRevelAnim } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div variants={scrollRevelAnim} animate={controls} initial="hidden" ref={element} className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Question
          question={"How do i start?"}
          shortAnswer={"Lorem ipsum dolor sit amet."}
          longAnswer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro."}
        />
        <Question
          question={"What Products do you offer?"}
          shortAnswer={"Lorem ipsum dolor sit amet."}
          longAnswer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro."}
        />
        <Question
          question={"Different Payment Methods"}
          shortAnswer={"Lorem ipsum dolor sit amet."}
          longAnswer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro."}
        />
        <Question
          question={"Daily Schedule"}
          shortAnswer={"Lorem ipsum dolor sit amet."}
          longAnswer={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, porro."}
        />
      </AnimateSharedLayout>
    </motion.div>
  );
};

const Question = ({ question, shortAnswer, longAnswer }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{question}</motion.h4>
      {toggle && (
        <div className="answer">
          <p>{shortAnswer}</p>
          <p>{longAnswer}</p>
        </div>
      )}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default FaqSection;
