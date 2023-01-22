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
];
export const bioDescription = `Front-end Engineer with experience in Electronics and Electrical Engineering studied at Novosibirsk State Technical University. 4,5+ years of experience in front-end development with technologies such as {technologies}. Skilled in learning new technologies, problem-solving, and improving code efficiency. I find fulfillment in creating functional and successful products.`;

export const companies = [
  {
    label: "PriceHubble",
    link: "https://priceHubble.com",
    location: "Remote",
    position: "Front-End Developer",
    startDate: "Oct 2021",
    endDate: "current time",
    responsibilities:
      "Responsible for developing and releasing frontend UX features using JavaScript and TypeScript, including implementation of a full Responsive Web Design and ensuring code coverage through testing.",
  },
  {
    label: "Westarp/Realtify",
    link: "https://realtify.cz",
    location: "Remote",
    position: "Front-End Developer",
    startDate: "Oct 2019",
    endDate: "Oct 2021",
    responsibilities:
      "Implementing a polished and usable service including maps, tables and UI animations. Responsible for translating business requirements into functional frontend and UX features using modern technologies such as JavaScript, HTTP, CSS3, and HTML5",
  },

  {
    label: "ServiceWhale",
    link: "https://servicewhale.com/",
    location: "Remote",
    position: "Front-End Developer",
    startDate: "Aug 2019",
    endDate: "Nov 2019",
    responsibilities:
      "Maintaining the web service and fixing bugs as they arise. Participated in building reusable components and front-end libraries for future use. Writing technical documentation for the front-end part of the service. Ensured cross-browser compatibility, including coding for Internet Explorer.",
  },

  {
    label: "Latoken",
    link: "https://latoken.com",
    location: "Moscow",
    position: "Front-End Developer",
    startDate: "Sep 2018",
    endDate: "Aug 2019",
    responsibilities:
      "Translating web application from template engine to multi-page application, ongoing maintenance, enhancement of front-end applications, implementing and releasing product features for web and mobile web devices, communicating with development teams and product managers to implement software solutions, and participating in design and code reviews.",
  },
  {
    label: "Teledirekt",
    link: "https://teledirekt.com",
    location: "Moscow",
    position: "Front-End Developer",
    startDate: "Jun 2018",
    endDate: "Sep 2018",
    responsibilities:
      "Responsible for coding landing pages using web frameworks, and ensuring cross-browser compatibility.",
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
    label: "Linkedin",
    link: "https://www.linkedin.com/in/maxim-k-1a9451163/",
  },
  {
    label: "Github",
    link: "https://github.com/maksimkunaev",
  },
];

export const contacts = [
  { label: "termuovex@gmail.com", link: "mailto:termuovex@gmail.com" },
];

export const bio = {
  name: "Maksim Kunaev",
  occupation: "Front End Engineer",
  photo: "./media/photo.png",
  technologies,
  // photo:
  // "https://media-exp2.licdn.com/dms/image/C5603AQGz4V6gE10kRA/profile-displayphoto-shrink_800_800/0/1636717366310?e=1659571200&v=beta&t=2tqnkyOSZ2HBL5aeVrWsQCwWuy1KDE8_2eBElPZrfXg",
  description: bioDescription,
  socials,
  contacts,
};

export const skills = [
  "4-5+ years of experience in front-end development",
  "Proficient in Vue.js, React.js, and Angular frameworks such as Nuxt.js and Next.js.",
  "Experience with state management libraries such as Redux.js, Vuex, and Mobx.js.",
  "Web development tools and technologies including Webpack, Node.js, Babel, NPM, GraphQL, Stylus, and GIT.",
  "Familiarity with Unix CLI and shell scripting.",
  "Knowledge of Python and Jupiter notebooks.",
  "English proficiency at Upper-Intermediate level.",
];
