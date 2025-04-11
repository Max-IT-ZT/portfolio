import css from "./Main.module.css";
// import imgMe from "../../Img/About/about-me3.jpg";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNodejsLine } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaSquareGithub } from "react-icons/fa6";
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
          {/* <img className={css.imgMe} src={imgMe} alt="Photo" /> */}
        </div>

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

      <ul className={css.skillsList}>
        <li className={css.skillItem}>
          JavaScript <RiJavascriptFill />
        </li>
        <li className={css.skillItem}>
          React <RiReactjsLine />
        </li>
        <li className={css.skillItem}>
          Redux <TbBrandRedux />
        </li>
        <li className={css.skillItem}>
          TypeScript <BiLogoTypescript />
        </li>
        <li className={css.skillItem}>
          Node.js <RiNodejsLine />
        </li>
        <li className={css.skillItem}>
          CSS <SiCss3 />
        </li>
        <li className={css.skillItem}>
          HTML <RiHtml5Fill />
        </li>
        <li className={css.skillItem}>
          MongoDB <BiLogoMongodb />
        </li>
        <li className={css.skillItem}>
          Git <FaSquareGithub />
        </li>
      </ul>
    </section>
  );
}
