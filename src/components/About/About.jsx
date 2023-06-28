import style from "./About.module.css";
import img from "../../assets/profilepic.jpeg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.title}>
        <h1 className={style.h1}>About </h1>
        <br />
      </div>
      <div className={style.description}>
        <div className={style.theP}>
          <p className={style.p}>
            Engineer graduated from the University of Quindío (2014-2019) in Colombia and software developer graduated from Henry's bootcamp (2022-2023) in Argentina. I consider myself a very curious, analytical, and leader-oriented person. I enjoy innovating, developing, and finding solutions to problems. Additionally, I have a fascination for applied mathematics, which is why I chose to study engineering for five years, I am drawn to big challenges, and I know that software development encompasses many of them. That's why I am determined to pursue this path.
          </p>
        

        </div>
        <div className={style.divImg}>
          <img className={style.img} src={img} alt="Daniel Ocampo" />
        </div>
      </div>
      <div className={style.tecnologias}>
        <table className={style.table}>
          <tr>
            <td>
              <li>Node.js</li>
            </td>
            <td>
              <li>React</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Express</li>
            </td>
            <td>
              <li>Redux</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>PostgreSQL</li>
            </td>
            <td>
              <li>Git</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Javascript (ES6+)</li>
            </td>
            <td>
              <li>Github</li>
            </td>
          </tr>
          <tr>
            <td>
              <li>Css</li>
            </td>
            <td>
              <li>Sequelize</li>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;
