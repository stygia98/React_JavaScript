import { useContext } from "react";
import { BoardStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useBoard = (id, isDeleting = false) => {
  const data = useContext(BoardStateContext);
  const nav = useNavigate();

  const currentBoardItem = data.find((item) => String(item.id) === String(id));

  if (!currentBoardItem && !isDeleting) {
    window.alert("존재하지 않는 게시글입니다.");
    nav("/board", { replace: true });
  }

  return currentBoardItem;
};

export default useBoard;
