import { useReducer, useState } from "react";

function reducer(count, action) {
  switch (action.type){
    case "PLUS": return count + action.data;
    case "MINUS": return count - action.data;
    default: return count;
  }
};

const Exam = () => {
  // const [count, setCount] = useState(0);
  // const onClickPlus = () => { setCount(count +1) };
  // const onClickMinus = () => { setCount(count -1) };
  
  const [count, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => { dispatch({type:"PLUS", data:1}) };
  const onClickMinus = () => { dispatch({type:"MINUS", data:1}) };

  return (
    <>
      <div>
        <div className="Exam">
          <h3>Exam</h3>
          <h1>{count}</h1>
          <button onClick={onClickMinus}>-1</button>
          <button onClick={onClickPlus}>+1</button>
        </div>
      </div>
    </>
  );
};

export default Exam;
