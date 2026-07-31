import { useState, useRef } from "react";

const Register2 = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // const countRef = useRef(0);
  const inputRef = useRef();

  const onChangeInput = (e) => {
    // console.log(`${e.target.name} : ${e.target.value}`);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <h1>회원가입폼</h1>
        <div>
          <div>
            <input
              name="name"
              type="text"
              ref={inputRef}
              value={input.name}
              onChange={onChangeInput}
              placeholder="홍길동"
            />
          </div>
          <div>
            <input
              name="birth"
              type="date"
              value={input.birth}
              onChange={onChangeInput}
            />
          </div>
          <div>
            <select
              name="country"
              value={input.country}
              onChange={onChangeInput}
            >
              <option value="kr">한국</option>
              <option value="us">미국</option>
              <option value="uk">영국</option>
            </select>
          </div>
          <div>
            <textarea name="bio" value={input.bio} onChange={onChangeInput} />
          </div>
          <div>
            <button onClick={onSubmit}>[전송]</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register2;
