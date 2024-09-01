import React from "react";

const CategoryFilters = () => {
  const categoryFilters = [
    "Frontend",
    "Backend",
    "Full Stack",
    "Artificial Inteligence",
    "web 3",
  ];
  return (
    <div className="bg-gradient-to-r p-3 md:sticky top-24 from-[#0C0E23] rounded-lg text-white shadow-lg md:w-[25rem] w-full max-h-max flex flex-col gap-10">
      <p className="p-3">CategoryFilters</p>
      <div className="flex flex-col">
        {categoryFilters.map((filter, i) => (
          <div
            key={i}
            className="border-b border-[#1e3a8a] p-3 cursor-pointer hover:opacity-70"
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
