import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import img from "../../assets/profile-pic.png";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import { TiUser } from "react-icons/ti";
import { RiHome4Fill } from "react-icons/ri";

import React, { useState } from "react";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className={style.container}>
      <div className={style.divLogo}>
        <Link to="/">
          <img className={style.logo} src={img} alt={"logo"} />
        </Link>
      </div>
      <div className={style.links}>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/" && style["link-active"]
          }`}
          to="/"
        >
          <RiHome4Fill className={style.icono1} /> Home
        </Link>

        <Link
          className={`${style.link} ${
            window.location.pathname === "/about" && style["link-active"]
          }`}
          to="/about"
        >
          <TiUser className={style.icono2} /> About
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/portfolio" && style["link-active"]
          }`}
          to="/portfolio"
        >
          <GoBriefcase className={style.iconos} /> Portfolio
        </Link>


        <Link
          className={`${style.link} ${
            window.location.pathname === "/contact" && style["link-active"]
          }`}
          to="/contact"
        >
          <FaEnvelope className={style.iconos} /> Contact
        </Link>

        <Link to={"./pdf"} className={style.link}>
          <div className={style.divButton}>
            <button className={style.button}>
              <BsFillPersonLinesFill className={style.iconos} />
              CV-RESUME
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

// <div className={style.container}>
//   <div className={style.divLogo}>
//     <Link to="/">
//       <img className={style.logo} src={img} alt={"logo"} />
//     </Link>
//   </div>
//   <div className={style.links}>
//     <Link
//       className={`${style.link} ${
//         window.location.pathname === "/" && style["link-active"]
//       }`}
//       to="/"
//     >
//       <RiHome4Fill className={style.icono1} /> Home
//     </Link>
//     <Link
//       className={`${style.link} ${
//         window.location.pathname === "/about" && style["link-active"]
//       }`}
//       to="/about"
//     >
//       <TiUser className={style.icono2} /> About
//     </Link>
//     <Link
//       className={`${style.link} ${
//         window.location.pathname === "/portfolio" && style["link-active"]
//       }`}
//       to="/portfolio"
//     >
//       <GoBriefcase className={style.iconos} /> Portfolio
//     </Link>
//     <Link
//       className={`${style.link} ${
//         window.location.pathname === "/contact" && style["link-active"]
//       }`}
//       to="/contact"
//     >
//       <FaEnvelope className={style.iconos} /> Contact
//     </Link>
//     <Link to={"./pdf"} className={style.link}>
//       <div className={style.divButton}>
//         <button className={style.button}>
//           <BsFillPersonLinesFill className={style.iconos} />
//           CV-RESUME
//         </button>
//       </div>
//     </Link>
//   </div>
// </div>
