import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='className="mx-auto max-w-screen-2xl px-4 py-2 md:px-6 md:py-20 lg:px-8 xl:px-10'>
      {children}
    </div>
  );
};

export default Container;
