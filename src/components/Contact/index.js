/* eslint-disable quotes */
import "./contact.scss";

import pdfFile from "../../assets/images/cv-lea-bramoulle.pdf";

function Contact() {
  return (
    <section className="contact container" id="contact">
      <div className="contact__information">
        <h2 className="contact__information__title">
          Vous souhaitez collaborer ? Vous avez un projet ? Contactez-moi 🎉
        </h2>
        <p> 📍 Montpellier, France</p>
        <p>☎️ +33 6 29 60 12 48</p>
        <p>📧 l.bramoulle@hotmail.fr</p>
        <div className="contact__information__links">
          <a
            href="https://github.com/Lea-Bramoulle"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <i className="fab fa-github" /> Profile
          </a>
          <a
            href="https://www.linkedin.com/in/l%C3%A9a-bramoull%C3%A9-55ba23158/"
            target="_blank"
            className="portfolio__link"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" /> Profile
          </a>
          <a
            href={pdfFile}
            rel="noreferrer"
            target="_blank"
            className="portfolio__link"
          >
            <i className="fas fa-arrow-alt-to-bottom" /> Curriculum Vitae
          </a>
        </div>
      </div>
      <form className="contact__form">
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Votre message..." rows={6} />
        <button type="submit">
          Envoyer <i className="fas fa-paper-plane" />
        </button>
      </form>
    </section>
  );
}

export default Contact;
