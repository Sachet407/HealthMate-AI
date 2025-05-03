import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import About from "./screens/About.jsx";
import Profile from "./screens/Profile.jsx";
import SignUp from "./screens/SignUp.jsx";
import Contact from "./screens/Contact.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
