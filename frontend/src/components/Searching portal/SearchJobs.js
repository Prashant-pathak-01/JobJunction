import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import JobBanner from "./jobBanner";
import divStyle from "./scrollbar.css";
import { Data } from "./filterData";

import { getAllJobs } from "./../../APIs/job";
import {
  locations,
  positions,
  typesOfEmployment,
  salaryMarks,
  experienceMarks,
  companies,
} from "./filterData";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

function valuetext(value) {
  return `${value}`;
}

function SearchJobs({ searchData }) {
  const [allJobs, setAllJobs] = useState([]);

  const [expandedPosition, setExpandedPosition] = useState(false);
  const [expandedSalary, setExpandedSalary] = useState(false);
  const [expandedLocation, setExpandedLocation] = useState(false);
  const [expandedModeOfWork, setExpandedModeOfWork] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [expandedCompany, setExpandedCompany] = useState(false);

  const [filters, setFilters] = useState({
    searchText: searchData,
    selectedPositions: [],
    selectedLocations: [],
    selectedTypesOfEmployment: [],
    selectedCompanies: [],
    experienceRange: [0, 100],
    salaryRange: [0, 100],
  });

  useEffect(() => {
    const getJobs = async () => {
      let res = await getAllJobs(filters);
      setAllJobs(res.data);
    };
    getJobs();
  }, [filters]);

  const handleExpansion = (panel) => (event, isExpanded) => {
    switch (panel) {
      case "position":
        setExpandedPosition(isExpanded ? panel : false);
        break;
      case "salary":
        setExpandedSalary(isExpanded ? panel : false);
        break;
      case "location":
        setExpandedLocation(isExpanded ? panel : false);
        break;
      case "modeOfWork":
        setExpandedModeOfWork(isExpanded ? panel : false);
        break;
      case "experience":
        setExpandedExperience(isExpanded ? panel : false);
        break;
      case "company":
        setExpandedCompany(isExpanded ? panel : false);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (arrayName) => (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      if (checked) {
        if (!prevFilters[arrayName].includes(value)) {
          return {
            ...prevFilters,
            [arrayName]: [...prevFilters[arrayName], value],
          };
        }
      } else {
        return {
          ...prevFilters,
          [arrayName]: prevFilters[arrayName].filter((item) => item !== value),
        };
      }
      return prevFilters;
    });
  };

  const handleExperienceChange = (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      experienceRange: newValue,
    }));
  };

  const handleSalaryChange = (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      salaryRange: newValue,
    }));
  };

  return (
    <div className="pt-28 pb-10 flex justify-center bg-slate-100 ">
      <div className="w-2/3 p-10 bg-slate-50 rounded-md flex flex-col">
        <div className="mb-4 bg-white shadow-md border-2  flex flex-row justify-between p-6 rounded-md">
          <div className="bg-white rounded-full w-2/5 flex flex-row justify-center p-2 border-blue-500 border-2 ml-6">
            <input
              className="p-2 rounded-full w-4/5 focus:outline-none text-primaryColorA font-semibold"
              placeholder="Search job"
              value={filters.searchText}
              onChange={(e) =>
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  searchText: e.target.value,
                }))
              }
            />
            <p className="p-2 rounded-full bg-blue-600 ml-6 items-center justify-center flex cursor-pointer hover:scale-125 transition-all">
              <SearchSharpIcon className="text-white" />
            </p>
          </div>
          <h2 className="mr-6 items-center flex text-lg text-slate-700 font-semibold  max-w-96 overflow-hidden h-10 mt-2">
            {filters.searchText !== "" ? (
              <>Jobs Found with keyword "{filters.searchText}".</>
            ) : (
              <></>
            )}
          </h2>
        </div>
        <div className="flex flex-row justify-between">
          <div className="bg-white p-6 rounded-md shadow-md border-2 border-slate-100 w-1/3 mr-2">
            <h2 className="text-slate-800 p-2 pl-6 font-semibold text-xl border-b-2 ">
              All Filters <FilterAltOutlinedIcon />
            </h2>

            {/* Position */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedPosition === "position"}
                onChange={handleExpansion("position")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight: expandedPosition === "position" ? "400px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Position</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    style={{
                      maxHeight: "300px",
                      overflowY: "auto",
                      overflowX: "hidden",
                    }}
                  >
                    {positions.map((position, index) => (
                      <FormControlLabel
                        key={index}
                        className="w-full overflow-x-hidden"
                        control={
                          <Checkbox
                            value={position}
                            onChange={handleCheckboxChange("selectedPositions")}
                          />
                        }
                        label={position}
                      />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* Salary */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedSalary === "salary"}
                onChange={handleExpansion("salary")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight: expandedSalary === "salary" ? "300px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Salary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ width: 250 }}>
                    <Typography id="salary-range-slider" gutterBottom>
                      Salary Range
                    </Typography>
                    <Slider
                      track={true}
                      aria-labelledby="salary-range-slider"
                      getAriaValueText={valuetext}
                      value={filters.salaryRange}
                      onChange={handleSalaryChange}
                      valueLabelDisplay="auto"
                      marks={salaryMarks}
                      min={0}
                      max={20}
                      sx={{
                        marginLeft: "15px",
                        width: "80%",
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* Location */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedLocation === "location"}
                onChange={handleExpansion("location")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight: expandedLocation === "location" ? "300px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography>Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
                    {locations.map((location, index) => (
                      <FormControlLabel
                        key={index}
                        sx={{
                          overflow: "hidden",
                          width: "90%",
                          border: "none",
                          transition: "max-height 0.4s ease",
                          maxHeight:
                            expandedCompany === "company" ? "400px" : "48px",
                        }}
                        control={
                          <Checkbox
                            value={location}
                            onChange={handleCheckboxChange("selectedLocations")}
                          />
                        }
                        label={location}
                      />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* Mode of Work */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedModeOfWork === "modeOfWork"}
                onChange={handleExpansion("modeOfWork")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight:
                    expandedModeOfWork === "modeOfWork" ? "300px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography>Job Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                    {typesOfEmployment.map((mode, index) => (
                      <FormControlLabel
                        key={index}
                        sx={{
                          overflow: "hidden",
                          width: "90%",
                          border: "none",
                          transition: "max-height 0.4s ease",
                          maxHeight:
                            expandedCompany === "company" ? "400px" : "48px",
                        }}
                        control={
                          <Checkbox
                            value={mode}
                            onChange={handleCheckboxChange(
                              "selectedTypesOfEmployment"
                            )}
                          />
                        }
                        label={mode}
                      />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* Experience */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedExperience === "experience"}
                onChange={handleExpansion("experience")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight:
                    expandedExperience === "experience" ? "300px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography>Years of Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ width: 250 }}>
                    <Typography id="experience-range-slider" gutterBottom>
                      Experience Range
                    </Typography>
                    <Slider
                      track={true}
                      aria-labelledby="experience-range-slider"
                      getAriaValueText={valuetext}
                      value={filters.experienceRange}
                      onChange={handleExperienceChange}
                      valueLabelDisplay="auto"
                      marks={experienceMarks}
                      min={0}
                      max={20}
                      sx={{
                        marginLeft: "15px",
                        width: "80%",
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* Company */}
            <div style={divStyle} className="mt-4 rounded-lg mt- mb-4">
              <Accordion
                expanded={expandedCompany === "company"}
                onChange={handleExpansion("company")}
                TransitionComponent={Fade}
                transitionProps={{ timeout: 400 }}
                sx={{
                  overflow: "hidden",
                  border: "none",
                  transition: "max-height 0.4s ease",
                  maxHeight: expandedCompany === "company" ? "400px" : "48px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Typography>Company</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {companies.map((company, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            value={company}
                            onChange={handleCheckboxChange("selectedCompanies")}
                          />
                        }
                        label={company}
                      />
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div
            style={divStyle}
            className="bg-white shadow-lg rounded-md border-2 border-slate-200 w-2/3 ml-2"
          >
            {allJobs.length != 0 ? (
              allJobs.map((job, index) => (
                <JobBanner key={index} job={job}></JobBanner>
              ))
            ) : (
              <p className="text-center text-slate-800 text-lg pt-20">
                ---- No job found ----
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchJobs;
