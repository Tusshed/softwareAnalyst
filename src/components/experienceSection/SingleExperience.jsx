import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:min-h-[350px] md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-6"
    >
      <div className="space-y-2">
        <p className="font-bold text-cyan text-lg">{experience.job}</p>
        <p className="text-orange">{experience.company}</p>
        <p className="text-lightGrey">{experience.date}</p>
        <ul className="list-disc mt-4 pl-4 space-y-2">
          {experience.responsibilities.map((resp, index) => {
            return (
              <li key={index} className="text-sm break-words leading-relaxed">
                {resp}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
