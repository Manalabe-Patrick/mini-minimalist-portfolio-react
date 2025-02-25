const Experience = () => {
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
        <p className="text-sm">August 2024 - Present</p>
        <h1 className="my-2">
          TAXUMO - <b>Software Engineer</b>
        </h1>
        <ul>
          <li className="text-sm">
            • Configured and deployed web applications on Azure App Services
          </li>
          <li className="text-sm">
            • Implemented automated build and release pipelines using Azure
            DevOps
          </li>
          <li className="text-sm">
            • Improved code to increase application speed by up to 15%.
          </li>
          <li className="text-sm">
            • Built clean and scalable web applications and features from
            scratch.
          </li>
          <li className="text-sm">
            • Worked with the product team to deliver new features.
          </li>
          <li className="text-sm">
            • Enhanced UI/UX by creating better front-end solutions.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
