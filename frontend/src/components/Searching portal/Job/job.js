import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Dashboard/Header";
import { getJob } from "../../../APIs/job";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import PageNotFound from "../../HomePage/PageNotFound";
import { useAuth } from "@clerk/clerk-react";
import Authentication from "./Auth";
import Preview from "./Preview";

function Job() {
  const { isSignedIn } = useAuth();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState(false);
  const [auth, setAuth] = useState(false);
  const handleApply = () => {
    if (isSignedIn) {
      setPreview(true);
    } else {
      setAuth(true);
    }
  };

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const res = await getJob({ Id: id });
        if (res.data.title === "Job not found") {
          setError(true);
        } else {
          setJob(res.data);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setError(true);
      }
    };
    getJobDetails();
  }, [id]);

  if (error) {
    return (
      <>
        <PageNotFound></PageNotFound>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Header />
        <div className="flex justify-center">
          <div className="w-2/3 text-center p-80">
            <h1 className="text-center text-4xl font-serif font-semibold">
              Loading...
            </h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-20 flex justify-center">
        <div className="bg-slate-50 mt-6 w-2/3 mb-10">
          {/* Header */}
          <div className="flex items-center pb-4 border-b-2 border-black mb-4 ml-10 mr-10">
            <a href={job.company.website}>
              <img
                className="w-24 h-20 mt-6 rounded-lg cursor-pointer"
                src={job.company.logo}
                alt={`${job.company.name} logo`}
              />
            </a>
            <div className="w-full">
              <h1 className="justify-center items-center text-4xl font-serif mt-6 font-semibold flex text-slate-800">
                {job.title} <span className="text-lg ml-2">({job.mode})</span>
              </h1>
              <h2 className="text-center font-semibold text-xl">
                {job.company.name}
              </h2>
            </div>
          </div>

          {/* About Company */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">About Company</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <h3 className="flex pt-2">
                <BusinessOutlinedIcon />
                <p className="ml-4 font-semibold">{job.company.name}</p>
              </h3>
              <h3 className="flex pt-2">
                <FmdGoodOutlinedIcon />
                <p className="ml-4 font-semibold">{job.company.location}</p>
              </h3>
              <h3 className="flex pt-2">
                <PeopleAltOutlinedIcon />
                <p className="ml-4 font-semibold">{job.company.size}</p>
              </h3>
              <h3 className="flex pt-2">
                <LanguageOutlinedIcon />
                <a href={job.company.website} className="ml-4 font-semibold">
                  {job.company.website}
                </a>
              </h3>
            </div>
          </div>

          {/* About Job */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">About Job</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <h3 className="flex pt-2">
                <WorkOutlineOutlinedIcon />
                <p className="ml-4 font-semibold">{job.title}</p>
              </h3>
              <h3 className="flex pt-2">
                <PaymentsOutlinedIcon />
                <p className="ml-4 font-semibold">{job.salary_range}</p>
              </h3>
              <h3 className="flex pt-2">
                <TimerOutlinedIcon />
                <p className="ml-4 font-semibold">{job.experience}</p>
              </h3>
            </div>
          </div>

          {/* Job Responsibilities */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">Your Responsibilities</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <ul className="list-disc pl-5">
                {job.responsibilities.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Requirements */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">Requirements</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <ul className="list-disc pl-5">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Benefits */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">Benefits</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <ul className="list-disc pl-5">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Interview Process */}
          <div className="pl-10 pt-4">
            <h2 className="font-semibold text-2xl">Interview Process</h2>
            <div className="m-2 text-slate-800 ml-10 mr-10">
              <ul className="list-disc pl-5">
                {job.interview_process.map((process, index) => (
                  <li key={index}>{process}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Job Info */}
          <div className="pl-10 p-4">
            <p className="text-red-600 font-semibold">
              Note : {job.application_details.additional_instructions}
            </p>
          </div>

          {/* Apply */}
          <div className="border-t-2 ml-10 mr-10 p-2 justify-between flex">
            <p className="bg-black rounded-sm m-2 inline-block text-white p-2 font-semibold">
              HR email : {job.application_details.contact_email}
            </p>
            <button
              className="bg-blue-700 pl-8 pr-8 h-12 text-white font-semibold rounded-md m-2 hover:bg-blue-800 transition-colors flex items-center "
              onClick={handleApply}
            >
              Apply here{" "}
              <p className="pl-2">
                <SendRoundedIcon></SendRoundedIcon>
              </p>
            </button>

            {auth && <Authentication onClose={() => setAuth(false)} />}

            {preview && (
              <Preview
                job={job}
                cancel={() => setPreview(!preview)}
                onClose={() => setPreview(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
