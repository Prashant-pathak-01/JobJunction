import Job from "../models/job.js";

export const getJob = async (req, res) => {
  try {
    const jobId = req.body.Id;

    const job = await Job.findOne({ job_id: jobId });

    if (!job) {
      return res.status(404).json({ title: "Job not found" });
    }

    return res.status(200).json(job);
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json("An error occurred");
  }
};

export const addJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    job.save();
    return res.status(200).json({ status: 1 });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json("An error occurred");
  }
};

export const getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      "application_details.contact_email": req.body.email,
    });
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json("An error occurred");
  }
};

export const apply = async (req, res) => {
  try {
    const job = await Job.findOne({ job_id: req.body.id });

    if (job) {
      if (!job.Applicants.includes(req.body.email)) {
        job.Applicants.push(req.body.email);
        const updatedJob = await job.save();
      }
      return res.status(200).json({ status: 1 });
    } else {
      return res.status(404).json({ error: "Job not found" });
    }
  } catch (error) {
    console.error("Error applying to job:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
};
export const getAllJobs = async (req, res) => {
  try {
    const {
      searchText,
      selectedLocations,
      selectedCompanies,
      selectedPositions,
      selectedTypesOfEmployment,
      salaryRange,
      experienceRange,
    } = req.body;

    if (
      !Array.isArray(selectedLocations) ||
      !Array.isArray(selectedCompanies) ||
      !Array.isArray(selectedPositions) ||
      !Array.isArray(selectedTypesOfEmployment) ||
      !Array.isArray(salaryRange) ||
      salaryRange?.length !== 2 ||
      !Array.isArray(experienceRange) ||
      experienceRange?.length !== 2
    ) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    let query = {};

    if (searchText?.length > 0 && searchText?.trim() !== "") {
      query["title"] = { $regex: searchText, $options: "i" };
    }
    if (selectedLocations?.length > 0) {
      query["company.location"] = { $in: selectedLocations };
    }
    if (selectedCompanies?.length > 0) {
      query["company.name"] = { $in: selectedCompanies };
    }
    if (selectedPositions?.length > 0) {
      query["title"] = { $in: selectedPositions };
    }
    if (selectedTypesOfEmployment?.length > 0) {
      query["employmentType"] = { $in: selectedTypesOfEmployment };
    }
    if (salaryRange?.length === 2) {
      query["salary_range"] = {
        $gte: salaryRange[0],
        $lte: salaryRange[1],
      };
    }
    if (experienceRange?.length === 2) {
      query["experience"] = {
        $gte: experienceRange[0],
        $lte: experienceRange[1],
      };
    }

    const data = await Job.find(query);

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred: " + error.message });
  }
};
