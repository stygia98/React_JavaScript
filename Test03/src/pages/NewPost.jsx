import "../css/NewPost.css";
import PostForm from "../components/PostForm";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostDispatchContext } from "../App";

const NewPost = () => {
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

export default NewPost;
