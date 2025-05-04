import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Clock,
  FileText,
  User,
  ChevronDown,
  Download,
  Plus,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const PatientHistory = () => {
  const [consultations, setConsultations] = useState([]);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [filters, setFilters] = useState({
    dateRange: "all",
    consultationType: "all",
  });
  const mockConsultations = [
    {
      id: "CONS-2024-001",
      title: "Annual Physical Examination",
      type: "in-person",
      date: "April 15, 2024",
      time: "10:30 AM",
      doctor: "Emily Johnson",
      department: "General Medicine",
      duration: 45,
      symptoms: ["Fatigue", "Mild headaches", "Shortness of breath"],
      diagnosis:
        "Patient is generally in good health but shows signs of mild anemia and vitamin D deficiency. Blood pressure is slightly elevated at 135/85 mmHg.",
      treatment: [
        "Recommended dietary changes to include more iron-rich foods",
        "Prescribed vitamin D supplement (1000 IU daily)",
        "Advised to monitor blood pressure weekly",
        "Recommended 30 minutes of moderate exercise at least 5 days a week",
      ],
      medications: [
        {
          name: "Vitamin D3",
          dosage: "1000 IU",
          frequency: "Once daily",
          duration: "3 months",
        },
        {
          name: "Iron Supplement",
          dosage: "325 mg",
          frequency: "Once daily with food",
          duration: "1 month",
        },
      ],
      followUp:
        "Schedule a follow-up appointment in 3 months to reassess blood pressure and vitamin levels. If headaches persist or worsen, contact the office for an earlier appointment.",
    },
    {
      id: "CONS-2024-002",
      title: "Respiratory Infection Consultation",
      type: "virtual",
      date: "March 24, 2024",
      time: "2:15 PM",
      doctor: "Michael Chen",
      department: "Pulmonology",
      duration: 30,
      symptoms: [
        "Persistent cough",
        "Fever",
        "Chest congestion",
        "Sore throat",
      ],
      diagnosis:
        "Acute bronchitis, likely viral in origin. Chest X-ray shows no signs of pneumonia. Oxygen saturation is normal at 98%.",
      treatment: [
        "Rest and increased fluid intake",
        "Use of humidifier, especially at night",
        "Over-the-counter cough suppressant for nighttime use",
        "Saline nasal spray for congestion",
      ],
      medications: [
        {
          name: "Dextromethorphan",
          dosage: "30 mg",
          frequency: "Every 6-8 hours as needed",
          duration: "7 days",
        },
        {
          name: "Acetaminophen",
          dosage: "500 mg",
          frequency: "Every 6 hours as needed for fever",
          duration: "As needed",
        },
      ],
      followUp:
        "If symptoms persist beyond 10 days or if fever returns after initial improvement, schedule another appointment. Consider in-person follow-up if shortness of breath develops.",
    },
  ];

  // Simulate loading consultation data
  useEffect(() => {
    const timer = setTimeout(() => {
      setConsultations(mockConsultations);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter consultations based on search term and filters
  const filteredConsultations = consultations.filter((consultation) => {
    const matchesSearch =
      consultation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultation.symptoms.some((s) =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDateRange =
      filters.dateRange === "all" ||
      (filters.dateRange === "recent" &&
        new Date(consultation.date) >=
          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

    const matchesType =
      filters.consultationType === "all" ||
      consultation.type === filters.consultationType;

    return matchesSearch && matchesDateRange && matchesType;
  });

  const handleConsultationClick = (consultation) => {
    setSelectedConsultation(consultation);
  };

  const closeConsultationDetails = () => {
    setSelectedConsultation(null);
  };

  return (
    <div className="w-full">
      {/* Top navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center mb-8"
      >
        <Link
          to="/patients"
          className={`mr-4 p-2 rounded-full ${
            darkMode
              ? "bg-slate-700 hover:bg-slate-600"
              : "bg-slate-100 hover:bg-slate-200"
          } transition-colors duration-200`}
        >
          <ArrowLeft
            size={20}
            className={darkMode ? "text-blue-300" : "text-blue-600"}
          />
        </Link>
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-slate-100" : "text-slate-800"
          }`}
        >
          Consultation History
        </h1>
      </motion.div>

      {/* Search and filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className={`flex-1 flex items-center p-3 rounded-xl ${
              darkMode ? "bg-slate-700" : "bg-white"
            } shadow-md`}
          >
            <Search
              size={18}
              className={`mr-2 ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search by doctor, condition, or symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-transparent border-none focus:outline-none ${
                darkMode
                  ? "text-slate-200 placeholder-slate-500"
                  : "text-slate-800 placeholder-slate-400"
              }`}
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl shadow-md ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
                  : "bg-white hover:bg-slate-50 text-slate-700"
              } transition-colors duration-200`}
            >
              <Filter
                size={18}
                className={darkMode ? "text-blue-300" : "text-blue-600"}
              />
              <span>Filter</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  filterOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute right-0 top-full mt-2 p-4 rounded-xl shadow-xl z-10 w-64 ${
                  darkMode
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border border-slate-100"
                }`}
              >
                <div className="mb-4">
                  <label
                    className={`block mb-2 font-medium text-sm ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Date Range
                  </label>
                  <select
                    value={filters.dateRange}
                    onChange={(e) =>
                      setFilters({ ...filters, dateRange: e.target.value })
                    }
                    className={`w-full p-2 rounded-lg border ${
                      darkMode
                        ? "bg-slate-700 border-slate-600 text-slate-200"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <option value="all">All Time</option>
                    <option value="recent">Last 30 Days</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className={`block mb-2 font-medium text-sm ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Consultation Type
                  </label>
                  <select
                    value={filters.consultationType}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        consultationType: e.target.value,
                      })
                    }
                    className={`w-full p-2 rounded-lg border ${
                      darkMode
                        ? "bg-slate-700 border-slate-600 text-slate-200"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <option value="all">All Types</option>
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <button
                  onClick={() => {
                    setFilters({ dateRange: "all", consultationType: "all" });
                    setSearchTerm("");
                  }}
                  className={`w-full p-2 rounded-lg text-center text-sm font-medium ${
                    darkMode
                      ? "bg-slate-700 text-blue-300 hover:bg-slate-600"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  } transition-colors duration-200`}
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Consultation list */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={`rounded-xl shadow-lg overflow-hidden ${
          darkMode ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className={`p-4 ${darkMode ? "bg-slate-700" : "bg-blue-50"}`}>
          <div className="flex justify-between items-center">
            <h3
              className={`font-medium ${
                darkMode ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {loading
                ? "Loading consultations..."
                : `${filteredConsultations.length} Consultations Found`}
            </h3>
            <button
              className={`flex items-center space-x-1 text-sm ${
                darkMode
                  ? "text-blue-300 hover:text-blue-400"
                  : "text-blue-600 hover:text-blue-800"
              } transition-colors duration-200`}
            >
              <Download size={16} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {loading ? (
          <div className="p-8 flex justify-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 border-4 border-t-transparent rounded-full animate-spin ${
                  darkMode ? "border-blue-400" : "border-blue-600"
                }`}
              ></div>
              <p
                className={`mt-4 ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Loading your consultation history...
              </p>
            </div>
          </div>
        ) : filteredConsultations.length === 0 ? (
          <div className="p-8 text-center">
            <FileText
              size={40}
              className={`mx-auto mb-4 opacity-50 ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            />
            <p
              className={`mb-2 font-medium ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              No consultations found
            </p>
            <p
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div>
            {filteredConsultations.map((consultation, index) => (
              <motion.div
                key={consultation.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleConsultationClick(consultation)}
                className={`p-5 border-b cursor-pointer hover:bg-opacity-50 ${
                  darkMode
                    ? "border-slate-700 hover:bg-slate-700"
                    : "border-slate-100 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${
                          consultation.type === "emergency"
                            ? "bg-red-500"
                            : consultation.type === "virtual"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                      ></span>
                      <span
                        className={`text-xs font-semibold uppercase ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {consultation.type} Consultation
                      </span>
                    </div>
                    <h3
                      className={`font-medium text-lg mb-1 ${
                        darkMode ? "text-slate-200" : "text-slate-800"
                      }`}
                    >
                      {consultation.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <div className="flex items-center">
                        <Calendar
                          size={14}
                          className={`mr-1 ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {consultation.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock
                          size={14}
                          className={`mr-1 ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {consultation.time}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <User
                          size={14}
                          className={`mr-1 ${
                            darkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          Dr. {consultation.doctor}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {consultation.symptoms.slice(0, 3).map((symptom, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-slate-700 text-slate-300"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {symptom}
                        </span>
                      ))}
                      {consultation.symptoms.length > 3 && (
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            darkMode
                              ? "bg-slate-700 text-blue-300"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          +{consultation.symptoms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add consultation button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg ${
            darkMode
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          } z-10`}
        >
          <Plus size={24} />
        </motion.button>
      </motion.div>

      {/* Consultation details modal */}
      {selectedConsultation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl ${
              darkMode ? "bg-slate-800" : "bg-white"
            }`}
          >
            <div
              className={`p-6 border-b ${
                darkMode ? "border-slate-700" : "border-slate-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center mb-1">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${
                        selectedConsultation.type === "emergency"
                          ? "bg-red-500"
                          : selectedConsultation.type === "virtual"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                    ></span>
                    <span
                      className={`text-xs font-semibold uppercase ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {selectedConsultation.type} Consultation
                    </span>
                  </div>
                  <h2
                    className={`text-xl font-bold ${
                      darkMode ? "text-slate-100" : "text-slate-800"
                    }`}
                  >
                    {selectedConsultation.title}
                  </h2>
                </div>
                <button
                  onClick={closeConsultationDetails}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  <X
                    size={20}
                    className={darkMode ? "text-slate-300" : "text-slate-600"}
                  />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Consultation Details
                  </h3>
                  <div
                    className={`p-4 rounded-xl ${
                      darkMode ? "bg-slate-700" : "bg-slate-50"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span
                          className={
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          Date:
                        </span>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          {selectedConsultation.date}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className={
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          Time:
                        </span>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          {selectedConsultation.time}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className={
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          Doctor:
                        </span>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          Dr. {selectedConsultation.doctor}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className={
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          Department:
                        </span>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          {selectedConsultation.department}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span
                          className={
                            darkMode ? "text-slate-300" : "text-slate-600"
                          }
                        >
                          Duration:
                        </span>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          {selectedConsultation.duration} minutes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Symptoms
                  </h3>
                  <div
                    className={`p-4 rounded-xl ${
                      darkMode ? "bg-slate-700" : "bg-slate-50"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {selectedConsultation.symptoms.map((symptom, i) => (
                        <span
                          key={i}
                          className={`text-sm px-3 py-1 rounded-full ${
                            darkMode
                              ? "bg-slate-800 text-slate-300"
                              : "bg-white text-slate-700 border border-slate-200"
                          }`}
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3
                  className={`text-sm font-medium mb-2 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Diagnosis
                </h3>
                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-slate-700" : "bg-slate-50"
                  }`}
                >
                  <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                    {selectedConsultation.diagnosis}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3
                  className={`text-sm font-medium mb-2 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Treatment Plan
                </h3>
                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-slate-700" : "bg-slate-50"
                  }`}
                >
                  <ul
                    className={`list-disc pl-5 space-y-2 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {selectedConsultation.treatment.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedConsultation.medications && (
                <div className="mb-6">
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Prescribed Medications
                  </h3>
                  <div
                    className={`rounded-xl overflow-hidden ${
                      darkMode ? "bg-slate-700" : "bg-slate-50"
                    }`}
                  >
                    <table className="w-full">
                      <thead
                        className={darkMode ? "bg-slate-800" : "bg-slate-100"}
                      >
                        <tr>
                          <th
                            className={`text-left p-4 ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Medication
                          </th>
                          <th
                            className={`text-left p-4 ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Dosage
                          </th>
                          <th
                            className={`text-left p-4 ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Frequency
                          </th>
                          <th
                            className={`text-left p-4 ${
                              darkMode ? "text-slate-300" : "text-slate-700"
                            }`}
                          >
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedConsultation.medications.map((med, i) => (
                          <tr
                            key={i}
                            className={
                              i % 2 === 0
                                ? darkMode
                                  ? "bg-slate-700"
                                  : "bg-white"
                                : darkMode
                                ? "bg-slate-700"
                                : "bg-slate-50"
                            }
                          >
                            <td
                              className={`p-4 ${
                                darkMode ? "text-slate-200" : "text-slate-700"
                              }`}
                            >
                              {med.name}
                            </td>
                            <td
                              className={`p-4 ${
                                darkMode ? "text-slate-300" : "text-slate-600"
                              }`}
                            >
                              {med.dosage}
                            </td>
                            <td
                              className={`p-4 ${
                                darkMode ? "text-slate-300" : "text-slate-600"
                              }`}
                            >
                              {med.frequency}
                            </td>
                            <td
                              className={`p-4 ${
                                darkMode ? "text-slate-300" : "text-slate-600"
                              }`}
                            >
                              {med.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-sm font-medium mb-2 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Follow-up Instructions
                </h3>
                <div
                  className={`p-4 rounded-xl ${
                    darkMode ? "bg-slate-700" : "bg-slate-50"
                  }`}
                >
                  <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                    {selectedConsultation.followUp}
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  } transition-colors duration-200`}
                >
                  Download PDF
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    darkMode
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } transition-colors duration-200`}
                >
                  Schedule Follow-up
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
export default PatientHistory;
// Mock data for consultations
