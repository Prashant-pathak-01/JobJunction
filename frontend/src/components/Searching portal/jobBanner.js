import React from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
function jobBanner({ job }) {
  return (
    <div className="border-2 border-grey-300 text-slate-800 m-4 rounded-xl pl-4 pr-4 pb-2 pt-2 shadow-md ">
      <div className="flex flex-row justify-between p-4 items-center border-b-2">
        <div className="flex flex-row pt-2 text-sm font-medium">
          <img
            src={job.company.logo}
            className="w-12 h-12 rounded-md mr-6"
          ></img>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <h3 className="text-sm">{job.company.name}</h3>
          </div>
        </div>
        <div className="hover:bg-slate-300 rounded-full cursor-pointer transition-all hover:scale-110 p-2">
          <BookmarkBorderRoundedIcon></BookmarkBorderRoundedIcon>
        </div>
      </div>
      <div>
        <div className="p-4 flex flex-col border-b-2">
          <h3 className="flex flex-row text-sm font-medium">
            <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon>
            <p className="ml-2"> {job.company.location}</p>
          </h3>
          <h3 className="flex flex-row pt-2 text-sm font-medium">
            <WorkOutlineIcon></WorkOutlineIcon>
            <p className="ml-2"> {job.experience}</p>
          </h3>
          <h3 className="flex flex-row pt-2 text-sm font-medium">
            <PaymentsOutlinedIcon></PaymentsOutlinedIcon>
            <p className="ml-2"> {job.salary_range}</p>
          </h3>
          <h3 className="flex flex-row pt-2 text-sm font-medium">
            <PersonOutlinedIcon></PersonOutlinedIcon>
            <p className="ml-2"> {job.employment_type}</p>
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center p-2">
          <h2 className="ml-6 text-slate-400 text-sm font-mono">
            Job id : {job.job_id}
          </h2>
          <Link to={"/job/" + job.job_id}>
            <button className="border-2  rounded-md pt-2 pb-2 pl-6 pr-6 font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default jobBanner;
