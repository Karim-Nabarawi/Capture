import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavBarLink title={"1. About us"} goTo="/" />
        </li>
        <li>
          <NavBarLink title={"2. Our Work"} goTo="/work" />
        </li>
        <li>
          <NavBarLink title={"3. Contact us"} goTo="/contact" />
        </li>
      </ul>
    </nav>
  );
};

const NavBarLink = ({ title, goTo }) => {
  const { pathname } = useLocation();
  return (
    <>
      <NavLink to={goTo}>{title}</NavLink>
      <motion.div
        transition={{ duration: 0.75 }}
        initial={{ width: "0%" }}
        animate={{ width: pathname === goTo ? "50%" : "0%" }}
        className="line"
      ></motion.div>
    </>
  );
};
export default Nav;
