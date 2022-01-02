import appLogo from "./aiLogo500white.png";
import profilePic from "./profilePic.JPG";
import { coronavirus, wizardsOfCode, bumbleBee, aicooks, portfolio, minesweeper } from "./projects";
import cottonCandy from './cottonCandy.png'
import upArrow from './up-arrow.png'
import downArrow from './down-arrow.png'
const Constants = {
  brieflyAboutMe: `A fashion/chef turned software developer. I have an eye for design, a mind for learning and problem solving, and a hand for executing.`,
  workingStyle: ` I take pride of everything I do. I belive in striving for excellence.`,

  aboutMe: `I was raised in rural Thailand with modest ambition, but once I moved to New York I learned to think bigger with a growth mindset. There I discovered my passions for the fashion and culinary worlds. During my time working in those fields, I found myself repeatedly looking for opportunities to utilize software to improve our processes, products, and services. I wanted to learn more about how to leverage software to communicate and enable customers, so I spent hundreds of hours learning to code and completed a coding bootcamp where I dove deeper, learned at a rapid pace, and built a variety of applications.`,

  appLogo: appLogo,
  profilePic: profilePic,
  projects: {
    coronavirus: {
      title: `Is It Flat Yet`,
      desc: `A web app visualizing geospatial and historical Covid-19 data. A solo project born out of curiosity about Google Maps API and wanting to dive deep into Firebase.`,
      tech: `React, Google Maps API, Node.js, Firebase Hosting, Cloud Firestore, Cloud Functions`,
      img: coronavirus,
      url: "https://isitflatyet.org"
    },
    wizardsOfCode: {
      title: `Wizards of Code`,
      desc: `A realtime web app multiplayer game. My capstone project for Fullstack Academy, worked as a team of 4.`,
      tech: `React, Web Workers, CSS Animation, Google Firebase Hosting, Google Cloud Firestore, Google Cloud Functions`,
      img: wizardsOfCode,
      url: "https://youtu.be/L3sRXE7eCRU?t=148"
    },
    bumbleBee: {
      title: `BumbleBee`,
      desc: `A movie retail web app. First project at Fullstack Academy as a team of 4.`,
      tech: `React, Redux, Express, PostgreSQL, Sequelize, Node.js, Heroku`,
      img: bumbleBee,
      url: "https://github.com/Grace-Shopper-19-07/Grace-Shopper-Movies"
    },
    aicooks: {
      title: `Aicooks`,
      desc: `Marketing website for my culinary brand Aicooks, built using Weebly`,
      tech: ``,
      img: aicooks,
      url: "https://aicooksthai.com"
    },
    minesweeper: {
      title: `Minesweeper`,
      desc: `A mini project built in a day to practice game logic in JavaScript.`,
      tech: `React, CSS, HTML, AWS Amplify`,
      img: minesweeper,
      url: "https://master.d2ucpq3vv3wy29.amplifyapp.com"
    },
    portfolio: {
      title: `This website`,
      desc: `Built using React, React Spring, and mobile responsive CSS. Deployed using AWS Amplify`,
      tech: ``,
      img: portfolio,
      url: "/"
    }
  },
  cottonCandy,
  upArrow,
  downArrow,
  cottonCandyBackground :[
    { offset: 0.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 0.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 0.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
    { offset: 0, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 0.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 0.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 0.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '15%' } },
    { offset: 0.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 0.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 1, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

    { offset: 1.4, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '10%', marginLeft: '25%' } },
    { offset: 1.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 1.5, speed: 2, style: { opacity: 0.7 }, imgStyle: { width: '17%', marginLeft: '60%' } },
    { offset: 1.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 1, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 1.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
    { offset: 1.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 1.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 1.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
    { offset: 2.5, speed: 2, style: { opacity: 0.7 }, imgStyle: { width: '17%', marginLeft: '60%' } },
    { offset: 1.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 1.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 2, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

    { offset: 2.4, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '10%', marginLeft: '25%' } },
    { offset: 2.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 2.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 2, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 2.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
    { offset: 2.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 2.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 2.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
    { offset: 3.5, speed: 2, style: { opacity: 0.7 }, imgStyle: { width: '17%', marginLeft: '60%' } },
    { offset: 2.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 2.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 3, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

    { offset: 3.4, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '10%', marginLeft: '25%' } },
    { offset: 3.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 3.2, speed: 0.2, style: { opacity: 0.5 }, 
    imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 4.5, speed: 2, style: { opacity: 0.7 }, imgStyle: { width: '17%', marginLeft: '60%' } },
    { offset: 3, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 3.35, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '10%', marginLeft: '90%' } },
    { offset: 3.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 3.7, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 3.7, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
    { offset: 3.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 3.9, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 4, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

    { offset: 4.4, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '10%', marginLeft: '25%' } },
    { offset: 4.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 4.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 4, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 4.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 4, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 4.4, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
    { offset: 4.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 4.7, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 4.8, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },

    { offset: 5.4, speed: 1, style: { opacity: 0.7 }, imgStyle: { width: '10%', marginLeft: '25%' } },
    { offset: 5.1, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '8%', marginLeft: '70%' } },
    { offset: 5.2, speed: 0.2, style: { opacity: 0.5 }, imgStyle: { width: '10%', marginLeft: '12%' } },
    { offset: 5, speed: 0.2, style: { opacity: 0.4 }, imgStyle: { width: '8%', marginLeft: '2%' } },
    { offset: 5.6, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '5%' } },
    { offset: 5, speed: 0, style: { opacity: 0.3 }, imgStyle: { width: '7%', marginLeft: '80%' } },
    { offset: 5.4, speed: 0.5, style: { opacity: 0.5 }, imgStyle: { width: '15%', marginLeft: '20%' } },
    { offset: 5.9, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '25%' } },
    { offset: 5.7, speed: 0.2, style: { opacity: 0.6 }, imgStyle: { width: '10%', marginLeft: '65%' } },
    { offset: 5.8, speed: 0, style: { opacity: 0.4 }, imgStyle: { width: '7%', marginLeft: '95%' } },
  ]
};

export default Constants;