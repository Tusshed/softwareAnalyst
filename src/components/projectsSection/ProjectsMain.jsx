import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Img1 from "../../assets/images/website-img-1.jpg";
import Img2 from "../../assets/images/website-img-3.jpg";
import Img3 from "../../assets/images/website-img-4.jpg";

const projects = [
  {
    name: " Software Testing & Quality Assurance",
    year: "Sept2023",
    align: "left",
    image: Img1,
    link: "#",
  },
  {
    name: " Business Process Optimization",
    year: "Jan2023",
    align: "right",
    image: Img2,
    link: "#",
  },
  {
    name: "Dashboard & Reporting System",
    year: "May2024",
    align: "left",
    image: Img3,
    link: "#",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
