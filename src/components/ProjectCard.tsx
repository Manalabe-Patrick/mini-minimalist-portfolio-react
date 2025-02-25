import { Button } from "./ui/button";

const ProjectCard = () => {
  let description: string =
    "Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.";
  return (
    <>
      <h1 className="text-customDark text-center font-bold my-2">
        Project Title
      </h1>
      <img
        className="w-full rounded-md"
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="img"
      />
      <p className="text-customSecondary text-xs my-2 line-clamp-3">
        C, C++, Csharp
      </p>
      <p className="text-customDark text-sm my-4 line-clamp-3 text-center">
        {description}
      </p>
      <div className="flex justify-center">
        <Button
          variant={"outline"}
          className="w-[200px] p-4 px-10 rounded-[100px] border-customDark mx-auto"
        >
          <span className="text-customDark flex">View Details</span>
        </Button>
      </div>
    </>
  );
};

export default ProjectCard;
