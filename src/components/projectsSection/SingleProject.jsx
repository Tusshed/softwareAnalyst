import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCheckCircle } from "react-icons/fa";

const SingleProject = ({
  name,
  year,
  align,
  image,
  descriptionPoints,
  link,
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
          className={`text-xl font-thin text-white font-special text-center md:text-${
            align === "left" ? "right" : "left"
          }`}
        >
          {year}
        </h2>

        {/* Project Description Points */}
        <ul
          className={`space-y-2 text-lightGray mb-4 text-center md:text-${
            align === "left" ? "right" : "left"
          }`}
        >
          {descriptionPoints?.map((point, index) => (
            <li key={index} className="flex items-start gap-2" style={{}}>
              <FaCheckCircle className="text-cyan mt-1 flex-shrink-0" />
              <div
                className={`w-full text-center md:text-${
                  align === "left" ? "left" : "right"
                }`}
              >
                <span style={{ overflowWrap: "break-word", display: "block" }}>
                  {point}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={`Project: ${name}`} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
