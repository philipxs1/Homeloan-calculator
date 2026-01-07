import { useState } from "react";
import TextSelectPair from "../TextSelectPair";
import Fieldset from "../../../ui/Fieldset";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";
import type { FormData } from "../../../entities/types";

type Errors = {
  salary?: string;
  partnerSalary?: string;
};

interface SecondSectionProps {
  data: FormData["income"];
  onChange: (values: Partial<FormData["income"]>) => void;
  onNext: () => void;
  onBack: () => void;
  isCouple: boolean;
}

const SecondSection = ({
  data,
  onChange,
  onNext,
  onBack,
  isCouple,
}: SecondSectionProps) => {
  const [errors, setErrors] = useState<Errors>({});

  const isInvalid = (value: string | number | undefined) =>
    value === undefined || value === "" || Number(value) <= 0;

  const handleNext = () => {
    const newErrors: Errors = {};

    if (isInvalid(data.salary)) {
      newErrors.salary = "Your salary is required";
    }

    if (isCouple && isInvalid(data.partnerSalary)) {
      newErrors.partnerSalary = "Other applicant's salary is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onNext();
  };

  const clearError = (field: keyof Errors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      return { ...prev, [field]: undefined };
    });
  };

  return (
    <div tabIndex={-1} className="col-span-2 grid w-full grid-cols-2 gap-2">
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
          onTextChange={(value) => {
            onChange({ salary: value });
            if (!isInvalid(value)) {
              clearError("salary");
            }
          }}
          selectValue={data.salaryFrequency}
          onSelectChange={(value) => onChange({ salaryFrequency: value })}
        />

        {errors.salary && (
          <p className="col-span-1 pt-1 text-sm text-red-500">
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
          selectValue={data.otherIncomeFrequency}
          onSelectChange={(value) => onChange({ otherIncomeFrequency: value })}
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
              textValue={data.partnerSalary ?? ""}
              onTextChange={(value) => {
                onChange({ partnerSalary: value });
                if (!isInvalid(value)) {
                  clearError("partnerSalary");
                }
              }}
              selectValue={data.partnerSalaryFrequency ?? "M"}
              onSelectChange={(value) =>
                onChange({ partnerSalaryFrequency: value })
              }
            />
            {errors.partnerSalary && (
              <div className="flex items-center">
                <p className="col-span-1 pt-1 text-sm text-red-500">
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
              textValue={data.partnerIncome ?? ""}
              onTextChange={(value) => onChange({ partnerIncome: value })}
              selectValue={data.partnerIncomeFrequency ?? "M"}
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
        className="group col-start-2 cursor-pointer justify-self-end rounded-sm border border-black px-6 py-3 text-center text-sm font-bold transition-all duration-200 hover:bg-green-500 active:bg-green-600"
        type="button"
      >
        <span className="flex items-center gap-2">
          Next
          <RightArrow />
        </span>
      </button>
    </div>
  );
};

export default SecondSection;
