import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  
  return (
    <>
      <Header
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        title={"새 일기 쓰기"}
      />
      <Editor onCreate={onCreate} />
    </>
  );
};

export default New;
