import style from "./Portfolio.module.css";
import appRecipes from "../../assets/GamesforU.png";
import appRyM from "../../assets/New folder/lettalk.png.PNG";
import appWorkify from "../../assets/workify.png";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.Portfolio}>
      <div className={style.container}>
        <div className={style.titlePag}>
          <h1 className={style.h1}> Portfolio </h1>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>Workify Services</h1>
          <div className={style.contentModelTwo}>
            <Link target="_blank" to={"https://workify-alpha.vercel.app/"}>
              <img
                className={style.image}
                src={appWorkify}
                alt="app-Workify-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>Website to publish services</h3>
              <p className={style.parrafo}>
                This is a group project that we developed so it's a Services App that includes features such as Google Login, email, and password authentication with Firebase, search functionality, combined filtering and sorting, an admin dashboard for user and service banning, email sending capability, a shopping cart, Stripe payment gateway integration, Cloudinary for file handling, among others.
              </p>
              
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://workify-alpha.vercel.app"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={
                    "https://github.com/JensyFigueroa/domesticServices_Frontend"
                  }
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - client</p>
                </Link>
                <Link
                  className={style.link}
                  target="_blank"
                  to={
                    "https://github.com/JensyFigueroa/domesticServices_Backend"
                  }
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub - api</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>LetsTalk! AI Chat</h1>
          <div className={style.contentModelTwo}>
            <Link target="_blank" to={"https://github.com/Danieltm95/LetsTalk-ChatGPT-voiceOver-Talk"}>
              <img className={style.image} src={appRyM} alt="app-RyM" />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>ChatGPT powered AI chat!</h3>
              <p className={style.parrafo}>
              I am currently developing an innovative chat application that leverages OpenAI's 
              GPT-3.5 API. The app offers a unique user experience by enabling conversation through 
              speech instead of traditional typing. It incorporates a speech-to-text feature 
              that transcribes the user's spoken words into text, allowing seamless interaction 
              with GPT-3.5. The app then utilizes Google's text-to-speech functionality to audibly 
              deliver the AI-generated responses, mimicking the feel of a telephone conversation. 
              This ongoing project showcases the integration of advanced AI technologies to create
               an immersive and interactive chat experience.   
             
              </p>
              <div className={style.links}>
                {/* <Link
                  className={style.link}
                  target="_blank"
                  to={"https://rym-multiverse.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link> */}
                <Link
                  className={style.link}
                  target="_blank"
                  to={"https://github.com/Danieltm95/LetsTalk-ChatGPT-voiceOver-Talk"}
                >
                  <GoMarkGithub className={style.icon} />

                  <p>View the source code on GitHub</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.website}>
          <h1 className={style.titleWeb}>GamesForU</h1>
          <div className={style.contentModelOne}>
            <Link target="_blank" to={"https://gamesforu.vercel.app/"}>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>
                Website for Video game search and details
              </h3>
              <p className={style.parrafo}>
                This is an individual integrative project that I developed in
                order to pass the first instance of the two final projects of
                the bootcamp Henry, I was inspired by Airbnb Ux/Ui, it's a videogame website to search by name or by Genre.
                Some of its functions are game publication and combined filters.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://gamesforu.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://github.com/Danieltm95/PI-Videogames-main"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub</p>
                </Link>
               
              </div>
            </div>
          </div>
        </div>


        <div className={style.website}>
          <h1 className={style.titleWeb}>More comming Soon!</h1>
          {/* <div className={style.contentModelOne}>
            <Link target="_blank" to={"https://gamesforu.vercel.app/"}>
              <img
                className={style.image}
                src={appRecipes}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>
                Website for Video game search and details
              </h3>
              <p className={style.parrafo}>
                This is an individual integrative project that I developed in
                order to pass the first instance of the two final projects of
                the bootcamp Henry, I was inspired by Airbnb Ux/Ui, it's a videogame website to search by name or by Genre.
                Some of its functions are game publication and combined filters.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://gamesforu.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://github.com/Danieltm95/PI-Videogames-main"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub</p>
                </Link>
               
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className={style.website}>
          <h1 className={style.titleWeb}>Search Images</h1>
          <div className={style.contentModelOne}>
            <Link target="_blank" to={""}>
              <img
                className={style.image}
                src={appImages}
                alt="app-Recipes-Image"
              />
            </Link>
            <div className={style.divParrafo}>
              <h3 className={style.subtitle}>Website to find images</h3>
              <p className={style.parrafo}>
                This website is a project that I created to practice what I was
                learning in my front-end classes when I was studying module two
                at Henry. I wanted to create an app using React and Redux, but
                the most important thing and what I cared about in those days
                was learning how to consume data from APIs. This is how this
                project started, and with time, it became important to me
                because I use it to find images for my new projects.
              </p>
              <div className={style.links}>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://search-images-gilt.vercel.app/"}
                >
                  <BsBoxArrowUpRight className={style.icon} />
                  <p>Visit the live site</p>
                </Link>
                <Link
                  target="_blank"
                  className={style.link}
                  to={"https://github.com/Carlitossaul/search-images"}
                >
                  <GoMarkGithub className={style.icon} />
                  <p>View the source code on GitHub</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.space}> </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
