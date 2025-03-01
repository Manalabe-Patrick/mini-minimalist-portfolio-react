import Experience from "@/components/Experience";
import ProfileImageLeft from "@/components/ProfileImageLeft";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Experience {
  duration: string;
  position: string;
  skills: string[];
}

interface Section {
  id: number;
  x: number;
  y: number;
  Component: React.ComponentType<Experience>;
  props: Experience;
}

const techStack: string[] = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Entity Framework",
  "SQL Server / MySQL / NoSQl",
  "ReactJS",
  "SQL Server",
  "Blazor/Razor",
  "NodeJS Express",
  "HTML/CSS",
  "Javascript",
  "Typescript",
  "Tailwind",
  "Bootstrap",
];

const experiences: Experience[] = [
  {
    duration: "August 2024",
    position: "Software Engineer - TAXUMO",
    skills: [
      "Configured and deployed web applications on Azure App Services",
      "Implemented automated build and release pipelines using Azure DevOps",
      "Improved code to increase application speed by up to 15%.",
      "Built clean and scalable web applications and features from scratch.",
      "Worked with the product team to deliver new features.",
      "Enhanced UI/UX by creating better front-end solutions.",
    ],
  },
  {
    duration: "March 2023",
    position: "Jr Software Engineer - TAXUMO",
    skills: [
      "Improved code to increase application speed by up to 15%.",
      "Built clean and scalable web applications and features from scratch.",
      "Worked with the product team to deliver new features.",
      "Enhanced UI/UX by creating better front-end solutions.",
    ],
  },
  {
    duration: "August 2022",
    position: "MIS Web developer - ACE Medical Center",
    skills: [
      "Maintained and improved the hospital's website to enhance user experience.",
      "Optimized website SEO for improved search engine visibility.",
      "Ensured website compliance with DOH regulations.",
      "Wrote SQL queries to create reports and analyze data.",
      "Managed the hospital's information system to ensure smooth operations.",
    ],
  },
  {
    duration: "Feb 2022",
    position: "Intern Software Engineer - GIOLOST",
    skills: [
      "Designed and developed dynamic, responsive websites using React.js.",
      "Collaborated with cross-functional teams through project management tools like Microsoft Teams and Jira.",
      "Implemented best practices in component-based architecture to build scalable and maintainable web applications.",
    ],
  },
];

const sections: Section[] = [];

experiences.map((exp: Experience, i: number) => {
  sections.push({
    id: i,
    x: 0,
    y: 100,
    Component: Experience,
    props: {
      duration: exp.duration,
      position: exp.position,
      skills: exp.skills,
    },
  });
});

const AboutMePage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <div className="lg:flex items-center">
        <div className="flex-1 mt-14 lg:mt-0">
          <ProfileImageLeft />
        </div>
        <div className="flex-1 mt-14 lg:mt-0 xs:p-6 md:p-10 lg:p-0 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <p className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl mt-32">
              ABOUT ME
            </p>
            <p className="text-customSecondary mt-10 mb-2">
              Hi, I’m <b>Patrick!</b>
            </p>
            <p className="text-customSecondary text-justify">
              Experienced software engineer and full-stack developer
              specializing in backend development, passionate about crafting
              impactful digital experiences. Adaptable, cheerful, and a team
              player, I thrive in collaborative environments and stay updated
              with the latest trends.
            </p>

            <p className="text-customSecondary font-bold my-4 mt-10">
              Tech Stack:
            </p>

            <div className="grid grid-cols-2">
              {techStack.map((tech: string, i: number) => (
                <p className="flex my-0 text-customSecondary" key={i}>
                  <span key={i}>
                    <CheckCircle className="mr-2 pt-1" size={20} key={i} />
                  </span>
                  {tech}
                </p>
              ))}
            </div>
            <p className="text-customSecondary font-bold my-4 mt-10">
              Skills sets:
            </p>

            <div className="md:flex">
              <div className="flex-1 text-customSecondary">
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Backend Development
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  API development / Intergation
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Version Control
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Authentication & Security
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  SEO
                </p>
              </div>
              <div className="flex-1 text-customSecondary">
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  UI / UX Design
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Azure DevOps
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Database management
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  Performance Optimization
                </p>
                <p className="flex my-2">
                  <span>
                    <CheckCircle className="mr-2 pt-1" size={20} />
                  </span>
                  CMS Management/Development
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center md:flex-row md:justify-center lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="inline"
            >
              <TabsList className="block">
                <TabsTrigger
                  value="contact"
                  className="mt-6 border border-2px border-customDark bg-white w-[200px] p-4 px-10 rounded-[100px] mb-4 md:mb-0"
                >
                  <span className="text-customDark text-xs flex">
                    CONTACT ME <ArrowRight className="ml-2" size={16} />
                  </span>
                </TabsTrigger>
              </TabsList>
            </motion.div>
          </div>
        </div>
      </div>
      {/* EXPERIENCE PAGE */}
      <div>
        <p className="p-4 mt-[60px] md:mt-22 lg:mt-36 font-bold md:text-center text-customDark lg:max-w-[90%] text-[30px] md:text-5xl my-0 py-0">
          EXPERIENCE
        </p>
        <div>
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
                <div className="mt-0 w-full md:w-[70%] lg:w-[60%] flex mx-auto mb-16 lg:mb-28">
                  <section.Component {...section.props} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default AboutMePage;
