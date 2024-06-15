import React, { useState } from "react";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Applicants from "./applicants";
function postedJob({ job }) {
  const [showApplicants, setShowApplicants] = useState(false);
  const handleClose = () => {
    setShowApplicants(false);
  };
  return (
    <div className="p-6 bg-slate-300 rounded-md m-2 mt-6 flex flex-row items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold ">{job.title}</h1>
        <h2 className="ml-4 text-sm p-1 text-slate-600">
          Job Id : {job.job_id}
        </h2>
        <h2 className="ml-4 text-sm p-1 text-slate-600">
          Posted date : {job.posted_date.substring(0, 10)}
        </h2>
      </div>
      <button
        onClick={() => setShowApplicants(true)}
        className=" hover:scale-110 transition-all cursor-pointer hover:bg-slate-500 hover:text-white rounded-full p-2"
      >
        <KeyboardDoubleArrowRightOutlinedIcon></KeyboardDoubleArrowRightOutlinedIcon>
      </button>
      {showApplicants && (
        <Applicants
          handleClose={handleClose}
          applicants={job.Applicants}
        ></Applicants>
      )}
    </div>
  );
}

export default postedJob;
