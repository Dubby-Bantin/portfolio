import React from "react";

const MagicButton = ({
  title,
  icon,
  handleClick,
}: {
  title?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <button
      className="relative font-text inline-flex h-12 w-full md:w-60 md:mt-10 rounded-md overflow-hidden p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e3a8a_0%,#3b82f6_50%,#1e3a8a_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-[#050112] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 `}
      >
        {title}
        {icon}
      </span>
    </button>
  );
};

export default MagicButton;
