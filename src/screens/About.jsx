import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HeartPulse, Shield, Brain, Award, Users, Globe } from "lucide-react";
import collaboration from "../assets/collaboration.jpg";
import collaboration2 from "../assets/collaboration2.jpg";
import collaboration3 from "../assets/collaboration3.jpg";
import sachet from "../assets/sachet.jpg";
import reeya from "../assets/reeya.jpg";
import sanjog from "../assets/sanjog.jpg";
import { useSelector} from "react-redux";
const About = () => {
  const controls = useAnimation();
  const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const founders = [
    {
      name: "Sachet Khatiwada",
      role: "CEO & Medical Director",
      image: sachet,
      quote:
        "We built this platform to bridge the gap between advanced AI technology and accessible healthcare. Every person deserves instant access to quality health insights.",
      background:
        "Neurologist with 15+ years of clinical experience and healthcare innovation",
    },
    {
      name: "Reeya Mishra",
      role: "CTO & AI Lead",
      image: reeya,
      quote:
        "Our AI doesn't replace doctors—it enhances their capabilities and extends their reach. We're using technology to make healthcare more human, not less.",
      background:
        "AI researcher with previous experience at leading tech companies",
    },
    {
      name: "Sanjog Bajgain",
      role: "COO & User Experience",
      image: sanjog,
      quote:
        "What makes our platform special is how it puts patients first. We've designed every feature based on real healthcare journeys and needs.",
      background:
        "Healthcare administration expert with focus on patient-centered systems",
    },
  ];

  const values = [
    {
      title: "Accessible Care",
      description:
        "Making quality healthcare insights available to everyone, anywhere, anytime.",
      icon: <Globe size={28} className="text-blue-500" />,
    },
    {
      title: "Medical Excellence",
      description:
        "Maintaining the highest standards of medical accuracy and scientific rigor.",
      icon: <Award size={28} className="text-blue-500" />,
    },
    {
      title: "Patient Privacy",
      description:
        "Protecting your data with military-grade security and transparent policies.",
      icon: <Shield size={28} className="text-blue-500" />,
    },
    {
      title: "Continuous Innovation",
      description:
        "Constantly improving our AI models with the latest research and technology.",
      icon: <Brain size={28} className="text-blue-500" />,
    },
    {
      title: "Human Connection",
      description:
        "Fostering meaningful connections between patients and healthcare providers.",
      icon: <Users size={28} className="text-blue-500" />,
    },
    {
      title: "Health Equity",
      description:
        "Working to eliminate disparities in healthcare access and outcomes.",
      icon: <HeartPulse size={28} className="text-blue-500" />,
    },
  ];

  return (
    <div
      className="min-h-[calc(100vh-7rem)] transition-colors duration-300"
    >
      <div className={`relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 pt-3 pb-20 md:pt-16 md:pb-24 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              className={`inline-block px-4 py-1.5 rounded-full text-xl font-medium mb-6 ${
                darkMode ? "bg-slate-700 text-blue-200" : "bg-blue-100 text-blue-800"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Mission
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-9 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-4xl font-bold leading-normal md:text-6xl">
                Transforming Healthcare Through AI
              </span>
            </motion.h1>

            <motion.p
              className={`text-lg leading-relaxed mb-8 mt-5 ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're on a mission to make quality healthcare accessible, affordable, and personalized through the power of artificial intelligence and human expertise.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative mx-auto max-w-6xl flex justify-center items-center gap-6 flex-wrap">
              {[collaboration, collaboration2, collaboration3].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Team collaboration ${i + 1}`}
                  className="w-auto max-h-96 object-contain object-center rounded-2xl shadow-2xl"
                  whileInView={{
                    scale: [0.95, 1],
                    filter: ["brightness(0.9)", "brightness(1)"],
                  }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />
              ))}

              <motion.div
                className="absolute -bottom-10 -right-10 w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 -z-10 blur-sm opacity-80"
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -top-10 -left-10 w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 -z-10 blur-sm opacity-80"
                animate={{
                  rotate: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={`py-20 px-4 md:px-10 ${
          darkMode
            ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800"
            : "bg-gradient-to-br from-blue-50 to-indigo-50"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}>
              Our Story
            </h2>
            <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Founded in 2022, our journey began when three experts from different healthcare fields joined forces with a shared vision: using AI to solve the most pressing healthcare challenges.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg border ${
                  darkMode ? "bg-slate-800 border-slate-600" : "bg-white border-blue-100"
                }`}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                  />

                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-blue-200 font-medium">{founder.role}</p>
                  </motion.div>
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <motion.div
                      className="text-5xl text-blue-500 font-serif"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      "
                    </motion.div>
                  </div>
                  <motion.p
                    className={`italic mb-6 leading-relaxed font-light text-lg ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    {founder.quote}
                  </motion.p>
                  <div className={`h-px w-1/4 mb-6 mt-8 ${darkMode ? "bg-blue-700" : "bg-blue-200"}`}></div>
                  <p className={`text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {founder.background}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={`py-20 px-4 md:px-10 ${
          darkMode
            ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
            : "bg-gradient-to-br from-blue-900 to-indigo-900 text-white"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Platform</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Combining cutting-edge AI technology with medical expertise to
              create a healthcare experience that's intelligent, intuitive, and
              deeply human.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-200">
                How Our AI Health System Works
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: "Symptom Analysis",
                    description:
                      "Our AI analyzes symptoms using vast medical databases and machine learning algorithms trained on millions of clinical cases.",
                  },
                  {
                    title: "Personalized Insights",
                    description:
                      "Your medical history, age, gender, and risk factors are considered to provide tailored health insights.",
                  },
                  {
                    title: "Doctor Connection",
                    description:
                      "When needed, we connect you with specialists who receive your AI-processed health information for efficient consultations.",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Our system continuously improves through physician feedback and new medical research.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-4 mt-1 bg-blue-700 rounded-full p-1 h-6 w-6 flex items-center justify-center text-white text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-blue-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2 relative"
              variants={fadeInUp}
            >
              <motion.img
                src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D"
                alt="AI Health Platform Interface"
                className="rounded-xl shadow-2xl w-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-blue-500 opacity-50 -z-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`py-20 px-4 md:px-10`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}>
              Our Values
            </h2>
            <div className={`w-24 h-1 mx-auto mb-6 ${darkMode ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              These core principles guide everything we do, from building our
              technology to interacting with patients and healthcare providers.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-white hover:bg-gray-50"
                }`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-800"}`}>
                  {value.title}
                </h3>
                <p className={`${darkMode ? "text-slate-200" : "text-slate-600"}`}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="py-20 px-4 md:px-10 bg-gradient-to-r from-blue-500 to-indigo-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Us in Reimagining Healthcare
          </motion.h2>

          <motion.p
            className="text-lg text-blue-100 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're a patient seeking better care or a healthcare provider looking to expand your reach, our platform is designed to serve you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-700 rounded-xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
