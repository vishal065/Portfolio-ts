import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-netural-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center px-1.5"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {/* {project?.image ? (
                <img
                  className="mb-6 rounded ml-1.5"
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  loading="lazy"
                />
              ) : (
                ""
              )} */}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold px-2">{project.title}</h5>
              <div className="mb-2 text-netural-400 px-2">
                <ol>
                  {project.description.split("•").map(
                    (sentence, idx) =>
                      sentence.trim() && (
                        <li className="mx-2 mb-4" key={idx}>
                          {sentence.trim()}.
                        </li>
                      )
                  )}
                </ol>
              </div>
              {project.technologies.map((tech, i) => (
                <span
                  className={`ml-3 my-3 rounded bg-neutral-900 ${
                    index === 0 ? "px-1 text-xs" : "px-2 text-sm"
                  } py-[2px]  font-medium text-purple-700`}
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
