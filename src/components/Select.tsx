"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOptionProps {
  onSelect: (sectionId: string) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({ onSelect }) => {
  const handleScroll = (value: string) => {
    onSelect(value);
  };

  return (
    <Select onValueChange={handleScroll}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Dive into Sections" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1">Section (1)</SelectItem>
          <SelectItem value="2">Section (2)</SelectItem>
          <SelectItem value="3">Section (3)</SelectItem>
          <SelectItem value="4">Section (4)</SelectItem>
          <SelectItem value="5">Section (5)</SelectItem>
          <SelectItem value="quote">Quote</SelectItem>
          <SelectItem value="conclusion">Conclusion</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectOption;
