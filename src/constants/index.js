import profile from "../resources/media/Profile.jpg";
import about from "../resources/media/About.jpg";

import neilBot from "../resources/projects/NeilBot.png";
import valenciaWeb from "../resources/projects/ValenciaTechClub.png";
import portfolioWebsite from "../resources/projects/Portfolio.png";
import kpgpanel from "../resources/projects/kpgpanel.png"
// import freelance from "../resources/projects/NeilFreelance.png";
// import engage from "../resources/projects/UnofficialEngageApi.png";

const constants = {
  profile: profile,
  role: 'Softawre Developer',
  heroText: 'Build full-stack features and squash bugs quickly and cleanly. Fast-learning, seasoned developer, I have developed mastery of several frameworks and libraries that allow me to turn ideas into functional code. I thrive in collaborative teams, mentoring and learning in equal measure.',
  aboutPic: about,
  aboutText: [
    "I am a passionate developer who takes joy in creating solutions to many types of software problems. With a strong grasp on many programming languages as well as indepth knowledge of Linux Operating Systems and the cloud, I not only specialize in creating real-world applications but also in deployment, scailability, and maintenance. My experience has been building since I was a highschooler 2018 wherein I have had the chance to work on Ubuntu servers, cloud computing, a variety of web stacks, and more.",
    "I am highly motivated when working with others and very naturally fill my position whether as a someone looking to learn and improve or a as leader. If I am not programming, I am teaching and if I am not teaching, I am learning.",
    "Web engineering may be my career, but technology is my hobby.",
  ],
  experience: [
    {
      title: "Junior Software Developer",
      place: "ThreatLocker",
      time: "August 2025 - Present",
      skills: [
        "C#",
        "ASP.NET",
        "Typescript",
        "Angular",
        "MSSQL",
      ],
      description:
        "Being part of the Rapid Development Team, I am responsible for addressing bugs and introducing small features within 24 hours of assignment.Followiong agile practices, I work through Jira tickets at ~3 tickets per day while ensuring code quality. My responsibility will also include performing peer reviews for others on my team.",
    },
    {
      title: "Application Technecian",
      place: "ThreatLocker",
      time: "June 2025 - August 2025",
      skills: [
        "HyperV",
        "Excel Automation",
        "C# Console Application",
      ],
      description:
        "Though brief, my work as an Application Technician was a valuable experience. Conventionally, the role involves checking over a list of applications and ensuring that we have updated definitions of them. Given my great performance in the position and my technicaly background, I was soon given the opportunity to excercise some programming by automating a task and was promoted soon thereafter.",
    },
    {
      title: "Computer Science Tutor",
      place: "Valencia College",
      time: "January 2023 - June 2025",
      skills: [
        "C",
        "Java",
        "C++",
        "JavaScript",
        "Microsoft Office Suite",
        "Teaching",
      ],
      description:
        "As a tutor, I assisted students with various programming courses, leveraging my experience to help with both familiar and unfamiliar subjects. Common areas of assistance included introductory programming, C, Java, advanced courses, C#, scripting languages, computer networking, and Microsoft Office applications.",
    },
  ],
  projects: [
    // {
    //   title: "Freelance Portal",
    //   technologies: [
    //     "NextJS",
    //     "AuthJS",
    //     "NodeJS",
    //     "CSS",
    //     "MySQL",
    //     "Prisma",
    //     "CI/CD Pipelines",
    //   ],
    //   srcCode: "https://github.com/Neil925/neil-freelance",
    //   demo: "https://neilfreelance.com",
    //   img: freelance,
    //   description:
    //     "A personal freelance site that acts as a landing page for the services that I can provide as well as a protal for the submission of freelance requests by users and management of those requests by admins (myself).",
    // },
    {
      title: "Staff Web Panel",
      technologies: ["C#", "ASP.NET", "Blazor", "Nginx", "Ubuntu Server", "Docker"],
      demo: "https://kingsplayground.fun/",
      img: kpgpanel,
      description: "A web panel designed to bring in and help staff manage players of an online game. The panel reduced manual work on management by 10 hours per week and increased player retention by upwards of 30%."
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
    // {
    //   title: "Unofficial Engage API",
    //   technologies: ["NodeJS", "Typescript", "ExpressJS", "Axios", "SQLite"],
    //   srcCode: "https://github.com/Neil925/unofficial-engage-api",
    //   img: engage,
    //   description:
    //     "The Unofficial Engage API provides a way to pull event data from the Engage website without having to use Engage's developer API. The API can only show events that are public and accessible to anyone. It accomplishes this by scraping the publicly available data from the Engage website. All information pulled from the Engage website is then stored in a SQLite Database.",
    // },
    {
      title: "Portfolio Website",
      technologies: ["ReactJS", "Typescript", "TailWind"],
      srcCode: "https://github.com/Neil925/neil-elkadi",
      demo: "https://neilelkadi.com?alreadyhere=1",
      img: portfolioWebsite,
      description:
        "The very site you see before you. Get to know more about me and what I do through the work I've done on my website and the resources I have linked to it!",
    },
  ],
};

export default constants;
