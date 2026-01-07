import React, { useState } from "react";
import TextSelectPair from "./TextSelectPair";
import Fieldset from "../../../ui/Fieldset";

const SecondSection = ({ data, onChange, onNext, onBack, isCouple }) => {
  const [error, setError] = useState<string | null>(null);

  const handleNext = (onNext) => {
    if (data.salary === "" || data.salary <= 0) {
      setError("Salary is required");
      return;
    }
    setError(null);
    onNext();
    // proceed to next step
  };

  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full">
      <h2 className="flex flex-col col-span-2">
        <span>Step 2 of 3</span>
        <span className="text-lg font-bold">Your income</span>
      </h2>

      <hr className="col-span-2" />
      <Fieldset title="Your Salary" description="Income before tax, and excluding super">
        <TextSelectPair
          textValue={data.salary}
          onTextChange={(value) => onChange({ salary: value })}
          selectValue={data.salaryFrequency}
          onSelectChange={(value) => onChange({ salaryFrequency: value })}
        />
      </Fieldset>

      {error && <p className="col-span-2 text-red-500 text-sm">{error}</p>}

      <Fieldset title="Other income" description="E.g commission, bonuses, rental">
        <TextSelectPair
          textValue={data.otherIncome}
          onTextChange={(value) => onChange({ otherIncome: value })}
          selectValue={data.OtherIncomeFrequency}
          onSelectChange={(value) => onChange({ OtherIncomeFrequency: value })}
        />
      </Fieldset>

      {isCouple && (
        <>
          {" "}
          <Fieldset title="Your Salary" description="Income before tax, and excluding super">
            <TextSelectPair
              textValue={data.salary}
              onTextChange={(value) => onChange({ salary: value })}
              selectValue={data.salaryFrequency}
              onSelectChange={(value) => onChange({ salaryFrequency: value })}
            />
          </Fieldset>
          <Fieldset title="Other income" description="E.g commission, bonuses, rental">
            <TextSelectPair
              textValue={data.otherIncome}
              onTextChange={(value) => onChange({ otherIncome: value })}
              selectValue={data.OtherIncomeFrequency}
              onSelectChange={(value) => onChange({ OtherIncomeFrequency: value })}
            />
          </Fieldset>{" "}
        </>
      )}

      <button
        onClick={onBack}
        className="col-start-1 pl-5 text-center w-max  text-sm font-bold  rounded-sm cursor-pointer"
        type="button">
        Back
      </button>

      <button
        onClick={() => handleNext(onNext)}
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button">
        Next
      </button>
    </section>
  );
};

export default SecondSection;
