import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Chege Brian',
  title: "Hi all, I'm Brian",
  description:
    'A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / ReactJs / VueJs / Python / Django / Flask / PHP / Laravel and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.',
  resumeLink: 'https://1drv.ms/b/s!AtD6sv5O4-S1hHzqGM0wTGz4dM8c',
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
    emoji('⚡ Develop smooth and beautiful mobile UI with great UX'),
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
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
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
    Stack: 'Mobile',
    progressPercentage: '70',
  },
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
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
      'UNIX',
      'Data structures & Algorithms',
      'Database Management',
      'Web Design and Development',
      'Software Project Management',
      'Data Mining and Knowledge Discovery',
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
      'Improved on UI/UX',
      'Consuming APIs',
      'State Management Provider',
      'Design to Code translation',
      'Employed CI/CD using Github Actions',
    ],
  },
  {
    role: 'Full-Stack Developer',
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
    name: 'GeoSponsorship',
    desc: 'A demo mobile application app for students to apply for scholarships built with Flutter. Features a clean and smooth UI with great UX. The app has a CI/CD pipeline to release latest versions of the app through GitHub Actions.',
    //link: '',
  },
  {
    name: 'Design Delivery',
    desc: 'A Mobile App built with Flutter where Stores can register and post products such as jewellery and shoes to reach customers registered on the mobile platform. Couriers then deliver the product to the customer. The project si dependent on firebase for backend.',
    github: 'https://github.com/ChegeBryan/design-delivery',
  },
  {
    name: 'Jobs Classified (DWBS)',
    desc: 'A jobs classified platform for domestic workers. The platform allows job seekers to set their job preference and gets notified through SMS when a job match is found. In the development, I used Laravel, PHP web framework. Connected the application with Twillio SDK to send SMS to users as a background job using Laravel Scheduler and Job Queue.',
    github: 'https://github.com/ChegeBryan/dwbs',
  },
  {
    name: 'Alpha-Grocery',
    desc: 'An e-commerce web platform for vegetables and cereals vendors to connect with buyers. The platform was developed with Laravel, PHP web development framework. Deployed the web application on Azure infrastructure.',
    github: 'https://github.com/ChegeBryan/alphagrocery',
  },
  {
    name: 'Politico',
    desc: 'An online voting web platform. The frontend is built with HTML5, CSS3 and Vanilla JS. The backend is an API built with Flask (Python web framework). The project was developed using a TDD approach with a code coverage and deployed on Heroku and GitHub Pages.',
    github: 'https://github.com/ChegeBryan/politico',
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
