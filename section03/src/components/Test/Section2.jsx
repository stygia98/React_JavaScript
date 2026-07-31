import "../css/Section.css";

const Section2 = () => {
  const user = {
    name: "홍길동",
    isLogin: true
  }

  return (
    <>
    {(user.isLogin)
      ? <div className="logStyle">{user.name} 로그아웃</div> 
      : <div className="logStyle">{user.name}로그인</div>}
    </>
  )

}

export default Section2;