import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import mapp from "../assets/map.png";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  const contactItems = useMemo(
    () => [
      {
        icon: <MessageSquare size={24} />,
        title: "Chat with Us",
        info: "Live chat support available 24/7",
        action: "Start Chat",
        color: "bg-blue-500",
        link: "#",
      },
      {
        icon: <MapPin size={24} />,
        title: "Visit Our Office",
        info: "123 Health Avenue, San Francisco, CA 94103",
        action: "Get Directions",
        color: "bg-indigo-500",
        link: "#",
      },
      {
        icon: <Phone size={24} />,
        title: "Call Directly",
        info: "+1 (555) 123-4567",
        action: "Call Now",
        color: "bg-purple-500",
        link: "tel:+15551234567",
      },
      {
        icon: <Mail size={24} />,
        title: "Email Support",
        info: "support@aihealthcompanion.com",
        action: "Send Email",
        color: "bg-pink-500",
        link: "mailto:support@aihealthcompanion.com",
      },
      {
        icon: <Clock size={24} />,
        title: "Business Hours",
        info: "Monday-Friday: 9 AM - 6 PM ET",
        action: "Check Availability",
        color: "bg-cyan-500",
        link: "#",
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: <Linkedin size={20} />, color: "bg-blue-600", link: "#" },
      { icon: <Twitter size={20} />, color: "bg-sky-500", link: "#" },
      { icon: <Facebook size={20} />, color: "bg-blue-800", link: "#" },
      {
        icon: <Instagram size={20} />,
        color: "bg-gradient-to-br from-purple-600 to-pink-500",
        link: "#",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        question: "What makes your AI health platform different?",
        answer:
          "Our platform combines cutting-edge AI technology with human medical expertise to provide personalized health insights, connect you with the right specialists, and securely manage your health data—all in one integrated system.",
      },
      {
        question: "Is my health data secure?",
        answer:
          "Absolutely. We employ bank-level encryption, follow strict HIPAA compliance protocols, and never sell your data to third parties. You maintain full control over who can access your information.",
      },
      {
        question: "Can I speak with real doctors through the platform?",
        answer:
          "Yes, our platform connects you with board-certified physicians for virtual consultations after providing AI-powered initial assessments, offering the perfect balance of technology and human care.",
      },
    ],
    []
  );

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    },
    stagger: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    },
    form: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
    map: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    },
  };

  return (
    <div
      className={`min-h-[calc(100vh-7rem)] pb-20`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-10 pt-2 pb-16">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className={`inline-block px-4 py-1.5 ${
              darkMode
                ? "bg-blue-900 text-blue-200"
                : "bg-blue-100 text-blue-800"
            } rounded-full text-xl font-medium mb-6`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We'd Love to Hear From You
          </motion.h1>
          <motion.p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our AI health platform? Need technical support?
            Or just want to share feedback? We're here to help.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-10 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants.stagger}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.slice(0, 3).map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              className={`${
                darkMode ? "bg-slate-800" : "bg-white"
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              variants={variants.fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div
                  className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 hover:scale-110`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-slate-100" : "text-slate-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  } mb-6`}
                >
                  {item.info}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>{item.action}</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {contactItems.slice(3, 5).map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              className={`${
                darkMode ? "bg-slate-800" : "bg-white"
              } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
              variants={variants.fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-8 flex items-center">
                <div
                  className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white transition-transform duration-300 hover:scale-110`}
                >
                  {item.icon}
                </div>
                <div className="ml-6">
                  <h3
                    className={`text-xl font-semibold mb-1 ${
                      darkMode ? "text-slate-100" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    } mb-2`}
                  >
                    {item.info}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>{item.action}</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div
          className={`${
            darkMode ? "bg-slate-800" : "bg-white"
          } rounded-3xl shadow-xl overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              className="p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants.form}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-slate-100" : "text-slate-800"
                }`}
              >
                Send Us a Message
              </h2>
              <AnimatePresence>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {["name", "email", "subject"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className={`block text-sm font-medium mb-1 ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                        {field === "email" && " Address"}
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          darkMode
                            ? "border-slate-600 bg-slate-900 text-slate-100 placeholder:text-slate-400 focus:ring-blue-700"
                            : "border-slate-300 focus:ring-blue-500"
                        } focus:ring-2 focus:border-transparent outline-none`}
                        placeholder={
                          field === "name"
                            ? "John Doe"
                            : field === "email"
                            ? "john@example.com"
                            : "How can we help?"
                        }
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Your Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "border-slate-600 bg-slate-900 text-slate-100 placeholder:text-slate-400 focus:ring-blue-700"
                          : "border-slate-300 focus:ring-blue-500"
                      } focus:ring-2 focus:border-transparent outline-none`}
                      placeholder="Please describe your question or concern..."
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={
                      formStatus === "submitting" || formStatus === "success"
                    }
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium text-white ${
                      formStatus === "success"
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    }`}
                  >
                    {formStatus === "idle" && (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                    {formStatus === "submitting" && (
                      <>
                        <span>Sending...</span>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        />
                      </>
                    )}
                    {formStatus === "success" && (
                      <>
                        <span>Message Sent!</span>
                        <CheckCircle size={18} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              </AnimatePresence>
              <div className="mt-10">
                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Or connect with us on social media:
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className={`relative h-full min-h-[400px] ${
                darkMode ? "bg-slate-700" : "bg-slate-100"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants.map}
            >
              <img
                src={mapp}
                alt="Office Location Map"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ y: -20 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <motion.div
                    className="absolute top-0 left-0 w-12 h-12 rounded-full bg-blue-600 opacity-70"
                    animate={{ scale: [1, 2], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 md:px-10 mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants.stagger}
      >
        <motion.div className="text-center mb-12" variants={variants.fadeInUp}>
          <h2
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-slate-100" : "text-slate-800"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            Find quick answers to common questions about our platform and
            services
          </p>
        </motion.div>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className={`${
                darkMode ? "bg-slate-800" : "bg-white"
              } p-6 rounded-xl shadow-md`}
              variants={variants.fadeInUp}
            >
              <h3
                className={`text-lg font-semibold mb-3 ${
                  darkMode ? "text-slate-100" : "text-slate-800"
                }`}
              >
                {item.question}
              </h3>
              <p
                className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-10 text-center" variants={variants.fadeInUp}>
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            <span>View all FAQs</span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
