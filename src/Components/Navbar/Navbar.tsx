import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import "./Style.css";
import { FaSquareXTwitter } from "react-icons/fa6";
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
function Navbar() {
  return (
    <nav className="mb-20 items-center justify-between py-6 md:mb-20 md:flex-row flex flex-col ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-shrink-0 items-center md:mb-0 "
      >
        <div className="loader1">
          <div className="loader-square1 animate-square-animation delay-0"></div>
          <div className="loader-square1 animate-square-animation delay-150"></div>
          <div className="loader-square1 animate-square-animation delay-300"></div>
          <div className="loader-square1 animate-square-animation delay-450"></div>
          <div className="loader-square1 animate-square-animation delay-600"></div>
          <div className="loader-square1 animate-square-animation delay-750"></div>
          <div className="loader-square1 animate-square-animation delay-900"></div>
          <div className="loader-square1 animate-square-animation delay-1050"></div>
        </div>
      </motion.div>
      <div className="m-8 items-center justify-center text-3xl gap-4 flex-col md:flex-row md:justify-between md:items-center hidden md:flex">
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub
            className="rounded-md text-white"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `${
                  import.meta.env.VITE_GITHUB ?? "https://github.com/vishal065"
                }`,
                "_blank"
              );
            }}
          />
        </motion.div>

        <motion.div
          variants={iconVariants(1.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `${
                  import.meta.env.VITE_INSTA ??
                  "https://www.instagram.com/codewithvishal06"
                }`,
                "_blank"
              );
            }}
            className="p-1 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `${
                  import.meta.env.VITE_LINKEDIN ??
                  "https://www.linkedin.com/in/das-vishal-615b1b193/"
                }`,
                "_blank"
              );
            }}
            className="rounded-md text-blue-500"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaSquareXTwitter
            onClick={(e) => {
              e.preventDefault();
              window.open(
                `${import.meta.env.VITE_X ?? "https://x.com/CodeWithVishal6"}`,
                "_blank"
              );
            }}
            className="rounded-md text-black bg-white"
          />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
