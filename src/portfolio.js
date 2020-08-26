
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Narain",
  title: "Hey there! I'm Narain",
  subTitle: emoji("A passionate Software Engineer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / .Net / Java and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1-xzoBEzkd48ywRyFl8ysIjCPUPcKv1UF/view"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/rnarain",
  linkedin: "https://www.linkedin.com/in/narain-ratanchandani/",
  gmail: "nratanchandai@gmail.com",
  //gitlab: "https://gitlab.com/rnarain",
  //facebook: "https://www.facebook.com/Narain.Ratanchandani7"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Experienced full-stack engineer who wants to create a positive impact on people's lives with technology.",
  skills: [
    emoji("⚡ I strive to write highly scalable and modular code incorportaing all Software design principles"),
    emoji("⚡ Proven track record of delivering feature releases while meeting deadlines"),
    emoji("⚡ Creative thinker always looking to simplify things for myself and my team")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: " fab fa-java"
     
    },
    {
      skillName: ".NET C# Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
   
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Research Assistant",  
      company: "San Jose State Universoty",
      companylogo: require("./assets/images/sjsu-logo.png"),
      date: "June 2020 – Present",
      desc: "Working as a full-stack engineer for a professor in Computer Engineering Department at SJSU",
      descBullets: [
        "Integrated PayPal Payments API including payouts, membership, and refund",
        "Taught basic programming skills to hig-school students at TheOpClub",
        "Secured website’s paid content by using S3 signed URLs and domain-specific content access with S3 bucket policy"
      ]
    },
    {
      role: "Software Developer",   
      company: "Hypeteq",
      companylogo: require("./assets/images/hypeteq.png"),
      date: "April 2019 – Dec 2019",
      desc: "Worked on technologies like .NET Core, Azure, SQL, Mongo DB, Redis",
      descBullets: [
        "Wrote more than 10k line of production grade code",
        "Developed a IOT solution from wind-farms owners that reduced cost by 25% for more than 100 clients, by providing accurate energy generation values",
        "Developed various microservices for a CMS"
      ]
    },
    {
      role: "Project Trainee",  
      company: "Gateway",
      companylogo: require("./assets/images/gateway.png"),
      date: "Jan 2018 – Aug 2018",
      desc: "Trained in full-stack development in Html, CSS, Bootstrap, .NET MVC, Angular 4 & SQL.",
      descBullets: [
        "Worked with other interns on a project to collaborate students with potential universities using custom point-matching algorithm written as SQL stored procedure",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSource = {
//   githubConvertedToken: "xxxxx",
//   githubUserName: "rnarain", // Change to your github username to view your profile in Contact Section.
//   showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
// };

const githubProjects= {"data":{"user":{"pinnedItems":{"totalCount":3,"edges":[{"node":{"name":"amazon","description":"amazon replica using mern stack. Key features: Multiple database- MySQL & MongoDB ,Redis Cache, Kafka, Passport JWT Authentication.","forkCount":0,"stargazers":{"totalCount":2,"__typename":"StargazerConnection"},"url":"https://github.com/rnarain/amazon","id":"MDEwOlJlcG9zaXRvcnkyNTUyNTIzMzc=","diskUsage":6044,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a","__typename":"Language"},"__typename":"Repository"},"__typename":"PinnableItemEdge"},{"node":{"name":"handshake-replica-with-kafka","description":"handshake-replica with node.js & Mongo DB for backend, react.js for frontend and additional features like redux,jwt, passport,kafka.","forkCount":0,"stargazers":{"totalCount":0,"__typename":"StargazerConnection"},"url":"https://github.com/rnarain/handshake-replica-with-kafka","id":"MDEwOlJlcG9zaXRvcnkyNDg4NzgwMTM=","diskUsage":6538,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a","__typename":"Language"},"__typename":"Repository"},"__typename":"PinnableItemEdge"},{"node":{"name":"Produce-Tracker","description":"Permissioned blockchain to build a transparent grocery delivery system. Technologies used : IBM Blockchain , smart contracts , React, Node.js, Kubernetes","forkCount":0,"stargazers":{"totalCount":0,"__typename":"StargazerConnection"},"url":"https://github.com/rnarain/Produce-Tracker","id":"MDEwOlJlcG9zaXRvcnkyNTAzOTA1NTM=","diskUsage":6296,"primaryLanguage":{"name":"JavaScript","color":"#f1e05a","__typename":"Language"},"__typename":"Repository"},"__typename":"PinnableItemEdge"}],"__typename":"PinnableItemConnection"},"__typename":"User"}},"loading":false,"networkStatus":7,"stale":false}


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Certifications"),
  subtitle: "",

  achivementsCards: [
    {
      title: "MCSA: Web Applications - Certified 2020",
      subtitle: "Microsoft certification for demonstrating the skills required to implement modern web apps.",
      image: require("./assets/images/mcsa.png"),
      footerLink: [
        { name: "Certification", url: "https://www.youracclaim.com/badges/b98e6618-9c42-4301-88c0-5065b5f532d4" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "MCSD: App Builder — Certified 2020",
      subtitle: "Microsoft certification for demonstrating the skills to build modern mobile and/or web applications and service",
      image: require("./assets/images/mcsd.png"),
      footerLink: [{ name: "Certification", url: "https://www.youracclaim.com/badges/a4e08b9d-637e-4ec2-a6ce-f20873bcb5cd" }]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@narainssd/google-login-with-firebase-in-react-373e305bc760",
      title: "Google Login with Firebase in React",
      description: "This article explains how to setup Firebase Google Authentication in your react app."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/NarainRatanchandani-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Narain-Ratanchandani-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ✉️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (332) 201 2886",
  email_address: "nratanchandani@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};

const education=[
  {
    degree : "Masters of Science, Computer Software Engineering",
    year : "2020-Present",
    college : "San Jose State University",
    description : "Course work : Enterprise Distributed Systems, Enterprise Software Platforms, Web UI Technologies , Enterprise Application Development, Software Design Principles , Data Engineering & Web Mining "
  },
  {
    degree : "Bachelors of Technology, Computer Engineering",
    year : "2014-2018",
    college : "Indus University",
    description : "Course work : Operating Systems, Data Structures & Algorithms , Object Oriented Programming"
  }
];
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences,githubProjects , bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails , education};
