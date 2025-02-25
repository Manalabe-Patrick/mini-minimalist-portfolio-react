import { motion } from "motion/react";
const ProfileImage = () => {
  return (
    <>
      <div className="relative h-[420px]">
        <motion.div
          initial={{ x: -200, opacity: 0.3 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/pbg1.png"
            alt="image"
            className="absolute lg:top-0 lg:right-[101px] w-[315px]"
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
            className="absolute top-[280px] right-0 w-[250px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/ppic1.png"
            alt="image"
            className="absolute top-[74px] md:top-[49px] right-0 w-[420px]"
          />
        </motion.div>
      </div>
    </>
  );
};

export default ProfileImage;
