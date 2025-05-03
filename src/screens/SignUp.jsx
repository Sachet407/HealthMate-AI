import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Stethoscope, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useEffect } from "react";
const roles = [
  {
    type: "Patient",
    icon: <User size={40} className="text-blue-500" />,
    description:
      "Manage your health with AI insights and doctor consultations.",
  },
  {
    type: "Doctor",
    icon: <Stethoscope size={40} className="text-green-500" />,
    description: "Connect with patients and provide expert care remotely.",
  },
  {
    type: "Admin",
    icon: <Shield size={40} className="text-purple-500" />,
    description: "Oversee platform operations and manage user data.",
  },
];

const SignUp = () => {
  const [userType, setUserType] = useState(null);

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const loginInfo = useSelector((state) => state.auth.isLoggedIn);
  const userRole = useSelector((state) => state.auth.role);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialty: "",
    license: "",
    department: "",
  });
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn && userRole) {
      console.log("✅ Logged in as:", userRole);
      // Navigate or show other content
    }
  }, [isLoggedIn, userRole]);
  const handleUserTypeSelect = (type) => setUserType(type);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { userType, ...formData });
    dispatch(login({ role: userType }));
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const card = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" },
  };
  return (
    <div
      className={`min-h-[calc(100vh-7rem)] w-full flex items-center justify-center px-4 py-8`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl"
      >
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl -z-10"
          animate={{ scale: [1, 1.1, 1], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />

        {!userType ? (
          <div className="text-center">
            <motion.h1
              variants={item}
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Choose Your Role
            </motion.h1>
            <motion.p
              variants={item}
              className={`text-lg mb-12 max-w-2xl mx-auto ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Select your role to get started with your personalized healthcare
              journey.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {roles.map((role) => (
                <motion.div
                  key={role.type}
                  variants={card}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleUserTypeSelect(role.type)}
                  className={`${
                    darkMode
                      ? "bg-gray-800 border-gray-700 shadow-gray-700 text-white"
                      : "bg-white border-gray-100 text-slate-800"
                  } p-6 rounded-2xl border cursor-pointer shadow-md hover:shadow-xl transition`}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4">{role.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{role.type}</h3>
                    <p
                      className={`text-center text-sm ${
                        darkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-slate-800"
            } p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg mx-auto`}
          >
            <motion.div
              variants={item}
              className="mb-6 flex items-center gap-2 text-sm text-blue-600 hover:underline cursor-pointer w-fit"
              onClick={() => setUserType(null)}
            >
              <ArrowLeft size={18} /> Back to Role Selection
            </motion.div>
            <motion.h2
              variants={item}
              className="text-3xl font-bold mb-6 text-center"
            >
              Sign Up as {userType}
            </motion.h2>
            <motion.form
              onSubmit={handleSubmit}
              variants={container}
              className="space-y-6"
            >
              <motion.div variants={item}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                      : "border-gray-200 focus:ring-blue-500"
                  } focus:ring-2 outline-none`}
                  placeholder="Full Name"
                  required
                />
              </motion.div>
              <motion.div variants={item}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                      : "border-gray-200 focus:ring-blue-500"
                  } focus:ring-2 outline-none`}
                  placeholder="Email"
                  required
                />
              </motion.div>
              <motion.div variants={item}>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                      : "border-gray-200 focus:ring-blue-500"
                  } focus:ring-2 outline-none`}
                  placeholder="Password"
                  required
                />
              </motion.div>

              {userType === "Doctor" && (
                <>
                  <motion.div variants={item}>
                    <input
                      type="text"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                          : "border-gray-200 focus:ring-blue-500"
                      } focus:ring-2 outline-none`}
                      placeholder="Specialty"
                      required
                    />
                  </motion.div>
                  <motion.div variants={item}>
                    <input
                      type="text"
                      name="license"
                      value={formData.license}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                          : "border-gray-200 focus:ring-blue-500"
                      } focus:ring-2 outline-none`}
                      placeholder="License Number"
                      required
                    />
                  </motion.div>
                </>
              )}

              {userType === "Admin" && (
                <motion.div variants={item}>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-slate-300 focus:ring-blue-500"
                        : "border-gray-200 focus:ring-blue-500"
                    } focus:ring-2 outline-none`}
                    placeholder="Department"
                    required
                  />
                </motion.div>
              )}

              <motion.div variants={item} onClick={handleSubmit}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition"
                >
                  Sign Up
                </motion.button>
              </motion.div>
            </motion.form>
            <motion.p
              variants={item}
              className={`text-center text-sm mt-6 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SignUp;
