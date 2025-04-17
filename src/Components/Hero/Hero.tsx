import { Helmet } from "react-helmet";
import { HERO_CONTENT } from "../../constants/index";
import profilePic from "../../assets/profile-pic.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Bio } from "../../constants";
import "./Hero.css";
const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  const handleLinkdin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      `${import.meta.env.VITE_LINKEDIN}` ||
        '"https://www.linkedin.com/in/das-vishal-615b1b193/"',
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={profilePic} fetchPriority="high" />
      </Helmet>
      <div className="border-b border-netrual-900 pb-4 lg:mb-35 ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 ">
            <div className="flex  flex-col md:items-center lg:items-start   ">
              <motion.h1
                variants={container(0.1)}
                initial="hidden"
                animate="visible"
                // initial={{ x: -100, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="pb-16 text-5xl text-center tracking-tight lg:mt-16 lg:text-7xl"
              >
                Hi, I am {Bio.name}
              </motion.h1>
              <motion.div
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="flex mb-10 self-center lg:self-auto bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent whitespace-nowrap gap-2 "
              >
                I am
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    delay: 2,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.div>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2  mx-2  max-w-xl py-6 font-light leading-relaxed "
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
            <div className="flex  gap-10 mb-5 justify-center lg:justify-normal ">
              <button
                onClick={handleLinkdin}
                className="relative px-[30px] py-[18px] ml-2 bg-[#ffffff] text-[18px] font-semibold text-[#000000] [box-shadow:0px_0px_10px_0px_rgb(255,_255,_255)] rounded-[100px] border-[none] [transition:all_0.3s_ease-in-out] cursor-pointer hover:bg-[#00000002] hover:text-[#ffffff] hover:[box-shadow:0_0_80px_#ffffff8c] "
              >
                Check linkedin
              </button>

              <a
                href={
                  import.meta.env.VITE_RESUME ??
                  "https://drive.google.com/file/d/1Xy4Zh6mPxthH-L8pbldjK5QXnRyfVLMj/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r px-[32px] py-[20px] from-purple-600 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                  Check Resume
                </button>
              </a>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 lg:p-8 order-first lg:order-none rounded-none mb-0 
             max-w-[767px]:rounded-full max-w-[767px]:mb-5"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex justify-center  "
            >
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{
                  imageRendering: "pixelated",
                  maxWidth: "360px",
                  marginBottom: "20px",
                }}
                className="motion-img"
                src={profilePic}
                alt="profilePicture"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
