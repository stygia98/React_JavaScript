import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotData, setPivotData] = useState(new Date());
  const monthlyDate = getMonthlyDate(pivotData, data)

//   pivotDate.getFullYear();
//   pivotDate.getMonth();

  function getMonthlyDate(pivotData, data){
    // 2026.08.01.00.00.00 ~ 2026.08.31.23.59.59 === 2026.09.00.23.59.59
    const beginTime = new Date( pivotData.getFullYear(), pivotData.getMonth(), 1, 0, 0, 0 ).getTime();
    const endTime = new Date( pivotData.getFullYear(), pivotData.getMonth() + 1, 0, 23, 59, 59 ).getTime();
    const monthlyDate = data.filter( (item) => item.createdDate >= beginTime && item.createdDate <= endTime, );
    return monthlyDate;
  }

  const onDecreaseMonth = () => { setPivotData(new Date(pivotData.getFullYear(), pivotData.getMonth()-1)) }
  const onIncreaseMonth = () => { setPivotData(new Date(pivotData.getFullYear(), pivotData.getMonth()+1)) }

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
        title={`${pivotData.getFullYear()}년 ${pivotData.getMonth()+1}월`}
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
      />
      <DiaryList data={monthlyDate}></DiaryList>
    </div>
  );
};

export default Home;
