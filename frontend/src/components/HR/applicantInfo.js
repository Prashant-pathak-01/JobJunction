import React, { useEffect, useState } from "react";
import { getUser } from "./../../APIs/user";

function ApplicantInfo({ email }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const get = async () => {
      let res = await getUser({ Email: email });
      setUser(res);
    };
    get();
  }, [email]);

  const renderObjectProperties = (obj) => {
    return (
      <div>
        {Object.entries(obj).map(
          ([key, value]) =>
            key !== "_id" && (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            )
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-slate-200 m-2 p-6 pl-6 rounded-md">
      <div className="flex flex-row items-center">
        <img
          src={user?.Photo}
          className="w-20 h-20 rounded-full border-blue-500 border-2 p-1"
          alt="User"
        />
        <div className="ml-10 font-semibold text-lg">
          <p>{user?.Name}</p>
          <p>{user?.Email}</p>
        </div>
      </div>
      <div className="mt-6 ml-8">
        <div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Qualifications:</p>
            <div className="ml-4 flex flex-col">
              {user?.Qualifications && user.Qualifications.length > 0 ? (
                user.Qualifications.map((qualification, index) => (
                  <div key={index} className="m-2 p-4 bg-white rounded-md">
                    {renderObjectProperties(qualification)}
                  </div>
                ))
              ) : (
                <p>--Not added--</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Experience:</p>
            <div className="ml-4 flex flex-col">
              {user?.Experience && user.Experience.length > 0 ? (
                user.Experience.map((experience, index) => (
                  <div key={index} className="m-2 p-4 bg-white rounded-md">
                    {renderObjectProperties(experience)}
                  </div>
                ))
              ) : (
                <p>--Not added--</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Skills:</p>
            <div className="ml-4 flex flex-col">
              {user?.Skills && user.Skills.length > 0 ? (
                user.Skills.map((skill, index) => (
                  <p key={index} className="m-2 p-4 bg-white rounded-md">
                    {skill}
                  </p>
                ))
              ) : (
                <p>--Not added--</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Projects:</p>
            <div className="ml-4 flex flex-col">
              {user?.Projects && user.Projects.length > 0 ? (
                user.Projects.map((project, index) => (
                  <div key={index} className="m-2 p-4 bg-white rounded-md">
                    {renderObjectProperties(project)}
                  </div>
                ))
              ) : (
                <p>--Not added--</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-semibold">Languages:</p>
            <div className="ml-4 flex flex-col">
              {user?.Languages && user.Languages.length > 0 ? (
                user.Languages.map((language, index) => (
                  <p key={index} className="m-2 p-4 bg-white rounded-md">
                    {language}
                  </p>
                ))
              ) : (
                <p>--Not added--</p>
              )}
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <p className="font-semibold">Resume:</p>
            {user?.Resume ? (
              <a
                href={user.Resume}
                className="text-blue-900 font-mono mt-1 ml-4 cursor-pointer hover:text-red-500 transition-all"
              >
                Download Link
              </a>
            ) : (
              <p className="ml-4">--Not added--</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantInfo;
