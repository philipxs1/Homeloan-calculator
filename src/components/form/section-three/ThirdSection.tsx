import { useCallback } from "react";
import { useFormContext } from "../../../hooks/useFormContext";
import ArrowWrapper from "../../../ui/ArrowWrapper";
import Fieldset from "../../../ui/Fieldset";
import {
  calculateBorrowingAmount,
  delay,
  formatNumber,
  parseCurrency,
} from "../../helpers/helpers";
import LeftArrow from "../../icons/LeftArrow";
import TextSelectPair from "../inputs/TextSelectPair";

const ThirdSection = () => {
  const { state, updateForm, prevStep, setLoading, setBorrowing } =
    useFormContext();

  const section = "expenses";

  const handleCalculate = useCallback(async () => {
    setLoading(true);
    try {
      await delay(2000);
      console.log(state.formData);
      const borrowing = calculateBorrowingAmount(state.formData);
      setBorrowing(borrowing);
    } finally {
      setLoading(false);
    }
  }, [setBorrowing, setLoading, state]);

  return (
    <div tabIndex={-1} className="col-span-2 grid w-full grid-cols-2 gap-4">
      <h2 className="col-span-2 flex flex-col">
        <span>Step 3 of 3</span>
        <span className="text-lg font-bold">Your Expenses</span>
      </h2>

      <hr className="col-span-2" />
      <Fieldset
        title="Living expenses (including rent)"
        description="E.g. groceries, petrol, bills, utilities or entertainment"
      >
        <TextSelectPair
          textValue={String(state.formData[section].livingExpenses.amount)}
          onTextChange={(value) =>
            updateForm(section, {
              livingExpenses: {
                ...state.formData[section].livingExpenses,
                amount: value,
              },
            })
          }
          selectValue={state.formData[section].livingExpenses.frequency}
          onSelectChange={(value) =>
            updateForm(section, {
              livingExpenses: {
                ...state.formData[section].livingExpenses,
                amount: value,
              },
            })
          }
        />
      </Fieldset>

      <Fieldset
        title="Other home loan repayments"
        description="For any existing loans"
      >
        <TextSelectPair
          textValue={String(state.formData[section].homeLoans.amount)}
          onTextChange={(value) =>
            updateForm(section, {
              homeLoans: {
                ...state.formData[section].homeLoans,
                amount: value,
              },
            })
          }
          selectValue={state.formData[section].homeLoans.frequency}
          onSelectChange={(value) =>
            updateForm(section, {
              homeLoans: {
                ...state.formData[section].homeLoans,
                amount: value,
              },
            })
          }
        />
      </Fieldset>

      <Fieldset
        title="Personal loan repayments
"
        description="For personal or car loan repayments"
      >
        <TextSelectPair
          textValue={String(state.formData[section].personalLoans.amount)}
          onTextChange={(value) =>
            updateForm(section, {
              personalLoans: {
                ...state.formData[section].personalLoans,
                amount: value,
              },
            })
          }
          selectValue={state.formData[section].personalLoans.frequency}
          onSelectChange={(value) =>
            updateForm(section, {
              personalLoans: {
                ...state.formData[section].personalLoans,
                amount: value,
              },
            })
          }
        />
      </Fieldset>

      <Fieldset
        title="Credit card limits"
        description="Total of all your credit card limits including store cards"
      >
        <div className="col-span-2 flex flex-col gap-1">
          <div className="relative h-full w-full">
            <span
              aria-hidden={true}
              className="pointer-events-none absolute inset-y-0 left-3 flex items-center"
            >
              $
            </span>
            <input
              type="string"
              value={formatNumber(String(state.formData[section].creditCards))}
              onChange={(e) =>
                updateForm(section, {
                  creditCards: Number(parseCurrency(e.target.value)),
                })
              }
              placeholder="0"
              inputMode="numeric"
              max={1000000}
              className="w-full rounded-md border-2 border-gray-300 bg-white px-3 py-2 pl-6 transition-colors outline-none transform-border hover:border-black focus:border-black"
            />
          </div>
        </div>
      </Fieldset>

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
        onClick={handleCalculate}
        className="btn-next col-start-2"
        type="button"
      >
        Calculate
      </button>
    </div>
  );
};

export default ThirdSection;
