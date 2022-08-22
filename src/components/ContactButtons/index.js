/* eslint-disable quotes */
/* eslint-disable jsx-a11y/control-has-associated-label */
import "./contactButtons.scss";
import pdfFile from "../../assets/images/cv-lea-bramoulle.pdf";

function ContactButtons() {
  return (
    <section className="contact-fixed">
      <ul className="contact-fixed__container">
        <li>
          <a href={pdfFile} target="_blank" rel="noreferrer">
            <i className="fas fa-file-alt" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Lea-Bramoulle"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/l%C3%A9a-bramoull%C3%A9-55ba23158/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fas fa-comment" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactButtons;
