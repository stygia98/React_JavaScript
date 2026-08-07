import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Updater from "../components/Updater";
import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext, DiaryDispatchContext } from "../App";

const Edit = () => {
  const [currentDiary, setCurrentDiary] = useState();
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

  useEffect(()=>{
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기");
      nav("/", {replace: true});
      return null;
    } 
  }, [])

  // useEffect(() => {
  //   const currentDiaryItem = data.find( (item) => String(item.id) === String(params.id) );

  //   if (!currentDiaryItem) {
  //     window.alert("존재하지 않는 일기");
  //     nav("/", { replace: true });
  //     return;
  //   }

  //   setCurrentDiary(currentDiaryItem);
  // }, [params.id, data, nav]);

  const onClickDelete = () => {
    if (window.confirm("영구삭제 (복구되지않음)")) {
      onDelete(params.id);
      nav("/", {replace: true});
      return;
    }
  }

  return (
    <>
      <Header
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        title={"수정하기"}
        rightChild={<Button text={"삭제 하기"} onClick={onClickDelete} type={"NEGATIVE"}/>}
      />
      <Updater onUpdate={onUpdate} initData={currentDiaryItem} />
      {/* { Number(params.id) > 0 
        ? <Editor onUpdate={onUpdate} initData={currentDiary} />
        : <Editor onDelete={onDelete} initData={currentDiary} />
      } */}
      
    </>
  );
};

export default Edit;
