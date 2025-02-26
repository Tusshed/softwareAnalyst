import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2019
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="12" text="Websites" />
      </div>
      <p className="text-center">
        Why Gabriel Tolulope Oginni? <br></br> With 6 years of hands-on
        experience in software testing and quality assurance, Gabriel brings
        deep analytical skills, a strong technical background, and a passion for
        ensuring software reliability. His expertise in financial software
        testing, combined with a commitment to continuous learning and process
        improvement, makes him a valuable asset in any software development and
        QA team.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
