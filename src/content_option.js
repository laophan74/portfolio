import linkedoutLogo from "./assets/images/linkedout-logo.png";
import xuanayLogo from "./assets/images/xuanay-logo.png";
import coachticketLogo from "./assets/images/coachticket-logo.png";

const logotext = "LEON PHAN";
const meta = {
    title: "Leon Phan",
    description: "I'm Leon Phan - A full-stack software developer experienced in React, Next.js, Node.js, Nest.js, Express.js, MongoDB, Firebase, Supabase, AWS, and Cloudinary.",
};

const introdata = {
    title: "I'm Leon Phan",
    animated: {
        first: "I build full-stack web applications",
        second: "I develop RESTful APIs",
        third: "I create responsive user experiences",
    },
    description: "I am a Full-Stack Software Developer focused on responsive web applications, RESTful APIs, database-driven systems, and practical user-facing products.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Me",
    aboutme: "I am Leon Phan, a Full-Stack Software Developer with experience building web and mobile applications. My work spans React, Next.js, Node.js, Nest.js, Express.js, MongoDB, Firebase, Supabase, AWS, Cloudinary, WordPress, and MySQL. I have internship experience at ITR VN: Technology Design and Engineering and the Integral Immersive Analytics Lab at Western Sydney University.",
};
const worktimeline = [{
        jobtitle: "Intern",
        where: "Integral Immersive Analytics Lab, Western Sydney University",
        date: "Oct 2025 - Dec 2025",
        technologies: "React, MUI, Express.js, MongoDB",
        description: "Developed and maintained the lab website, customized pages for research projects and publications, and integrated backend data with frontend components for dynamic content rendering.",
    },
    {
        jobtitle: "Intern",
        where: "ITR VN: Technology Design and Engineering",
        date: "Oct 2022 - Dec 2022",
        technologies: "React, Express.js, MongoDB",
        description: "Developed a URL shortening web application, designed RESTful APIs, built MongoDB schemas, and tested backend functionality for reliable short URL generation and retrieval.",
    },
];

const skills = [
    {
        name: "Programming Languages: JavaScript, Java, C#",
        value: 90,
    },
    {
        name: "Frameworks & Libraries: React, Next.js, Node.js, Nest.js, Express.js, Tailwind CSS",
        value: 90,
    },
    {
        name: "Databases: MongoDB, SQL, MySQL, Firebase, Supabase",
        value: 85,
    },
    {
        name: "Cloud & Tools: AWS, Cloudinary, Cloud Firestore, WordPress",
        value: 80,
    },
    {
        name: "AI Tools: Claude, Github Copilot, Codex",
        value: 80,
    },
];

const services = [{
        title: "Full-Stack Web Development",
        description: "Building responsive applications with React, Next.js, Node.js, Nest.js, Express.js, MongoDB, and Tailwind CSS.",
    },
    {
        title: "Backend API Development",
        description: "Designing RESTful APIs, database schemas, media uploads, and API-driven integrations between frontend and backend services.",
    },
    {
        title: "E-commerce & Mobile Apps",
        description: "Developing e-commerce workflows and Android applications with product catalogues, bookings, user management, and smooth navigation.",
    },
];

const dataportfolio = [{
        title: "LinkedOut Social Media",
        img: linkedoutLogo,
        imgClassName: "po_item_img_cover",
        description: "Individual full-stack social media application built with React, Redux, Tailwind CSS, Node.js, Express.js, and MongoDB. Designed RESTful APIs for posts, comments, and user interactions, integrated Cloudinary media uploads, and deployed the frontend on Vercel.",
        link: "https://linkedout-frontend.vercel.app",
    },
    {
        title: "BanhComXuaNay E-commerce Website",
        img: xuanayLogo,
        description: "Team e-commerce website built with Next.js, Nest.js, and MongoDB. Developed the responsive storefront, built API-driven integration between frontend and backend services, and applied server-side rendering and frontend optimization practices.",
        link: "http://banhcomxuanay.com",
    },
    {
        title: "Coach Ticket Mobile Booking App",
        img: coachticketLogo,
        imgClassName: "po_item_img_cover",
        description: "Team Android coach ticket booking application built with Java and Firebase. Implemented ticket search, booking, user management, UI design, and navigation for a smooth user experience.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "laophan74@gmail.com",
    YOUR_FONE: "0412358005",
    YOUR_WEBSITE: "http://laophan.com",
    YOUR_GITHUB: "https://github.com/laophan74",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://fb.com/laophan74",
    github: "https://github.com/laophan74",
    linkedin: "https://www.linkedin.com/in/leonphan74/",
};

const education = [
    {
        title: "Bachelor of Software Engineering",
        school: "University of Information Technology",
        date: "2019 - 2023",
    },
    {
        title: "Master of Information and Communications Technology",
        school: "Western Sydney University",
        date: "2024 - 2026",
    },
];
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    education,
};
