import FormResults from "./components/form/FormResults";

import Header from "./components/Header";
import HomeLoanForm from "./components/form/HomeLoanForm";
import { FormProvider } from "./context/FormProvider";
import Container from "./ui/Container";

function App() {
  return (
    <main>
      <Container>
        <Header />
      </Container>
      <Container>
        <div className="md:grid-rows-2-[max-content_1fr] mx-auto grid max-w-7xl grid-cols-12 gap-x-0 gap-y-12 md:w-full md:grid-rows-1 md:gap-8">
          <FormProvider>
            <HomeLoanForm />
            <FormResults />
          </FormProvider>
        </div>
      </Container>
    </main>
  );
}

export default App;
