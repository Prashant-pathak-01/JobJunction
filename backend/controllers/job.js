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
