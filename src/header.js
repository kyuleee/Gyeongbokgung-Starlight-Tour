import './header.css'

const Header  = () => {
    return ( 
        <header className="Sticky_nav">
        <div className="LOGO"></div>
        <ul>
          <li>별빛야행 소개</li>
          <li>메인 프로그램 소개</li>
          <li>관련 행사 소개</li>
          <li>갤러리</li>
          <li>커뮤니티</li>
        </ul>
        <div>ENG</div>
      </header>
     );
}
 
export default Header;