import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Error from "../../data/loading.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CakeIcon from "@mui/icons-material/Cake";
import { Button } from "@mui/material";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SavedJobs from "./SavedJobs";
import AppliedJobs from "./AppliedJobs";
import {
  getUser,
  removeEducation,
  removeLanguage,
  removeSkill,
  removeExperience,
  removeProject,
} from "./../../APIs/user";
import UpdateQualification from "./updatingModals/Qualification";
import UpdateSkills from "./updatingModals/Skills";
import UpdateExperience from "./updatingModals/Experience";
import UpdateProjects from "./updatingModals/Projects";
import UpdateLanguage from "./updatingModals/Language";
import ResumeUpload from "./updatingModals/resume";
import PhotoUpdate from "./updatingModals/photo";
import DestinationImg from "./../../data/toFrom.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Profile from "../../data/profile.jpg";

function Dashboard() {
  const { user, isSignedIn } = useUser();
  const [userData, setUserData] = useState({});
  const [isQualificationModalOpen, setIsQualificationModalOpen] =
    useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isSavedJobsOpen, setIsSavedJobsOpen] = useState(false);
  const [isAppliedJobsOpen, setIsAppliedJobsOpen] = useState(false);
  const [isResumeUploadOpen, setIsResumeUploadOpen] = useState(false);
  const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false);

  const [removed, setRemoved] = useState(false);

  const handleCloseModal = (modalType) => {
    switch (modalType) {
      case "qualification":
        setIsQualificationModalOpen(false);
        break;
      case "skills":
        setIsSkillsModalOpen(false);
        break;
      case "language":
        setIsLanguageModalOpen(false);
        break;
      case "experience":
        setIsExperienceModalOpen(false);
        break;
      case "projects":
        setIsProjectsModalOpen(false);
        break;
      case "savedJobs":
        setIsSavedJobsOpen(false);
      case "appliedJobs":
        setIsAppliedJobsOpen(false);
      case "resume":
        setIsResumeUploadOpen(false);
      case "photo":
        setIsPhotoUploadOpen(false);
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn) {
        try {
          const res = await getUser({
            Email: user.primaryEmailAddress.emailAddress,
          });
          setUserData(res);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };
    fetchUserData();
  }, [
    user,
    isExperienceModalOpen,
    isLanguageModalOpen,
    isProjectsModalOpen,
    isQualificationModalOpen,
    isSkillsModalOpen,
    removed,
  ]);

  const remEducation = async (id) => {
    let res = await removeEducation({
      email: user.primaryEmailAddress.emailAddress,
      id: id,
    });
    setRemoved(!removed);
  };

  const remSkill = async (id) => {
    let res = await removeSkill({
      email: user.primaryEmailAddress.emailAddress,
      id: id,
    });
    setRemoved(!removed);
  };

  const remLanguage = async (id) => {
    let res = await removeLanguage({
      email: user.primaryEmailAddress.emailAddress,
      id: id,
    });
    setRemoved(!removed);
  };

  const remExperience = async (id) => {
    let res = await removeExperience({
      email: user.primaryEmailAddress.emailAddress,
      id: id,
    });
    setRemoved(!removed);
  };

  const remProject = async (id) => {
    let res = await removeProject({
      email: user.primaryEmailAddress.emailAddress,
      id: id,
    });
    setRemoved(!removed);
  };

  return (
    <div>
      <SignedIn>
        <Header />
        <div className="flex items-center justify-center bg-slate-50">
          <div className="pl-20 pr-20 rounded-3xl w-2/3 m-28">
            <h1 className="ml-72 text-4xl font-bold text-slate-700 p-6 absolute  bg-slate-50">
              Your Profile
            </h1>

            <div className="border-2  rounded-md pt-10 mt-12">
              {/* Upper Section */}
              <div className="flex flex-row ">
                {/* User Profile */}
                <div className="bg-white flex flex-row items-center rounded-lg shadow-md m-4 w-3/4">
                  <span className="flex">
                    <img
                      src={userData.Photo === "" ? Profile : userData.Photo}
                      className="rounded-full w-48 h-48 p-2 ml-8 m-4 border-2 border-slate-700"
                    ></img>
                    <button
                      onClick={() => setIsPhotoUploadOpen(true)}
                      className="absolute ml-44 mt-6 bg-white p-2 rounded-full text-slate-700 border-2 border-slate-700 hover:bg-slate-100 cursor-pointer hover:scale-105 transition-all"
                    >
                      <EditOutlinedIcon></EditOutlinedIcon>
                    </button>
                    {isPhotoUploadOpen && (
                      <PhotoUpdate
                        email={userData.Email}
                        onClose={() => handleCloseModal("photo")}
                      ></PhotoUpdate>
                    )}
                  </span>
                  <div className="ml-10 p-1">
                    <h2 className="text-3xl font-semibold pt-2 mb-6 text-slate-700">
                      {userData.Name}
                    </h2>
                    <h3 className="text-slate-600 text-sm mt-2 flex items-center">
                      <MailOutlineIcon />{" "}
                      <span className="ml-2">{userData.Email}</span>
                    </h3>
                  </div>
                </div>

                {/* Saved Jobs or Applied Jobs */}
                <div className="m-4 rounded-lg p-2 ml-0 w-1/4 flex flex-col justify-center">
                  <div
                    className="flex flex-row bg-white p-4 mt-4 mb-4 rounded-md hover:scale-105 transition-all cursor-pointer border-2  border-blue-200 justify-center"
                    onClick={() => setIsSavedJobsOpen(true)}
                  >
                    <p className="mr-4 text-blue-900">
                      <BookmarkAddedIcon></BookmarkAddedIcon>
                    </p>
                    <p className="font-semibold text-blue-900">Saved Jobs</p>
                  </div>
                  {isSavedJobsOpen && (
                    <SavedJobs
                      handleClose={() => handleCloseModal("savedJobs")}
                      jobs={userData.SavedJobs}
                    ></SavedJobs>
                  )}
                  <div
                    className="flex flex-row bg-white p-4 mt-4 mb-4 rounded-md hover:scale-105 transition-all cursor-pointer border-2  border-blue-200 justify-center"
                    onClick={() => setIsAppliedJobsOpen(true)}
                  >
                    <p className="mr-4 text-blue-900">
                      <TaskAltIcon></TaskAltIcon>
                    </p>
                    <p className="font-semibold text-blue-900">Applied Jobs</p>
                  </div>
                  {isAppliedJobsOpen && (
                    <AppliedJobs
                      handleClose={() => handleCloseModal("appliedJobs")}
                      jobs={userData.AppliedJobs}
                    ></AppliedJobs>
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-4 rounded-md shadow-md m-4">
                <h2 className="text-xl font-semibold p-1">Education</h2>
                <div className="ml-4 p-2">
                  <ul>
                    {userData.Qualifications &&
                    userData.Qualifications.length != 0 ? (
                      userData.Qualifications.map((qualification, index) => (
                        <div
                          key={index}
                          className="m-2 border-b-2 p-4  flex flex-row justify-between"
                        >
                          <li>
                            <h3 className="text-lg ml-6 font-serif font-semibold text-slate-800">
                              {qualification.degree}
                            </h3>
                            <p className="text-sm ml-10 p-1">
                              {qualification.institution}
                            </p>
                            <p className="text-sm ml-10 p-1">
                              {" "}
                              Field: {qualification.fieldOfStudy}
                            </p>
                            <p className="text-sm ml-10 p-1">
                              Percentage/CPA -{qualification.score}
                            </p>
                          </li>
                          <div className="flex flex-col items-center justify-center">
                            <p className="text-serif font-bold text-slate-800">
                              {qualification.startDate.substring(0, 4)}
                            </p>
                            <img
                              src={DestinationImg}
                              className="h-10 m-2"
                            ></img>
                            <p className="text-serif font-bold text-slate-800">
                              {qualification.endDate.substring(0, 4)}
                            </p>
                          </div>
                          <div className="flex mr-6 justify-center items-center scale-95 text-red-500">
                            <p
                              className="cursor-pointer hover:scale-110 transition-all "
                              onClick={() => remEducation(index)}
                            >
                              <DeleteForeverIcon></DeleteForeverIcon>
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="font-serif italic text-slate-400 ml-10 mt-2">
                        Educational qualification not found. Please add your
                        educational qualification.
                      </p>
                    )}
                  </ul>
                </div>
                <p className="ml-10 mt-4">
                  <Button onClick={() => setIsQualificationModalOpen(true)}>
                    Add Education
                  </Button>
                </p>
                {isQualificationModalOpen && (
                  <UpdateQualification
                    onClose={() => handleCloseModal("qualification")}
                    Qualifications={userData.Qualifications}
                    email={userData.Email}
                  />
                )}
              </div>

              {/* Skills */}
              <div className="bg-white p-4 rounded-md shadow-md m-4">
                <h2 className="text-xl font-semibold p-1">Skills</h2>
                <div className="ml-4  rounded-lg m-4 p-2">
                  <ul className="flex flex-wrap">
                    {userData.Skills && userData.Skills.length != 0 ? (
                      userData.Skills.map((skill, index) => (
                        <li
                          key={index}
                          className="rounded bg-green-100 m-2 hover:bg-green-200 transition-all hover:scale-90 flex flex-row justify-between p-2"
                          style={{
                            maxWidth: "calc(33% - 1rem)",
                            flexBasis: "calc(33% - 1rem)",
                          }}
                        >
                          <p className="text-center p-1 ml-4 font-serif text-slate-800">
                            {skill}
                          </p>
                          <p
                            className="inline-block text-slate-800 duration-300 cursor-pointer mr-2 hover:scale-110 hover:text-red-500"
                            onClick={() => remSkill(index)}
                          >
                            <CloseIcon />
                          </p>
                        </li>
                      ))
                    ) : (
                      <p className="font-serif italic text-slate-400 ml-10 mt-2">
                        Skills not found. Please add your skills.
                      </p>
                    )}
                  </ul>
                </div>
                <p className="ml-10 mt-4">
                  <Button onClick={() => setIsSkillsModalOpen(true)}>
                    Add Skill
                  </Button>
                </p>
                {isSkillsModalOpen && (
                  <UpdateSkills
                    onClose={() => handleCloseModal("skills")}
                    skills={userData.Skills}
                    email={userData.Email}
                  />
                )}
              </div>

              {/* Languages */}
              <div className="bg-white p-4 rounded-md shadow-md m-4">
                <h2 className="text-xl font-semibold p-1">Languages</h2>
                <div className="ml-4  rounded-lg m-4 p-2">
                  <ul className="flex flex-wrap">
                    {userData.Languages && userData.Languages.length != 0 ? (
                      userData.Languages.map((language, index) => (
                        <li
                          key={index}
                          className="rounded bg-green-50 m-2 hover:bg-green-100 transition-all hover:scale-90 flex flex-row justify-between p-2"
                          style={{
                            maxWidth: "calc(100% - 1rem)",
                            flexBasis: "calc(100% - 1rem)",
                          }}
                        >
                          <p className="text-center p-1 ml-4 font-serif text-slate-800">
                            {language}
                          </p>
                          <p
                            className="inline-block duration-300 cursor-pointer mr-4 text-slate-800 hover:text-red-500 hover:scale-110"
                            onClick={() => remLanguage(index)}
                          >
                            <CloseIcon />
                          </p>
                        </li>
                      ))
                    ) : (
                      <p className="font-serif italic text-slate-400 ml-10 mt-2">
                        Please add the languages you know and are proficient in.
                      </p>
                    )}
                  </ul>
                </div>
                <p className="ml-10 mt-4">
                  <Button onClick={() => setIsLanguageModalOpen(true)}>
                    Add Language
                  </Button>
                </p>
                {isLanguageModalOpen && (
                  <UpdateLanguage
                    onClose={() => handleCloseModal("language")}
                    languages={userData.Languages}
                    email={userData.Email}
                  />
                )}
              </div>

              {/* Experience */}
              <div className="bg-white p-4 rounded-md shadow-md m-4">
                <h2 className="text-xl font-semibold p-1">Experience</h2>
                <div className="ml-4 rounded-lg  p-2">
                  <ul>
                    {userData.Experience && userData.Experience.length != 0 ? (
                      userData.Experience.map((experience, index) => (
                        <div
                          key={index}
                          className="m-2 border-b-2 p-4 flex flex-row justify-between items-center"
                        >
                          <li>
                            <h3 className="text-lg ml-6 font-semibold font-serif text-slate-800">
                              {experience.companyName}
                            </h3>
                            <p className="text-sm ml-10 p-1 text-slate-800">
                              {experience.position}
                            </p>
                            <p className="text-sm ml-10 p-1 text-slate-800">
                              {experience.period} Years /{" "}
                              {experience.yearFrom.substring(0, 4)} -{" "}
                              {experience.yearTo
                                ? experience.yearTo.substring(0, 4)
                                : "Present"}
                            </p>
                          </li>
                          <p
                            className="mr-6 text-red-500 scale-125 hover:scale-150 transition-all cursor-pointer"
                            onClick={() => remExperience(index)}
                          >
                            <DeleteForeverIcon></DeleteForeverIcon>
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="font-serif italic text-slate-400 ml-10 mt-2">
                        Please add your previous job experience.
                      </p>
                    )}
                  </ul>
                </div>
                <p className="ml-10 mt-4">
                  <Button onClick={() => setIsExperienceModalOpen(true)}>
                    Add Experience
                  </Button>
                </p>
                {isExperienceModalOpen && (
                  <UpdateExperience
                    onClose={() => handleCloseModal("experience")}
                    experience={userData.Experience}
                    email={userData.Email}
                  />
                )}
              </div>

              {/* Projects */}
              <div className="bg-white p-4 rounded-md shadow-md m-4">
                <h2 className="text-xl font-semibold p-1">Projects</h2>
                <div className="ml-4 rounded-lg p-2">
                  <ul>
                    {userData.Projects && userData.Projects.length != 0 ? (
                      userData.Projects.map((project, index) => (
                        <div
                          key={index}
                          className="m-2 p-4 border-b-2 flex flex-row justify-between items-center"
                        >
                          <li>
                            <h3 className="text-lg ml-6 font-serif text-slate-800">
                              {project.projectName}
                            </h3>
                            <p className="text-sm ml-10 p-1 text-slate-800 max-w-60">
                              {project.description}
                            </p>
                            <p className="text-sm ml-10 p-1 text-slate-800">
                              {project.startDate.substring(0, 7)} to{" "}
                              {project.endDate.substring(0, 7)}
                            </p>
                          </li>
                          <li className="flex flex-col justify-between text-primaryColorA">
                            <a
                              href={
                                project.liveLink.trim() === ""
                                  ? "#"
                                  : project.liveLink
                              }
                              target="_blank"
                              className="p-2 hover:scale-125 transition-all cursor-pointer"
                            >
                              <LanguageIcon></LanguageIcon>
                            </a>
                            <a
                              href={
                                project.githubLink.trim() === ""
                                  ? "#"
                                  : project.githubLink
                              }
                              target="_blank"
                              className="p-2 hover:scale-125 transition-all cursor-pointer "
                            >
                              <GitHubIcon></GitHubIcon>
                            </a>
                          </li>
                          <li>
                            <p
                              className="mr-6 text-red-500 scale-125 hover:scale-150 transition-all cursor-pointer"
                              onClick={() => remProject(index)}
                            >
                              <DeleteForeverIcon></DeleteForeverIcon>
                            </p>
                          </li>
                        </div>
                      ))
                    ) : (
                      <p className="font-serif italic text-slate-400 ml-10 mt-2">
                        Please provide details of any projects you have worked
                        on.
                      </p>
                    )}
                  </ul>
                </div>
                <p className="ml-10 mt-4">
                  <Button onClick={() => setIsProjectsModalOpen(true)}>
                    Add Project
                  </Button>
                </p>
                {isProjectsModalOpen && (
                  <UpdateProjects
                    onClose={() => handleCloseModal("projects")}
                    projects={userData.Projects}
                    email={userData.Email}
                  />
                )}
              </div>

              {/* Resume */}
              <div className="bg-white rounded-md shadow-md m-4 p-4">
                <h2 className="text-xl font-semibold p-1">Resume</h2>
                <h2 className="text-sm font-semibold ml-10 p-2 text-slate-600 mr-10">
                  Your resume is the first impression you make on potential
                  employers. Craft it carefully to secure your desired job or
                  internship.
                </h2>
                <div className="flex flex-row justify-between m-4 ml-14 mr-14 items-center">
                  <div>
                    {userData.Resume != "" ? (
                      <a
                        href={userData.Resume}
                        className="text-blue-800 font-semibold hover:text-red-600 "
                      >
                        download your resume
                      </a>
                    ) : (
                      <p className="text-slate-700 cursor-not-allowed font-semibold">
                        No resume found
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => setIsResumeUploadOpen(true)}
                      className="border-2 border-blue-700 border-2 p-2 pl-4 pr-4 rounded-md text-blue-800 font-semibold hover:text-white hover:bg-blue-800 transition-all"
                    >
                      Update Resume ?
                    </button>
                    {isResumeUploadOpen && (
                      <ResumeUpload
                        email={userData.Email}
                        onClose={() => handleCloseModal("resume")}
                      ></ResumeUpload>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Header />
        <div className="p-32 flex flex-col justify-center items-center">
          <img src={Error} className="animate-spin" />
          <p className="text-2xl p-6 m-1 text-slate-700 font-bold font-serif">
            Please log in to your account
          </p>
        </div>
      </SignedOut>
    </div>
  );
}

export default Dashboard;
