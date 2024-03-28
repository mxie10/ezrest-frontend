import React from 'react'

const Title = (props) => {
    
    const {fontSize, title, borderBottom} = props;

    return (
        <div 
            className={`
                    ${fontSize ? fontSize : 'text-2xl'} 
                    font-bold 
                    font-serif 
                    py-4
                    ${borderBottom ? 'border-b-2' : ''}
                `
            }
        >
            {title}
        </div>
    )
}

export default Title;
