const Button = ({ color = "black", text = "홍길동", children }) => {
  const onClickButton = (e) => {
    alert(text);
  };

  return (
    <>
      <button
        onClick={onClickButton}
        style={{ color: color, width: "100px", margin: "0 auto" }}
      >
        {text}
        {children}
      </button>
    </>
  );
};

export default Button;
