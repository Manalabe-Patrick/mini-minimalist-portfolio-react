import { Button } from "./ui/button";
interface ProjectProps {
  title: string;
  tools: string;
  link: string;
  img?: any;
};

const ProjectCard: React.FC<ProjectProps> = ({ title, tools, link, img }) => {
  // let description: string =
  //   "Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.Lorem ipsum del conor de santo.ssssssssssssssssssssssssssss";
  return (
    <>
      <div className="project-card p-6 min-h-[400px]">
        <h1 className="text-customDark text-center font-bold my-2">
          {title}
        </h1>
        <img
          className="w-full rounded-md"
          src={img}
          alt="img"
        />
        <p className="text-customSecondary text-xs my-2 line-clamp-3">
          {tools}
        </p>
        {/* <p className="text-customDark text-sm my-4 line-clamp-3 text-unset">
          {description}
        </p> */}
        <div className="flex justify-center mt-4">
          <a href={link} target="_blank" className="absolute bottom-6 left-[-50]">
            <Button
              variant={"outline"}
              className="w-[200px] p-4 px-10 rounded-[100px] border-customDark mx-auto"
            >
              <span className="text-customDark flex">SEE MORE</span>
            </Button>
          </a>
        </div>
      </div>

    </>
  );
};

export default ProjectCard;
