/* eslint-disable global-require */
import './works.scss';

function Works() {
  return (
    <section className="portfolio">
      <div className="portfolio__bg">
        <h2 className="portfolio__title">Mes réalisations</h2>
        <div className="portfolio__container">
          <div className="portfolio__card">
            <img src={require('src/assets/images/github.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/1.jpg')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/sef1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/todoapp1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/iptracker1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/pokeapp1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/vibesresort1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <img src={require('src/assets/images/lemotdelabombe1.png')} className="portfolio__card-img" alt="Github Profile Lea-Bramoulle" />
          </div>
          <div className="portfolio__card">
            <div className="portfolio__card__links">
              <a href="#" className="portfolio__link"><i className="fab fa-github" /> Profile</a>
              <a href="#" className="portfolio__link"><i className="fab fa-linkedin-in" /> Profile</a>
              <a href="#" className="portfolio__link"><i className="fas fa-arrow-alt-to-bottom" /> CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Works;