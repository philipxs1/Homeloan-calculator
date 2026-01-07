import type { FormData } from "../../../entities/types";
import Fieldset from "../../../ui/Fieldset";
import { formatNumber, parseCurrency } from "../../helpers/helpers";
import LeftArrow from "../../icons/LeftArrow";
import TextSelectPair from "../TextSelectPair";

interface ThirdSectionProps {
  data: FormData["expenses"];
  onChange: (values: Partial<FormData["expenses"]>) => void;

  onBack: () => void;

  handleCalculate: () => void;
}

const ThirdSection = ({
  data,
  onChange,
  onBack,
  handleCalculate,
}: ThirdSectionProps) => {
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
          textValue={data.livingExpenses}
          onTextChange={(value) => onChange({ livingExpenses: value })}
          selectValue={data.livingExpensesFrequency}
          onSelectChange={(value) =>
            onChange({ livingExpensesFrequency: value })
          }
        />
      </Fieldset>

      <Fieldset
        title="Other home loan repayments"
        description="For any existing loans"
      >
        <TextSelectPair
          textValue={data.homeLoans}
          onTextChange={(value) => onChange({ homeLoans: value })}
          selectValue={data.homeLoansFrequency}
          onSelectChange={(value) => onChange({ homeLoansFrequency: value })}
        />
      </Fieldset>

      <Fieldset
        title="Personal loan repayments
"
        description="For personal or car loan repayments"
      >
        <TextSelectPair
          textValue={data.personalLoans}
          onTextChange={(value) => onChange({ personalLoans: value })}
          selectValue={data.personalLoansFrequency}
          onSelectChange={(value) =>
            onChange({ personalLoansFrequency: value })
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
              value={formatNumber(String(data.creditCards))}
              onChange={(e) =>
                onChange({ creditCards: parseCurrency(e.target.value) })
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
        onClick={handleCalculate}
        className="col-start-2 cursor-pointer justify-self-end rounded-sm border border-black px-6 py-3 text-center text-sm font-bold transition-all duration-200 hover:bg-green-500 active:bg-green-600"
        type="button"
      >
        Calculate
      </button>
    </div>
  );
};

export default ThirdSection;
