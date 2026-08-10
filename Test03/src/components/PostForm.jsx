import "../css/PostForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PostForm({ initData, onSubmitButton, isEdit = false }) {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (initData) {
      setTitle(initData.title || "");
      setContent(initData.content || "");
      setAuthor(initData.author || "");
    }
  }, [initData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || (!isEdit && !author.trim())) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    onSubmitButton({ title, content, author });
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {!isEdit && (
        <input
          type="text"
          placeholder="작성자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      )}
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="10"
      />
      <div className="button-group">
        <button type="submit" className="btn btn-primary">
          {isEdit ? "수정 완료" : "등록"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => nav(-1)}
        >
          취소
        </button>
      </div>
    </form>
  );
}
