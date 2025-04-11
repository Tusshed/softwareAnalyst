import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Img1 from "../../assets/images/website-img-1.jpg";
import Img2 from "../../assets/images/website-img-4.jpg";
import Img6 from "../../assets/images/nollyuncrop.png";
import img4 from "../../assets/images/wiz2.jpeg";
import img5 from "../../assets/images/ecwid.png";

const projects = [
  {
    name: " Students Self Service Desk ",
    year: " New Brunswick Community College ",
    align: "left",
    image: Img1,
    link: "#",
    descriptionPoints: [
      "Conducted performance tests to ensure system handles student traffic.",
      "Collected feedback from students to improve the system.",
      "Provided training for students and staff.",
    ],
  },
  {
    name: "Real Estate Website Optimization",
    year: "Adron Homes & Properties",
    align: "right",
    image: Img2,
    link: "#",
    descriptionPoints: [
      "Helped create the visual look and feel of the entire design.",
      "Simulated high-traffic scenarios to ensure platform stability.",
      "Ensured the page's forms and data collection work correctly.",
    ],
  },
  {
    name: "Streaming & Content Delivery",
    year: "CircuitTv",
    align: "left",
    image: Img6,
    link: "#",
    descriptionPoints: [
      "Tested app features to determine which resonated best with users.",
      "Verified content security to prevent piracy and unauthorized access.",
      "Analyzed user engagements and preferences to improve content suggestions",
    ],
  },
  {
    name: "Software Analysis & Optimization",
    year: "WIZV2",
    align: "right",
    image: img4,
    link: "#",
    descriptionPoints: [
      "Tested mobile app UI/UX for consistency and ease of use.",
      "Assessed app performance with multiple connected bulbs.",
      "Verified Wi-Fi/Bluetooth connectivity for proper bulb sync.",
    ],
  },
  {
    name: "E-commerce Workflow Automation",
    year: "Ecwid",
    align: "left",
    image: img5,
    link: "#",
    descriptionPoints: [
      "Verified store creation, setup, and product catalog management.",
      "Tested payment gateway and third-party integrations (PayPal, Stripe, credit cards).",
      "Validated API functionality for real-time inventory updates and payments.",
    ],
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              descriptionPoints={project.descriptionPoints}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
