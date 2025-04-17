import { skills } from "../constants/index";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center relative z-10">
      <div className="relative flex justify-between items-center flex-col w-full max-w-1100 gap-12 md:flex-col">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mt-20 md:mt-12 text-primary-dark"
        >
          Skills
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-center max-w-lg  text-secondary-dark"
        >
          Here are some of my skills on which I have been working on for the
          past 1 years.
        </motion.div>
        <div className="w-full flex flex-wrap justify-center mt-8 gap-8 px-1 ">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              whileHover={{ scale: 1.1 }}
              className="w-full max-w-md min-h-[300px] bg-card border  border-purple-600 shadow-card rounded-lg p-7 md:max-w-sm"
            >
              <h2 className="text-2xl font-semibold text-secondary-dark mb-4 text-center">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-2">
                {skill.skills.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    className="text-sm font-medium text-primary-dark border border-primary-dark rounded-lg p-1.5  flex items-center gap-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6"
                      loading="lazy"
                    />
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
