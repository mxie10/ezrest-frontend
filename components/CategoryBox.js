import React from 'react'

const CategoryBox = (props) => {

    const {label, icon:Icon} = props;

    return (
        <div className='flex flex-row items-center'>
            <Icon size={25}/>
            <div className='text-sm'>
                {label}
            </div>
        </div>
    )
}

export default CategoryBox;
