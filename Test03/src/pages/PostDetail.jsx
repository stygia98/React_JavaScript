import "../css/PostDetail.css";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostStateContext, PostDispatchContext } from "../App";

export default function PostDetail() {
  const { id } = useParams();
  const posts = useContext(PostStateContext);
  const { onDelete } = useContext(PostDispatchContext);
  const [post, setPost] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const currentPost = posts.find((item) => String(item.id) === String(id));
    if (!currentPost) {
      window.alert("존재하지 않는 게시글입니다.");
      nav("/", { replace: true });
    } else {
      setPost(currentPost);
    }
  }, [id, posts, nav]);

  if (!post) return null;

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(Number(id));
      nav("/", { replace: true });
    }
  };

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <div className="post-info">
        <span>
          <strong>작성자:</strong> {post.author}
        </span>
        <span>
          <strong>작성일:</strong> {post.date}
        </span>
      </div>
      <hr className="divider" />
      <div className="post-content">{post.content}</div>
      <div className="button-group">
        <button
          className="btn btn-primary"
          onClick={() => nav(`/edit/${post.id}`)}
        >
          수정
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          삭제
        </button>
        <button className="btn btn-secondary" onClick={() => nav("/")}>
          목록으로
        </button>
      </div>
    </div>
  );
}
