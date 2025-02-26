// SkillCard.jsx
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCheckCircle } from "react-icons/fa";

const SkillCard = ({ title, items, delay }) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
    >
      <h3 className="text-xl font-semibold mb-4 text-orange">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheckCircle className="text-cyan mt-1 flex-shrink-0" />
            <span className="text-lightGrey">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCard;
