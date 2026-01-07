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
      className="relative mt-1 grid h-12 grid-cols-2 overflow-hidden rounded-md border-2 border-gray-200 bg-gray-100"
    >
      <div
        aria-hidden="true"
        className={`absolute h-full w-1/2 rounded-md border-2 border-black bg-white transition-transform duration-200 ease-out`}
        style={{ transform: `translateX(${selectedIndex * 100}%)` }}
      />

      {options.map((opt, idx) => (
        <label
          key={idx}
          htmlFor={`${name}-${idx}`}
          className="relative z-10 flex cursor-pointer items-center justify-center"
        >
          <input
            id={`${name}-${idx}`}
            type="radio"
            name={name}
            className="peer sr-only text-sm"
            checked={selectedValue === opt.value}
            onChange={() => setSelectedValue(opt.value)}
          />
          <span className="md: text-sm text-xs font-normal peer-checked:font-bold">
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  );
};
