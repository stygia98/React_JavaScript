import "../css/Section.css";

const Section = () => {
  const user = {
    name: "홍길동",
    isLogin: true
  }

  if (user.isLogin) {
    return (
      <div className="logStyle">
        {user.name} 로그아웃
      </div>
    )
  } else {
    return (
      <div className="logStyle">
        {user.name} 로그인
      </div>
    )
  }
}

export default Section;