import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Chege Brian',
  title: "Hi all, I'm Brian",
  description:
    'A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / ReactJs / VueJs / Python / Django / Flask / PHP / Laravel and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.',
  resumeLink: 'https://cv.hanzla.ga',
};

export const openSource = {
  githubUserName: 'ChegeBryan',
};

export const contact = {};

export const socialLinks = {
  twitter: 'https://twitter.com/chegenbrian',
  github: 'https://github.com/ChegeBryan',
  linkedin: 'https://www.linkedin.com/in/chegebrian/',
};

export const skillsSection = {
  title: 'What I do',
  subTitle:
    'AM A PASSIONATE WEB DEVELOPER / MOBILE DEVELOPER WHO LOVES TO SOLVE PROBLEMS THROUGH CODE',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji(
      '⚡ Integration of third party services such as Firebase/ Azure/ GCP/ Twillio'
    ),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'vuejs',
      fontAwesomeClassname: 'vscode-icons:file-type-vue',
    },
    {
      skillName: 'flutter',
      fontAwesomeClassname: 'logos:flutter',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'gcp',
      fontAwesomeClassname: 'logos:google',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'logos:python',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
  ],
};

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Mobile',
    progressPercentage: '70',
  },
];

export const educationInfo = [
  {
    schoolName: 'Chuka University',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'September 2016 - September 2021',
    desc: 'Relevant Courses:',
    descBullets: [
      'Data structures & Algorithms',
      'UNIX',
      'Database Mana'
      'Web Design and Development',
      'Software Project Management',
      'Data Mining and Knowledge Discovery'
    ],
  },
  {
    schoolName: 'ALC WITH MICROSOFT AZURE TRAINING',
    subHeader: 'Microsoft Azure Fundamentals (AZ-900)',
    duration: 'June 2020',
    desc: 'Acquired foundational knowledge on azure cloud services.',
    descBullets: [
      'Cloud concepts',
      'Core Azure services',
      'Core solutions and management tools on Azure',
      'General security and network security features',
      'Identity, governance, privacy, and compliance features',
      'Azure cost management and Service Level Agreements',
    ],
  },
];

export const experience = [
  {
    role: 'Mobile Developer Intern',
    company: 'Adrian Kenya LTD',
    companylogo: '/img/icons/common/AAAL.png',
    date: 'May 2021 – Aug 2021',
    desc: 'Developed a demo mobile application app for students to apply for scholarships using Flutter.',
    descBullets: [
      'State management Provider',
      'Improved on UI/UX',
      'Employed CI/CD using Github Actions',
    ],
  },
  {
    role: 'Full-Stack developer',
    company: 'Andela',
    companylogo: '/img/icons/common/andela.jpeg',
    date: 'Jan 2019 – Feb 2019',
    desc: 'Participated in Andela Bootcamp and deployed an online voting platform.',
    descBullets: [
      'UI design using HTML5, CSS3, ES6',
      'Flask Restful API development',
      'Consumed API using ES6 Fetch API',
      'Test-Driven Development',
      'CI/CD with Travis CI',
      'Code versioning using GIT',
    ],
  },
];

export const projects = [
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: 'https://example.com',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    github: 'https://github.com/1hanzla100',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    github: 'https://github.com/1hanzla100',
    link: 'https://example.com',
  },
];

export const feedbacks = [
  {
    name: 'Hassan Mehmood',
    feedback:
      'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.',
  },
  {
    name: 'Maheen Altaf',
    feedback:
      'the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job',
  },
];
