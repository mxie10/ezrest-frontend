
const Button = (props) => {
    const { actionLabel, position, onClick } = props;
    return (
      <div
        className={`
          bg-red-500 
          p-2 
          rounded-lg 
          text-white 
          w-1/4 
          text-center 
          font-bold 
          absolute 
          ${position}
          cursor-pointer
         hover:bg-red-600
        `}
        onClick={onClick}
      >
        {actionLabel}
      </div>
    )
  }

  export default Button;