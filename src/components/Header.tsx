const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-(--space-lg)">
      <p>
        <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-medium uppercase tracking-widest">
          Borrowing power
        </span>
      </p>

      <h1 className="mx-auto  text-center lg:whitespace-nowrap  text-6xl  font-black leading-tight">
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
