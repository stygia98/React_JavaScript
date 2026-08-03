import useInput from "../../hooks/useInput.jsx";

// function useInput() {
//   const[input, setInput] = useState('');
//   const onChange = (e) => { setInput(e.target.value); };
//   return [input, onChange];
// }

const HookExam = () => {
  // const [input, setInput] = useState("");
  // const [input2, setInput2] = useState("");
  // const onChange = (e) => { setInput(e.target.value); };
  // const onChange2 = (e) => { setInput2(e.target.value); };

  const [input1, onChange1] = useInput('');
  const [input2, onChange2] = useInput('');
  const [input3, onChange3] = useInput('');

  return (
    <>
      <div>
        <input type="text" value={input1} onChange={onChange1} />
        <input type="text" value={input2} onChange={onChange2} />
        <input type="text" value={input3} onChange={onChange3} />
      </div>
    </>
  );
};

export default HookExam;
