import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] w-full flex items-center justify-center p-4">
      <motion.div
        className="relative w-full max-w-md bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl -z-10"
          animate={{ scale: [1, 1.1, 1], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />

        <motion.h2
          className="text-3xl font-bold text-slate-800 text-center mb-8"
          variants={itemVariants}
        >
          Welcome Back
        </motion.h2>
        <motion.form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your password"
              required
            />
            <div
              className="absolute top-9 right-4 cursor-pointer text-slate-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Login
            </button>
          </motion.div>
        </motion.form>
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-slate-600 mt-6"
        >
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
