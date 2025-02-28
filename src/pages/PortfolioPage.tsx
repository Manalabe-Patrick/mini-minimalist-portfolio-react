import ProjectCard from "@/components/ProjectCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import mapBoxImg from '/mapbox_integration.png';
import wordpressPorfolioImg from '/wordpress_port.png';
import taxumoImg from '/taxumo.png';
import aceImg from '/ace.png';



interface Section {
  id: number;
  x: number;
  y: number;
  Component: React.ComponentType<Project>;
  props: Project;
}

interface Project {
  title: string;
  tools: string;
  link: string;
  img?: any;
}

const projects: Project[] = [
  {
    title: "Software Engineer",
    tools: ".NET, ASP.NET Core, Sql Server, Angular, Razor, ReactJS, PUG, Azure DevOps, Azure Repos",
    link: "https://www.taxumo.com",
    img: taxumoImg
  },
  {
    title: "Wordpress MapBox Integration",
    tools: "wordpress, mapbox, html, css, javascript, mapbox",
    link: "https://www.clubfivehealth.com",
    img: mapBoxImg
  },
  {
    title: "Website Portfolio",
    tools: "wordpress, html, css, javascript",
    link: "https://ednportfolio.online",
    img: wordpressPorfolioImg
  },
  {
    title: "Web Developer",
    tools: "Html, css, Javascript, php, MySQL",
    link: "https://acebaypointe.com",
    img: aceImg
  }
]

const sections: Section[] = [];

projects.map((project: Project, i: number) => {
  sections.push({ id: i, x: 0, y: 100, Component: ProjectCard, props: { title: project.title, tools: project.tools, link: project.link, img: project.img } })
})


const PortfolioPage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <p
          className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl text-center mt-32
          "
        >
          MY WORKS
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {sections.map((section, index) => {
          const ref = useRef<HTMLDivElement | null>(null);
          refs.current[index] = ref.current;

          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={section.id}
              ref={ref}
              animate={
                isInView
                  ? { opacity: 1, x: section.x, y: section.y }
                  : { opacity: 0 }
              }
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>
                <section.Component {...section.props} />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="h-[300px]"></div>
    </>
  );
};

export default PortfolioPage;
