import "../css/NewPost.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostDispatchContext } from "../App";
import PostForm from "../components/PostForm";

export default function NewPost() {
  const { onCreate } = useContext(PostDispatchContext);
  const nav = useNavigate();

  const handleCreate = (data) => {
    onCreate(data);
    nav("/", { replace: true });
  };

  return (
    <div className="container">
      <h2>새 글 작성</h2>
      <PostForm onSubmitButton={handleCreate} isEdit={false} />
    </div>
  );
}
