import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCheckCircle } from "react-icons/fa"; // Import check icon

const SingleProject = ({
  name,
  year,
  align,
  image,
  link,
  descriptionPoints,
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {/* Project Description Points */}
        <ul
          className={`space-y-2 text-lightGray mb-4 ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {descriptionPoints?.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-cyan mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
