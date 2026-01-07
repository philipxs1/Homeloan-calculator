import Fieldset from "../../../ui/Fieldset";

import { RadioGroup } from "./RadioGroup";
import { range } from "../../helpers/helpers";

const FirstSection = ({ data, onChange, onNext }) => {
  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full absolute left-0 top-0">
      <h2 className="flex flex-col col-span-2">
        <span>Step 1 of 3</span>
        <span className="text-lg font-bold">About your loan</span>
      </h2>

      <hr className="col-span-2" />

      <Fieldset title={"Who is the loan for?"}>
        <RadioGroup
          name="is-couple"
          options={[
            { label: "Just me", value: false },
            { label: "Two of us", value: true },
          ]}
          selectedValue={data.isCouple}
          setSelectedValue={(value) => onChange({ isCouple: value })}
        />
      </Fieldset>

      <Fieldset title="What is the purpose?">
        <RadioGroup
          name="purpose"
          options={[
            { label: "Owner-occupied", value: "owner" },
            { label: "Investment", value: "investment" },
          ]}
          selectedValue={data.purpose}
          setSelectedValue={(value) => onChange({ purpose: value })}
        />
      </Fieldset>

      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="dependants">How many dependants do you financially support</label>
        <select
          id="dependants"
          name="Dependants"
          value={data.dependants}
          onChange={(e) => onChange({ dependants: Number(e.target.value) })}
          className=" w-full bg-white appearance-none outline-none py-3 pl-4  border-gray-200 border-2 rounded-md hover:border-black transition-colors transform-border">
          {range(0, 10).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onNext}
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button">
        Next
      </button>
    </section>
  );
};

export default FirstSection;
