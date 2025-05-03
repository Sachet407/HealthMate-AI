import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  Sparkles,
  Heart,
  Activity,
  Stethoscope,
  Calendar,
  Shield,
} from "lucide-react";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2.5,
    },
  };

  const features = [
    {
      title: "AI Symptom Checker",
      text: "Input your symptoms and get AI-based insights on possible conditions within seconds.",
      icon: <Activity size={28} className="text-blue-500" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Doctor Connect",
      text: "Explore expert doctor profiles, consult live, and receive personalized advice anytime.",
      icon: <Stethoscope size={28} className="text-green-500" />,
      color: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Medical History Vault",
      text: "All your consultations, prescriptions, and chats—organized and accessible securely.",
      icon: <Shield size={28} className="text-purple-500" />,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Health Insights",
      text: "Personalized health tracking and insights based on your medical history and lifestyle.",
      icon: <Heart size={28} className="text-red-500" />,
      color: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Appointment Manager",
      text: "Schedule, manage, and get reminders for all your medical appointments in one place.",
      icon: <Calendar size={28} className="text-amber-500" />,
      color: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      title: "24/7 Health Support",
      text: "Round-the-clock access to health information and emergency assistance whenever needed.",
      icon: <Sparkles size={28} className="text-indigo-500" />,
      color: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-7rem)] w-full overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative pt-16 pb-32 px-4 md:px-10"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Shapes */}
        <motion.div
          className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full opacity-20 bg-blue-300 blur-3xl"
          animate={{
            x: [20, -20],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 -z-10 h-96 w-96 rounded-full opacity-20 bg-purple-300 blur-3xl"
          animate={{
            x: [-20, 20],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Column */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={heroVariants}
          >
            <motion.div
              variants={itemVariant}
              className="relative inline-block mb-4"
            >
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
                Next Generation Healthcare
              </span>
              <motion.span
                className="absolute inset-0 bg-blue-100 rounded-full -z-10"
                animate={pulseAnimation}
              />
            </motion.div>

            <motion.h1
              variants={itemVariant}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight mb-6"
            >
              Your AI Health Companion
            </motion.h1>

            <motion.p
              variants={itemVariant}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Discover possible conditions, connect with doctors instantly, and
              manage your entire health journey—powered by intelligent
              technology.
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/diagnosis">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-medium shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                >
                  <span>Start Diagnosis</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </Link>

              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-blue-200 text-blue-700 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div className="flex-1 w-full" variants={itemVariant}>
            <div className="relative">
              <motion.img
                src="https://plus.unsplash.com/premium_photo-1661762428543-4a8ad2ff5391?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="AI health technology"
                className="w-full rounded-3xl shadow-2xl object-cover z-10 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              {/* Image decorations */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl shadow-xl bg-gradient-to-r from-indigo-500 to-blue-500 -z-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-lg shadow-xl bg-gradient-to-r from-blue-400 to-cyan-300 -z-10"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-center text-sm font-medium text-slate-500 mb-6">
            TRUSTED BY HEALTHCARE PROVIDERS
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              {
                name: "KMC hospital",
                logo: "https://www.collegenp.com/uploads/2023/07/Kathmandu-Medical-College-Logo.png",
              },
              {
                name: "Bir hospital",
                logo: "https://www.collegenp.com/uploads/2018/02/National-Academy-of-Medical-Sciences-5246.jpg",
              },
              {
                name: "Medicity Hospital",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6B4FFIWOUpk-f7YSDCJ2R849VylwCtRRLA&s",
              },
              {
                name: "Venus Hospital",
                logo: "https://www.venuslankahospital.com/mypatients/assets/img/welcome_img.jpg",
              },
            ].map((partner, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-10 object-contain mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-slate-500 text-sm font-medium">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Features Grid Section */}
      <motion.div
        className="px-4 md:px-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            All-in-One Healthcare Platform
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover how our intelligent technology revolutionizes your
            healthcare experience with these powerful features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={featureCardVariants}
              className={`${feature.color} border ${feature.borderColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300`}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="py-20 px-4 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-12 md:p-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 opacity-25 blur-md"
                animate={{ scale: [1.2, 1, 1.2], rotate: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to transform your healthcare experience?
              </motion.h2>

              <motion.p
                className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join thousands of users who have already discovered the power of
                AI-assisted healthcare management.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-700 rounded-xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Started Now
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="py-20 px-4 md:px-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Hear from the people who have transformed their healthcare
            experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "This platform completely changed how I manage my health. The AI diagnosis was spot-on and saved me from an unnecessary hospital visit.",
              name: "Sarah Johnson",
              title: "Teacher & Mom of two",
              image:
                "https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D",
            },
            {
              quote:
                "As someone with a chronic condition, having all my medical records in one place and getting instant professional advice has been life-changing.",
              name: "Michael Chen",
              title: "Software Engineer",
              image:
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col h-full">
                <div className="text-5xl text-blue-400 mb-4">"</div>
                <p className="text-slate-700 text-lg italic flex-grow mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center mt-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="ml-4">
                    <p className="font-medium text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
