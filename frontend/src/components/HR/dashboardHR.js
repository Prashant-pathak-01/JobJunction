import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Dashboard/Header";
import PostedJob from "./postedJob";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import { CircularProgress } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function dashboardHR() {
  const location = useLocation();

  return (
    <div className="bg-slate-200">
      <Header></Header>
      {location.state === null ? (
        <div className=" p-80 font-semibold text-4xl text-center text-slate-800">
          Please login to your account...
        </div>
      ) : (
        <div className="pt-28 flex justify-between items-center h-screen">
          {/* Profile */}
          <div className="flex  flex-col bg-white shadow-md rounded-md w-1/3 h-1/2 ml-36 p-6">
            <div className="pb-6 border-b-2 flex flex-row justify-between m-2 items-center text-slate-800">
              <div className="p-2">
                <p className=" text-2xl font-semibold">
                  {location.state.fullName}
                </p>
                <p className="ml-4 pt-2 pb-2">
                  <BusinessIcon></BusinessIcon> {location.state.companyName}
                </p>
                <p className="ml-4">
                  <LanguageIcon></LanguageIcon>
                  {location.state.companyWebsite}
                </p>
              </div>
              <div>
                <img
                  src={location.state.logo}
                  className="w-20 h-20 rounded-lg"
                ></img>
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div>
                <a class="relative cursor-pointer rounded px-6 py-4 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400  text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                  <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span class="relative text-lg ">
                    Create new Job <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Posted Jobs */}

          <div className="flex  flex-col bg-white shadow-md rounded-md w-1/3 mr-36 p-6 h-4/5 overflow-scroll">
            <h2 className="text-slate-800 border-b-2 border-slate-600 ml-4 mr-4 pb-2 text-2xl font-semibold">
              Posted Jobs
            </h2>
            <div>
              <PostedJob></PostedJob>
              <PostedJob></PostedJob>
              <PostedJob></PostedJob>
              <PostedJob></PostedJob>
              <PostedJob></PostedJob>
              <PostedJob></PostedJob>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default dashboardHR;
