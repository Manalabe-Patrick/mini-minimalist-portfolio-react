interface ExperienceProps {
  duration: string,
  position: string,
  skills: string[]
};

const Experience: React.FC<ExperienceProps> = ({ duration, position, skills }) => {
  return (
    <>
      <div className="flex-[.05] lg:flex-[.2] flex items-center justify-center">
        <div className="mx-4">
          <div className="border border-customDark w-6 h-6 rounded-[100px] flex items-center justify-center">
            <div className="border border-customDark w-3 h-3 rounded-[100px] bg-customDark"></div>
          </div>
          <div className="line w-[1px] h-[120px] mt-2 bg-[#A1A1A1] mx-auto"></div>
        </div>
      </div>
      <div className="flex-[.9.5] lg:flex-[.8] text-customDark">
        <p className="text-sm">{duration}</p>
        <h1 className="my-2 text-xl">
          <b>{position}</b>
        </h1>
        <ul>
          {skills.map((exp: string, i: number) =>
            <li className="text-sm my-3" key={i}>
              • {exp}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Experience;
