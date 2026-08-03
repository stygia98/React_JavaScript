import "../css/List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

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

  return (
    <>
      <div className="List">
        <h4>Todo List</h4>
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
