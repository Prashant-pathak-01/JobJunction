import Student from './../models/student.js'
export const addUser=async(req,res)=>{
    try{
        const { Email } = req.body;
        let user = await Student.findOne({Email:Email});
        if(user){
            return res.status(200).json("User already exist");
        }
        const student = new Student(req.body);
        await student.save();
        return res.status(200).json("New user added");
        
    }catch(error){
        console.log(error.message);
        return res.status(500).json("Error occured");
    }
}

export const getUser=async(req,res)=>{
    try{
        let user = await Student.findOne({Email:req.body.Email});
        if(user){
            return res.status(200).json(user);
        }else return res.status(200).json("User not found");
    }catch(error){
        return res.status(500).json("Error occured");
    }
}

export const addEducation = async (req, res) => {
  try {
    const { email, ...qualification } = req.body;

    const user = await Student.findOne({ Email:email });

    if (!user) {
      return res.status(404).json('User not found');
    }
    user.Qualifications.push(qualification);
    await user.save();
    return res.status(200).json("Qualification added");
  } catch (error) {
    return res.status(500).json("Error occurred");
  }
};

export const removeEducation = async(req,res) =>{
  try{
    const {email, id} = req.body;
    const user = await Student.findOne({Email:email});
    if(!user){
      return res.status(404).json("User not found");
    }
    if (id < 0 || id >= user.Qualifications.length) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    user.Qualifications.splice(id, 1);
    await user.save();
    return res.status(200).json("Qualification removed");
  }catch{
    return res.status(500).json("Error occurred");
  }
}


export const addSkill = async (req, res) => {
  try {
    const { email, skill } = req.body;

    const user = await Student.findOne({ Email:email });

    if (!user) {
      return res.status(404).json('User not found');
    }
    user.Skills.push(skill);
    await user.save();
    return res.status(200).json("Skill added");
  } catch (error) {
    return res.status(500).json("Error occurred");
  }
};

export const removeSkill = async(req,res) =>{
  try{
    const {email, id} = req.body;
    const user = await Student.findOne({Email:email});
    if(!user){
      return res.status(404).json("User not found");
    }
    if (id < 0 || id >= user.Skills.length) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    user.Skills.splice(id, 1);
    await user.save();
    return res.status(200).json("Skill removed");
  }catch{
    return res.status(500).json("Error occurred");
  }
}


export const addLanguage = async (req, res) => {
  try {
    const { email, language } = req.body;

    const user = await Student.findOne({ Email:email });

    if (!user) {
      return res.status(404).json('User not found');
    }
    user.Languages.push(language);
    await user.save();
    return res.status(200).json("Language added");
  } catch (error) {
    return res.status(500).json("Error occurred");
  }
};

export const removeLanguage = async(req,res) =>{
  try{
    const {email, id} = req.body;
    const user = await Student.findOne({Email:email});
    if(!user){
      return res.status(404).json("User not found");
    }
    if (id < 0 || id >= user.Languages.length) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    user.Languages.splice(id, 1);
    await user.save();
    return res.status(200).json("Language removed");
  }catch{
    return res.status(500).json("Error occurred");
  }
}



export const addExperience = async (req, res) => {
  try {
    const { email, ...experience } = req.body;

    const user = await Student.findOne({ Email:email });

    if (!user) {
      return res.status(404).json('User not found');
    }
    user.Experience.push(experience);
    await user.save();
    return res.status(200).json("Experience added");
  } catch (error) {
    return res.status(500).json("Error occurred");
  }
};

export const removeExperience = async(req,res) =>{
  try{
    const {email, id} = req.body;
    const user = await Student.findOne({Email:email});
    if(!user){
      return res.status(404).json("User not found");
    }
    if (id < 0 || id >= user.Experience.length) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    user.Experience.splice(id, 1);
    await user.save();
    return res.status(200).json("Experience removed");
  }catch{
    return res.status(500).json("Error occurred");
  }
}

export const addProject = async (req, res) => {
  try {
    const { email, ...project } = req.body;

    const user = await Student.findOne({ Email:email });

    if (!user) {
      return res.status(404).json('User not found');
    }
    user.Projects.push(project);
    await user.save();
    return res.status(200).json("Project added");
  } catch (error) {
    return res.status(500).json("Error occurred");
  }
};

export const removeProject = async(req,res) =>{
  try{
    const {email, id} = req.body;
    const user = await Student.findOne({Email:email});
    if(!user){
      return res.status(404).json("User not found");
    }
    if (id < 0 || id >= user.Projects.length) {
      return res.status(400).json({ message: 'Invalid id' });
    }
    user.Projects.splice(id, 1);
    await user.save();
    return res.status(200).json("Project removed");
  }catch{
    return res.status(500).json("Error occurred");
  }
}
