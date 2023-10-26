import '../css/header.css'
import logo from "../img/Logo_white.png"
import loginIcon from "../img/login.png"

const Header  = () => {
    return ( 
        <header className="stickyHead">
        <img className="logo" src={logo}></img>
        <ul>
          <li>별빛야행 소개</li>
          <li>메인 프로그램</li>
          <li>경복궁 행사</li>
          <li>갤러리</li>
          <li>커뮤니티</li>
        </ul>
        <div className="headRight">
          <img className="loginIcon" src={loginIcon}></img>
          <p>ENG</p>
        </div>
      </header>
     );
}
 
export default Header;