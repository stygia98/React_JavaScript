import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useEffect } from "react";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id),
  );

  useEffect(() => {
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기");
      nav("/", { replace: true });
      return null;
    }
  }, []);

  return (
    <div>
      <Header
        title={getStringedDate(new Date(currentDiaryItem.createdDate))}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => nav("/", { replace: true })}
          />
        }
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer {...currentDiaryItem} />
    </div>
  );
};

function getStringedDate(targetDate) {
  if (!targetDate) return "";
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
}

export default Diary;
