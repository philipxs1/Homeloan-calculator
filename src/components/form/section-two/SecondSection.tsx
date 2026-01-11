import { useState } from "react";
import TextSelectPair from "../inputs/TextSelectPair";
import Fieldset from "../../../ui/Fieldset";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";
import type { FormData } from "../../../entities/types";
import ArrowWrapper from "../../../ui/ArrowWrapper";

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

    if (isInvalid(data.salary.amount)) {
      newErrors.salary = "Your salary is required";
    }

    if (isCouple && isInvalid(data.partnerSalary?.amount)) {
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
          textValue={data.salary.amount}
          onTextChange={(value) => {
            onChange({
              salary: {
                ...data.salary,
                amount: value,
              },
            });
            if (!isInvalid(value)) {
              clearError("salary");
            }
          }}
          selectValue={data.salary.frequency}
          onSelectChange={(value) =>
            onChange({ salary: { ...data.salary, frequency: value } })
          }
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
          textValue={data.otherIncome.amount}
          onTextChange={(value) =>
            onChange({
              otherIncome: {
                ...data.otherIncome,
                amount: value,
              },
            })
          }
          selectValue={data.otherIncome.frequency}
          onSelectChange={(value) =>
            onChange({ otherIncome: { ...data.otherIncome, frequency: value } })
          }
        />
      </Fieldset>

      {isCouple && (
        <>
          <Fieldset
            title="Other applicant"
            description="Income before tax, and excluding super"
          >
            <TextSelectPair
              error={errors.partnerSalary}
              textValue={data.partnerSalary?.amount ?? ""}
              onTextChange={(value) => {
                onChange({
                  partnerSalary: {
                    ...data.partnerSalary,
                    amount: value,
                    frequency: data.partnerSalary?.frequency ?? "M",
                  },
                });
                if (!isInvalid(value)) {
                  clearError("partnerSalary");
                }
              }}
              selectValue={data.partnerSalary?.frequency ?? "M"}
              onSelectChange={(value) =>
                onChange({
                  partnerSalary: {
                    amount: data.partnerSalary?.amount ?? "",
                    frequency: value ?? "M",
                  },
                })
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
              textValue={data.partnerIncome?.amount}
              onTextChange={(value) =>
                onChange({
                  partnerIncome: { ...data.partnerIncome, amount: value },
                })
              }
              selectValue={data.partnerIncome.frequency}
              onSelectChange={(value) =>
                onChange({
                  partnerIncome: { ...data.partnerIncome, frequency: value },
                })
              }
            />
          </Fieldset>{" "}
        </>
      )}

      <button
        onClick={onBack}
        className="group btn-back col-start-1"
        type="button"
      >
        <ArrowWrapper>
          <LeftArrow />
          Back
        </ArrowWrapper>
      </button>

      <button
        onClick={handleNext}
        className="group btn-next col-start-2"
        type="button"
      >
        <ArrowWrapper>
          Next
          <RightArrow />
        </ArrowWrapper>
      </button>
    </div>
  );
};

export default SecondSection;
