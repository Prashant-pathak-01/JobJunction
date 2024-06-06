import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {addEducation } from '../../../APIs/user';
const ModalComponent = ({ onClose,email }) => {
  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    fieldOfStudy: '--',
    score: '',
    startDate: '',
    endDate: '',
    email:email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleAdd=async()=>{
    let res = await addEducation(education);
    console.log(res);
    onClose();
  }

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Education</h2>
        <div className='flex flex-col pb-2'>
          <TextField
            label="Degree"
            name="degree"
            value={education.degree}
            onChange={handleChange}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '0.5rem', 
              },
            }}
          />
          <TextField
            label="University"
            name="institution"
            value={education.institution}
            onChange={handleChange}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '0.5rem', 
              },
            }}
          />
          <TextField
            label="Specialization"
            name="fieldOfStudy"
            value={education.fieldOfStudy}
            onChange={handleChange}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '0.5rem', 
              },
            }}
          />
          <TextField
            label="Percentage / GPA"
            name="score"
            value={education.score}
            onChange={handleChange}
            size="small"
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '0.5rem',
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid blue',
                }, 
              },
              '& .MuiOutlinedInput-root': {
                marginBottom: '0.5rem', 
              },
            }}
          />
          <div className='flex flex-row'>
            <TextField
              label="Start Year"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
              size="small"
              sx={{
                '& .MuiInputBase-root': {
                  marginBottom: '0.5rem',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid blue',
                  }, 
                },
                '& .MuiOutlinedInput-root': {
                  marginRight: '0.5rem',
                  marginBottom: '0.5rem', 
                },
              }}
            />
            <p className='text-slate-500'>_</p>
            <TextField
              label="End Year"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
              size="small"
              sx={{
                '& .MuiInputBase-root': {
                  marginBottom: '0.5rem', 
                  marginLeft: '0.5rem',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid blue',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  marginBottom: '0.5rem', 
                },
                '& .MuiInputLabel-outlined': {
                  marginLeft: '0.5rem',
                },
              }}
            />
          </div>
        </div>
        <div className='flex flex-row justify-end'>
          <button
            className='bg-green-500 text-white pl-4 pr-4 p-2 rounded-md mr-2 hover:bg-green-700'
            onClick={handleAdd}
          >
            Save
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

export default ModalComponent;