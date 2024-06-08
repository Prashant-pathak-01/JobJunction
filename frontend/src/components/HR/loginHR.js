import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./../../data/Logo.png";
import Snackbar from "@mui/material/Snackbar";
import {
  sendLoginMail,
  updatePassword,
  checkPassword,
} from "../../APIs/recruiter";

const LoginHR = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInput, setShowPasswordInput] = useState(true);
  const [openNotFound, setOpenNotFound] = useState(false);
  const [openWrongPassword, setOpenWrongPassword] = useState(false);
  const [openPasswordSent, setOpenPasswordSent] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      setOpenPasswordSent(true);
    }
  }, [location]);

  const handleNotFoundOpen = () => {
    setOpenNotFound(true);
  };

  const handleWrongPasswordOpen = () => {
    setOpenWrongPassword(true);
  };

  const handleNotFoundClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotFound(false);
  };

  const handleWrongPasswordClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWrongPassword(false);
  };

  const handlePasswordSentClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenPasswordSent(false);
  };

  const handleLogin = async () => {
    const res = await checkPassword({ password: password, email: email });
    if (res.status === -1) {
      handleNotFoundOpen();
    } else if (res.status === 1) {
      handleWrongPasswordOpen();
    } else {
      navigate("/recruiter/Dashboard", { state: res });
    }
  };

  const handlePassword = async () => {
    try {
      const pass = Math.random().toString(36).slice(-8);
      const res = await updatePassword({ email: email, password: pass });
      if (res.email === -1) {
        alert("User with this email doesn't exist!");
      } else if (res.email === 0) {
        alert("Some error occurred");
      } else {
        //await sendLoginMail({ email: email, password: pass });
        setOpenPasswordSent(true);
        setShowPasswordInput(!passwordInput);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-sky-100">
      <Link to="/">
        <img
          src={Logo}
          alt="JobJunction Logo"
          className="w-40 mx-auto mb-4 absolute left-10 top-8"
        />
      </Link>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
          Login
        </h2>
        <div>
          {passwordInput ? (
            <div>
              <div className="mb-4">
                <label
                  className="block text-slate-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                onClick={() => setShowPasswordInput(!passwordInput)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Continue
              </button>
              <p
                onClick={handlePassword}
                className="text-center mt-4 cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-center font-semibold mb-2 text-red-500">
                [ Check password on your email ]
              </h2>
              <div className="mb-6">
                <label
                  className="block text-slate-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
              <p
                onClick={() => setShowPasswordInput(true)}
                className="pt-4 text-center cursor-pointer"
              >
                Change Email
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 text-white font-semibold flex flex-row">
        Don't have an account?
        <Link to="/recruiter/signup">
          <p className="cursor-pointer hover:text-blue-800 ml-2"> Sign up</p>
        </Link>
      </div>
      <div>
        <Snackbar
          open={openNotFound}
          autoHideDuration={5000}
          onClose={handleNotFoundClose}
          message="Couldn't find any account with this email."
        />
        <Snackbar
          open={openWrongPassword}
          autoHideDuration={5000}
          onClose={handleWrongPasswordClose}
          message="Wrong Password"
        />
        <Snackbar
          open={openPasswordSent}
          autoHideDuration={5000}
          onClose={handlePasswordSentClose}
          message="A new password has been sent to your email."
        />
      </div>
    </div>
  );
};

export default LoginHR;
