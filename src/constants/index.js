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
    excel,
    cypress,
    jmeter,
    manualtesting,
    postman,
    ekbana,
    incticlabs,
    apitesting,
    automationtesting,
    performancetesting,
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
  ];
  
  const services = [
    {
      title: "Manual Testing",
      icon: manualtesting,
    },
    {
      title: "Automation Testing",
      icon: automationtesting,
    },
    {
      title: "API Testing",
      icon: apitesting,
    },
    {
      title: "Performance / Load Testing",
      icon: performancetesting,
    },
    {
      title: "TestCase Writing",
      icon: excel,
    },
  ];
  
  const technologies = [
    {
      name: "Cypress",
      icon: cypress,
    },
    {
      name: "API Testing",
      icon: postman,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
      
    {
      name: "git",
      icon: git,
    },

    {
      name: "Load/ Performance Testing",
      icon: jmeter,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "QA Intern",
      company_name: "EK Bana Solutions Pvt Ltd",
      icon: ekbana,
      iconBg: "#383E56",
      date: "August  2021 - December 2021",
      points: [
        "Acquired a strong foundation in software testing principles, methodologies, and tools. I gained knowledge in manual testing techniques, test case creation, and defect tracking.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participated in regression testing cycles to verify that previously fixed defects did not resurface and that new features did not impact existing functionality. ",
        "Worked collaboratively as part of a QA team, actively contributing to team meetings, sharing knowledge, and fostering a positive and supportive work environment. ",
      ],
    },
    {
      title: "Quality Assurance Engineer",
      company_name: "Inctic Labs Pvt Ltd",
      icon: incticlabs,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Developing comprehensive test plans that outline the testing scope, objectives, and strategies for various software projects.",
        "Conducting manual and automated tests to validate software functionality, identify defects, and ensure adherence to quality standards.",
        "Tracking, documenting, and managing defects using bug tracking systems, and working closely with developers to ensure timely resolution.",
        "Performing regression tests to verify that bug fixes and feature enhancements do not introduce new issues or adversely impact existing functionality.",
        "Identifying areas for process improvement, suggesting and implementing best practices, and actively participating in retrospectives to enhance the overall quality assurance process.",
        "Sharing knowledge and expertise with junior QA team members, providing guidance, and fostering a culture of learning and growth within the team.",
        "Staying updated with the latest industry trends, emerging technologies, and testing methodologies through self-learning, training, and attending relevant conferences and workshops.",
      ],
    },
   
  ];
  
  const testimonials = [
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
  ];
  
  const projects = [
    {
      name: "Pharmacy Sauji",
      description:
        "Web Based ecommerce website specially designed for pharmacy. Academic Minor Project under Kathmandu engineering College(KEC) in team of three. ",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Crime Analysis",
      description:
        "An AI tool for managing crime activites record for police and predict the crime location and Suspect's race. Academic Major Project  in team of Four.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };