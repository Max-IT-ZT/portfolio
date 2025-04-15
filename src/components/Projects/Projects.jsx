import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import movie from "../../Img/Project/movie.mp4";
import phone from "../../Img/Project/phone.mov";
import movieImg from "../../Img/Project/movieImg-1.png";
import phoneImg from "../../Img/Project/phone.png";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import css from "./Projects.module.css";

export default function Projects({ language }) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className={css.projectsContainer}>
      <h2 className={css.projectsTitle}>My Projects</h2>
      <div className={css.projectsWrapper}>
        <div className={css.projectCard} data-aos="fade-right">
          <div className={css.projectImgSubtitle}>
            <img className={css.movieImg} src={movieImg} alt="DeadPool" />
            <h3 className={css.projectTitle}>Movie-App</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A sleek and fully responsive movie web app that brings the world of cinema to your fingertips. Explore trending films on a visually engaging homepage, easily search for your favorite titles, and curate your own watchlist with a personalized favorites page. Designed with a user-first approach and optimized for flawless performance across all devices — from desktops to smartphones."
                : "Стильний та повністю адаптивний вебдодаток для перегляду фільмів, що переносить світ кіно прямо до тебе. На головній сторінці — найпопулярніші стрічки, зручний пошук дозволяє швидко знаходити улюблені фільми, а сторінка обраного дає змогу зберігати стрічки для перегляду пізніше. Інтерфейс орієнтований на користувача та ідеально працює на всіх пристроях — від смартфонів до комп’ютерів."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-left">
            <video
              src={movie}
              autoPlay
              loop
              muted
              playsInline
              className={css.videoPreview}
            />
            <div className={css.buttonWrapper}>
              <a
                className={css.linkBtn}
                href="https://goit-react-hw-05-one-jade.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink />
                Demo
              </a>
              <a
                className={css.linkBtn}
                href="https://github.com/Max-IT-ZT/goit-react-hw-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className={css.projectCard} data-aos="fade-left">
          <div className={css.projectImgSubtitle}>
            <img className={css.movieImg} src={phoneImg} alt="PhoneBook" />
            <h3 className={css.projectTitle}>Phone Book</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A simple yet powerful phonebook application connected to a secure backend API. Users can register, log in, manage their personal contact list by adding, deleting, or filtering contacts in real-time, and safely log out. Designed with clean UI and smooth UX for quick and intuitive contact management."
                : "Простий, але функціональний застосунок телефонної книги з підключенням до захищеного бекенду. Користувачі можуть реєструватися, входити в систему, керувати своїм списком контактів — додавати, видаляти або фільтрувати їх у реальному часі — та безпечно виходити з акаунту. Інтерфейс продуманий для швидкої та зручної навігації."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-right">
            <video
              src={phone}
              autoPlay
              loop
              muted
              playsInline
              className={css.videoPreview}
            />
            <div className={css.buttonWrapper}>
              <a
                className={css.linkBtn}
                href="https://your-demo-url.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink />
                Demo
              </a>
              <a
                className={css.linkBtn}
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
