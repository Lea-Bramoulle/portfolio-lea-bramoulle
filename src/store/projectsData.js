/* eslint-disable quotes */
const data = [
  {
    id: 1,
    name: "Develott",
    img: "link-develott",
    description:
      "Plateforme de mise en relation, d’échange et de collaboration entre développeurs juniors, qui permet à ses utilisateurs de proposer ou de rechercher des projets à développer en équipe, et ce, en vue de consolider leurs compétences techniques, gagner en expérience, mais également d’enrichir leur réseau ainsi que leur portfolio.",
    technos: [
      {
        name: "Javascript",
        shortName: "javascript",
      },
      {
        name: "Node",
        shortName: "nodejs",
      },
      {
        name: "Express",
        shortName: "express",
      },
      {
        name: "React",
        shortName: "react",
      },
      {
        name: "Redux",
        shortName: "redux",
      },
      {
        name: "PostgreSql",
        shortName: "postgresql",
      },
      {
        name: "Sass",
        shortName: "sass",
      },
    ],
    githubLink: null,
    websiteLink: null,
    disclaimer: null,
    isOpen: false,
    video: true,
  },
  {
    id: 2,
    name: "To Do App",
    img: "todoapp",
    description:
      'Application "To Do List" pour créer, visualiser et organiser des tâches. Possibilité d\'actier un dark mode.',
    technos: [
      {
        name: "React",
        shortName: "react",
      },
      {
        name: "Redux",
        shortName: "redux",
      },
      {
        name: "Sass",
        shortName: "sass",
      },
      {
        name: "Html5",
        shortName: "html5",
      },
      {
        name: "Css3",
        shortName: "css3",
      },
    ],
    githubLink: "https://github.com/Lea-Bramoulle/training-todo-app",
    websiteLink: "https://my-todoreactapp.netlify.app/",
    disclaimer: null,
    isOpen: false,
    video: false,
  },
  {
    id: 3,
    name: "Ip Address Tracker",
    img: "iptracker",
    description:
      'Application de tracking d\'adresse IP, réalisée à l\'aide de des APIs "IP Geolocation API by IPify" et "LeafletJS"',
    technos: [
      {
        name: "Javascript",
        shortName: "javascript",
      },
      {
        name: "React",
        shortName: "react",
      },
      {
        name: "Sass",
        shortName: "sass",
      },
      {
        name: "Html5",
        shortName: "html5",
      },
      {
        name: "Css3",
        shortName: "css3",
      },
    ],
    githubLink: "https://github.com/Lea-Bramoulle/training-IP-Address-Tracker",
    websiteLink: null,
    disclaimer: null,
    isOpen: false,
    video: false,
  },
  {
    id: 4,
    name: "PokeApp",
    img: "pokeapp",
    description:
      "Pokedex réalisé en Javascript Vanilla à l'aide de l'API \"PokeApi\". Fetchez les tous ! ",
    technos: [
      {
        name: "Javascript",
        shortName: "javascript",
      },
      {
        name: "Html5",
        shortName: "html5",
      },
      {
        name: "Css3",
        shortName: "css3",
      },
    ],
    githubLink: "https://github.com/Lea-Bramoulle/my-pokedex",
    websiteLink: "https://my-pokeapp.netlify.app/",
    disclaimer: null,
    isOpen: false,
    video: false,
  },
  {
    id: 5,
    name: "Vibes Resort",
    img: "vibesresort",
    description:
      "Site vitrine de génération de prospects, résidence de tourisme de luxe située au Cap d'Agde (programme immobilier ANGELOTTI).",
    technos: [
      {
        name: "Ruby",
        shortName: "ruby",
      },
      {
        name: "Ruby on Rails",
        shortName: "rails",
      },
      {
        name: "PostgreSql",
        shortName: "postgresql",
      },
      {
        name: "Gmail API",
        shortName: "google",
      },
      {
        name: "Bootstrap",
        shortName: "bootstrap",
      },
      {
        name: "Heroku",
        shortName: "heroku",
      },
    ],
    githubLink: "https://github.com/Lea-Bramoulle/vibes-resort",
    websiteLink: "http://www.vibesresort.com/",
    disclaimer: null,
    isOpen: false,
    video: false,
  },
  {
    id: 6,
    name: "SuisJeEnFaillite",
    img: "sef",
    description:
      "Une solution simple, pour éclairer sur la situation financière d'une entreprise, et évaluer l'état de cessation des paiements.",
    technos: [
      {
        name: "Ruby",
        shortName: "ruby",
      },
      {
        name: "Ruby on Rails",
        shortName: "rails",
      },
      {
        name: "PostgreSql",
        shortName: "postgresql",
      },
      {
        name: "Amazon Web Services",
        shortName: "amazonwebservices",
      },
      {
        name: "Bootstrap",
        shortName: "bootstrap",
      },
      {
        name: "Heroku",
        shortName: "heroku",
      },
    ],
    githubLink: null,
    websiteLink: null,
    disclaimer: null,
    isOpen: false,
    video: false,
  },
  {
    id: 7,
    name: "Le Mot de la Bombe",
    img: "lemotdelabombe",
    description:
      "Blog sur le thème du Street-Art réalisé pour une amie en école de journalisme. Possibilité de publier, mettre en forme et éditer des articles via un panel d'administration.",
    technos: [
      {
        name: "Ruby",
        shortName: "ruby",
      },
      {
        name: "Ruby on Rails",
        shortName: "rails",
      },
      {
        name: "PostgreSql",
        shortName: "postgresql",
      },
      {
        name: "AWS",
        shortName: "amazonwebservices",
      },
      {
        name: "Bootstrap",
        shortName: "bootstrap",
      },
      {
        name: "Heroku",
        shortName: "heroku",
      },
    ],
    githubLink: "https://github.com/Lea-Bramoulle/lemotdelabombe",
    websiteLink: "http://lemotdelabombe.herokuapp.com/",
    disclaimer:
      "Bucket AWS désactivé, les images rattachées aux articles ne sont donc plus visible en production.",
    isOpen: false,
    video: false,
  },
  {
    id: 8,
    name: "Catalogue Angelotti Promotion",
    img: "catalogueangelotti",
    description:
      "Catalogue interactif sur borne tactile de présentation de l'offre de promotion immobilière du Groupe Immobilier ANGELOTTI, à destination des Salons Immobiliers.",
    technos: [
      {
        name: "Html5",
        shortName: "html5",
      },
      {
        name: "Css3",
        shortName: "css3",
      },
      {
        name: "Bootstrap",
        shortName: "bootstrap",
      },
    ],
    githubLink: null,
    websiteLink: null,
    disclaimer: null,
    isOpen: false,
    video: false,
  },
];

export default data;
