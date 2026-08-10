import "../css/EditPost.css";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostStateContext, PostDispatchContext } from "../App";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();
  const posts = useContext(PostStateContext);
  const { onUpdate } = useContext(PostDispatchContext);
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

  const handleUpdate = (data) => {
    const updatedPost = {
      ...post,
      title: data.title,
      content: data.content,
    };

    onUpdate(updatedPost);
    nav(`/post/${post.id}`, { replace: true });
  };

  return (
    <div className="container">
      <h2>글 수정</h2>
      <PostForm initData={post} onSubmitButton={handleUpdate} isEdit={true} />
    </div>
  );
}
