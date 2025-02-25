import { motion } from "motion/react";
const ProfileImageLeft = () => {
  return (
    <>
      <motion.div
        initial={{ x: 800, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {" "}
        <div className="relative h-[420px]">
          <motion.div
            initial={{ x: -200, opacity: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/pbg1.png"
              alt="image"
              className="absolute lg:top-0 lg:left-0 w-[315px]"
            />
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/fpb2.png"
              alt="image"
              className="absolute top-[280px] right-0 md:right-0 lg:right-14 2xl:right-40 w-[250px] md:w-[600px] md:h-[138px] lg:w-[360px]"
            />
          </motion.div>

          <img
            src="/ppic1.png"
            alt="image"
            className="absolute top-[74px] md:top-[49px] left-4 w-[420px]"
          />
        </div>
      </motion.div>
    </>
  );
};

export default ProfileImageLeft;
