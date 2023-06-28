import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { NavLink } from "react-router-dom";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Container}>
      <h1 className={style.h1}>Contact</h1>
      <div className={style.description}>
        <div className={style.theP}>
        
          <p className={style.p}>Contact me! WhatsApp! +57 3206629777</p>
          <p className={style.p}></p>
        </div>
        <div className={style.divButton}>
          <NavLink
            to={"mailto:docampoc95@gmail.com"}
            className={style.NavLink}
          >
            <button className={style.button}>
              <BsFillEnvelopeFill /> SEND MAIL
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
