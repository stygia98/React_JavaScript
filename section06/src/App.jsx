import "./App.css";
import Header from "./components/header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Today's Todo list</h1>
      <div className="App">
        <Header></Header>
        <Editor onCreate={onCreate}></Editor>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}></List>
      </div>
    </>
  );
}

export default App;
