import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Junior Quality Assurance Tester",
    company: "Access Bank PLC",
    date: "",
    responsibilities: [
      "Defined test strategies with developers and analysts.",
      "Conducted regression testing and tracked defects in JIRA.",
      "Ensured compliance with banking standards and security rules throughout the testing process.",
      "Streamlined QA processes for faster issue detection and resolution.",
    ],
  },
  {
    job: "Software Quality Assurance Tester",
    company: "uTest Massachusetts, USA",
    date: "(Freelance)",
    responsibilities: [
      "Ensured clarity and testability of project requirements.",
      "Designed and executed functional and non-functional test cases.",
      "Tracked defects and improved testing with automation tools.",
      "Collaborated with developers and stakeholders to maintain software quality.",
    ],
  },
  {
    job: "Quality Assurance (QA) Team",
    company: "CircuitTv",
    date: "Nigeria",
    responsibilities: [
      "Ensured app stability under high user traffic.",
      "Verified content security to prevent piracy and unauthorized access.",
      "Tested core features like video playback, search, and subscriptions.",
      "Identified and reported bugs related to streaming quality, app crashes, and navigation issues.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
