import aboutImg from "../assets/about.png";
import { ABOUT_TEXT, ABOUT_TEXT_2, ABOUT_TEXT_3 } from "../constants/index";
import { motion } from "framer-motion";

function About() {
  return (
    <div className=" border-b border-neutral-500 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        About <span className=" text-neutral-400"> me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:px-8 "
        >
          <div className="flex items-center justify-center ">
            <img
              className="rounded-2xl p-2 xl:h-[26rem] "
              src={aboutImg}
              alt="A vector image of a boy coding"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start tracking-wider leading-relaxed px-2 ">
            <div>
              <p className=" max-w-xl py-1">{ABOUT_TEXT}</p>
              <p className=" max-w-xl py-1">{ABOUT_TEXT_2}</p>
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT_3}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
