import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";

function Contact() {
  const formref = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formref.current) {
      emailjs
        .sendForm("service_ms4hkmb", "template_xkmmdsh", formref.current, {
          publicKey: "hD5rYgspgcWBm4mcL",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message Send Successfully !", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error(`FAILED to send Error : ${error}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
        );
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col sm:px-12  md:px-10 px-5 border-b border-neutral-500 pb-20 ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
          className="my-10 text-center text-4xl font-semibold sm:my-10  sm:text-4xl"
        >
          Contact me
        </motion.h1>
        <div className="flex justify-center">
          <div className="w-full flex flex-col lg:flex-row md:w-3/4  lg:gap-20  lg:w-1/2  justify-center  ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="all-social-media flex-1  my-8 mx-auto  lg:mb-2 "
            >
              <h6 className="text-4xl text-nowrap my-2 ml-2 ">Get In Touch</h6>
              <motion.div className="mt-20 mb-6 ml-10  flex ">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `${
                        import.meta.env.VITE_GITHUB ??
                        "https://github.com/vishal065"
                      }`,
                      "_blank"
                    );
                  }}
                  className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                >
                  <svg
                    className="w-6 h-6 fill-neutral-50"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      className="svg-fill-primary"
                      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                    ></path>
                  </svg>
                  Github
                </button>
              </motion.div>
              <div className="flex gap-10">
                {/* // */}
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
                  className="w-14 h-14 text-5xl p-2 bg-gradient-to-br from-purple-600 via-red-600 to-yellow-400 rounded-full "
                />
                <button
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
                  className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
                >
                  <svg
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    width="100"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid meet"
                    height="100"
                    className="w-8 h-8 shrink-0 fill-neutral-50"
                  >
                    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                  </svg>
                  <span className=" origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    vishal
                  </span>
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `${
                        import.meta.env.VITE_X ??
                        "https://x.com/CodeWithVishal6"
                      }`,
                      "_blank"
                    );
                  }}
                  className="cursor-pointer group block px-5 py-2 rounded-md bg-black/20 border border-white  text-white text-4xl font-bold shadow-2xl hover:scale-110 transition active:scale-90"
                >
                  <span className="group-hover:[text-shadow:3px_3px_6px_var(--tw-shadow-color)] shadow-white">
                    𝕏
                  </span>
                </button>
              </div>
            </motion.div>
            {/* form */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
              className="flex-1 md:min-w-[350px] lg:min-w-[450px]  lg:ml-12 md:p-0 px-1 mx-auto"
            >
              <div className="max-w-[400px]  w-full  mx-auto bg-[#0d1b2a] rounded-lg shadow-md sm:px-10 md:px-6 p-4">
                <form ref={formref} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <label className="block mb-2 text-gray-50" htmlFor="name">
                      Name{" "}
                    </label>
                    <input
                      placeholder="Your Name"
                      name="name"
                      className="w-full  p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-gray-50" htmlFor="email">
                      Email
                    </label>
                    <input
                      placeholder="Your Email"
                      className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-gray-50"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Your Message"
                      className="w-full p-2 border-b-2 border-yellow-400 bg-transparent outline-none focus:border-b-2 focus:border-yellow-600"
                      rows={5}
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <button
                      className="w-full bg-[#F7AB0A] text-gray-700 font-semibold p-2 rounded transition-all hover:bg-[#FFC857]"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" h-8 text-lg">
        <p>Made with love ❤️ and expertise 💻 by Vishal</p>
      </div>
    </div>
  );
}

export default Contact;
