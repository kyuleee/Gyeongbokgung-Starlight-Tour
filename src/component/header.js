import { Link, useState } from 'react';
import '../css/header.css'


const Header  = () => {
  //public에 있는 이미지 가져 올 수 있는 함수
  const imgUrl = process.env.PUBLIC_URL
  const [hamMenuOpen, setHamMenuOpen] = useState(false)
  const clickHamMenu = ()=>{
    setHamMenuOpen(!hamMenuOpen)
  }
    return (
      <header className="stickyHead">
        <img alt='로고' className="headerLogo" src={imgUrl + 'img/Logo_white.png'}></img>
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
          <div className='hamMenu' onClick={clickHamMenu}>
            <div className={`topHamMenu ${hamMenuOpen ? "openTopHam" : ""}`}></div>
            <div className={`centerHamMenu ${hamMenuOpen ? "openCenterHam" : ""}`}></div>
            <div className={`botHamMenu ${hamMenuOpen ? "openbotHam" : ""}`}></div>
          </div>
        </div>
        {/* 오른쪽에서 나오는 햄버거 메뉴임 */}
        <div className={`openHam ${hamMenuOpen ? "clickOpen" : ""}`}>
          <div>
            <p>별빛야행 소개</p>
          </div>
          <div>
            <p>메인 프로그램 소개</p>
          </div>
          <div>
            <p>관련 행사 소개</p>
          </div>
          <div>
            <p>갤러리</p>
          </div>
          <div>
            <p>커뮤니티</p>
          </div>
        </div>
      </header>
     );
}
export default Header;