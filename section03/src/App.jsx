import "./css/App.css"
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClickBtn = (value) => { setCount(count + value) };

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count}></Viewer>
        </section>
        <section>
          <Controller onClickBtn = {onClickBtn}></Controller>
        </section>
      </div>
    </>
  );
}

export default App;
// npm run dev
