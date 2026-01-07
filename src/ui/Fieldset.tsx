interface FieldSetProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Fieldset = ({ title, description, children }: FieldSetProps) => {
  return (
    <fieldset className="col-span-2 flex flex-col gap-2 pb-5">
      <legend>{title}</legend>
      {description && (
        <p className="pb-1 text-sm text-gray-500">{description}</p>
      )}
      {children}
    </fieldset>
  );
};

export default Fieldset;
