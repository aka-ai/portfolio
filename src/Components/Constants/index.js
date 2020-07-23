import appLogo from "./aiLogo500white.png";
import profilePic from "./profilePic.JPG";
import peaceSign from "./peaceSign.png"
import { coronavirus, wizardsOfCode, bumbleBee, aicooks } from "./projects";
const Constants = {
  brieflyAboutMe: `A fashion/chef turned software developer. I have an eye for design, a mind for learning and problem solving, and a hand for executing.`,
  workingStyle: ` I take pride of everything I do. I belive in striving for excellence.`,

  aboutMe: `I was raised in rural Thailand with modest ambition, but once I moved to New York I learned to think bigger with a growth mindset. There I discovered my passions for the fashion and culinary worlds. During my time working in those fields, I found myself repeatedly looking for opportunities to utilize software to improve our processes, products, and services.\n\nI wanted to learn more about how to leverage software to communicate and enable customers, so I spent hundreds of hours learning JavaScript and was accepted into a coding bootcamp where I dove deeper, learned at a rapid pace, and built a variety of applications.\n\n   \n`,

  appLogo: appLogo,
  profilePic: profilePic,
  peaceSign: peaceSign,
  projects: {
    coronavirus: {
      desc: `Is-it-Flat-Yet, a web app visualizing geospatial and historical Covid-19 data. My solo project, out of a curiosity about GoogleMaps API and wanting to dive deep into Firebase.\nTechnologies: Firebase Hosting, Cloud Firestore, Cloud Functions, React, GoogleMaps API, Node.js`,
      img: coronavirus,
    },
    wizardsOfCode: {
      desc: `Wizards-of-Code, a webapp multiplayer game. My bootcamp capstone project, worked with a team of 4\nTechnologies: Firebase Hosting, Cloud Firestore, Cloud Functions, React, Web Workers, CSS Animation`,
      img: wizardsOfCode
    },
    bumbleBee: {
      desc: `BumbleBee movie retail webapp. First project at the bootcamp with a team of 4.\nTechnologies: Express, Heroku, PostgresSQL, Sequelize, Node.js, React, Redux, CSS`,
      img: bumbleBee
    },
    aicooks: {
      desc: `My culinary brand, Aicooks website. This project was built before I joined the bootcamp, by using Weebly. `,
      img: aicooks
    }
  }
};

export default Constants;