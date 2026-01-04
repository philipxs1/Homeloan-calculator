import React from "react";

interface TextSelectPairProps {
  textValue: number | "";
  selectValue: "W" | "F" | "M" | "Y";
  onTextChange: (value: number) => void;
  onSelectChange: (value: "W" | "F" | "M" | "Y") => void;
  label: string;
  description?: string;
}

const TextSelectPair: React.FC<TextSelectPairProps> = ({
  textValue,
  selectValue,
  onTextChange,
  onSelectChange,
  label,
  description,
}) => {
  return (
    <div className="col-span-2 flex flex-col gap-1">
      <label>{label}</label>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={textValue}
          onChange={(e) => onTextChange(Number(e.target.value))}
          placeholder="0"
          className="w-full rounded-md border-2 border-gray-300 px-3 py-2"
        />
        <select
          value={selectValue}
          onChange={(e) => onSelectChange(e.target.value as "W" | "F" | "M" | "Y")}
          className="w-full rounded-md border-2 border-gray-300 px-3 py-2">
          <option value="W">per week</option>
          <option value="F">per fortnight</option>
          <option value="M">per month</option>
          <option value="Y">per year</option>
        </select>
      </div>
    </div>
  );
};

export default TextSelectPair;
