import "../css/TodoItem.css";
import { memo } from "react";

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

// React.memo 문제점 (props 객체 값의 변동에 대한 작동 o 
// 핸들러 함수 변동에 대한 작동 x)
// Higher Order Component 사용
export default TodoItem;

// export default memo(TodoItem, (prevProps, nextProps)=>{
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;
//   return true;
// });
