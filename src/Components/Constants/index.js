import appLogo from "./aiLogo500white.png";
import profilePic from "./profilePic.JPG";
import peaceSign from "./peaceSign.png"
import { coronavirus, wizardsOfCode, bumbleBee, aicooks } from "./projects";
const Constants = {
  brieflyAboutMe: `A fashion/chef turned software developer. I have an eye for design, a mind for learning and problem solving, and a hand for executing.`,
  workingStyle: ` I take pride of everything I do. I belive in striving for excellence.`,

  aboutMe: `I was raised in rural Thailand with modest ambition, but once I moved to New York I learned to think bigger with a growth mindset. There I discovered my passions for the fashion and culinary worlds. During my time working in those fields, I found myself repeatedly looking for opportunities to utilize software to improve our processes, products, and services. I wanted to learn more about how to leverage software to communicate and enable customers, so I spent hundreds of hours learning to code and completed a coding bootcamp where I dove deeper, learned at a rapid pace, and built a variety of applications.`,

  appLogo: appLogo,
  profilePic: profilePic,
  peaceSign: peaceSign,
  projects: {
    coronavirus: {
      desc: `Is It Flat Yet, a web app visualizing geospatial and historical Covid-19 data. A solo project born out of curiosity about Google Maps API and wanting to dive deep into Firebase.\nTechnologies: React, Google Maps API, Node.js, Firebase Hosting, Cloud Firestore, Cloud Functions`,
      img: coronavirus,
      url: "https://isitflatyet.org"
    },
    wizardsOfCode: {
      desc: `Wizards of Code, a realtime web app multiplayer game. My capstone project for Fullstack Academy, worked as a team of 4\nTechnologies: React, Web Workers, CSS Animation, Google Firebase Hosting, Google Cloud Firestore, Google Cloud Functions`,
      img: wizardsOfCode,
      url: "https://wizards-of-code.web.app/"
    },
    bumbleBee: {
      desc: `BumbleBee movie retail web app. First project at Fullstack Academy as a team of 4.\nTechnologies: React, Redux, Express, PostgreSQL, Sequelize, Node.js, Heroku`,
      img: bumbleBee,
      url: "bb"
    },
    aicooks: {
      desc: `Marketing website for my culinary brand Aicooks, built using Weebly`,
      img: aicooks,
      url: "https://aicooksthai.com"
    },
    portfolio: {
      desc: `This website, built using React, React Spring, and mobile responsive CSS. Deployed using AWS Amplify`,
      img: aicooks,
      url: "https://akarach.com"
    }
  }
};

export default Constants;