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
    title: "오늘 저녁 메뉴 추천 부탁드려요",
    content: "퇴근하고 집에 가는데 매콤한 게 당기네요. 다들 뭐 드시나요?",
    author: "김철수",
    date: "2026-08-06",
  },
  {
    id: 2,
    title: "주말에 보기 좋은 넷플릭스 추천",
    content: "요즘 볼만한 재밌는 드라마나 영화 있을까요?",
    author: "이영희",
    date: "2026-08-07",
  },
  {
    id: 3,
    title: "집 앞 카페 분위기가 너무 좋네요",
    content: "커피 한 잔 마시면서 책 읽기 딱 좋은 날입니다.",
    author: "박민수",
    date: "2026-08-08",
  },
  {
    id: 4,
    title: "분당/성남 근처 산책로 추천 좀 해주세요",
    content: "저녁에 가볍게 걷기 좋은 탄천 코스 아시는 분?",
    author: "홍길동",
    date: "2026-08-09",
  },
  {
    id: 5,
    title: "고양이 키우시는 분들 질문있습니다!",
    content: "간식 추천이랑 자동 급식기 어떤 거 쓰시는지 궁금해요.",
    author: "성춘향",
    date: "2026-08-10",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data]
      // return action.data ? [...state, action.data] : state;
    case "UPDATE":
      return state.map((item) => item.id === action.data.id ? action.data : item );
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
