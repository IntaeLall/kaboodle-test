import React from 'react';

type BaseButtonProps = {
    label: string;
    color: 'red' | 'green' | 'blue';
    type?: 'button' | 'submit';
    onClick?: () => void;
};

const BaseButton: React.FC<BaseButtonProps> = ({ label, color, type = 'button', onClick }) => {
    const colorMapping = {
        red: 'bg-red-500',
        green: 'bg-green-500',
        blue: 'bg-blue-500',
    };

    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={`${colorMapping[color]} p-2 text-white rounded`}
        >
            {label}
        </button>
    );
};

export default BaseButton;
