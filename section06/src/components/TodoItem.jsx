import "../css/TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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
