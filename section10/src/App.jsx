import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import getEmotionImage from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-02-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2026-08-05").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2026-08-06").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 4,
    createdDate: new Date("2026-08-07").getTime(),
    emotionId: 4,
    content: "4번 일기 내용",
  },
];

function reducer(data, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...data];
    case "UPDATE":
      return data.map((item)=> String(item.id) === String(action.data.id) ? action.data : item );
    case "DELETE":
      return data.filter((item) => String(item.id) !== String(action.data.id));
    default:
      break;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);
  const nav = useNavigate();

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate: createdDate.getTime(),
        emotionId: emotionId,
        content: content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        createdDate: createdDate.getTime(),
        emotionId: emotionId,
        content: content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id: id,
      },
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/New/*" element={<New></New>}></Route>
            <Route path="/Edit/:id" element={<Edit></Edit>}></Route>
            <Route path="/Diary/:id" element={<Diary></Diary>}></Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
