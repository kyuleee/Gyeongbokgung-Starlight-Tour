import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/header.css'
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';

const Header  = () => {
  const locationSection = useLocation();
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
  // Link 눌렀을 때 다른페이지에서 Top 0 시작 메인 페이지는 그대로 유지
  useEffect(()=>{
    locationSection.pathname !== '/festival/' &&
    window.scrollTo(0,0)
  })
  const { t } = useTranslation();
  const onChangeLang = () => {
    i18n.language === "ko"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko");
  };


    return (
      <header className="stickyHead">
        <div className='stickyWebNav'>
          <Link to="/festival/"><img alt='로고' className="headerLogo" src={imgUrl + '/img/Logo_white.png'}></img></Link>
          <ul>
            <Link to="/Guide"><li>{t('header.menu1')}</li></Link>
            <Link to="/Program"><li>{t('header.menu2')}</li></Link>
            <Link to="/Event"><li>{t('header.menu3')}</li></Link>
            <Link to="/NoticeList"><li>{t('header.menu4')}</li></Link>
            <Link to="/Gallery"><li>{t('header.menu5')}</li></Link>
          </ul>
          <div className="headRight">
            <Link to="/Login"><img alt='로그인 아이콘' className="loginIcon" src={imgUrl + `/img/login.png`}></img></Link>
            
            <button onClick={() => onChangeLang()}>{t('header.btn')}</button>
           
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
          <Link to="/Guide" onClick={closeHamMenu}><p>{t('header.menu1')}</p></Link>
          </div>
          <div>
          <Link to="/Program" onClick={closeHamMenu}><p>{t('header.menu2')}</p></Link>
          </div>
          <div>
          <Link to="/Event" onClick={closeHamMenu}><p>{t('header.menu3')}</p></Link>
          </div>
          <div>
          <Link to="/NoticeList" onClick={closeHamMenu}><p>{t('header.menu4')}</p></Link>
          </div>
          <div>
          <Link to="/Gallery" onClick={closeHamMenu}><p>{t('header.menu5')}</p></Link>
          </div>
        </div>
      </header>
     );
    
}
export default withTranslation()(Header);