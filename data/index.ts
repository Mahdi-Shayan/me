export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "University Library",
    des: "library management system and admin panel with advanced features",
    subDes:
      "the University Library Management System is a productiongrade platform featuring a public-facing app and an admin interface. It offers advanced functionalities like seamless book borrowing with reminders and receipts, robust user management and many other features like saving books, sending notifications, and more.",
    img: "/p1.webp",
    iconLists: [
      "/nextjs.svg",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/auth.svg",
      "/postgresql.svg",
      "/redis.svg",
      "/shadcn.svg",
    ],
    inProgress: true,
    link: "/ms-university-library.netlify.app",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    subDes:
      "Yoom is designed to make virtual meetings effortless, providing a user-friendly interface and powerful features, Developed a real-time video calling and meeting application using the Stream API. Implemented features such as schedule meetings.",
    img: "/p2.webp",
    iconLists: [
      "/nextjs.svg",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/getstream.svg",
      "/clerk.svg",
    ],
    inProgress: true,
    link: "/ms-zoom-clone.netlify.app",
  },
  {
    id: 3,
    title: "Animate Portfolio",
    des: "A showcase of my projects and skills with smooth animations",
    subDes:
      "A showcase of my projects and skills with a focus on modern web development robustly scroll and navigate animation with motion",
    img: "/p3.webp",
    iconLists: [
      "/react.svg",
      "/typescript.svg",
      "/sass.svg",
      "/motion.svg",
    ],
    inProgress: false,
    link: "/ms-animate-portfolio.netlify.app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    subDes: "modern iPhone landing page with smooth animtion powered by Framer Motion and iPhone model Three js with changing color and size and other more features.",
    img: "/p4.webp",
    iconLists: [
      "/react.svg",
      "/javascript.svg",
      "/sass.svg",
      "/threejs.svg",
      "/gsap.svg",
      "/motion.svg",
    ],
    inProgress: false,
    link: "/ms-iphone-challenge.netlify.app",
  },
  {
    id: 5,
    title: "Query Countries",
    des: "A web application that allows users to query country information using a REST API.",
    subDes: "Utilized React and Axios to fetch data from a REST API with React-Query, displaying country information in a user-friendly manner, including features like search and filtering, and routing details page and handle data loading skeleton.",
    img: "/p5.webp",
    iconLists: [
      "/react.svg",
      "/javascript.svg",
      "/sass.svg",
      ""
    ],
    inProgress: false,
    link: "/ms-iphone-challenge.netlify.app",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "RBAC",
    desc: "I'm able to implement Role-based access control, which modern businesses that interact with users need.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Self-taught developer",
    desc: "I am a highly motivated self-taught developer, solving complex problems and delivering quality solutions, sharpened through real-world experience rather than formal training.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "API",
    desc: "Proficient in crafting robust APIs using Next.js, ensuring seamless communication between front-end and back-end systems",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Authentication & Cookie",
    desc: "Thanks to Next-auth , Clerk ,  Next.js Api and my personal experience, I am capable of implementing authentication and cookies. by the way, page security is ensured!",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/Mahdi-Shayan',
    alt: 'github'
  },
  {
    id: 2,
    img: "/wha.svg",
    link: 'https://wa.me/09105779290',
    alt: 'whatsapp'
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
