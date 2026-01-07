import { useFormContext } from "../../context/FormProvider";
import RightArrow from "../icons/RightArrow";
import Spinner from "../icons/Spinner";

const FormResults = () => {
  const { borrowingAmount, isLoading } = useFormContext();

  return (
    <section className="col-span-12 row-start-2 max-h-min rounded-xl border-2 border-black bg-white p-8 md:col-span-5 md:col-start-8 md:row-start-1">
      <div className="flex flex-col gap-5">
        <p className="mb-2">
          <span className="rounded-xl bg-primary px-2 py-1 text-xs">
            Phil's Own
          </span>
        </p>
        <div className="h-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col gap-5">
              <p className="text-xl font-black">
                You may be able to borrow up to
              </p>
              <p>
                <span className="text-5xl font-bold">
                  $
                  {borrowingAmount !== null
                    ? borrowingAmount.toLocaleString()
                    : "000,000"}
                </span>
              </p>
            </div>
          )}
        </div>

        <hr className="col-span-2" />

        {borrowingAmount !== null && (
          <div className="flex items-center justify-between">
            <button
              className="group col-start-2 cursor-pointer justify-self-end rounded-sm border border-black px-6 py-3 text-center text-sm font-bold"
              type="button"
            >
              <span className="flex items-center gap-2">
                Get Started!
                <RightArrow />
              </span>
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://phil-portfolio-black.vercel.app/")
              }
              type="button"
              className="transform cursor-pointer rounded-lg bg-black px-12 py-3 text-secondary transition-colors duration-200 hover:bg-secondary hover:text-black"
            >
              click on me!
            </button>
          </div>
        )}

        <p className="text-xs">
          This calculator is for demonstration and training purposes only. All
          calculations are mock examples and do not represent real borrowing
          capacity or financial advice. Rebuilt from the Timely Home website.
        </p>
      </div>
    </section>
  );
};

export default FormResults;
