import './about.scss';

function About() {
  return (
    <section className="container about">

      <div className="about__left">
        <h2 className="about__left-title">About me</h2>
        <p className="about__left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id elit iaculis, pulvinar quam quis, porta mauris.</p>
        <a href="#" className="about__btn">Download my CV <i className="fas fa-arrow-to-bottom" /></a>
      </div>

      <div className="about__middle">
        <h3 className="about__card-title">#backEnd</h3>
        <ul className="about__competences">
          <li>Javascript</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Ruby, Ruby on Rails</li>
          <li>MySQL, PostgreSql</li>
        </ul>
      </div>

      <div className="about__right">
        <h3 className="about__card-title">#frontEnd</h3>
        <ul className="about__competences">
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Sass</li>
          <li>Html5, Css3</li>
          <li>Bootstrap, Bulma</li>
        </ul>
      </div>

    </section>
  );
}

export default About;
