import "../css/PostTable.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostTable = ({ posts }) => {
  const nav = useNavigate();

  return (
    <table className="post-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {posts.length > 0 ? (
          posts.map((post) => (
            <tr key={post.id} onClick={() => nav(`/post/${post.id}`)}>
              <td>{post.id}</td>
              <td className="title-column">{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="no-data">
              검색 결과가 없습니다.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PostTable;
