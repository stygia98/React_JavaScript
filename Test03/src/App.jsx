import { createContext, useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";
import NotFound from "./pages/NotFound";
import "./App.css";

const initialPosts = [
  {
    id: 1,
    title: "첫 번째 게시글입니다",
    content: "자유게시판 오픈을 축하합니다!",
    author: "김철수",
    date: "2026-08-06",
  },
  {
    id: 2,
    title: "리액트 공부 팁 공유합니다",
    content: "useReducer와 useContext 조합이 정말 강력하네요.",
    author: "이영희",
    date: "2026-08-07",
  },
  {
    id: 3,
    title: "오늘 날씨가 정말 좋네요",
    content: "산책하기 딱 좋은 날씨입니다.",
    author: "박민수",
    date: "2026-08-08",
  },
  {
    id: 4,
    title: "맛집 추천받습니다",
    content: "성남시 근처 맛집 아시는 곳 있나요?",
    author: "홍길동",
    date: "2026-08-09",
  },
  {
    id: 5,
    title: "질문있습니다!",
    content: "react-router-dom v6에서 useNavigate 사용법이 궁금해요.",
    author: "성춘향",
    date: "2026-08-10",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return action.data ? [...state, action.data] : state;
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();

export default function App() {
  const [posts, dispatch] = useReducer(reducer, initialPosts);
  const dataIdRef = useRef(6);

  const onCreate = (data) => {
    const newPost = {
      id: dataIdRef.current,
      title: data.title,
      content: data.content,
      author: data.author,
      date: new Date().toISOString().slice(0, 10),
    };

    dispatch({ type: "CREATE", data: newPost });
    dataIdRef.current += 1;
  };

  const onUpdate = (data) => {
    dispatch({ type: "UPDATE", data });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <PostStateContext.Provider value={posts}>
      <PostDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}
