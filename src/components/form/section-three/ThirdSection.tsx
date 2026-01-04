import { useState } from "react";
import Fieldset from "../../../ui/Fieldset";
import TextSelectPair from "../section-two/TextSelectPair";

const ThirdSection = () => {
  const [salaryAmount, setSalaryAmount] = useState<number | "">("");
  const [salaryFrequency, setSalaryFrequency] = useState<"W" | "F" | "M" | "Y">("Y");
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (salaryAmount === "" || salaryAmount <= 0) {
      setError("Salary is required");
      return;
    }
    setError(null);
    // proceed to next step
    console.log("Next step", { salaryAmount, salaryFrequency });
  };

  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full">
      <h2 className="flex flex-col col-span-2">
        <span>Step 3 of 3</span>
        <span className="text-lg font-bold">Your Expenses</span>
      </h2>

      <hr className="col-span-2" />
      <Fieldset
        title="Living expenses (including rent)"
        description="E.g. groceries, petrol, bills, utilities or entertainment">
        <TextSelectPair
          textValue={salaryAmount}
          onTextChange={setSalaryAmount}
          selectValue={salaryFrequency}
          onSelectChange={setSalaryFrequency}
        />
      </Fieldset>

      {error && <p className="col-span-2 text-red-500 text-sm">{error}</p>}

      <Fieldset title="Other home loan repayments" description="For any existing loans">
        <TextSelectPair
          textValue={salaryAmount}
          onTextChange={setSalaryAmount}
          selectValue={salaryFrequency}
          onSelectChange={setSalaryFrequency}
        />
      </Fieldset>

      <Fieldset
        title="Personal loan repayments
"
        description="For personal or car loan repayments">
        <TextSelectPair
          textValue={salaryAmount}
          onTextChange={setSalaryAmount}
          selectValue={salaryFrequency}
          onSelectChange={setSalaryFrequency}
        />
      </Fieldset>

      <Fieldset
        title="Credit card limits"
        description="Total of all your credit card limits including store cards">
        <div className="col-span-2 flex flex-col gap-1">
          <div className="w-full relative">
            <span
              aria-hidden={true}
              className="absolute pointer-events-none inset-y-0 left-3 flex items-center">
              $
            </span>
            <input
              type="text"
              value={10}
              onChange={(e) => onTextChange(Number(e.target.value))}
              placeholder="0"
              inputMode="numeric"
              max={1000000}
              className="w-full rounded-md border-2 border-gray-300  bg-white px-3 py-2 pl-6 outline-none "
            />
          </div>
        </div>
      </Fieldset>
      <button
        className="col-start-1 pl-5 text-center w-max  text-sm font-bold  rounded-sm cursor-pointer"
        type="button">
        Back
      </button>

      <button
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button"
        onClick={handleNext}>
        Calculate
      </button>
    </section>
  );
};

export default ThirdSection;
