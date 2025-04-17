import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";
// import Eye from "./Components/Loading/Eye";
// import Hand from "./Components/Loading/Hand";
import Skills from "./Components/Skills";

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);
  const [eye, setEye] = useState(true);
  const [hand, setHand] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hand) {
        setLoading(false);
      }
      if (!loading) {
        setEye(false);
      }
      if (!eye) {
        setHand(false);
      }
      if (!hand) {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [loading, eye, hand]);

  if (loading)
    return (
      <div className=" overflow-hidden overflow-y-hidden">
        {loading ? <Loading /> : null}
        {/* {eye ? <Eye /> : <Hand />}
        {hand ? <Hand /> : null} */}
      </div>
    );

  return (
    <>
      <motion.div
        className=" fixed top-0 left-0 right-0 h-[7px] transform origin-left bg-red-500 mb-5"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="mt-2 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300  selection:text-cyan-800 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className=" container sm:p-10 md:p-auto mx-auto ">
          <Navbar />
          <Hero />
          <About />
          {/* <Technologies /> */}
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
