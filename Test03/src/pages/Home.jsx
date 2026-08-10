import "../css/Home.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostStateContext } from "../App";
import PostTable from "../components/PostTable";

export default function Home() {
  const posts = useContext(PostStateContext);
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const reversedPosts = [...filteredPosts].reverse();

  return (
    <div className="container">
      <h2>자유게시판</h2>

      <div className="home-top-bar">
        <input
          type="text"
          placeholder="검색어를 입력하세요 (제목/내용)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="btn btn-primary" onClick={() => nav("/new")}>
          글쓰기
        </button>
      </div>

      <PostTable posts={reversedPosts} />
    </div>
  );
}
