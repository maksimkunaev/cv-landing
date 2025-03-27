export const technologies = [
  "TypeScript",
  "Vue.js",
  "React.js",
  "Angular",
  "Nuxt.js",
  "Next.js",
  "Redux.js",
  "Vuex",
  "Mobx.js",
  "Webpack",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git"
];

export const bioDescription = `Frontend Engineer with experience in Electronics and Electrical Engineering studied at Novosibirsk State Technical University. 5+ years of experience in frontend development with technologies such as {technologies}. Skilled in performance optimization, creating responsive applications, and improving code efficiency. I find fulfillment in creating functional and successful products that deliver exceptional user experiences.`;

export const companies = [
  {
    label: "PriceHubble",
    link: "https://priceHubble.com",
    location: "Remote",
    position: "Frontend Developer",
    startDate: "Oct 2021",
    endDate: "Feb 2025",
    responsibilities: [
      "Implemented client-side lazy loading, reducing initial UI render time from 1-2 minutes to a few seconds.",
      "Led seminar on front-end architecture and performance optimization, enhancing team capabilities.",
      "Integrated and managed 40-50 new features, significantly improving system functionality."
    ],
  },
  {
    label: "Realtify",
    link: "https://realtify.cz",
    location: "Prague, Czechia",
    position: "Frontend Developer",
    startDate: "Oct 2019",
    endDate: "Oct 2021",
    responsibilities: [
      "Built and led development of entire front-end project using Vue.js, creating about 20 pages and several dozen components.",
      "Designed and implemented multi-page application with logical quiz forms, enhancing user engagement.",
      "Optimized website performance, improving load times and overall user experience."
    ],
  },
  {
    label: "LATOKEN",
    link: "https://latoken.com",
    location: "Moscow",
    position: "Frontend Developer",
    startDate: "Sep 2018",
    endDate: "Aug 2019",
    responsibilities: [
      "Developed UI from scratch using React.js, making the website 2-3 times faster and more usable.",
      "Collaborated with the development team to enhance web and mobile platforms, resulting in a 2-3 times increase in development efficiency.",
      "Improved user interfaces by implementing approximately 50 new features, contributing to increased user engagement and platform scalability."
    ],
  },
  {
    label: "Teledirekt",
    link: "https://teledirekt.com",
    location: "Moscow",
    position: "Frontend Developer",
    startDate: "Jun 2018",
    endDate: "Sep 2018",
    responsibilities: [
      "Created and maintained approximately 10 high-quality landing pages.",
      "Performed regular application updates, aligning with evolving business objectives.",
      "Optimized website performance across modern browsers and Internet Explorer, ensuring broad accessibility."
    ],
  },
];

export const sections = [
  { label: "Home", componentName: "Bio", link: "bio", showLink: false },
  { label: "About me", componentName: "About", link: "about", showLink: true },
  {
    label: "Experience",
    componentName: "Experience",
    link: "experience",
    showLink: true,
  },
  { label: "Skills", componentName: "Skills", link: "skills", showLink: true },
  {
    label: "Contact",
    componentName: "Contact",
    link: "contact",
    showLink: true,
  },
];

export const socials = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/maksim-k-1a9451163/",
  },
  {
    label: "Github",
    link: "https://github.com/maksimkunaev",
  },
  // {
  //   label: "Portfolio",
  //   link: "https://maksimkunaev.github.io/cv-landing/",
  // }
];

export const contacts = [
  { label: "termuovex@gmail.com", link: "mailto:termuovex@gmail.com" },
];

export const bio = {
  name: "Maksim Kunaev",
  occupation: "Frontend Engineer",
  photo: "./media/photo.png",
  technologies,
  description: bioDescription,
  socials,
  contacts,
  location: "Budva, Montenegro"
};

export const skills = [
  "5+ years of experience in frontend development",
  "Performance optimization - reducing load times from minutes to seconds",
  "Proficient in Vue.js, React.js, and Angular frameworks",
  "Expert in TypeScript and JavaScript development",
  "Experience with state management libraries including Redux.js, Vuex, and MobX",
  "Web development tools including Webpack, Node.js, Git, and GraphQL",
  "Responsive design and cross-browser compatibility",
  "Team leadership and technical seminars",
  "Languages: Russian (Native), English (Professional Working), Croatian (Limited Working), Serbian (Limited Working)"
];

export const education = [
  {
    institution: "Novosibirsk State Technical University (NSTU)",
    degree: "Incomplete Higher Education",
    field: "Faculty of Radio Engineering and Electronics, Electronics and Microelectronics",
    startDate: "2010",
    endDate: "2014"
  }
];