import React, { useEffect, useState } from "react";

// Animation
import { motion, AnimateSharedLayout, useAnimation } from "framer-motion";
import { scrollRevelAnim } from "../animation";
import { useInView } from "react-intersection-observer";

const FaqSection = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.45 });
  useEffect(() => {
    view ? controls.start("show") : controls.start("hidden");
  }, [view, controls]);

  return (
    <motion.div variants={scrollRevelAnim} animate={controls} initial="hidden" ref={element} className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
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
