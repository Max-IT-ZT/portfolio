import css from "./Header.module.css";
import { FaGlobe } from "react-icons/fa";

export default function Header({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ua" ? "en" : "ua"));
  };

  const texts = {
    ua: {
      about: "Про мене",
      projects: "Проєкти",
      contacts: "Контакти",
      flag: "🇺🇦",
      language: "UA",
    },
    en: {
      about: "About Me",
      projects: "Projects",
      contacts: "Contacts",
      flag: "🇬🇧",
      language: "EN",
    },
  };

  return (
    <section id="header" className={css.mainContainer}>
      <a className={css.logoLink} href="#">
        <img
          className={css.logoImg}
          src="https://res.cloudinary.com/dvxk9pygu/image/upload/v1745230572/MaxDev_k6zi2x.png"
          alt="Logo"
        />
      </a>

      <nav className={css.navWrapper}>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <a href="#about">{texts[language].about}</a>
          </li>
          <li className={css.menuItem}>
            <a href="#projects">{texts[language].projects}</a>
          </li>
          <li className={css.menuItem}>
            <a href="#contacts">{texts[language].contacts}</a>
          </li>
        </ul>

        <div className={css.langSwitcher}>
          <button onClick={toggleLanguage} className={css.langButton}>
            {/* <span>{texts[language].flag}</span> */}
            <span>{texts[language].language}</span>
          </button>
        </div>
      </nav>
    </section>
  );
}
