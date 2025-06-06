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
import Login from "./screens/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import Patient from "./screens/Patient/Patients.jsx";
import Admin from "./screens/Admin.jsx";
import Doctor from "./screens/Doctors.jsx";
import PatientHistory from "./screens/Patient/PatientHistory.jsx";
import PatientProfile from "./screens/Patient/PatientProfile.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="profile" element={<Profile />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="patients" element={<Patient />}>
              <Route index element={<PatientProfile />} />
              <Route path="patienthistory" element={<PatientHistory />} />
            </Route>
            <Route path="doctors" element={<Doctor />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </StrictMode>
  </Provider>
);
