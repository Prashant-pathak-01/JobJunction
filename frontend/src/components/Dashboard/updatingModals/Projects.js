import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { addProject } from '../../../APIs/user';
const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'blue',
    },
  },
}));

const ProjectModalComponent = ({ email,onClose }) => {
  const [project, setProject] = useState({
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
    liveLink: '',
    githubLink: '',
    email:email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleAdd = async() => {

    if(project.description.length<=100  && project.projectName.trim()!="" && project.description.trim()!="" && project.startDate.trim()!="" && project.endDate.trim()!=""){
      let res = await addProject(project);
      console.log(res);
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Project</h2>
        <div className='flex flex-col'>
          <CustomTextField
            label="Project Name"
            name="projectName"
            value={project.projectName}
            onChange={handleChange}
            size="small"
            sx={{ marginBottom: '1rem' }}
          />
          <CustomTextField
            label="Description ( limit - 100 chars )"
            name="description"
            value={project.description}
            onChange={handleChange}
            multiline
            rows={4}
            size="small"
            sx={{ marginBottom: '1rem' }}
          />
          <div className="flex">
            <CustomTextField
              label="Start Date"
              name="startDate"
              type="date"
              value={project.startDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              sx={{
                marginBottom: '1rem',
                marginRight: '0.5rem',
                width: '50%',
              }}
            />
            <CustomTextField
              label="End Date"
              name="endDate"
              type="date"
              value={project.endDate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              sx={{
                marginBottom: '1rem',
                width: '50%',
              }}
            />
          </div>
          <CustomTextField
            label="Live Link"
            name="liveLink"
            value={project.liveLink}
            onChange={handleChange}
            size="small"
            sx={{ marginBottom: '1rem' }}
          />
          <CustomTextField
            label="Github Link"
            name="githubLink"
            value={project.githubLink}
            onChange={handleChange}
            size="small"
            sx={{ marginBottom: '1rem' }}
          />
        </div>
        <div className='flex justify-end'>
          <button
            onClick={handleAdd}
            className='bg-blue-500 text-white p-2 pl-4 pr-4 rounded-md mr-2 hover:bg-blue-600'
          >
            Add
          </button>
          <button
            onClick={onClose}
            className='bg-red-500 text-white p-2 pl-4 pr-4 rounded-md hover:bg-red-600'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalComponent;
