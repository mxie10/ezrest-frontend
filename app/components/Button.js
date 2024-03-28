import React from 'react';

const Button = (props) => {

    const {title,bgColor,textColor,width,hover,onClick} = props;

    return (
        <div 
            className = { `
                ${bgColor ? bgColor : 'bg-black'}
                ${textColor ? textColor : 'text-white'}
                ${width ? width : 'w-full'}
                py-2
                px-3
                rounded-lg
                text-center
                cursor-pointer
                ${hover}
            `}
            onClick={onClick}
        >
            {title}
        </div>
    )
}
export default Button;
