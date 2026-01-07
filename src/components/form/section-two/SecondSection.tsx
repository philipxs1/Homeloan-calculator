import React, { useState } from "react";
import TextSelectPair from "./TextSelectPair";
import Fieldset from "../../../ui/Fieldset";

type Errors = {
  salary?: string;
  partnerSalary?: string;
};

const SecondSection = ({ data, onChange, onNext, onBack, isCouple }) => {
  const [errors, setErrors] = useState<Errors>({});

  const isInvalid = (value: string | number) => value === "" || Number(value) <= 0;

  const handleNext = () => {
    const newErrors: Errors = {};

    if (isInvalid(data.salary)) {
      newErrors.salary = "Your salary is required";
    }

    if (isCouple && isInvalid(data.partnerSalary)) {
      newErrors.partnerSalary = "Other applicant's salary is required";
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;

    onNext();
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

        {errors.salary && <p className="col-span-1 text-red-500 text-sm pt-2">{errors.salary}</p>}
      </Fieldset>

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
          <Fieldset title="Other applicant" description="Income before tax, and excluding super">
            <TextSelectPair
              textValue={data.partnerSalary}
              onTextChange={(value) => onChange({ partnerSalary: value })}
              selectValue={data.salaryFrequency}
              onSelectChange={(value) => onChange({ partnerSalaryFrequency: value })}
            />
            {errors.partnerSalary && (
              <div className="flex items-center">
                <p className="col-span-1 text-red-500 text-sm pt-2">{errors.partnerSalary}</p>
              </div>
            )}
          </Fieldset>
          <Fieldset
            title="Other applicant's other income"
            description="E.g commission, bonuses, rental">
            <TextSelectPair
              textValue={data.partnerIncome}
              onTextChange={(value) => onChange({ partnerIncome: value })}
              selectValue={data.OtherIncomeFrequency}
              onSelectChange={(value) => onChange({ partnerIncomeFrequency: value })}
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
        onClick={handleNext}
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button">
        Next
      </button>
    </section>
  );
};

export default SecondSection;
