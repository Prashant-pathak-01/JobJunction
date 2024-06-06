import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import hiringCompany01 from "./../../data/hiring_company_01.jpg";
import hiringCompany02 from "./../../data/hiring_company_02.png";
import hiringCompany03 from "./../../data/hiring_company_03.jpg";
import hiringCompany04 from "./../../data/hiring_company_04.jpg";
import hiringCompany05 from "./../../data/hiring_company_05.jpg";
import hiringCompany06 from "./../../data/hiring_company_06.png";
import { useNavigate } from "react-router-dom";
import "./slider.css";

function Body() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const handleSearch = () => {
    if (searchData.trim() !== "") {
      navigate("/jobs", { state: { input: searchData } });
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col items-center justify-center w-full pt-20">
        <h1 className="text-6xl font-bold text-slate-700 mt-20">
          Step up your quest for your next{" "}
        </h1>
        <h1 className="text-blue-800 text-6xl font-bold">
          career opportunity.
        </h1>
        <h3 className="text-xl text-slate-600 font-serif p-8 mb-10">
          Find your dream job now
        </h3>
        <div className="relative w-1/2 z-0">
          <input
            className="w-full p-4 rounded-xl border-2 border-primaryColorB text-xl focus:outline-primaryColorA shadow-2xl shadow-pimaryColorA text-primaryColorA"
            placeholder="Enter job title or skills"
            onChange={(e) => setSearchData(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="absolute inset-y-2 right-2 px-6 py-2 bg-primaryColorA text-white rounded-xl"
            onClick={handleSearch}
          >
            Search <SearchIcon className="text-xl" />
          </button>
        </div>
      </div>
      <h1 className="text-3xl text-slate-900 mt-16 p-8 font-sans font-bold text-center">
        {" "}
        Top hiring Companies
      </h1>
      <div className="slider bg-secondaryColorB  p-4">
        <div className="slider-track">
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany01}
              className="w-40 h-40 z-0"
              alt="Company 1"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Flipkart</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany02}
              className="w-40 h-40 z-0"
              alt="Company 2"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Zomato</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany03}
              className="w-40 h-40 z-0"
              alt="Company 3"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Amazon</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany04}
              className="w-40 h-40 z-0"
              alt="Company 4"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">PrimePac</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany05}
              className="w-40 h-40 z-0"
              alt="Company 5"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Capgimini</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany06}
              className="w-40 h-40 z-0"
              alt="Company 6"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Relience</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany01}
              className="w-40 h-40 z-0"
              alt="Company 1"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Flipkart</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany02}
              className="w-40 h-40 z-0"
              alt="Company 2"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Zomato</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany03}
              className="w-40 h-40 z-0"
              alt="Company 3"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Amazon</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany04}
              className="w-40 h-40 z-0"
              alt="Company 4"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">PrimePac</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany05}
              className="w-40 h-40 z-0"
              alt="Company 5"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Capgimini</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany06}
              className="w-40 h-40 z-0"
              alt="Company 6"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Relience</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany01}
              className="w-40 h-40 z-0"
              alt="Company 1"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Flipkart</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany02}
              className="w-40 h-40 z-0"
              alt="Company 2"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Zomato</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany03}
              className="w-40 h-40 z-0"
              alt="Company 3"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Amazon</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany04}
              className="w-40 h-40 z-0"
              alt="Company 4"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">PrimePac</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany05}
              className="w-40 h-40 z-0"
              alt="Company 5"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Capgimini</p>
          </div>
          <div className="slider-item w-16 items-center justify-center flex flex-col p-8">
            <img
              src={hiringCompany06}
              className="w-40 h-40 z-0"
              alt="Company 6"
            />
            <p className="mt-4 font-sans from-neutral-800 font-xl">Relience</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row pt-10 m-60 p-6 mt-10 mb-0 border-t-2 justify-between">
        <div className="bg-slate-100 items-center justify-center flex flex-col w-60 h-60 rounded">
          <h3 className="text-5xl font-serif font-bold text-slate-700 text-center">
            1k+
          </h3>
          <h2 className="font-sans text-xl p-4 font-thin text-slate-700">
            companies hiring
          </h2>
        </div>
        <div className="bg-slate-100 items-center justify-center flex flex-col w-60 h-60 rounded">
          <h3 className="text-5xl font-serif font-bold text-slate-700 text-center">
            2k+
          </h3>
          <h2 className="font-sans text-xl p-4 font-thin text-slate-700">
            openings per day
          </h2>
        </div>
        <div className="bg-slate-100 items-center justify-center flex flex-col w-60 h-60 rounded">
          <h3 className="text-5xl font-serif font-bold text-slate-700 text-center">
            5k+
          </h3>
          <h2 className="font-sans text-xl p-4 font-thin text-slate-700">
            active students
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
