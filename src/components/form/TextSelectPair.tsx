import React from "react";
import { formatNumber, parseCurrency } from "../helpers/helpers";
import ArrowDown from "../icons/ArrowDown";

interface TextSelectPairProps {
  textValue: string | "";
  selectValue: "W" | "F" | "M" | "Y";
  onTextChange: (value: string) => void;
  onSelectChange: (value: "W" | "F" | "M" | "Y") => void;
  required?: boolean;
  error?: string | null;
}

const TextSelectPair: React.FC<TextSelectPairProps> = ({
  textValue,
  selectValue,
  onTextChange,
  onSelectChange,
  error,
}) => {
  return (
    <div className="col-start-1 flex flex-col gap-1">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative w-full bg-white">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            $
          </span>
          <input
            type="text"
            value={formatNumber(textValue)}
            onChange={(e) => onTextChange(parseCurrency(e.target.value))}
            placeholder="0"
            inputMode="numeric"
            max={1000000}
            className={`w-full rounded-md border-2 py-2 pl-6 outline-none focus:border-black ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        <div className="relative w-full">
          <select
            value={selectValue}
            onChange={(e) =>
              onSelectChange(e.target.value as "W" | "F" | "M" | "Y")
            }
            className="w-full cursor-pointer appearance-none rounded-md border-2 border-gray-300 bg-white px-3 py-2 pr-10 outline-none focus:border-black"
          >
            <option value="W">per week</option>
            <option value="F">per fortnight</option>
            <option value="M">per month</option>
            <option value="Y">per year</option>
          </select>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
          >
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSelectPair;
