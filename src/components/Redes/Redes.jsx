import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { NavLink } from "react-router-dom";
import style from "./Redes.module.css";

const handleWhatsapp = () => {
  window.open("https://wa.me/57326629777");
};

const Redes = () => {
  return (
    <div className={style.container}>
      <NavLink
        to={"https://github.com/Danieltm95"}
        target="_blank"
        className={style.NavLink}
      >
        <GoMarkGithub className={style.iconos} />
      </NavLink>
      <NavLink
        to={"https://www.linkedin.com/in/daniel-ocampo-dev/"}
        className={style.NavLink}
        target="_blank"
      >
        <FaLinkedin className={style.iconos} />
      </NavLink>
      <NavLink
        to={"https://www.instagram.com/danieltm5/"}
        className={style.NavLink}
        target="_blank"
      >
        <FaInstagram className={style.iconos} />
      </NavLink>
      <NavLink
        className={style.NavLink}
        href="javascript:void(0);"
        onClick={handleWhatsapp}
      >
        <ImWhatsapp className={style.iconos} />
      </NavLink>
      <div className={style.verticalLine}></div>
    </div>
  );
};
export default Redes;
