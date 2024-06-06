import React, { useState } from 'react';
import { TextField } from '@mui/material';
import {addSkill} from '../../../APIs/user';
const ModalComponent = ({ email,onClose }) => {
  const [skill, setSkill] = useState('');
  const handleAdd=async()=>{
    if(skill.trim()!==""){
      let res = await addSkill({email:email ,skill:skill});
      console.log(res);
      onClose();
    }
  }
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-xl font-semibold mb-4'>Skills</h2>
        <div className='flex flex-col'>
          <TextField
            label="Enter your skill"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            onChange={(e)=>setSkill(e.target.value)}
            sx={{
              '& .MuiInputBase-root': {
                marginBottom: '1rem',
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

export default ModalComponent;
