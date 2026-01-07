import FormResults from "./components/form/FormResults";

import Header from "./components/Header";
import HomeLoanForm from "./components/form/HomeLoanForm";
import { FormProvider } from "./context/FormProvider";

function App() {
  return (
    <main className="bg-slate-100">
      <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-6 md:py-20 lg:px-8 xl:px-10">
        <Header />
      </section>
      <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-6 md:py-20 lg:px-8 xl:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-x-0 gap-y-12 md:w-full md:grid-rows-1 md:gap-8">
          <FormProvider>
            <HomeLoanForm />
            <FormResults />
          </FormProvider>
        </div>
      </section>
    </main>
  );
}

export default App;
