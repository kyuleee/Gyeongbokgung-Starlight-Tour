import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/header.css'
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';

const Header  = () => {
  //public에 있는 이미지 가져 올 수 있는 함수
  const imgUrl = process.env.PUBLIC_URL
  //메뉴바 토글
  const [hamMenuOpen, setHamMenuOpen] = useState(false)
  const clickHamMenu = ()=>{
    setHamMenuOpen(!hamMenuOpen)
  }
  const closeHamMenu = ()=>{
    setHamMenuOpen(false)
  }
  // Link 눌렀을 때 다른페이지에서 Top 0 시작
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  const { t } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')
  


    return (
      <header className="stickyHead">
        <div className='stickyWebNav'>
          <Link to="/"><img alt='로고' className="headerLogo" src={imgUrl + 'img/Logo_white.png'}></img></Link>
          <ul>
            <Link to="/Guide"><li>{t('header.menu1')}</li></Link>
            <Link to="/Program"><li>{t('header.menu2')}</li></Link>
            <Link to="/Event"><li>{t('header.menu3')}</li></Link>
            <Link to="/NoticeList"><li>{t('header.menu4')}</li></Link>
            <Link to="/Gallery"><li>{t('header.menu5')}</li></Link>
          </ul>
          <div className="headRight">
            <Link to="/Login"><img alt='로그인 아이콘' className="loginIcon" src={imgUrl + `img/login.png`}></img></Link>
            <button className={`ChangeKorean ${hamMenuOpen}`} onClick={changelanguageToKo}>Korean</button>
            <button className={`ChangeEnglish ${hamMenuOpen}`} onClick={changelanguageToEn}>English</button>  
            {/* <button onClick={() => onChangeLang()}>언어변경</button> */}
            <div className='hamMenu' onClick={clickHamMenu}>
              <div className={`topHamMenu ${hamMenuOpen ? "openTopHam" : ""}`}></div>
              <div className={`centerHamMenu ${hamMenuOpen ? "openCenterHam" : ""}`}></div>
              <div className={`botHamMenu ${hamMenuOpen ? "openbotHam" : ""}`}></div>
            </div>
          </div>
        </div>
        {/* 오른쪽에서 나오는 햄버거 메뉴임 */}
        <div className={`openHam ${hamMenuOpen ? "clickOpen" : ""}`}>
          <div>
          <Link to="/Guide" onClick={closeHamMenu}><p>별빛야행 소개</p></Link>
          </div>
          <div>
          <Link to="/Program" onClick={closeHamMenu}><p>메인 프로그램</p></Link>
          </div>
          <div>
          <Link to="/Event" onClick={closeHamMenu}><p>경복궁 행사</p></Link>
          </div>
          <div>
          <Link to="/Gallery" onClick={closeHamMenu}><p>갤러리</p></Link>
          </div>
          <div>
          <Link to="/NoticeList" onClick={closeHamMenu}><p>커뮤니티</p></Link>
          </div>
        </div>
      </header>
     );
    
}
export default withTranslation()(Header);