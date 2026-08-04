import "../css/Header.css";
import { memo } from "react";

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

// const memorizeHeader = memo(Header);
// export default memorizeHeader;

export default memo(Header);
