import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  FileText,
  Activity,
  ChevronRight,
  Mail,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { logout } from "../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";
import { useNavigate } from "react-router-dom";
const Patients = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();
  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    console.log("User logged out");
    dispatch(logout());
    navigate("/"); // or login page
  };

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  return (
    <div className={`h-screen w-full`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`h-20 flex items-center justify-between px-8 ${
          darkMode ? "bg-slate-800/80" : "bg-white/80"
        } backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50 border-b ${
          darkMode ? "border-slate-700" : "border-blue-100"
        }`}
      >
        <div className="text-2xl font-bold tracking-tight flex items-center space-x-1">
          <span
            className={`bg-gradient-to-r ${
              darkMode
                ? "from-blue-400 to-blue-300"
                : "from-blue-600 to-blue-500"
            } bg-clip-text text-transparent`}
          >
            Healthmate
          </span>
          <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
            AI
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full ${
              darkMode
                ? "bg-slate-700 hover:bg-slate-600"
                : "bg-slate-100 hover:bg-slate-200"
            } transition-colors duration-200`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={18} className="text-blue-300" />
            ) : (
              <Moon size={18} className="text-blue-600" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              darkMode
                ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            } transition-colors duration-200`}
          >
            <LogOut
              size={18}
              className={darkMode ? "text-blue-300" : "text-blue-600"}
            />
            <span className="font-medium">Logout</span>
          </motion.button>
        </div>
      </motion.header>

      <div className=" pb-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl shadow-xl overflow-hidden ${
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
              className={`absolute -bottom-16 left-8 rounded-full border-4 ${
                darkMode ? "border-slate-800" : "border-white"
              } shadow-lg overflow-hidden`}
            >
              <img
                src={patientInfo.image}
                alt={patientInfo.name}
                className="w-32 h-32 object-cover"
              />
            </motion.div>
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
                        className={
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }
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
                        className={
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }
                      >
                        {patientInfo.email}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-2">
                    <div className="flex items-center mr-6">
                      <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                      <span
                        className={
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }
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
                        className={
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }
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
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect("consultation-history")}
                  className={`cursor-pointer rounded-xl p-8 transition-all duration-300 ${
                    selectedOption === "consultation-history"
                      ? darkMode
                        ? "border-2 border-blue-500 bg-slate-700/50"
                        : "border-2 border-blue-500 bg-blue-50"
                      : darkMode
                      ? "bg-slate-700/30 hover:bg-slate-700/60 shadow-lg shadow-slate-900/30"
                      : "bg-white hover:bg-blue-50/50 shadow-lg shadow-blue-100/50"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-5 p-4 rounded-xl ${
                        darkMode ? "bg-slate-800" : "bg-blue-100"
                      }`}
                    >
                      <FileText
                        className={`h-8 w-8 ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-xl mb-3 ${
                          darkMode ? "text-slate-100" : "text-slate-800"
                        }`}
                      >
                        View Consultation History
                      </h3>
                      <p
                        className={`${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        Access past medical records, diagnoses, and treatment
                        plans from previous visits.
                      </p>
                    </div>
                    <ChevronRight
                      className={`ml-2 h-6 w-6 transition-all duration-300 ${
                        selectedOption === "consultation-history"
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

                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionSelect("check-disease")}
                  className={`cursor-pointer rounded-xl p-8 transition-all duration-300 ${
                    selectedOption === "check-disease"
                      ? darkMode
                        ? "border-2 border-blue-500 bg-slate-700/50"
                        : "border-2 border-blue-500 bg-blue-50"
                      : darkMode
                      ? "bg-slate-700/30 hover:bg-slate-700/60 shadow-lg shadow-slate-900/30"
                      : "bg-white hover:bg-blue-50/50 shadow-lg shadow-blue-100/50"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-5 p-4 rounded-xl ${
                        darkMode ? "bg-slate-800" : "bg-blue-100"
                      }`}
                    >
                      <Activity
                        className={`h-8 w-8 ${
                          darkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-xl mb-3 ${
                          darkMode ? "text-slate-100" : "text-slate-800"
                        }`}
                      >
                        Check Disease via Symptoms
                      </h3>
                      <p
                        className={`${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        Analyze symptoms and get AI-powered diagnostic insights
                        and health recommendations.
                      </p>
                    </div>
                    <ChevronRight
                      className={`ml-2 h-6 w-6 transition-all duration-300 ${
                        selectedOption === "check-disease"
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
              </div>

              {selectedOption && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className={`mt-8 p-6 rounded-xl text-center ${
                    darkMode
                      ? "bg-slate-700 text-blue-300 border border-blue-500/30"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <p className="text-lg font-medium">
                      {selectedOption === "consultation-history"
                        ? "Loading consultation history..."
                        : "Preparing symptom checker..."}
                    </p>
                    <div className="mt-4 w-full h-2 bg-blue-200/30 rounded-full overflow-hidden">
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
      </div>
    </div>
  );
};

export default Patients;
