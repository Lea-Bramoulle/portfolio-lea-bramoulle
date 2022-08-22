/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import "./navbar.scss";

import pdfFile from "../../assets/images/cv-lea-bramoulle.pdf";

function Navbar() {
  return (
    <header className="header">
      <div className="header__logo">
        <span>Mon Portfolio.</span>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a href="#" className="nav__btn-active">
              Accueil
            </a>
          </li>
          <li>
            <a href="#competences" className="nav__btn">
              Compétences
            </a>
          </li>
          <li>
            <a href="#realisations" className="nav__btn">
              Réalisations
            </a>
          </li>
          <li>
            <a href="#contact" className="nav__btn">
              Contact
            </a>
          </li>
          <li>
            <a
              href={pdfFile}
              download="cv-lea-bramoulle"
              className="nav__btn-cv"
            >
              Curriculum Vitae <i className="fas fa-arrow-to-bottom" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
