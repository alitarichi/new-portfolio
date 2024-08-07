import React from "react";

const ShimmerButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`"inline-flex justify-center items-center h-12 w-full cursor-pointer animate-shimmer 
    rounded-lg border border-slate-800 
    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
    bg-[length:200%_100%] px-7 font-medium text-slate-400 
    transition-colors focus:outline-none focus:ring-2
     focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" ${otherClasses}`}
    >
      <span className="flex flex-row items-center gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default ShimmerButton;
