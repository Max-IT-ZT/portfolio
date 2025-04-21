import css from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer({ language }) {
  const texts = {
    ua: {
      header: "Головна",
      about: "Про мене",
      // contacts: "Контакти",
      projects: "Проєкти",
      rights: "Всі права захищені",
    },
    en: {
      header: "Home",
      about: "About Me",
      // contacts: "Contacts",
      projects: "Projects",
      rights: "All rights reserved",
    },
  };
  return (
    <footer className={css.footerContainer}>
      <div className={css.content}>
        <a className={css.logoLink} href="#">
          <img
            className={css.logoImg}
            src="https://res.cloudinary.com/dvxk9pygu/image/upload/v1745230572/MaxDev_k6zi2x.png"
            alt="Logo"
            loading="lazy"
          />
        </a>

        <nav className={css.nav}>
          <a href="#header">{texts[language].header}</a>
          <a href="#about">{texts[language].about}</a>
          <a href="#projects">{texts[language].projects}</a>
          {/* <a href="#contacts">{texts[language].contacts}</a> */}
        </nav>

        <div className={css.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=100046725306168"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/maxdevzt?igsh=MTdrZmppODNkZnp3eQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://t.me/MBabushko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>

      <p className={css.copy}>
        &copy; {new Date().getFullYear()} {texts[language].rights}
      </p>
    </footer>
  );
}
