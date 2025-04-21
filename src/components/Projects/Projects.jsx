import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import movie from "../../Img/Project/movie.mp4";
// import phone from "../../Img/Project/phone.mp4";
// import sweet from "../../Img/Project/sweet.mp4";
// import webstudio from "../../Img/Project/webstudio.mp4";
import movieImg from "../../Img/Project/movieImg.webp";
import phoneImg from "../../Img/Project/phone.webp";
import sweetImg from "../../Img/Project/sweet.webp";
import webstudioImg from "../../Img/Project/webstudio.webp";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import css from "./Projects.module.css";

export default function Projects({ language }) {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="projects" className={css.projectsContainer}>
      {language === "en" ? (
        <h2 className={css.projectsTitle}>My Projects</h2>
      ) : (
        <h2 className={css.projectsTitle}>Мої проєкти</h2>
      )}
      <div className={css.projectsWrapper}>
        <div className={css.projectCard}>
          <div className={css.projectImgSubtitle} data-aos="fade-right">
            <img
              className={css.movieImg}
              src={movieImg}
              alt="DeadPool"
              loading="lazy"
            />
            <h3 className={css.projectTitle}>Movie-App</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A sleek and fully responsive movie web app that brings the world of cinema to your fingertips. Explore trending films on a visually engaging homepage, easily search for your favorite titles, and curate your own watchlist with a personalized favorites page. Designed with a user-first approach and optimized for flawless performance across all devices — from desktops to smartphones."
                : "Стильний та повністю адаптивний вебдодаток для перегляду фільмів, що переносить світ кіно прямо до тебе. На головній сторінці — найпопулярніші стрічки, зручний пошук дозволяє швидко знаходити улюблені фільми, а сторінка обраного дає змогу зберігати стрічки для перегляду пізніше. Інтерфейс орієнтований на користувача та ідеально працює на всіх пристроях — від смартфонів до комп’ютерів."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-left">
            <video
              src="https://res.cloudinary.com/dvxk9pygu/video/upload/f_auto,q_auto,vc_auto/v1745230531/movie_b9ycgb.mp4"
              autoPlay
              loop
              muted
              loading="lazy"
              playsInline
              preload="none"
              poster="https://res.cloudinary.com/dvxk9pygu/video/upload/so_0/movie_b9ycgb.jpg"
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
        <div className={css.projectCard}>
          <div className={css.projectImgSubtitle} data-aos="fade-left">
            <img
              className={css.movieImg}
              src={phoneImg}
              alt="PhoneBook"
              loading="lazy"
            />
            <h3 className={css.projectTitle}>Phone Book</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A simple yet powerful phonebook application connected to a secure backend API. Users can register, log in, manage their personal contact list by adding, deleting, or filtering contacts in real-time, and safely log out. Designed with clean UI and smooth UX for quick and intuitive contact management."
                : "Простий, але функціональний застосунок телефонної книги з підключенням до захищеного бекенду. Користувачі можуть реєструватися, входити в систему, керувати своїм списком контактів — додавати, видаляти або фільтрувати їх у реальному часі — та безпечно виходити з акаунту. Інтерфейс продуманий для швидкої та зручної навігації."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-right">
            <video
              src="https://res.cloudinary.com/dvxk9pygu/video/upload/f_auto,q_auto,vc_auto/v1745230531/phone_sbuwr0.mp4"
              autoPlay
              loop
              muted
              playsInline
              loading="lazy"
              preload="none"
              poster="https://res.cloudinary.com/dvxk9pygu/video/upload/so_0/phone_sbuwr0.jpg"
              className={css.videoPreview}
            />
            <div className={css.buttonWrapper}>
              <a
                className={css.linkBtn}
                href="https://goit-react-hw-08-ten-lake.vercel.app/contacts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink />
                Demo
              </a>
              <a
                className={css.linkBtn}
                href="https://github.com/Max-IT-ZT/goit-react-hw-08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className={css.projectCard}>
          <div className={css.projectImgSubtitle} data-aos="fade-left">
            <img
              className={css.movieImg}
              src={sweetImg}
              alt="Sweet dream"
              loading="lazy"
            />
            <h3 className={css.projectTitle}>Sweet dream</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A Delightful Journey into the World of Chocolate Discover a responsive and visually captivating website dedicated to the rich world of chocolate. From the origins of cacao and the fascinating history of chocolate, to the meticulous manufacturing process and diverse types — this site offers an immersive and educational experience. Featuring an elegant design, interactive elements, and a smooth burger menu for easy navigation across all devices, it's a treat for both the eyes and the taste buds of every chocolate lover."
                : "Солодка подорож у світ шоколаду Занурся у захопливий світ шоколаду за допомогою стильного, адаптивного сайту. Історія шоколаду, походження какао-бобів, процес виготовлення та різноманіття видів — усе це представлено у привабливій та інтерактивній формі. Завдяки вишуканому дизайну, інтерактивним елементам і зручному бургер-меню для навігації з будь-якого пристрою, сайт стане справжнім візуальним задоволенням для кожного поціновувача солодощів."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-right">
            <video
              src="https://res.cloudinary.com/dvxk9pygu/video/upload/f_auto,q_auto,vc_auto/v1745230532/sweet_b0zhnd.mp4"
              autoPlay
              loop
              muted
              loading="lazy"
              playsInline
              preload="none"
              poster="https://res.cloudinary.com/dvxk9pygu/video/upload/so_0/sweet_b0zhnd.jpg"
              className={css.videoPreview}
            />
            <div className={css.buttonWrapper}>
              <a
                className={css.linkBtn}
                href="https://max-it-zt.github.io/my-first-team-project/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink />
                Demo
              </a>
              <a
                className={css.linkBtn}
                href="https://github.com/Max-IT-ZT/my-first-team-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className={css.projectCard}>
          <div className={css.projectImgSubtitle} data-aos="fade-left">
            <img
              className={css.movieImg}
              src={webstudioImg}
              alt="WebStudio"
              loading="lazy"
            />
            <h3 className={css.projectTitle}>WebStudio</h3>
            <p className={css.projectDescription}>
              {language === "en"
                ? "A modern and responsive website for the WebStudio company, crafted as an individual project. It features animation effects, interactive modal windows, and a clean, professional layout. The design focuses on usability and smooth user experience across all devices."
                : "Сучасний адаптивний сайт для компанії WebStudio, створений як індивідуальний проєкт. Включає ефекти анімації, інтерактивні модальні вікна та професійний, лаконічний дизайн. Увага зосереджена на зручності користування та плавній взаємодії на будь-якому пристрої."}
            </p>
          </div>
          <div className={css.descriptionVideoWrapper} data-aos="fade-right">
            <video
              src="https://res.cloudinary.com/dvxk9pygu/video/upload/f_auto,q_auto,vc_auto/v1745230532/webstudio_uz5a2q.mp4"
              autoPlay
              loop
              muted
              loading="lazy"
              playsInline
              preload="none"
              className={css.videoPreview}
              poster="https://res.cloudinary.com/dvxk9pygu/video/upload/so_0/webstudio_uz5a2q.jpg"
            />

            <div className={css.buttonWrapper}>
              <a
                className={css.linkBtn}
                href="https://max-it-zt.github.io/goit-markup-hw-07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink />
                Demo
              </a>
              <a
                className={css.linkBtn}
                href="https://github.com/Max-IT-ZT/goit-markup-hw-07"
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
