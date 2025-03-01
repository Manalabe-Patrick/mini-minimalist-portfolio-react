import ProfileImage from "@/components/ProfileImage";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const HomePage = () => {
  const headerText: string = "Software Engineer / Full Stack Developer";

  return (
    <>
      <div className="lg:flex h-[90vh] items-center">
        <div className="flex-1 mt-14 lg:mt-0 xs:p-6 md:p-10 lg:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className=" text-customDark mb-4  text-center lg:text-left">
              Hello World, I'm <b>Patrick!</b>
            </p>

            <h1 className="block lg:hidden font-bold text-center text-customDark lg:max-w-[90%] text-[30px] md:text-5xl">
              {headerText}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.02 }} // Staggers each letter
            className="px-[30px] md:px-0 lg:block hidden"
          >
            {headerText.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.02, delay: index * 0.02 }}
              >
                <span className="font-bold text-customDark lg:max-w-[90%] text-[30px] md:text-5xl">
                  {char}
                </span>
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="py-10 text-customDark text-center lg:text-left lg:max-w-[80%]">
              <p className="text-customSecondary">
                Experienced full-stack developer.
              </p>
              <p className="text-customSecondary">
                Adaptable, upbeat, and a strong team player.
              </p>
              <p className="text-customSecondary">
                I thrive in collaborative environments and stay ahead of
                industry trends.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col items-center md:flex-row md:justify-center lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline"
            >
              <TabsList className="inline">
                <TabsTrigger
                  value="contact"
                  className="border border-2px border-customDark bg-white w-[200px] p-4 px-10 rounded-[100px] mb-4 md:mb-0"
                >
                  <span className="text-customDark text-xs">CONTACT ME</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Second Button (Appears after 0.3s) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="inline"
            >
              <TabsList className="inline">
                <TabsTrigger
                  value="portfolio"
                  className="ml-3 border border-2px border-customDark bg-white w-[250px] p-[19px] px-10 rounded-[100px] mb-4 md:mb-0"
                >
                  <span className="text-customDark text-xs flex">
                    SEE MY WORKS <ArrowRight className="ml-2" size={18} />
                  </span>
                </TabsTrigger>
              </TabsList>
            </motion.div>
          </div>
        </div>
        <div className="flex-1 mt-14 lg:mt-0">
          <ProfileImage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
