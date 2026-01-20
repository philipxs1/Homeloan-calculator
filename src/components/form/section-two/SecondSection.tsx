import { useState } from "react";
import TextSelectPair from "../inputs/TextSelectPair";
import Fieldset from "../../../ui/Fieldset";
import LeftArrow from "../../icons/LeftArrow";
import RightArrow from "../../icons/RightArrow";

import ArrowWrapper from "../../../ui/ArrowWrapper";
import { useFormContext } from "../../../hooks/useFormContext";

type Errors = {
  salary?: string;
  partnerSalary?: string;
};

const SecondSection = () => {
  const { updateForm, state, nextStep, prevStep } = useFormContext();
  const [errors, setErrors] = useState<Errors>({});
  const section = "income";
  const isCouple = state.formData.applicants.isCouple;

  const isInvalid = (value: string | number | undefined) =>
    value === undefined || value === "" || Number(value) <= 0;

  const handleNext = () => {
    const newErrors: Errors = {};

    if (isInvalid(state.formData[section].salary.amount)) {
      newErrors.salary = "Your salary is required";
    }

    if (isCouple && isInvalid(state.formData[section].partnerSalary?.amount)) {
      newErrors.partnerSalary = "Other applicant's salary is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    nextStep();
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
          textValue={state.formData[section].salary.amount}
          onTextChange={(value) => {
            updateForm(section, {
              salary: { ...state.formData[section].salary, amount: value },
            });
            if (!isInvalid(value)) {
              clearError("salary");
            }
          }}
          selectValue={state.formData[section].salary.frequency}
          onSelectChange={(value) =>
            updateForm(section, {
              salary: { ...state.formData[section].salary, frequency: value },
            })
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
          textValue={state.formData[section].otherIncome.amount}
          onTextChange={(value) => {
            updateForm(section, {
              otherIncome: {
                ...state.formData[section].otherIncome,
                amount: value,
              },
            });
          }}
          selectValue={state.formData[section].otherIncome.frequency}
          onSelectChange={(value) =>
            updateForm(section, {
              otherIncome: {
                ...state.formData[section].otherIncome,
                frequency: value,
              },
            })
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
              textValue={state.formData[section].partnerSalary.amount}
              onTextChange={(value) => {
                updateForm(section, {
                  partnerSalary: {
                    ...state.formData[section].partnerSalary,
                    amount: value,
                  },
                });
                if (!isInvalid(value)) {
                  clearError("partnerSalary");
                }
              }}
              selectValue={state.formData[section].partnerSalary.frequency}
              onSelectChange={(value) =>
                updateForm(section, {
                  partnerSalary: {
                    ...state.formData[section].partnerSalary,
                    frequency: value,
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
              textValue={state.formData[section].partnerIncome.amount}
              onTextChange={(value) => {
                updateForm(section, {
                  partnerIncome: {
                    ...state.formData[section].partnerIncome,
                    amount: value,
                  },
                });
              }}
              selectValue={state.formData[section].partnerIncome.frequency}
              onSelectChange={(value) =>
                updateForm(section, {
                  partnerIncome: {
                    ...state.formData[section].partnerIncome,
                    frequency: value,
                  },
                })
              }
            />
          </Fieldset>{" "}
        </>
      )}

      <button
        onClick={prevStep}
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
