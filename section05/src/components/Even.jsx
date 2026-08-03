import { useEffect, useState } from "react";

const Even = () => {
  useEffect(() => {
    //mount call
    console.log(`Even mount`);

    //unmount call
    return () => {
      console.log(`Even unmount`);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Even</h1>
      </div>
    </>
  );
};

export default Even;
