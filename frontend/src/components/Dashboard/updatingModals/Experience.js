import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { addExperience } from '../../../APIs/user';

const ExperienceModalComponent = ({ email,onClose }) => {
  const [experience, setExperience] = useState({
    companyName:'',
    position:'',
    yearFrom:'',
    yearTo:'',
    period:'',
    email:email

  });

  const handleAdd = async() => {
    if(experience.companyName.trim()!=="" && experience.position.trim()!="" && experience.yearFrom.trim()!="" && experience.period.trim()!=""){
      let res = await addExperience(experience);
      console.log(res);
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Experience</h2>
        <div className='flex flex-col'>
          <TextField
            label="Company Name"
            id="company-name"
            value={experience.companyName}
            onChange={(e) => setExperience((prevExp) => ({ ...prevExp, companyName: e.target.value }))}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '1rem', 
              },
            }}
          />
          <TextField
            label="Position"
            id="position"
            value={experience.position}
            onChange={(e) => setExperience((prevExp) => ({ ...prevExp, position: e.target.value }))}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '1rem', 
              },
            }}
          />
          <div className="flex flex-row">
            <TextField
              label="From"
              id="years-from"
              type="date"
              value={experience.yearFrom}
              onChange={(e) => setExperience((prevExp) => ({ ...prevExp, yearFrom: e.target.value }))}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                '& .MuiInputBase-root': {
                  marginRight:'0.5rem',
                  marginBottom: '0.5rem',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid blue',
                  }, 
                },
                '& .MuiOutlinedInput-root': {
                  marginBottom: '1rem', 
                },
              }}
              size="small"
            />
            <TextField
              label="To"
              id="years-to"
              type="date"
              value={experience.yearTo}
              onChange={(e) => setExperience((prevExp) => ({ ...prevExp, yearTo: e.target.value }))}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              sx={{
                '& .MuiInputBase-root': {
                  marginLeft:'0.5rem',
                  marginBottom: '0.5rem',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid blue',
                  }, 
                },
                '& .MuiOutlinedInput-root': {
                  marginBottom: '1rem', 
                },
              }}
            />
          </div>
          <TextField
            label="Years of Service"
            id="total-years"
            value={experience.period}              
            onChange={(e) => setExperience((prevExp) => ({ ...prevExp, period: e.target.value }))}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '1rem', 
              },
            }}
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

export default ExperienceModalComponent;
