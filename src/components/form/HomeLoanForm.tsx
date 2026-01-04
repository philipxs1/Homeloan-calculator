import FirstSection from "./section-one/FirstSection";
import ThirdSection from "./section-three/ThirdSection";
import SecondSection from "./section-two/SecondSection";

const HomeLoanForm = () => {
  return (
    <form
      aria-label="Borrowing amount calc input"
      className="col-span-12 md:col-span-6 lg:col-start-2 overflow-hidden grid w-full grid-cols-2 gap-6 relative">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </form>
  );
};

export default HomeLoanForm;
