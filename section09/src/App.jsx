import "./App.css";
import Header from "./components/header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";
import { useRef, useState, useReducer, useCallback, createContext, useMemo } from "react";

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

function reducer(todos, action) {
    switch (action.type){
    case "CREATE": 
      return [action.data, ...todos];
    case "UPDATE": 
      return todos.map((todo)=>{
        return todo.id === action.data ? {...todo, isDone: !todo.isDone} : todo;
      }) 
    case "DELETE": 
      return todos.filter((todo) => todo.id !== action.data);
    default: 
      return todos;
  }
}

// export const TodoContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {    
    dispatch({
        type:"CREATE", data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }})
    }, [])

  const onUpdate = useCallback((id) => {
      dispatch({
        type: "UPDATE", data: id
      })
  }, [])

  const onDelete = useCallback((id) => {
      dispatch({
        type: "DELETE", data: id
      })
  }, [])

  const memorizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  }, [onCreate, onUpdate, onDelete])

  return (
    <>
      <h1>Today's Todo list</h1>
      <div className="App">
        <Header></Header>
        <TodoStateContext.Provider value={{todos}}>
        <TodoDispatchContext.Provider value={memorizedDispatch}>
        <Exam></Exam>
        <Editor></Editor>
        <List></List>
        </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>

      </div>
    </>
  );
}

export default App;
