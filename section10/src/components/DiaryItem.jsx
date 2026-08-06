import "../css/DiaryItem.css";
import Button from "./Button";
import getEmotionImage from "../util/get-emotion-image";

const DiaryItem = ({id, emotionId, createdData, content}) => {
  // const emotionId = 1;

  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date(createdData).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
