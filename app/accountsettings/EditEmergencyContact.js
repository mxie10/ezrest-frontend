import React from 'react'
import TextField from '@mui/material/TextField';

const EditEmergencyContact = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-neutral-600 flex flex-row py-2 w-full justify-between gap-2'>
                <TextField
                    id="outlined-basic"
                    label="Emergency Contact"
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

export default EditEmergencyContact;