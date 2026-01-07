import React, { useState } from "react";
import TextSelectPair from "../TextSelectPair";
import Fieldset from "../../../ui/Fieldset";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";

type Errors = {
  salary?: string;
  partnerSalary?: string;
};

const SecondSection = ({ data, onChange, onNext, onBack, isCouple }) => {
  const [errors, setErrors] = useState<Errors>({});

  const isInvalid = (value: string | number) =>
    value === "" || Number(value) <= 0;

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
    <section className="col-span-2 grid w-full grid-cols-2 gap-6">
      <h2 className="col-span-2 flex flex-col">
        <span>Step 2 of 3</span>
        <span className="text-lg font-bold">Your income</span>
      </h2>

      <hr className="col-span-2" />
      <Fieldset
        title="Your Salary"
        description="Income before tax, and excluding super"
      >
        <TextSelectPair
          error={errors.salary}
          textValue={data.salary}
          onTextChange={(value) => onChange({ salary: value })}
          selectValue={data.salaryFrequency}
          onSelectChange={(value) => onChange({ salaryFrequency: value })}
        />

        {errors.salary && (
          <p className="col-span-1 pt-2 text-sm text-red-500">
            {errors.salary}
          </p>
        )}
      </Fieldset>

      <Fieldset
        title="Other income"
        description="E.g commission, bonuses, rental"
      >
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
          <Fieldset
            title="Other applicant"
            description="Income before tax, and excluding super"
          >
            <TextSelectPair
              error={errors.partnerSalary}
              textValue={data.partnerSalary}
              onTextChange={(value) => onChange({ partnerSalary: value })}
              selectValue={data.partnerSalarayFrequency}
              onSelectChange={(value) =>
                onChange({ partnerSalaryFrequency: value })
              }
            />
            {errors.partnerSalary && (
              <div className="flex items-center">
                <p className="col-span-1 pt-2 text-sm text-red-500">
                  {errors.partnerSalary}
                </p>
              </div>
            )}
          </Fieldset>
          <Fieldset
            title="Other applicant's other income"
            description="E.g commission, bonuses, rental"
          >
            <TextSelectPair
              textValue={data.partnerIncome}
              onTextChange={(value) => onChange({ partnerIncome: value })}
              selectValue={data.partnerIncomeFrequency}
              onSelectChange={(value) =>
                onChange({ partnerIncomeFrequency: value })
              }
            />
          </Fieldset>{" "}
        </>
      )}

      <button
        onClick={onBack}
        className="group col-start-1 w-max cursor-pointer rounded-sm pl-5 text-center text-sm font-bold"
        type="button"
      >
        <span className="flex items-center gap-2">
          <LeftArrow />
          Back
        </span>
      </button>

      <button
        onClick={handleNext}
        className="group col-start-2 cursor-pointer justify-self-end rounded-sm border-1 border-black px-6 py-3 text-center text-sm font-bold transition-all duration-200 hover:bg-green-500 active:bg-green-600"
        type="button"
      >
        <span className="flex items-center gap-2">
          Next
          <RightArrow />
        </span>
      </button>
    </section>
  );
};

export default SecondSection;
