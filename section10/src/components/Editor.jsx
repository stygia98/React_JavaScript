import "../css/Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const Editor = ({ onCreate }) => {
  const emotionId = 1;

  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 1,
    content: "",
  });

  const onClickSubmit = () => {
    onCreate(input.createdDate, input.emotionId, input.content);
    nav("/", { replace: true });
  };

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onClickSubmit} />
      </section>
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

export default Editor;
