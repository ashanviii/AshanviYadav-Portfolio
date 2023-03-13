import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    twitter,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    hub,
    linkedin,
    behance,
    hashnode,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  {
    id: "social",
    title: "Links",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/file/d/1gTio18Ur0S2-bxHis-WPsZyzPmeVvvqt/view?usp=sharing",
    target: "_blank",
  },
  ];

  const morelinks = [
    {
     title: "Hub",
     icon: hub,
     link: "https://github.com/ashanviii",
    },
    {
     title: "LinkedIn",
     icon: linkedin,
     link: "https://www.linkedin.com/in/ashanvi-yadav/",
    },
    {
     title: "Behance",
     icon: behance,
     link: "https://www.behance.net/ashanvi",
    },
    {
     title: "Hashnode",
     icon: hashnode,
     link: "https://www.upwork.com/freelancers/~01ca2c0302a51b7832",
    },
    {
      title: "Twitter",
      icon: twitter,
      link: "https://twitter.com/ashanvii",
     },
   ]; 
  
  const services = [
    {
      title: "Cloud Engineer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "DevOps",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "UX Designer | Researcher",
      company_name: "Adobe ",
      icon: starbucks,
      iconBg: "#ffffff",
      date: "May 2022 - July 2022",
      points: [
        "Analyzed research data and synthesized it into actionable insights.",
        "Designed user interfaces for 7-10 different features that are intuitive, visually appealing, and accessible.",
        "Maintained consistency across design systems for 3-5 different products and maintained style guides for each.",
        "Worked collaboratively with other members of the UX team to inform design decisions and improve user experience.",
      ],
    },
    {
      title: "Core Member ",
      company_name: "Google Developer Group",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "I attend and present at developer conferences and events to share my expertise and promote Google technologies.",
        "I write technical blog posts and documentation to educate and inform developers about Google technologies and best practices.",
        "I collaborate with other Core Members to provide technical guidance and support for Google developer products and services.",
        "Provided technical support and guidance to Google Developer Groups (GDGs) and other developer communities.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "BrightPod",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Feb 2022",
      points: [
        "Worked closely with product managers to define project requirements and deliverables.",
        "Conducted usability testing and analyzed results to improve designs.",
        "Participated in agile development process and iterated on designs based on feedback.",
        "Conducted user research and testing to inform design decisions.",
      ],
    },
  ];
  
 /* const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ]; */
  const projects = [
    {
      name: "PathFinding Visualizer",
      description:
        "To create a pathfinding visualization project using Java and the A* algorithm, I started by defining the problem I wanted to solve. In this case, I wanted to create a pathfinding algorithm that can find the shortest path between two points in a 2D grid. I also defined the constraints and requirements for the project, such as the user interface and the specific programming tools I wanted to use.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "A* algorithm",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ashanviii/A-Pathfinding-Visualization-Java",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { morelinks, services, technologies, experiences, projects };