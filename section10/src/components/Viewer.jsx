import "../css/Viewer.css";
import getEmotionImage from "../util/get-emotion-image";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "보통" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "완전 나쁨" },
];

const Viewer = ({ id, createdDate, content, emotionId }) => {
  // const emotionId = 1;
  const nav = useNavigate();

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId),
  );

  return (
    <div className="Viewer">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(new Date(createdDate))}
          readOnly
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem ? emotionItem.emotionName : ""}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          name="content"
          value={content}
          readOnly
        />
      </section>
      <section className="button_section">
        <Button
          text={"리스트로 돌아가기"}
          type={"POSITIVE"}
          onClick={() => nav("/", { replace: true })}
        />
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

export default Viewer;
