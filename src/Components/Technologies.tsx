import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { SiReactrouter } from "react-icons/si";

const iconVariants = (duration = 0): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-2xl border-4 border-neurtal-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neurtal-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(7.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neurtal-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <div className="rounded-2xl border-4 border-neurtal-800 p-4">
          <TbBrandCpp className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neurtal-800 p-4">
          <SiRedux className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neurtal-800 p-4">
          <SiTailwindcss className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neurtal-800 p-4">
          <SiReactrouter className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neurtal-800 p-4">
          <FaGolang className="text-7xl text-blue-200" />
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
