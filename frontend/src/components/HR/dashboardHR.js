import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Dashboard/Header";
import PostedJob from "./postedJob";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import NewJob from "./newJob.js";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { getMyJobs } from "../../APIs/job.js";

function DashboardHR() {
  const [newJob, setNewJob] = useState(false);
  const location = useLocation();
  const [preJobs, setPreJobs] = useState([]);

  useEffect(() => {
    const getHRJobs = async () => {
      try {
        const response = await getMyJobs({ email: location.state.email });
        setPreJobs(response.data);
      } catch (error) {
        console.error("Error occurred while fetching HR jobs:", error);
      }
    };
    getHRJobs();
  }, [location.state.email, newJob]);

  const handleNewJobClose = () => {
    setNewJob(false);
  };

  return (
    <div className="bg-slate-200">
      <Header />
      {location.state === null ? (
        <div className="p-80 font-semibold text-4xl text-center text-slate-800">
          Please login to your account...
        </div>
      ) : (
        <div className="pt-28 flex justify-between items-center h-screen">
          {/* Profile */}
          <div className="flex flex-col bg-white shadow-md rounded-md w-1/3 h-1/2 ml-36 p-6">
            <div className="pb-6 border-b-2 flex flex-row justify-between m-2 items-center text-slate-800">
              <div className="p-2">
                <div className="text-2xl font-semibold">
                  {location.state.fullName}
                </div>
                <div className="ml-4 pt-2 pb-2 flex flex-row items-center">
                  <p className="mr-4 ">
                    <BusinessIcon />
                  </p>
                  {location.state.companyName}
                </div>
                <div
                  className="ml-4 cursor-pointer flex items-center"
                  href={location.state.companyWebsite}
                >
                  <p className="mr-4 ">
                    <LanguageIcon />
                  </p>
                  {location.state.companyWebsite}
                </div>
              </div>
              <div>
                <img
                  src={location.state.logo}
                  className="w-20 h-20 rounded-lg"
                  alt="Company Logo"
                />
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div onClick={() => setNewJob(true)}>
                <div className="relative cursor-pointer rounded px-6 py-4 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-lg">
                    Create new Job
                    <AddCircleOutlineIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Posted Jobs */}
          <div className="flex flex-col bg-white shadow-md rounded-md w-1/3 mr-36 p-6 h-4/5 overflow-scroll">
            <h2 className="text-slate-800 border-b-2 border-slate-600 ml-4 mr-4 pb-2 text-2xl font-semibold">
              Posted Jobs
            </h2>
            {preJobs.length > 0 ? (
              preJobs.map((job) => <PostedJob job={job} />)
            ) : (
              <p className="mt-4 text-gray-600 text-center">
                No jobs posted yet.
              </p>
            )}
          </div>
        </div>
      )}

      {newJob && <NewJob closeJob={handleNewJobClose} hr={location.state} />}
    </div>
  );
}

export default DashboardHR;
