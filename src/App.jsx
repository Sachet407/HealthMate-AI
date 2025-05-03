import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../src/store/slices/themeSlice";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className={`min-h-screen w-full ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-200"
          : "bg-gradient-to-br from-[#f1f5ff] via-[#f9fbff] to-[#ffffff] text-slate-800"
      } font-[Inter] transition-colors duration-300`}
    >
      {!isLoggedIn && (
        <>
          <nav
            className={`h-20 flex items-center justify-between px-10 md:px-16 ${
              darkMode
                ? "bg-slate-800/60 backdrop-blur-xl shadow-lg border-b border-slate-700"
                : "bg-white/60 backdrop-blur-xl shadow-lg border-b border-blue-100"
            } fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
          >
            <div className="text-3xl font-bold tracking-tight flex items-center space-x-1">
              <span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? "from-[#60a5fa] to-[#93c5fd]"
                    : "from-[#3b82f6] to-[#60a5fa]"
                } bg-clip-text text-transparent drop-shadow-sm`}
              >
                Healthmate
              </span>
              <span className={darkMode ? "text-slate-400" : "text-slate-500"}>
                AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-10 text-lg">
              {["/", "/about", "/contact"].map((path, index) => {
                const names = ["Home", "About", "Profile", "Contact"];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? `${
                            darkMode ? "text-[#60a5fa]" : "text-[#3b82f6]"
                          } font-semibold border-b-2 ${
                            darkMode ? "border-[#60a5fa]" : "border-[#3b82f6]"
                          } pb-0.5`
                        : `${
                            darkMode
                              ? "text-slate-300 hover:text-[#60a5fa]"
                              : "text-slate-600 hover:text-[#3b82f6]"
                          } transition-colors duration-200`
                    }
                  >
                    {names[index]}
                  </NavLink>
                );
              })}
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full mr-4 ${
                  darkMode
                    ? "bg-slate-700 text-slate-200 hover:bg-slate-600"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                } transition-colors duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <NavLink to="/signup">
                <button
                  className={`px-5 py-2 ${
                    darkMode
                      ? "bg-gradient-to-r from-[#60a5fa] to-[#93c5fd]"
                      : "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
                  } text-white rounded-full shadow-lg hover:brightness-110 transition-all duration-300 font-medium tracking-wide`}
                >
                  Sign Up
                </button>
              </NavLink>
            </div>
          </nav>
          <main className="pt-28 px-6 md:px-20 transition-all duration-300">
            <div className="">
              <Outlet />
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
