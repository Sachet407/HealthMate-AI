import React, { useState } from "react";
import {
  Calendar,
  FileText,
  Activity,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  Loader,
} from "lucide-react";
import { Pencil } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const PatientProfile = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const patientInfo = {
    id: "PT-2025-0473",
    name: "Alexandra Johnson",
    email: "alexandra.j@example.com",
    age: 34,
    bloodType: "O+",
    lastVisit: "27 Apr 2025",
    image:
      "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const [profileImage, setProfileImage] = useState(patientInfo.image);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsLoading(true);

    setTimeout(() => {
      if (option === "consultation-history") {
        navigate("/patients/patienthistory");
      } else if (option === "check-disease") {
        navigate("/patients/symptom-checker");
      }
    }, 800);
  };

  const handleSubmitFeedback = () => {
    if (feedbackText.trim()) {
      // Here you would typically send the feedback to your backend
      alert("Thank you for your feedback!");
      setFeedbackText("");
      setShowFeedback(false);
    }
  };

  return (
    <div className="pb-16 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`rounded-2xl shadow-xl overflow-hidden mt-3 ${
          darkMode
            ? "bg-slate-800 shadow-slate-900/50"
            : "bg-white shadow-blue-200/50"
        }`}
      >
        <div className="h-48 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute -bottom-16 left-8 rounded-full w-32 h-32"
          >
            <div className="relative w-32 h-32">
              <div
                className={`w-32 h-32 rounded-full border-4 ${
                  darkMode ? "border-slate-800" : "border-white"
                } shadow-lg overflow-hidden`}
              >
                <img
                  src={profileImage}
                  alt={patientInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <label className="absolute bottom-0 right-0 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow transition duration-200 transform translate-x-1 translate-y-1">
                <Pencil size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </motion.div>

          <button
            onClick={() => setShowFeedback(!showFeedback)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center transition duration-200 backdrop-blur-sm"
          >
            <MessageSquare size={16} className="mr-2" />
            Send Feedback
          </button>
        </div>

        <div className="pt-20 pb-10 px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <h1
                className={`text-3xl font-bold ${
                  darkMode ? "text-slate-100" : "text-slate-800"
                }`}
              >
                {patientInfo.name}
              </h1>
              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap items-center gap-y-2">
                  <div className="flex items-center mr-6">
                    <User
                      size={16}
                      className={`mr-2 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={darkMode ? "text-slate-300" : "text-slate-600"}
                    >
                      {patientInfo.id}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      size={16}
                      className={`mr-2 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={darkMode ? "text-slate-300" : "text-slate-600"}
                    >
                      {patientInfo.email}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-y-2">
                  <div className="flex items-center mr-6">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                    <span
                      className={darkMode ? "text-slate-300" : "text-slate-600"}
                    >
                      Blood Type: {patientInfo.bloodType}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar
                      size={16}
                      className={`mr-2 ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={darkMode ? "text-slate-300" : "text-slate-600"}
                    >
                      Last Visit: {patientInfo.lastVisit}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-6 md:mt-0"
            >
              <div
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  darkMode
                    ? "bg-slate-700 text-blue-300"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                Patient since March 2023
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="mt-16"
          >
            <h2
              className={`text-xl font-semibold mb-8 ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              What would you like to do?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  key: "consultation-history",
                  title: "View Consultation History",
                  description:
                    "Access past medical records, diagnoses, and treatment plans from previous visits.",
                  icon: <FileText className="h-8 w-8" />,
                },
                {
                  key: "check-disease",
                  title: "Check Disease via Symptoms",
                  description:
                    "Analyze symptoms and get AI-powered diagnostic insights and health recommendations.",
                  icon: <Activity className="h-8 w-8" />,
                },
              ].map((option) => (
                <motion.div
                  key={option.key}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => !isLoading && handleOptionSelect(option.key)}
                  className={`cursor-pointer rounded-xl p-8 transition-all duration-300 ${
                    selectedOption === option.key
                      ? darkMode
                        ? "border-2 border-blue-500 bg-slate-700/50"
                        : "border-2 border-blue-500 bg-blue-50"
                      : darkMode
                      ? "bg-slate-700/30 hover:bg-slate-700/60 shadow-lg shadow-slate-900/30"
                      : "bg-white hover:bg-blue-50/50 shadow-lg shadow-blue-100/50"
                  } ${isLoading ? "opacity-70 pointer-events-none" : ""}`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-5 p-4 rounded-xl ${
                        darkMode ? "bg-slate-800" : "bg-blue-100"
                      }`}
                    >
                      {React.cloneElement(option.icon, {
                        className: `${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`,
                      })}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-xl mb-3 ${
                          darkMode ? "text-slate-100" : "text-slate-800"
                        }`}
                      >
                        {option.title}
                      </h3>
                      <p
                        className={`${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {option.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`ml-2 h-6 w-6 transition-all duration-300 ${
                        selectedOption === option.key
                          ? darkMode
                            ? "text-blue-400"
                            : "text-blue-500"
                          : darkMode
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {selectedOption && isLoading && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className={`mt-8 p-6 rounded-xl ${
                  darkMode
                    ? "bg-slate-700 text-blue-300 border border-blue-500/30"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Loader className="h-6 w-6 mr-3 animate-spin" />
                    <p className="text-lg font-medium">
                      {selectedOption === "consultation-history"
                        ? "Loading consultation history..."
                        : "Preparing symptom checker..."}
                    </p>
                  </div>
                  <div className="mt-2 w-full h-2 bg-blue-200/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {showFeedback && (
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className={`fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 shadow-xl ${
                darkMode ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-slate-100" : "text-slate-800"
                  }`}
                >
                  Send Feedback
                </h3>
                <button
                  onClick={() => setShowFeedback(false)}
                  className={`text-sm font-medium px-3 py-1 rounded-md ${
                    darkMode
                      ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Close
                </button>
              </div>
              <div className="p-6">
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className={`w-full p-4 rounded-lg border mb-4 focus:ring-2 focus:outline-none ${
                    darkMode
                      ? "bg-slate-700 border-slate-600 text-slate-100 focus:ring-blue-500"
                      : "bg-white border-slate-200 text-slate-800 focus:ring-blue-400"
                  }`}
                  rows={6}
                  placeholder="Tell us how we can improve..."
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmitFeedback}
                    disabled={!feedbackText.trim()}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default PatientProfile;
