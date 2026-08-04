import "../css/TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onCilickBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkBox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="data">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onCilickBtn}>Delete</button>
    </div>
  );
};

export default TodoItem;
