const FormResults = () => {
  return (
    <section className="col-span-12 row-start-2 md:row-start-1 border-2 border-black bg-white p-8 max-h-min md:col-span-5 md:col-start-8 self-start rounded-xl">
      <div className="flex flex-col gap-5">
        <p className="mb-2">
          <span className="px-2 py-1 bg-green-300 rounded-2xl text-xs">Phil's Own</span>
        </p>
        <p className="font-black text-xl">You may be able to borrow up to</p>
        <p>
          <span className="text-2xl font-bold">$000,000</span>
        </p>
      </div>
    </section>
  );
};

export default FormResults;
