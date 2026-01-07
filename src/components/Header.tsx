const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-(--space-lg)">
      <p>
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium tracking-widest uppercase">
          Borrowing power
        </span>
      </p>

      <h1 className="mx-auto text-center text-6xl leading-tight font-black lg:whitespace-nowrap">
        <span className="md:block">
          <span>Home loan borrowing calculator</span>
        </span>
      </h1>

      <p className="mx-auto max-w-[50ch] text-center text-xl text-gray-700">
        Run the numbers to get an upfront estimate of your borrowing power.
      </p>
    </div>
  );
};

export default Header;
