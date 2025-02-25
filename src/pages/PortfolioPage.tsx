import ProjectCard from "@/components/ProjectCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Section {
  id: number;
  x: number;
  y: number;
  Component: React.ComponentType;
}

const sections: Section[] = [
  { id: 1, x: 0, y: 100, Component: ProjectCard },
  { id: 2, x: 0, y: 100, Component: ProjectCard },
  { id: 3, x: 0, y: 100, Component: ProjectCard },
  { id: 4, x: 0, y: 100, Component: ProjectCard },
  { id: 5, x: 0, y: 100, Component: ProjectCard },
  { id: 6, x: 0, y: 100, Component: ProjectCard },
  { id: 7, x: 0, y: 100, Component: ProjectCard },
];

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
          className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl text-center mt-40
          "
        >
          MY WORKS
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4">
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
              <div>
                <section.Component />
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
