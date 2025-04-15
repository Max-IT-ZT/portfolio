import css from "./Main.module.css";
import img from "../../Img/About/About-2.png";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Fill,
} from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiCss3 } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

export default function Main({ language }) {
  return (
    <section id="about" className={css.mainContainer}>
      {language === "en" ? (
        <h2 className={css.mainTitle}>About Me</h2>
      ) : (
        <h2 className={css.mainTitle}>Про мене</h2>
      )}
      <div className={css.mainText}>
        <div className={css.textAboutWrapper}>
          {language === "en" ? (
            <p className={css.textAbout}>
              I am a Full-Stack Developer with a passion for creating dynamic
              and responsive web applications. I have experience in both
              front-end and back-end development, and I am always eager to learn
              new technologies and improve my skills.
            </p>
          ) : (
            <p className={css.textAbout}>
              Я Full-Stack Розробник з пристрастю до створення динамічних і
              адаптивних веб-додатків. Я маю досвід у фронтенд та бекенд
              розробці, і завжди прагну вивчати нові технології та покращувати
              свої навички.
            </p>
          )}
        </div>
        <img className={css.imgAbout} src={img} alt="" />
        <div className={css.textSkillsWrapper}>
          {language === "en" ? (
            <p className={css.textSkills}>
              I have a strong foundation in web development, with skills in
              JavaScript, React, Redux, and Node.js. I am also familiar with
              TypeScript, Next.js, and Express. I have experience working with
              MongoDB and creating RESTful APIs. I am comfortable with Git for
              version control and have a good understanding of responsive design
              principles.
            </p>
          ) : (
            <p className={css.textSkills}>
              Я маю міцну основу в веб-розробці, з навичками в JavaScript,
              React, Redux та Node.js. Я також знайомий з TypeScript, Next.js та
              Express. Я маю досвід роботи з MongoDB та створення RESTful API. Я
              впевнений у використанні Git для контролю версій і маю хороше
              розуміння принципів адаптивного дизайну.
            </p>
          )}
        </div>
      </div>

      {language === "en" ? (
        <h2 className={css.mainTitle}>Skills</h2>
      ) : (
        <h2 className={css.mainTitle}>Навички</h2>
      )}

      <Marquee pauseOnHover speed={50} gradient={false}>
        <ul className={css.skillsList}>
          <li className={`${css.skillItem} ${css.js}`}>
            <RiJavascriptFill className={css.icon} /> JavaScript
          </li>
          <li className={`${css.skillItem} ${css.react}`}>
            <RiReactjsLine className={css.icon} /> React
          </li>
          <li className={`${css.skillItem} ${css.redux}`}>
            <TbBrandRedux className={css.icon} /> Redux
          </li>
          <li className={`${css.skillItem} ${css.ts}`}>
            <BiLogoTypescript className={css.icon} /> TypeScript
          </li>
          <li className={`${css.skillItem} ${css.node}`}>
            <RiNodejsLine className={css.icon} /> Node.js
          </li>
          <li className={`${css.skillItem} ${css.css}`}>
            <SiCss3 className={css.icon} /> CSS
          </li>
          <li className={`${css.skillItem} ${css.html}`}>
            <RiHtml5Fill className={css.icon} /> HTML
          </li>
          <li className={`${css.skillItem} ${css.mongo}`}>
            <BiLogoMongodb className={css.icon} /> MongoDB
          </li>
          <li className={`${css.skillItem} ${css.git}`}>
            <FaSquareGithub className={css.icon} /> Git
          </li>
        </ul>
      </Marquee>
    </section>
  );
}
