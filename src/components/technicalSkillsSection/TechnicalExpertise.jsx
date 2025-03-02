import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaCheckCircle } from "react-icons/fa";

const skills = [
  {
    title: "Testing Methodologies",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "User Acceptance Testing (UAT)",
      "Integration Testing",
    ],
  },
  {
    title: "Test Management & Tools",
    items: ["JIRA", "Selenium IDE", "Postman", "Testcollab ", "TestRail"],
  },
  {
    title: "Test Case Development",
    items: [
      "Writing test scripts",
      "Executing test scripts",
      "Comprehensive coverage",
    ],
  },
  {
    title: "Database & Automation",
    items: ["SQL", "Database Management", "Automation Testing"],
  },
  {
    title: "Analysis & Design",
    items: [
      "Requirement Analysis",
      "Web Design",
      "UI Testing",
      "Responsive Design",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Team Collaboration",
      "Cross-functional Communication",
      "Stakeholder Management",
    ],
  },
];

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

const TechnicalExpertise = () => {
  return (
    <section id="technical-skills" className="py-20 bg-darkBg">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lightGrey">
            Comprehensive skillset in software testing and quality assurance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              items={skill.items}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
