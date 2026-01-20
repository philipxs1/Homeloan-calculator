import Fieldset from "../../../ui/Fieldset";

import { range } from "../../helpers/helpers";
import RightArrow from "../../icons/RightArrow";

import { RadioGroup } from "../inputs/RadioGroup";
import ArrowWrapper from "../../../ui/ArrowWrapper";
import { useFormContext } from "../../../hooks/useFormContext";

const FirstSection = () => {
  const { state, updateForm, nextStep } = useFormContext();
  const section = "applicants";
  return (
    <div tabIndex={-1} className="col-span-2 grid w-full grid-cols-2 gap-4">
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
          selectedValue={state.formData[section].isCouple}
          setSelectedValue={(value) => updateForm(section, { isCouple: value })}
        />
      </Fieldset>

      <Fieldset title="What is the purpose?">
        <RadioGroup
          name="purpose"
          options={[
            { label: "Owner-occupied", value: "owner" },
            { label: "Investment", value: "investment" },
          ]}
          selectedValue={state.formData[section].purpose}
          setSelectedValue={(value) =>
            updateForm(section, { purpose: value as "owner" | "investment" })
          }
        />
      </Fieldset>

      <div className="col-span-2 flex flex-col gap-2">
        <label htmlFor="dependants">
          How many dependants do you financially support
        </label>
        <select
          id="dependants"
          name="Dependants"
          value={state.formData[section].dependants}
          onChange={(e) =>
            updateForm(section, { dependants: Number(e.target.value) })
          }
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
        onClick={nextStep}
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

export default FirstSection;
