import "../css/Header.css";

const Header = () => {
  return (
    <>
      <div>
        <div className="Header">
          <h3>📅 today is</h3>
          <h1>{new Date().toDateString()}</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
