import React, { useState } from "react";
import TextSelectPair from "./TextSelectPair";

const SecondSection = () => {
  const [salaryAmount, setSalaryAmount] = useState<number | "">("");
  const [salaryFrequency, setSalaryFrequency] = useState<"W" | "F" | "M" | "Y">("Y");
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (salaryAmount === "" || salaryAmount <= 0) {
      setError("Salary is required");
      return;
    }
    setError(null);
    // proceed to next step
    console.log("Next step", { salaryAmount, salaryFrequency });
  };

  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full">
      <h2 className="flex flex-col col-span-2">
        <span>Step 2 of 3</span>
        <span className="text-lg font-bold">Your income</span>
      </h2>

      <hr className="col-span-2" />

      <TextSelectPair
        label="Your salary"
        description="Income before tax, and excluding super"
        textValue={salaryAmount}
        onTextChange={setSalaryAmount}
        selectValue={salaryFrequency}
        onSelectChange={setSalaryFrequency}
      />

      {error && <p className="col-span-2 text-red-500 text-sm">{error}</p>}

      <TextSelectPair
        label="Other income"
        description="E.g. commission, bonuses, rental"
        textValue={salaryAmount}
        onTextChange={setSalaryAmount}
        selectValue={salaryFrequency}
        onSelectChange={setSalaryFrequency}
      />
      <button
        className="col-start-1 pl-5 text-center w-max  text-sm font-bold  rounded-sm cursor-pointer"
        type="button">
        Back
      </button>

      <button
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button"
        onClick={handleNext}>
        Next
      </button>
    </section>
  );
};

export default SecondSection;
