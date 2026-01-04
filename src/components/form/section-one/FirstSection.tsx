import { useState } from "react";
import Fieldset from "../../../ui/Fieldset";

import { RadioGroup } from "./RadioGroup";
import { range } from "../../helpers/helpers";

const FirstSection = () => {
  const [isCouple, setIsCouple] = useState<boolean | null>(false);
  const [purpose, setPurpose] = useState<"owner" | "investment">("owner");

  return (
    <section className="grid grid-cols-2 col-span-2 gap-6 w-full">
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
          selectedValue={isCouple}
          setSelectedValue={setIsCouple}
        />
      </Fieldset>

      <Fieldset title="What is the purpose?">
        <RadioGroup
          name="purpose"
          options={[
            { label: "Owner-occupied", value: "owner" },
            { label: "Investment", value: "investment" },
          ]}
          selectedValue={purpose}
          setSelectedValue={setPurpose}
        />
      </Fieldset>

      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="dependants">How many dependants do you financially support</label>
        <select
          id="dependants"
          name="Dependants"
          className=" w-full bg-white appearance-none outline-none py-3 pl-4  border-gray-200 border-2 rounded-md hover:border-black transition-colors transform-border">
          {range(0, 10).map((num) => (
            <option value="num">{num}</option>
          ))}
        </select>
      </div>

      <button
        className="col-start-2 justify-self-end text-center border-1 border-black text-sm font-bold px-6 py-3 rounded-sm hover:bg-green-500 active:bg-green-600 duration-200 transition-all cursor-pointer"
        type="button">
        Next
      </button>
    </section>
  );
};

export default FirstSection;
