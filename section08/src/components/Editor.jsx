import "../css/Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDownContent = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <>
      <div className="Editor">
        <input
          type="text"
          ref={inputRef}
          value={content}
          placeholder="insert Todo list"
          onChange={onChangeContent}
          onKeyDown={onKeyDownContent}
        />
        <button onClick={onSubmit}>Add</button>
      </div>
    </>
  );
};

export default Editor;
