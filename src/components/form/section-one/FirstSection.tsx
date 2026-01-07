import Fieldset from "../../../ui/Fieldset";

import { RadioGroup } from "./RadioGroup";
import { range } from "../../helpers/helpers";
import RightArrow from "../../icons/RightArrow";

const FirstSection = ({ data, onChange, onNext }) => {
  return (
    <section className="absolute top-0 left-0 col-span-2 grid w-full grid-cols-2 gap-6">
      <h2 className="col-span-2 flex flex-col">
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
        <label htmlFor="dependants">
          How many dependants do you financially support
        </label>
        <select
          id="dependants"
          name="Dependants"
          value={data.dependants}
          onChange={(e) => onChange({ dependants: Number(e.target.value) })}
          className="w-full appearance-none rounded-md border-2 border-gray-200 bg-white py-3 pl-4 transition-colors outline-none transform-border hover:border-black"
        >
          {range(0, 10).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onNext}
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

export default FirstSection;
