import { client1, client10, client11, client12, client2, client3, client4, client5, client6, client7, client8, client9, p1, p2, p3, p4, p5, service1, service2, service3, service4, service5, service6, service7, slider1, slider2, slider3 } from "@/assests/Home";
import { navArrType } from "@/types/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const navArr: navArrType[] = [
    {
      id: 1,
      title: "HOME",
      path: "/",
    },
    {
      id: 2,
      title: "ABOUT US",
      path: "/aboutus",
    },
    {
      id: 3,
      title: "SERVICES",
      path: "/services",
      
    },
{
    id: 4,
      title: "TOPFRONT ADVANTAGES",
      path: "/advantages",
    },
    {
      id: 5,
      title: "CLIENTS",
      path: "/clients",
    },
    {
      id: 6,
      title: "INFRASTRUCTURE",
      path: "/infrastructure",
    },
    {
      id: 7,
      title: "CAREERS",
      path: "/careers",
    },
    {
      id: 8,
      title: "CONTACT",
      path: "/contact",
    },
   
  ];
  export const iconArr = [
    {
      id: 1,
      title: "FacebookIcon",
      icon: <FacebookIcon className="text-blue-600 text-3xl" />,
      path: "https://www.facebook.com/profile.php?id=61564396266828",
    },
    {
      id: 2,
      title: "InstagramIcon",
      icon: <InstagramIcon className="text-gray-800 text-3xl" />,
      path: "https://www.instagram.com/zplu_ssecurity",
    },
    {
      id: 3,
      title: "LinkedInIcon",
      icon: <LinkedInIcon className="text-blue-600 text-3xl" />,
      path: "https://www.linkedin.com",
    },
  ];
  

  export const sliderArr = [
    {
      id: 1,
      img: slider1,
      title: "Mining, Excavation, Drilling, and Crushing ",
      paragraph: "Our expertise in mining, excavation, drilling, and crushing ensures efficient resource extraction with advanced technology, safety standards, and sustainable practices.",
    },
    {
      id: 2,
      img: slider2,
      title: "Bulk Raw Material Handling, Logistics & Transportation ",
      paragraph: "We provide efficient bulk raw material handling, logistics, and transportation solutions to ensure seamless movement of goods with reliability and speed. ",
    },
    {
      id: 3,
      img: slider3,
      title: "Operation & Maintenance Engeneering Solution",
      paragraph: "We provide reliable Operation & Maintenance Engineering Solutions that ensure optimized performance, reduced downtime, and long-term efficiency of your assets.",
    },
  ];

  export const clientArr = [
    { id:1,
     img:client1,
    },

    

    { id:4,
     img:client4,
    },

    { id:5,
     img:client5,
    },

   
    { id:8,
     img:client8,
    },

   
      
     ];


export const serviceArr = [
  {
    id: 1,
    img: service1,
    title: "Operations & Maintenance",
    description: [
      "Daily production activities, equipment monitoring, preventive & corrective maintenance.",
      "Safety protocols, quality control, workforce management, and compliance with regulatory requirements.",
      "Industrial cleaning, valve maintenance, energy and fuel management.",
      "Process optimization, spare parts management, shutdown & turnaround services.",
    ],
  },
  {
    id: 2,
    img: service2,
    title: "Fabrication and Erections",
    description: [
      "Structural Steel Fabrication and Custom Pressure Vessels.",
      "Skid and Pipe Fabrication, Material Processing, Surface Treatment.",
      "Structural Steel Erection, Pipeline Erection.",
      "Pre-Engineered Building (PEB) Erection and Commissioning.",
    ],
  },
  {
    id: 3,
    img: service3,
    title: "Plant & Equipment Erection & Commissioning",
    description: [
      "Meticulous planning, installation, testing, and integration of machinery and systems.",
      "Mechanical assembly, electrical wiring, structural installation, and utility connections.",
      "System integration and rigorous performance testing.",
      "Ensures safe, reliable, and efficient operational readiness.",
    ],
  },
  {
    id: 4,
    img: service4,
    title: "Refurbishing of Old Plant",
    description: [
      "Engineering analysis, planning, and modernization of old plants.",
      "Technology upgrades, automation, and digitalization.",
      "Construction and commissioning with project management expertise.",
      "Operational optimization for improved efficiency and performance.",
    ],
  },
  {
    id: 5,
    img: service5,
    title: "Shutdown Maintenance",
    description: [
      "Comprehensive inspections, repairs, and replacements.",
      "Industrial cleaning, upgrades, and part replacements.",
      "Specialized maintenance that cannot be performed during operations.",
      "Ensures reliability, safety, and improved asset lifespan.",
    ],
  },
  {
    id: 6,
    img: service7,
    title: "Manpower Management",
    description: [
      "Recruitment & staffing (temporary, permanent, contract, leadership hiring).",
      "Outsourcing HR functions like payroll and compliance.",
      "Talent development: training, skill assessment, performance management.",
      "Employee engagement & workforce optimization strategies.",
    ],
  },
  {
    id: 7,
    img: service6,
    title: "Technical Audit",
    description: [
      "Performance assessment, risk identification, compliance checks.",
      "Process improvement for IT, manufacturing, and infrastructure.",
      "Detailed reports with actionable recommendations.",
      "Covers cybersecurity, system controls, production processes, project implementation.",
    ],
  },
];

    

    export const infrastructureData = [
  { id: 1, title: "Raise Boring", image:p1 },
  { id: 2, title: "Dredger", image: p2 },
  { id: 3, title: "Excavator", image: p3 },
  { id: 4, title: "Dozer", image: p4 },
  { id: 5, title: "Pay Loader", image: p5 },
];
