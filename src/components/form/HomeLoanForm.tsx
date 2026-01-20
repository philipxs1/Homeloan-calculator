import FirstSection from "./section-one/FirstSection";
import SecondSection from "./section-two/SecondSection";
import ThirdSection from "./section-three/ThirdSection";

import Step from "./Step";

const HomeLoanForm = () => {
  return (
    <form
      aria-label="Borrowing amount calc input"
      className="sticky col-span-12 h-fit w-full overflow-hidden md:col-span-5 md:min-h-screen lg:col-start-2"
    >
      <div className="relative">
        <Step index={0}>
          <FirstSection />
        </Step>
        <Step index={1}>
          <SecondSection />
        </Step>
        <Step index={2}>
          <ThirdSection />
        </Step>
      </div>
    </form>
  );
};

export default HomeLoanForm;
