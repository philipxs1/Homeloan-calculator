import { type PropsWithChildren } from "react";

const Fieldset = ({ children }: PropsWithChildren) => {
  return <fieldset className="col-span-2 flex flex-col ">{children}</fieldset>;
};

export default Fieldset;
