import React from 'react'

const CategoryBox = (props) => {

    const {label, icon:Icon,selectedCategory} = props;

    return (
        <div className='flex flex-row items-center'>
            <Icon size={30} color={selectedCategory === label ? 'green' : ''}/>
            <div className={`text-sm ${selectedCategory === label ? 'text-green-600' : ''}`}>
                {label}
            </div>
        </div>
    )
}

export default CategoryBox;
