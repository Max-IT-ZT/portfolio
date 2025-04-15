// import bc from "../../Img/Background/bc-3.png";
import { GiFlamingArrow } from "react-icons/gi";
import css from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
export default function Hero({ language }) {
  const [displayed, setDisplayed] = useState("");

  const code =
    `<span class="fn">async function</span> <span class="name">fetchUserData</span>(<span class="param">id</span>) {\n` +
    `  <span class="keyword">try</span> {\n` +
    `    <span class="keyword">const</span> response = <span class="await">await</span> fetch(<span class="string">\`/api/users/\${id}\`</span>);\n` +
    `    <span class="keyword">if</span> (!response.ok) <span class="keyword">throw</span> <span class="class">new Error</span>(<span class="string">"User not found"</span>);\n` +
    `    <span class="keyword">return await</span> response.json();\n` +
    `  } <span class="keyword">catch</span> (error) {\n` +
    `    console.error(error);\n` +
    `    <span class="keyword">return null</span>;\n` +
    `  }\n` +
    `}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(code.slice(0, i) + `<span class="${css.cursor}">|</span>`);
      i++;
      if (i > code.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [code]);
  return (
    <section id="hero" className={css.container}>
      <h1 className={css.heroTitle}>
        <Typewriter
          options={{
            strings: [
              language === "ua"
                ? "Привіт! Я Максим, Full-Stack Розробник"
                : "Hi! I'm Maksym, Full-Stack Developer",
              language === "ua"
                ? "Тут я розповім про себе."
                : "Here, I'll share about myself.",
              language === "ua"
                ? "Свої скіли та проєкти, які вже встиг зробити."
                : "My skills and the projects I have completed so far.",
              language === "ua"
                ? "Гортай далі, щоб побачити мої роботи!"
                : "Scroll down to see my work!",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            pauseFor: 1000,
            wrapperClassName: css.typewriter,
            cursorClassName: `${css.cursor} ${css.cursorAnimation}`,
            cursor: "|",
          }}
        />
      </h1>
      <div className={css.codeWrapper}>
        <pre>
          <code dangerouslySetInnerHTML={{ __html: displayed }} />
        </pre>
      </div>
      <h2 className={css.heroSubtitle}>
        {language === "ua" ? (
          <>
            <span>Просто гортай до низу </span> <GiFlamingArrow />
          </>
        ) : (
          <>
            <span> Just scroll down </span> <GiFlamingArrow />
          </>
        )}
      </h2>
    </section>
  );
}
