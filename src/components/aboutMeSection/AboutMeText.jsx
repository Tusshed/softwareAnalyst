import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I&lsquo;m Gabriel, A detail-oriented Software Quality Assurance
        Tester with 6 years of experience in software testing and quality
        assurance. Adept at test case design, execution, defect tracking, and
        reporting, with expertise in manual and automated testing using tools
        such as JIRA, Postman, Jmeter, Testcollab, qtest, TestRail, Bugzilla and
        Selenium IDE. A strong background in functional, regression, and user
        acceptance testing across different industries, including banking and
        finance.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
