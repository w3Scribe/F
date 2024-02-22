import type { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: Function;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="py-3 sm:py-2 sm:text-sm w-full rounded-md active:opacity-80 font-semibold   
            bg-slateGrey-500  hover:bg-gradient-to-l from-[#FF6A3A] to-[#FF527B] text-white hover:shadow-xl hover:shadow-red-500/20 transition-all"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
export default Button;
