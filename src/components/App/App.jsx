import css from "./App.module.css";
import Header from "../Header/Header.jsx";
import Projects from "../Projects/Projects.jsx";
import Hero from "../Hero/Hero.jsx";
import Main from "../Main/Main.jsx";
import Contacts from "../Contacts/Contacts.jsx";
import "leaflet/dist/leaflet.css";

import { useState } from "react";
import Footer from "../Footer/Footer.jsx";

export default function App() {
  const [language, setLanguage] = useState("en");
  return (
    <section className={css.mainSection}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Main language={language} />
      <Projects language={language} />
      <Contacts language={language} />
      <Footer language={language} />
    </section>
  );
}
