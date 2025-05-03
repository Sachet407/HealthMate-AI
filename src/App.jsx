import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f1f5ff] via-[#f9fbff] to-[#ffffff] text-slate-800 font-[Inter]">
      <nav className="h-20 flex items-center justify-between px-10 md:px-16 bg-white/60 backdrop-blur-xl shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-blue-100">
        <div className="text-3xl font-bold tracking-tight flex items-center space-x-1">
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent drop-shadow-sm">
            Healthmate
          </span>
          <span className="text-slate-500">AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-lg">
          {["/", "/about", "/profile", "/contact"].map((path, index) => {
            const names = ["Home", "About", "Profile", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3b82f6] font-semibold border-b-2 border-[#3b82f6] pb-0.5"
                    : "text-slate-600 hover:text-[#3b82f6] transition-colors duration-200"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>
        <NavLink to="/signup">
          <button className="ml-4 px-5 py-2 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white rounded-full shadow-lg hover:brightness-110 transition-all duration-300 font-medium tracking-wide">
            Sign Up
          </button>
        </NavLink>
      </nav>
      <main className="pt-28 px-6 md:px-20 transition-all duration-300">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;
