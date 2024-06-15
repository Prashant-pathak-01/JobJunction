import React, { useEffect, useState } from "react";
import {
  TextField,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  locations,
  typesOfEmployment,
  positions,
  salaryMarks,
  experienceMarks,
} from "../Searching portal/filterData";

import { addJob } from "./../../APIs/job";

const ModalComponent = ({ closeJob, hr }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [job, setJob] = useState({
    job_id: uuidv4(),
    title: "",
    company: {
      name: hr.companyName,
      culture: "",
      location: "",
      logo: hr.logo,
      size: hr.companySize + " employees",
      website: hr.companyWebsite,
    },
    posted_date: new Date().toISOString(),
    experience: 0,
    employment_type: "",
    salary_range: 0,
    description: "",
    responsibilities: [""],
    requirements: [""],
    benefits: [""],
    interview_process: [""],
    application_details: {
      contact_email: hr.email,
      additional_instructions: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("company.")) {
      const companyField = name.split(".")[1];
      setJob((prevJob) => ({
        ...prevJob,
        company: {
          ...prevJob.company,
          [companyField]: value,
        },
      }));
    } else if (name.startsWith("application_details.")) {
      const detailsField = name.split(".")[1];
      setJob((prevJob) => ({
        ...prevJob,
        application_details: {
          ...prevJob.application_details,
          [detailsField]: value,
        },
      }));
    } else {
      setJob((prevJob) => ({ ...prevJob, [name]: value }));
    }
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { value } = e.target;
    setJob((prevJob) => {
      const newArray = [...(prevJob[arrayName] || [])];
      newArray[index] = value;
      return { ...prevJob, [arrayName]: newArray };
    });
  };

  const addArrayField = (arrayName) => {
    setJob((prevJob) => {
      const newArray = [...(prevJob[arrayName] || []), ""];
      return { ...prevJob, [arrayName]: newArray };
    });
  };

  const removeArrayField = (index, arrayName) => {
    setJob((prevJob) => {
      const newArray = (prevJob[arrayName] || []).filter((_, i) => i !== index);
      return { ...prevJob, [arrayName]: newArray };
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleAdd = async () => {
    let res = await addJob(job);
    if (res.data.status === 1) {
      setOpenSnackbar(true);
      setSnackbarMessage("Job added successfully!");
      setTimeout(() => {
        closeJob();
      }, 2000);
    } else {
      setOpenSnackbar(true);
      setSnackbarMessage("An error occurred while adding the job.");
    }
  };

  return (
    <div className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl h-4/5 overflow-scroll">
        <h2 className="text-3xl border-b-2 pb-4 border-slate-600 font-bold mb-6 text-center">
          New Job
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <FormControl className="col-span-2" fullWidth required>
            <InputLabel>Title</InputLabel>
            <Select
              label="Title"
              name="title"
              value={job.title}
              onChange={handleChange}
            >
              {positions.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="col-span-2" fullWidth required>
            <InputLabel>Job Location</InputLabel>
            <Select
              label="Job Location"
              name="company.location"
              value={job.company.location}
              onChange={handleChange}
            >
              {locations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Company Culture"
            name="company.culture"
            value={job.company.culture}
            onChange={handleChange}
            className="col-span-2"
            multiline
            rows={3}
            fullWidth
            required
          />
          <FormControl className="col-span-1" fullWidth required>
            <InputLabel>Employment Type</InputLabel>
            <Select
              label="Employment Type"
              name="employment_type"
              value={job.employment_type}
              onChange={handleChange}
            >
              {typesOfEmployment.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="col-span-1" fullWidth required>
            <InputLabel>Experience ( in years )</InputLabel>
            <Select
              label="Experience ( in years )"
              name="experience"
              value={job.experience}
              onChange={handleChange}
            >
              {experienceMarks.map((experience) => (
                <MenuItem key={experience.value} value={experience.value}>
                  {experience.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="col-span-1" fullWidth required>
            <InputLabel>Salary ( in LPA )</InputLabel>
            <Select
              label="Salary ( in LPA )"
              name="salary_range"
              value={job.salary_range}
              onChange={handleChange}
            >
              {salaryMarks.map((range) => (
                <MenuItem key={range.value} value={range.value}>
                  {range.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Description"
            name="description"
            value={job.description}
            onChange={handleChange}
            className="col-span-2"
            multiline
            rows={4}
            fullWidth
            required
          />
          {[
            "responsibilities",
            "requirements",
            "benefits",
            "interview_process",
          ].map((arrayName) => (
            <div key={arrayName} className="col-span-2">
              <label className="block text-gray-700 mb-2 font-semibold">
                {arrayName.charAt(0).toUpperCase() +
                  arrayName.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              {(job[arrayName] || []).map((item, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <TextField
                    value={item}
                    onChange={(e) => handleArrayChange(e, index, arrayName)}
                    className="flex-grow mr-2"
                    fullWidth
                    required
                  />
                  <IconButton
                    onClick={() => removeArrayField(index, arrayName)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </div>
              ))}
              <div
                onClick={() => addArrayField(arrayName)}
                className="m-2 p-2 mr-10 bg-green-600 opacity-80 hover:opacity-95 font-semibold cursor-pointer text-white w-34 px-4 justify-center items-center rounded-md flex flex-row float-right  border-2"
              >
                <p>Add more</p>
                <p className="ml-2">
                  <AddIcon />
                </p>
              </div>
            </div>
          ))}

          <TextField
            label="Additional Instructions"
            name="application_details.additional_instructions"
            value={job.application_details.additional_instructions}
            onChange={handleChange}
            className="col-span-2"
            multiline
            rows={3}
            fullWidth
            required
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white py-2 px-10 rounded-md mr-2 hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={closeJob}
            className="bg-red-500 text-white py-2 px-10 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
        />
      </div>
    </div>
  );
};

export default ModalComponent;
