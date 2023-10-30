import '../css/header.css'


const Header  = () => {
  //public에 있는 이미지 가져 올 수 있는 함수
  const imgUrl = process.env.PUBLIC_URL

    return ( 
        <header className="stickyHead">
        <img alt='로고' className="logo" src={imgUrl + 'img/Logo_white.png'}></img>
        <ul>
          <li>별빛야행 소개</li>
          <li>메인 프로그램</li>
          <li>경복궁 행사</li>
          <li>갤러리</li>
          <li>커뮤니티</li>
        </ul>
        <div className="headRight">
          <img  alt='로그인 아이콘' className="loginIcon" src={imgUrl + `img/login.png`}></img>
          <p>ENG</p>
        </div>
      </header>
     );
}
 
export default Header;