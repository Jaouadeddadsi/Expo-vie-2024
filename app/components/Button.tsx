"use client";

interface ButtonProps {
  label: String;
  onClick: () => void;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, small }) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-white
        text-xs
        ${small ? 'md:text-xs' : 'md:text-base'}
        font-bold
        uppercase
        text-nowrap
        cursor-pointer
        py-4
        px-6
        ${small ? 'py-4' : 'md:py-5'}
        ${small ? 'px-6' : 'md:px-6'}
        rounded-full
        bg-[#D77042]
        hover:bg-[#3E909D]
        transition
        ease-in
        duration-300
        hover:scale-105
      `}
    >
      {label}
    </button>
  );
};

export default Button;
