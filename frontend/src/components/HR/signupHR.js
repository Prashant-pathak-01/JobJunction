import React, { useState } from "react";
import Logo from "./../../data/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { addRecruiter } from "./../../APIs/recruiter.js";
import { sendSignupMail } from "../../APIs/recruiter.js";
import { Snackbar, Alert } from "@mui/material";

const RecruiterSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    logo: "",
    companyName: "",
    companyWebsite: "",
    phoneNumber: "",
    jobTitle: "",
    companyDescription: "",
    profilePicture: "null",
    password: "null",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    if (
      formData.email.trim() !== "" &&
      formData.fullName.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.companyWebsite.trim() !== "" &&
      formData.phoneNumber.length === 10 &&
      formData.jobTitle.trim() !== "" &&
      formData.companyDescription.trim() !== ""
    ) {
      try {
        const pass = Math.random().toString(36).slice(-8);
        await setFormData({
          ...formData,
          password: pass,
        });
        console.log(formData);
        const res = await addRecruiter(formData);
        if (res.data.email !== -1) {
          sendSignupMail({ email: formData.email, password: pass });
          alert("Account created successfully !");
          navigate("/recruiter/login");
        } else {
          setSnackbar({
            open: true,
            message: "Account with this email already exists!",
            severity: "warning",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setSnackbar({
          open: true,
          message: "Some error occurred!",
          severity: "error",
        });
      }
    } else {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields correctly!",
        severity: "info",
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-sky-100">
      <Link to="/">
        <img
          src={Logo}
          alt="JobJunction Logo"
          className="w-40 mx-auto mb-4 absolute left-10 top-8"
        />
      </Link>
      <div className="bg-white p-10 mt-28 mb-10 rounded-lg shadow-lg w-full max-w-5xl animate-fadeIn">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">Sign Up</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-slate-700">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-slate-700">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-slate-700">
              Company Logo ( Link )
            </label>
            <input
              type="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-slate-700">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-slate-700">Company Name *</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-slate-700">Company Website *</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-slate-700">Job Title *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-slate-700">Company Description *</label>
          <textarea
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-slate-700">
            Profile Picture (optional)
          </label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 transform hover:scale-105"
          >
            Create Account
          </button>
        </div>
      </div>
      <div>
        <p className="text-black font-semibold mb-10">
          Already have an account?{" "}
          <Link to="/recruiter/login">
            <a className="hover:text-red-500 cursor-pointer">Login</a>
          </Link>
        </p>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RecruiterSignup;
