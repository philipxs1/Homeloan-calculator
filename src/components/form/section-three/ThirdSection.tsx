import type { FormData } from "../../../entities/types";
import ArrowWrapper from "../../../ui/ArrowWrapper";
import Fieldset from "../../../ui/Fieldset";
import { formatNumber, parseCurrency } from "../../helpers/helpers";
import LeftArrow from "../../icons/LeftArrow";
import TextSelectPair from "../inputs/TextSelectPair";

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
          textValue={String(data.livingExpenses.amount)}
          onTextChange={(value) =>
            onChange({
              livingExpenses: { ...data.livingExpenses, amount: value },
            })
          }
          selectValue={data.livingExpenses.frequency}
          onSelectChange={(value) =>
            onChange({
              livingExpenses: { ...data.livingExpenses, frequency: value },
            })
          }
        />
      </Fieldset>

      <Fieldset
        title="Other home loan repayments"
        description="For any existing loans"
      >
        <TextSelectPair
          textValue={String(data.homeLoans.amount)}
          onTextChange={(value) =>
            onChange({
              homeLoans: {
                ...data.homeLoans,
                amount: parseCurrency(value),
              },
            })
          }
          selectValue={data.homeLoans.frequency}
          onSelectChange={(value) =>
            onChange({ homeLoans: { ...data.homeLoans, frequency: value } })
          }
        />
      </Fieldset>

      <Fieldset
        title="Personal loan repayments
"
        description="For personal or car loan repayments"
      >
        <TextSelectPair
          textValue={String(data.personalLoans.amount)}
          onTextChange={(value) =>
            onChange({
              personalLoans: {
                ...data.personalLoans,
                amount: parseCurrency(value),
              },
            })
          }
          selectValue={data.personalLoans.frequency}
          onSelectChange={(value) =>
            onChange({
              personalLoans: { ...data.personalLoans, frequency: value },
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
              value={formatNumber(String(data.creditCards))}
              onChange={(e) =>
                onChange({ creditCards: Number(parseCurrency(e.target.value)) })
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
