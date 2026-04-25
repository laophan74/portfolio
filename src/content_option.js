import linkedoutLogo from "./assets/images/linkedout-logo.png";
import xuanayLogo from "./assets/images/xuanay-logo.png";

const logotext = "LEON PHAN";
const meta = {
    title: "Leon Phan",
    description: "I'm Leon Phan - A software developer experienced in React, Node.js, Express, MongoDB, WordPress, PHP, and mobile app development.",
};

const introdata = {
    title: "I'm Leon Phan",
    animated: {
        first: "I build full-stack web applications",
        second: "I develop backend APIs",
        third: "I create smooth user experiences",
    },
    description: "I am a software developer with experience building full-stack web applications, backend APIs, database-driven systems, and mobile applications.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About Me",
    aboutme: "I am Leon Phan, a software developer focused on full-stack web development, backend systems, and practical user-facing products. I have internship experience at ITR VN: Technology Design and Engineering and Integral Immersive Analytics Lab at Western Sydney University. I hold a Bachelor of Software Engineering from the University of Information Technology and am pursuing a Master of Information and Communications Technology at Western Sydney University.",
};
const worktimeline = [{
        jobtitle: "Intern",
        where: "ITR VN: Technology Design and Engineering",
        date: "Oct 2022 - Dec 2022",
    },
    {
        jobtitle: "Intern",
        where: "Integral Immersive Analytics Lab, Western Sydney University",
        date: "Oct 2025 - Dec 2025",
    },
];

const skills = [
    {
        name: "JavaScript / Java / C",
        value: 90,
    },
    {
        name: "React / NextJS / ExpressJS",
        value: 90,
    },
    {
        name: "MongoDB / SQL / Firebase / Supabase",
        value: 85,
    },
    {
        name: "WordPress / PHP / Cloudinary",
        value: 80,
    },
];

const services = [{
        title: "Web Development",
        description: "Building responsive full-stack applications with React, NextJS, Node.js, ExpressJS, MongoDB, and modern frontend tools.",
    },
    {
        title: "Backend Development",
        description: "Designing RESTful APIs, database schemas, authentication flows, media uploads, and reliable server-side features.",
    },
    {
        title: "Mobile Apps",
        description: "Developing Android applications with Java and Firebase, including booking flows, user management, and smooth navigation.",
    },
];

const dataportfolio = [{
        img: linkedoutLogo,
        description: "LinkedOut Social Media - A full-stack social media application built with React, Redux, Tailwind CSS, Node.js, Express, and MongoDB. Features include chat, posts, comments, likes, profiles, notifications, and Cloudinary media uploads.",
        link: "https://linkedout-frontend.vercel.app",
    },
    {
        img: xuanayLogo,
        description: "BanhComXuaNay - A website maintained with WordPress and PHP, with customized pages for showcasing research projects, publications, and dynamically rendered content.",
        link: "https://banhcomxuanay.com",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Coach Ticket - Mobile Booking App - An Android coach ticket booking application built with Java and Firebase. Core features include ticket search, booking, user management, UI design, and navigation.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "laophan74@gmail.com",
    YOUR_FONE: "0412358005",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/laophan74",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
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
