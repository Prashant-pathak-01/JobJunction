import React, { useState } from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import confirmationIMG from "./../../../data/confirmation.gif";
import { Link } from "react-router-dom";
const ModalComponent = ({ job, cancel }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        {confirmed ? (
          <div className="flex flex-col items-center justify-center">
            <img className="w-40" src={confirmationIMG}></img>
            <h2 className="font-bold text-slate-500 text-xl p-4">
              You have successfully applied !
            </h2>
            <Link to="/jobs">
              <p className="w-96 ml-6 text-right text-slate-800">Go back</p>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl text-center border-b-2 ml-4 mr-4 pb-2">
              Application Preview
            </h1>
            <h2 className="m-4 font-serif text-slate-700">
              You are applying for the position of <b>{job.title}</b> at{" "}
              <b>{job.company.name}</b>. If this is correct, click 'Confirm' to
              proceed.
            </h2>
            <h3 className="text-sm text-red-500 m-4 pb-2">
              * Please ensure your profile and resume are up to date before
              proceeding, as it will be shared with the recruiter.
            </h3>
            <div className="flex flex-row justify-end mr-6">
              <button
                className="bg-red-500 w-40 hover:scale-110 hover:bg-red-600 transition-all rounded p-2 text-white ml-4"
                onClick={cancel}
              >
                <CancelOutlinedIcon></CancelOutlinedIcon> Cancel
              </button>
              <button
                className="bg-blue-500 w-40 hover:scale-110 hover:bg-blue-600 transition-all rounded p-2 text-white ml-4"
                onClick={() => setConfirmed(true)}
              >
                <TaskAltRoundedIcon></TaskAltRoundedIcon> Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
