import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <NavLink
        target={"_blank"}
        className={style.Navlink}
        to={"https://github.com/Carlitossaul/portfolio.git"}
      >
        <p className={style.p}>Built by Daniel Ocampo!</p>
      </NavLink>
    </div>
  );
};

export default Footer;
