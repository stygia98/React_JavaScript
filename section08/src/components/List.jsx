import "../css/List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterTodos = getFilterData();
  const [totalCount, doneCount, notDoneCount] = useMemo(()=>{
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    console.log(`getAnalyzeData call : ${totalCount} ${doneCount} ${notDoneCount}`);
    return [totalCount, doneCount, notDoneCount];
  }, [todos])

  // const getAnalyzeData = () => {
  //   const totalCount = todos.length;
  //   const trueTodos = todos.filter((todo)=>{
  //     return todo.isDone === true;
  //   })
  //   const doneCount = trueTodos.length;
  //   console.log(`getAnalyzeData call : ${totalCount} ${doneCount}`);
  // };

  // const getAnalyzeData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   console.log(`getAnalyzeData call : ${totalCount} ${doneCount} ${notDoneCount}`);
  //   return [totalCount, doneCount, notDoneCount];
  // };

  // const [totalCount, doneCount, notDoneCount] = useMemo();

  return (
    <>
      <div className="List">
        <h4>Todo List</h4>
        <div>
          <div>total : {totalCount}</div>
          <div>done : {doneCount}</div>
          <div>notDone : {notDoneCount}</div>
        </div>
        <input
          type="text"
          value={search}
          placeholder="Please insert word for searching"
          onChange={onChangeSearch}
        />
        <div className="todos_wrapper">
          {filterTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                onUpdate={onUpdate}
                onDelete={onDelete}
              ></TodoItem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
