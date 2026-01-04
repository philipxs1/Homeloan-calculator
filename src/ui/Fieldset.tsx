interface FieldSetProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Fieldset = ({ title, description, children }: FieldSetProps) => {
  return (
    <fieldset className="col-span-2 flex flex-col ">
      <legend>{title}</legend>
      {description && <p className="text-sm text-gray-500 pb-1">{description}</p>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
