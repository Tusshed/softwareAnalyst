import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I&lsquo;m Gaby, a passionate Software Analyst dedicated to bridging
        the gap between business goals and technology solutions. With expertise
        in system analysis, data-driven decision-making, and software
        optimization, I help businesses streamline processes, enhance
        efficiency, and make informed technical decisions. Whether its
        requirement gathering, workflow optimization, or troubleshooting complex
        systems, I bring a strategic approach to every project. Lets connect and
        build smarter solutions together!.
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
