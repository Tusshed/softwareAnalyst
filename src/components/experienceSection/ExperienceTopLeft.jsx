import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="12" text="Websites" />
      </div>
      <p className="text-center">
        With 3 years of experience analyzing, optimizing, and enhancing software
        systems to align with business goals. Skilled in gathering requirements,
        streamlining workflows, and bridging the gap between technical teams and
        stakeholders to deliver efficient and scalable solutions.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
