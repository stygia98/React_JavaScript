import { useState } from "react";

const Count = ({ count, setCount }) => {
  return (
    <>
      <div>
        <h1>버튼 카운트 : {count}</h1>
        <button onClick={() => setCount(count + 1)}>[ +1 ]</button>
        <br />
        <button onClick={() => setCount(count - 1)}>[ -1 ]</button>
      </div>
    </>
  );
};

export default Count;
