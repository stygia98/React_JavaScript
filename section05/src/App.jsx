import "./css/App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false); // isMount.current = false;
  // 마운트, 업데이트 훅
  // useEffect(() => {
  //   console.log(`count : ${count} / input : ${input}`);
  // }, [count, input]);
  useEffect(() => {
    console.log(`isMount : ${isMount.current}`);
  }, []);
  // 업데이트
  useEffect(() => {
    if (isMount.current === false) {
      isMount.current = true;
      return;
    }
    console.log(`update`);
  });

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        {count % 2 === 0 ? <Even /> : <h1>Odd</h1>}
        <section>
          <input
            type="text"
            name="desc"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </section>
        <section>
          <Viewer count={count}></Viewer>
        </section>
        <section>
          <Controller
            onClickBtn={(value) => {
              setCount(count + value);
            }}
          ></Controller>
        </section>
      </div>
    </>
  );
}

export default App;
// npm run dev
