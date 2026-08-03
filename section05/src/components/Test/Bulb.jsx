import { useState } from "react";

const Bulb = ({ light }) => {
  //             ㄴ {light} 추가하고 <button> onClickTest() useState() // App.jsx 에
  // =========================================================
  // useState 사용하지 않은 일반 변수 사용법 // 작동안됨 x
  // let light = 'off';
  // const setLight = (value) => { StateTest.light = value; }
  // =========================================================
  // useState 사용한 방법 // 정상작동 o
  // const [light, setLight] = useState('off');

  // const onClickTest = (e) => {
  //   let value = (light === 'on') ? 'off' : 'on';
  //   setLight(value);
  // }

  return (
    <>
      <div>
        <h1>전구 {light}</h1>
        {/* <button onClick={onClickTest}>{light === "on" ? 'On' : 'Off'}</button> */}
      </div>
    </>
  );
};

export default Bulb;
