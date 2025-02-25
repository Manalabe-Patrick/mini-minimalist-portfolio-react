import Experience from "@/components/Experience";
import ProfileImageLeft from "@/components/ProfileImageLeft";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Section {
  id: number;
  x: number;
  y: number;
  Component: React.ComponentType;
}

const sections: Section[] = [
  { id: 1, x: 0, y: 100, Component: Experience },
  { id: 2, x: 0, y: 100, Component: Experience },
  { id: 3, x: 0, y: 100, Component: Experience },
];
const AboutMePage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <div className="lg:flex h-[90vh] items-center">
        <div className="flex-1 mt-14 lg:mt-0">
          <ProfileImageLeft />
        </div>
        <div className="flex-1 mt-14 lg:mt-0 xs:p-6 md:p-10 lg:p-0 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          >
            <p className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl">
              ABOUT ME
            </p>
            <p className="text-customSecondary mt-10 mb-2">Hi, I’m Patrick!</p>
            <p className="text-customSecondary text-justify">
              Experienced software engineer and full-stack developer
              specializing in backend development, passionate about crafting
              impactful digital experiences. Adaptable, cheerful, and a team
              player, I thrive in collaborative environments and stay updated
              with the latest trends.
            </p>

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
                  Database management (SQL)
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
              <Button
                variant={"outline"}
                className="w-[200px] p-7 px-12 rounded-[100px] border-customDark my-6"
              >
                <span className="text-customDark flex">
                  CONTACT ME
                  <ArrowRight className="ml-2" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* EXPERIENCE PAGE */}
      <div>
        <p className="p-4 mt-[430px] md:mt-60 lg:mt-0 font-bold md:text-center text-customDark lg:max-w-[90%] text-[30px] md:text-5xl my-0 py-0">
          EXPERIENCE
        </p>
        <div>
          {sections.map((section, index) => {
            // Ensure we create a RefObject for each section
            const ref = useRef<HTMLDivElement | null>(null);
            refs.current[index] = ref.current; // Update our refs array

            // Check if the section is in view
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={section.id}
                ref={ref} // Assign ref directly
                animate={
                  isInView
                    ? { opacity: 1, x: section.x, y: section.y }
                    : { opacity: 0 }
                }
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-full md:w-[70%] lg:w-[60%] flex mx-auto my-16 lg:my-28">
                  <section.Component />
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
