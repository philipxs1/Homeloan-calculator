interface RadioGroupProps<T> {
  options: { label: string; value: T }[];
  selectedValue: T;
  setSelectedValue: (value: T) => void;
  name: string;
}

export const RadioGroup = <T,>({
  options,
  selectedValue,
  setSelectedValue,
  name,
}: RadioGroupProps<T>) => {
  const selectedIndex = options.findIndex((opt) => opt.value === selectedValue);

  return (
    <div
      role="radiogroup"
      className="relative mt-1 grid h-12 grid-cols-2 rounded-md bg-gray-100 overflow-hidden border-2 border-gray-200">
      <div
        aria-hidden="true"
        className={`absolute h-full w-1/2 rounded-md bg-white transition-transform duration-200 border-black border-2 ease-out`}
        style={{ transform: `translateX(${selectedIndex * 100}%)` }}
      />

      {options.map((opt, idx) => (
        <label
          key={idx}
          htmlFor={`${name}-${idx}`}
          className="relative z-10 flex cursor-pointer items-center justify-center">
          <input
            id={`${name}-${idx}`}
            type="radio"
            name={name}
            className="sr-only peer"
            checked={selectedValue === opt.value}
            onChange={() => setSelectedValue(opt.value)}
          />
          <span className="text-sm font-normal peer-checked:font-bold">{opt.label}</span>
        </label>
      ))}
    </div>
  );
};
