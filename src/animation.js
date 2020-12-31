export const pageAnimation = {
  hidden: {
    // Initial Animation to play when entering the page
    opacity: 0,
    y: 300,
  },
  show: {
    // End Animation to play after entering the page
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren", // Use to make children animation run after page animation finish
      staggerChildren: 0.25, // Use to make chidren animation run one after another
    },
  },
  exit: {
    // Animation to play when exiting the page
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const sliderAnim = {
  hidden: { x: "-130%", skew: "45deg" },
  show: { x: "100%", skew: "0deg", transition: { duration: 1, ease: "easeOut" } },
};

export const sliderContainerAnim = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollRevelAnim = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
