import React from 'react'

const AppreciateScreen = (props) => {

    const { header, subHeader } = props;

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='text-4xl font-bold'>
                {header}
            </div>
            <div className='text-xl text-neutral-500'>
                {subHeader}
            </div>
    </div>
    )
}

export default AppreciateScreen;
