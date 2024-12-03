import { Atom, Share2, SquarePen } from "lucide-react";

export const resumeDetails = {
  firstName: "Rohit",
  lastName: "Kumar",
  jobTitle: "Full Stack Developer",
  email: "john.doe@example.com",
  address: "San Francisco, CA",
  phone: "6397456632",
  themeColor: "#8055A2",
  linkedIn: "linkedin.com/in/johndoe",
  github: "github.com/johndoe",
  summary:
    "Experienced Full Stack Developer with a strong background in building scalable web applications and services. Skilled in both front-end and back-end development, with a focus on creating optimized, responsive, and user-friendly applications.",
  skills: [
    {
      language: "JavaScript",
      framework: "React",
      database: "PostgreSQL",
      tool: "Git",
    },
    {
      language: "TypeScript",
      framework: "Node.js",
      database: "MongoDB",
      tool: "Postman",
    },
    {
      language: "Python",
      framework: "Django",
      database: "PostgreSQL",
      tool: "Webpack",
    },
    {
      language: "SQL",
      framework: "React",
      database: "MySQL",
      tool: "AWS",
    },
  ],
  experience: [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      role: "Senior Full Stack Developer",
      startDate: "Jan 2021",
      endDate: "Present",
      workSummary:
        "Developed and maintained scalable web applications using React and Node.js. Implemented RESTful APIs and integrated third-party services for enhanced functionality. Optimized application performance and improved load times by 30%. Collaborated with UI/UX designers to enhance user experience and accessibility.",
    },
    {
      id: 2,
      company: "Creative Web Labs",
      role: "Full Stack Developer",
      startDate: "Jun 2018",
      endDate: "Dec 2020",
      workSummary:
        "Built dynamic web applications using Django and React. Designed and maintained database schemas using PostgreSQL. Deployed and managed applications on AWS, including EC2 and S3. Collaborated with UI/UX designers to enhance user experience and accessibility. Implemented CI/CD pipelines to streamline deployment and improve code quality.",
    },
  ],
  education: [
    {
      id: 1,
      universityName: "University of California, Berkeley",
      degree: "Master of Science",
      branch: "Computer Science",
      startDate: "Sep 2020",
      endDate: "Oct 2022",
      description:
        "I gain core knowledge of computer systems, programming, algorithms, and software development. I gain hands-on experience in coding, databases, and system design",
    },
    {
      id: 2,
      universityName: "University of California, Berkeley",
      degree: "Bachelor of Science",
      branch: "Computer Science",
      startDate: "Jun 2016",
      endDate: "Oct 2020",
      description:
        "I focus on areas like artificial intelligence, machine learning, cybersecurity, and data analytics. It offers advanced coursework and research opportunities also.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description:
        "Developed a full-featured e-commerce platform with React, Node.js, and MongoDB, including cart functionality, user authentication, and payment processing.",
      link: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      name: "Real-Time Chat Application",
      description:
        "Built a real-time chat application using WebSocket and Node.js, enabling instant messaging and notifications.",
      link: "https://github.com/johndoe/chat-app",
    },
  ],
};

export const cardData = [
  {
    title: "Write prompt for your form",
    icon: Atom,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem dolor praesentium, beatae quo asperiores ut ex iste esse soluta!",
  },
  {
    title: "Edit your form",
    icon: SquarePen,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem dolor praesentium, beatae quo asperiores ut ex iste esse soluta!",
  },
  {
    title: "Share and Start Accepting Responses",
    icon: Share2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem dolor praesentium, beatae quo asperiores ut ex iste esse soluta!",
  },
];
