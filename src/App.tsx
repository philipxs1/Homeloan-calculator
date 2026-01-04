import "./App.css";
import FormResults from "./components/form/FormResults";

import Header from "./components/Header";
import HomeLoanForm from "./components/form/HomeLoanForm";
import { useState } from "react";

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

const initialFormData: FormData = {
  step1: {
    isCouple: null,
    propertyUsage: null,
    dependants: 0,
  },
  step2: {
    primaryIncome: 0,
    secondaryIncome: 0,
    incomeFrequency: "Y",
  },
  step3: {
    livingExpenses: 0,
    creditCardLimits: 0,
  },
};

function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState(null);

  return (
    <main>
      <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 xl:px-10 py-12 md:py-20">
        <Header />
      </section>
      <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 xl:px-10 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-y-12 gap-x-0 md:w-full md:grid-rows-[max-content_1fr]">
          <HomeLoanForm />
          <FormResults />
        </div>
      </section>
    </main>
  );
}

export default App;
