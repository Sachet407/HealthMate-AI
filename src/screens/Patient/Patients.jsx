import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Moon, Sun, X, Check } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { toggleTheme } from "../../store/slices/themeSlice";
import { useNavigate, Outlet } from "react-router-dom";
const Patients = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`w-full flex flex-col`}>
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
            onClick={() => setShowLogoutConfirm(true)}
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

      {/* Logout Confirmation Dialog */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`p-6 rounded-xl shadow-lg w-96 ${
                darkMode ? "bg-slate-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Confirm Logout
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Are you sure you want to log out of your account?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                    darkMode
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  <X size={18} />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center space-x-2"
                >
                  <Check size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="pt-3">
  <Outlet />
</div>

    </div>
  );
};

export default Patients;
