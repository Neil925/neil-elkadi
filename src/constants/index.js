import profile from "../resources/media/Profile.jpg";
import about from "../resources/media/About.jpg";

import neilBot from "../resources/projects/NeilBot.png";
import valenciaWeb from "../resources/projects/ValenciaTechClub.png";
import engage from "../resources/projects/UnofficialEngageApi.png";
import portfolioWebsite from "../resources/projects/Portfolio.png";
import pills from "../resources/projects/CrazyPills.jpg";
import freelance from "../resources/projects/NeilFreelance.png";

const constants = {
  profile: profile,
  heroText:
    "Starting since High School, I've been on a nonstop journey of computer mastery. From basic web development, to full stack, to software development, and even server administration. I've continued to pick up skill after skill whether it be for hobbies, small communities, or work. I am confident that what may come, I will always be on a path of pursuit of knowledge and growth.",
  aboutPic: about,
  aboutText: [
    "I am a passionate developer who takes joy in creating solutions to many types of software problems. With a strong grasp on many programming languages as well as indepth knowledge of Linux Operating Systems and the cloud, I not only specialize in creating real-world applications but also in deployment, scailability, and maintenance. My experience has been building since I was a highschooler 2018 wherein I have had the chance to work on Ubuntu servers, cloud computing, a variety of web stacks, and more.",
    "I am highly motivated when working with others and very naturally fill my position whether as a someone looking to learn and improve or a as leader. If I am not programming, I am teaching and if I am not teaching, I am learning.",
    "Web engineering may be my career, but technology is my hobby.",
  ],
  experience: [
    {
      title: "Computer Science Tutor",
      place: "Valencia College",
      time: "August 2023 - Present",
      skills: [
        "C",
        "Java",
        "C++",
        "JavaScript",
        "Microsoft Office Suite",
        "Teaching",
      ],
      description:
        "As a tutor, I assist students with various programming courses, leveraging my experience to help with both familiar and unfamiliar subjects. Common areas of assistance include introductory programming, C, Java, advanced courses, C#, scripting languages, computer networking, and Microsoft Office applications.",
    },
    {
      title: "Valencia Tech Club President",
      place: "Valencia College",
      time: "January 2023 - Present",
      skills: [
        "Leadership",
        "Web Development",
        "Public Speaking",
        "Organizing",
      ],
      description:
        "Leading the Tech Club, I organize technology-related activities such as workshops, tech talks, showcases, and competitions. My role demands strong leadership, organizational skills, and technical proficiency to provide valuable experiences for club members.",
    },
    {
      title: "DevSecOps Administrator",
      place: "King's Playground",
      time: "July 2019 - January 2023",
      skills: [
        "ASP.NET",
        "MySQL",
        "Ubuntu Server",
        "Nginx",
        "C# .NET",
        "SSH",
        "Shell/Bash",
      ],
      description:
        "At King's Playground, an online multiplayer gaming community, I developed and integrated custom software solutions to enhance game moderation, staff management, and gameplay. Starting as a community leader, I bridged the gap between development and leadership, contributing to the community's success.",
    },
    {
      title: "Web Developer",
      place: "Freelance",
      time: "September 2020 - May 2021",
      skills: [
        "ReactJS",
        "ReactBootstrap",
        "JavaScript",
        "NodeJS",
        "Express",
        "Axios",
        "Firebase",
      ],
      description:
        "I began my web development journey in a small team, learning and collaborating on projects. We created websites for family and online groups using ReactJS and Bootstrap, managing projects through srcCode and integrating databases with Firebase.",
    },
  ],
  projects: [
    {
      title: "Freelance Portal",
      technologies: [
        "NextJS",
        "AuthJS",
        "NodeJS",
        "CSS",
        "MySQL",
        "Prisma",
        "CI/CD Pipelines",
      ],
      srcCode: "https://github.com/Neil925/neil-freelance",
      demo: "https://neilfreelance.com",
      img: freelance,
      description:
        "A personal freelance site that acts as a landing page for the services that I can provide as well as a protal for the submission of freelance requests by users and management of those requests by admins (myself).",
    },
    {
      title: "Lesser Server Control",
      technologies: ["NodeJS", "DiscordJS", "Axios"],
      srcCode: "https://github.com/Neil925/LesserServerControl",
      img: neilBot,
      description:
        "DiscordJS bot that integrates with the Pterodactyl Panel API to allow for limited access server management from a discord channel using message commands.",
    },
    {
      title: "Valencia Tech Club Website",
      technologies: ["ReactJS", "SCSS", "TypeScript"],
      srcCode: "https://github.com/Neil925/vtechclub",
      demo: "https://vtech.neilelkadi.com/",
      img: valenciaWeb,
      description:
        "A website made by and for Valencia Tech Club. The site presents some general information about the club, its notable members / leaders, and resources on how to become part of the club.",
    },
    {
      title: "Unofficial Engage API",
      technologies: ["NodeJS", "Typescript", "ExpressJS", "Axios", "SQLite"],
      srcCode: "https://github.com/Neil925/unofficial-engage-api",
      img: engage,
      description:
        "The Unofficial Engage API provides a way to pull event data from the Engage website without having to use Engage's developer API. The API can only show events that are public and accessible to anyone. It accomplishes this by scraping the publicly available data from the Engage website. All information pulled from the Engage website is then stored in a SQLite Database.",
    },
    {
      title: "Portfolio Website",
      technologies: ["ReactJS", "Typescript", "TailWind"],
      srcCode: "https://github.com/Neil925/neil-elkadi",
      demo: "https://neilelkadi.com?alreadyhere=1",
      img: portfolioWebsite,
      description:
        "The very site you see before you. Get to know more about me and what I do through the work I've done on my website and the resources I have linked to it!",
    },
    {
      title: "Crazy Pills",
      technologies: ["C#", ".NET", "Northwood API"],
      srcCode: "https://github.com/Neil925/CrazyPills",
      img: pills,
      description:
        'An SCP:SL plugin that allows for randomized and fun events to occur upon consumptions of the in-game item "Pain Killers".',
    },
  ],
};

export default constants;
