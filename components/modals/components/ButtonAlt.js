'use client'

import { IconType } from "react-icons/lib";

const Button = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon:Icon,
    invisible,
    backgroundColor,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
                ${backgroundColor ? backgroundColor:''}
                ${invisible?'invisible':''}
                ${outline ? `bg-white` : 'bg-black'}
                ${outline ? `text-black` : 'text-white'}
                ${small ? 'py-1': 'py-3'}
                ${small ? 'font-light' : 'font-bold'}
                ${small ? `border-[1px]` : 'border-2'}
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                        absolute
                        left-4
                        top-3
                    "
                />
            )}
            {label}
        </button>
    )
}

export default Button;