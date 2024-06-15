import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Footer from "./components/HomePage/Footer";
import LoginStudent from "./components/Student/Login";
import SignupStudent from "./components/Student/Signup";
import DashboardHR from "./components/HR/dashboardHR";
import Dashboard from "./components/Dashboard/Dashboard";
import Jobs from "./components/Searching portal/Jobs";
import JobDetail from "./components/Searching portal/Job/job";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/HomePage/PageNotFound";
import LoginHR from "./components/HR/loginHR";
import SignupHR from "./components/HR/signupHR";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Homepage />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/student/login"
            element={
              <>
                <LoginStudent />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/student/signup"
            element={
              <>
                <SignupStudent />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/recruiter/login"
            element={
              <>
                <LoginHR />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/recruiter/signup"
            element={
              <>
                <SignupHR />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/recruiter/dashboard"
            element={
              <>
                <DashboardHR />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/jobs"
            element={
              <>
                <Jobs />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/job/:id"
            element={
              <>
                <JobDetail />
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
