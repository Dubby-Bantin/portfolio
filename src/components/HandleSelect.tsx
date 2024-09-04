"use client";
import SelectOption from "./Select";

const HandleSelect = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: "smooth" });
  };
  return <SelectOption onSelect={handleScrollToSection} />;
};

export default HandleSelect;
