import "../css/DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({data}) => {
  const [sortType, setSortType] = useState("latest");
  const nav = useNavigate();

  const getSortedDate = () => {
    return data.toSorted((a,b)=>{
      return sortType === 'latest' 
      ? Number(b.createdDate) - Number(a.createdDate) 
      : Number(a.createdDate) - Number(b.createdDate);
    })
  }

  // const sortedDate = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={(e)=>setSortType(e.target.value)}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={()=>{nav('/new')}}/>
      </div>
      <div className="list_wrapper">
        {getSortedDate().map((item)=> <DiaryItem key={item.id} {...item}/> )}
      </div>
    </div>
  );
};

export default DiaryList;
