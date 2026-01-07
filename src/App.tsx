import "./App.css";
import FormResults from "./components/form/FormResults";

import Header from "./components/Header";
import HomeLoanForm from "./components/form/HomeLoanForm";

type FormData = {
  step1: {
    isCouple: boolean | null;
    propertyUsage: "live" | "invest" | null;
    dependants: number;
  };
  step2: {
    primaryIncome: number;
    secondaryIncome: number;
    incomeFrequency: "W" | "F" | "M" | "Y";
  };
  step3: {
    livingExpenses: number;
    creditCardLimits: number;
  };
};

function App() {
  return (
    <main className="bg-amber-50">
      <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 xl:px-10 py-12 md:py-20">
        <Header />
      </section>
      <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 xl:px-10 py-12 md:py-20">
        <div className="grid  grid-cols-12 gap-y-12 gap-x-0 md:w-full  md:gap-8 md:grid-rows-1 mx-auto max-w-7xl ">
          <HomeLoanForm />
          <FormResults />
        </div>
      </section>
    </main>
  );
}

export default App;
