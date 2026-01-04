import Fieldset from "../../../ui/Fieldset";

const FirstSection = () => {
  return (
    <section className="grid grid-cols-2 col-span-2  gap-6 w-full left-0 top-0 ">
      <h2 className="flex flex-col">
        <span>Step 1 of 3</span>
        <span className="text-lg font-bold">About your loan</span>
      </h2>
      <hr className="col-span-2" />
      <Fieldset>
        <legend>Who is the loan for?</legend>
        <div className="relative grid grid-cols-2">
          <div className="relative z-10 flex rounded-md bg-gray-300">
            <input
              id="is-couple-1"
              type="radio"
              className="absolute opacity-0 inset-0"
              value="0"
              checked
              name="IsCouple"
            />
            <label htmlFor="is-couple-1" className="flex flex-1 justify-center cursor-pointer">
              Just me
            </label>
          </div>
          <div className="relative z-10 flex rounded-md ">
            <input
              id="is-couple-2"
              type="radio"
              className="absolute opacity-0 inset-0"
              value="0"
              checked
              name="IsCouple"
            />
            <label htmlFor="is-couple-2">Two of us</label>
          </div>
        </div>
      </Fieldset>
      <Fieldset>
        <legend>What is the purpose?</legend>
        <div>
          <input type="radio" />
          <label htmlFor="">Just me</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Two of us</label>
        </div>
      </Fieldset>
      <div>
        <label htmlFor="dependants">How many dependants do you financially support</label>
        <div>
          <select name="depandants" id="Dependants"></select>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
