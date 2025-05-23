import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useInView } from "react-intersection-observer";
import "leaflet/dist/leaflet.css";
import css from "./Contacts.module.css";

export default function Contacts({ language }) {
  const position = [50.266186, 28.629837];

  const { ref: mapRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacts" className={css.contactsContainer}>
      <h2 className={css.contactsTitle}>
        {language === "en" ? "Contacts" : "Контакти"}
      </h2>

      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <a className={css.contactsLink} href="tel:+380501894397">
            <FaPhoneAlt color="#00c853" /> Phone
          </a>
        </li>
        <li className={css.contactsItem}>
          <a className={css.contactsLink} href="mailto:babuskomax@gmail.com">
            <FaEnvelope color="#d50000" /> Gmail
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://github.com/Max-IT-ZT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="#fff" /> GitHub
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://www.linkedin.com/in/maksym-babushko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#0077b5" /> LinkedIn
          </a>
        </li>
        <li className={css.contactsItem}>
          <a
            className={css.contactsLink}
            href="https://t.me/MBabushko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram color="#0088cc" /> Telegram
          </a>
        </li>
      </ul>

      <div className={css.mapWrapper} ref={mapRef}>
        <h2 className={css.mapTitle}>
          {language === "en" ? "My Location" : "Моє розташування"}
        </h2>

        {inView ? (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className={css.mapContainer}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>I'm here! Click to open in full map view.</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className={css.mapPlaceholder}>
            <p>
              {language === "en" ? "Loading map..." : "Завантаження карти..."}
            </p>
          </div>
        )}

        <a
          href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.openMapBtn}
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
