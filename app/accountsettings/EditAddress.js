import React from 'react';
import TextField from '@mui/material/TextField';

const EditAddress = (props) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-neutral-600 flex flex-col py-2 w-full gap-3'>
        <TextField
          id="outlined-basic"
          label="Address Line 1"
          variant="outlined"
          className='h-12 w-1/2'
        />
        <TextField
          id="outlined-basic"
          label="Address Line 2"
          variant="outlined"
          className='h-12 w-1/2'
        />
         <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          className='h-12 w-1/2'
        />
         <TextField
          id="outlined-basic"
          label="Province"
          variant="outlined"
          className='h-12 w-1/2'
        />
         <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          className='h-12 w-1/2'
        />
         <TextField
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
          className='h-12 w-1/2'
        />
      </div>
      <div className='bg-black p-2 w-32 text-white rounded-lg text-center cursor-pointer'>
          Save
      </div>
    </div>
  )
}

export default EditAddress;
