import "../css/NotFound.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>잘못된 페이지입니다.</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        존재하지 않는 주소이거나 삭제된 페이지예요.
      </p>

      <button
        onClick={() => nav("/", { replace: true })}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        홈으로 가기
      </button>
    </div>
  );
};

export default NotFound;
