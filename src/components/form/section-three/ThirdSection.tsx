import Fieldset from "../../../ui/Fieldset";
import TextSelectPair from "../section-two/TextSelectPair";

const ThirdSection = ({ data, onChange, onBack, handleCalculate }) => {
  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full h-full">
      <h2 className="flex flex-col col-span-2">
        <span>Step 3 of 3</span>
        <span className="text-lg font-bold">Your Expenses</span>
      </h2>

      <hr className="col-span-2" />
      <Fieldset
        title="Living expenses (including rent)"
        description="E.g. groceries, petrol, bills, utilities or entertainment">
        <TextSelectPair
          textValue={data.livingExpenses}
          onTextChange={(value) => onChange({ livingExpenses: value })}
          selectValue={data.livingExpensesFrequency}
          onSelectChange={(value) => onChange({ livingExpensesFrequency: value })}
        />
      </Fieldset>

      <Fieldset title="Other home loan repayments" description="For any existing loans">
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
        description="For personal or car loan repayments">
        <TextSelectPair
          textValue={data.personalLoans}
          onTextChange={(value) => onChange({ personalLoans: value })}
          selectValue={data.personalLoansFrequency}
          onSelectChange={(value) => onChange({ personalLoansFrequency: value })}
        />
      </Fieldset>

      <Fieldset
        title="Credit card limits"
        description="Total of all your credit card limits including store cards">
        <div className="col-span-2 flex flex-col gap-1  ">
          <div className="w-full relative h-full">
            <span
              aria-hidden={true}
              className="absolute pointer-events-none inset-y-0 left-3 flex items-center">
              $
            </span>
            <input
              type="number"
              value={data.creditCards}
              onChange={(e) => onChange({ creditCards: e.target.value })}
              placeholder="0"
              inputMode="numeric"
              max={1000000}
              className="w-full rounded-md border-2 border-gray-300  bg-white px-3 py-2 pl-6 outline-none "
            />
          </div>
        </div>
      </Fieldset>
      <button
        onClick={onBack}
        className="col-start-1 pl-5 text-center w-max  text-sm font-bold  rounded-sm cursor-pointer"
        type="button">
        Back
      </button>

      <button
        onClick={handleCalculate}
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button">
        Calculate
      </button>
    </section>
  );
};

export default ThirdSection;
