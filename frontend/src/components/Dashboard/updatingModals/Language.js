import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { addLanguage } from '../../../APIs/user';

  const ModalComponent = ({ email,onClose }) => {
    const [language, setLanguage] = useState('');
  
    const handleAdd =async ()=>{
      let res = await addLanguage({email:email,language:language});
      console.log(res);
      onClose();
    }
  
    return (
      <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
          <h2 className='text-xl font-semibold mb-4'>Languages</h2>
          <div className="flex flex-row w-full pb-4 ">
            <FormControl className='w-full' size="small">
              <InputLabel id="demo-select-small-label">Language</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={language}
                label="Language"
                onChange={(e)=>setLanguage(e.target.value)}
              >
                <MenuItem value={"Arabic"}>Arabic</MenuItem>
                <MenuItem value={"Chinese"}>Chinese</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"French"}>French</MenuItem>
                <MenuItem value={"German"}>German</MenuItem>
                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                <MenuItem value={"Japanese"}>Japanese</MenuItem>
                <MenuItem value={"Portuguese"}>Portuguese</MenuItem>
                <MenuItem value={"Russian"}>Russian</MenuItem>
                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                <MenuItem value={"Swahili"}>Swahili</MenuItem>
                <MenuItem value={"Urdu"}>Urdu</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={handleAdd}
              className='bg-blue-500 text-white p-2 rounded-md mr-2 hover:bg-blue-600'
            >
              Add
            </button>
            <button
              onClick={onClose}
              className='bg-red-500 text-white p-2 rounded-md hover:bg-red-600'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
export default ModalComponent;
