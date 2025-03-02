import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Img1 from "../../assets/images/website-img-1.jpg";
import Img2 from "../../assets/images/website-img-4.jpg";
import Img3 from "../../assets/images/website-img-3.png";
import img4 from "../../assets/images/wiz2.jpeg";
import img5 from "../../assets/images/ecwid.png";

const projects = [
  {
    name: " Students Self Service Desk ",
    year: " New Brunswick Community College ",
    align: "left",
    image: Img1,
    link: "#",
    descriptionPoints: ["a point here", "a point here", "a point here"],
  },
  {
    name: "Real Estate Website Optimization",
    year: "Adron Homes & Properties",
    align: "right",
    image: Img2,
    link: "#",
    descriptionPoints: ["something here", "a point here", "a point here"],
  },
  {
    name: "Dashboard & Reporting System",
    year: "xBusiness",
    align: "left",
    image: Img3,
    link: "#",
    descriptionPoints: ["something here", "a point here", "a point here"],
  },
  {
    name: "Software Analysis & Optimization",
    year: "WIZV2",
    align: "right",
    image: img4,
    link: "#",
    descriptionPoints: ["something here", "a point here", "a point here"],
  },
  {
    name: "E-commerce Workflow Automation",
    year: "Ecwid",
    align: "left",
    image: img5,
    link: "#",
    descriptionPoints: ["something here", "a point here", "a point here"],
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
