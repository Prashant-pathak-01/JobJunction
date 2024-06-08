import Recruiter from "./../models/recruiter.js";

export const addRecruiter = async (req, res) => {
  try {
    let user = await Recruiter.findOne({ email: req.body.email });
    if (user) {
      return res.status(200).json({ email: -1 });
    }
    const newUser = new Recruiter(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(`Some error occured + ${error.message}`);
  }
};

export const updatePassword = async (req, res) => {
  try {
    let user = await Recruiter.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).json({ email: -1 });
    }
    user.password = req.body.password;
    user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ email: 0 });
  }
};

export const checkPassword = async (req, res) => {
  try {
    let user = await Recruiter.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).json({ status: -1 });
    }
    if (user.password !== req.body.password) {
      return res.status(200).json({ status: 1 });
    }
    user.password = "null";
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ status: 0 });
  }
};
