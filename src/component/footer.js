import "../css/footer.css";
import {Link, useLocation} from 'react-router-dom';
import youtube from '../img/icon_sns4.png';
import insta from '../img/icon_sns3.png';
import { withTranslation,useTranslation } from 'react-i18next';
import i18n from '../lang/i18n'

const Footer = () => {
    const { t } = useTranslation();

    const locationSectionFooter = useLocation();
    console.log(locationSectionFooter.pathname)
    const ClickGuide = ()=>{
        window.scrollTo({
            top: `1390`,
            behavior: `smooth`
        })
    }
    const ClickProgram = ()=>{
        window.scrollTo({
            top: `2100`,
            behavior: `smooth`
        })
    }
    const ClickEvent = ()=>{
        window.scrollTo({
            top: `8177`,
            behavior: `smooth`
        })
    }
    const ClickCommunity = ()=>{
        window.scrollTo({
            top: `9200`,
            behavior: `smooth`
        })
    }
    const ClickGallery = ()=>{
        window.scrollTo({
            top: `10350`,
            behavior: `smooth`
        })
    }
    return ( 
        <footer className='w1500'>
            <div className='footerLeft'>
                <Link to="/festival/"><div className='logo'><img src={process.env.PUBLIC_URL + '/img/Logo_white.png'}/></div></Link>
                <div className="tel">
                    <p><span>{t('footer.addr')}</span>{t('footer.addr_cnt')}</p>
                    <p><span>{t('footer.tel')}</span>(02) 566-6300 </p>
                </div>
                <div className="sns">
                    <span className="youtube"><a href="https://www.youtube.com/watch?v=jyJZ211wQuM" target='_blank'><img src={youtube}/></a></span>
                    <span className="instagram"><a href="https://www.instagram.com/gyeongbokgung_palace_official/" target='_blank'><img src={insta}/></a></span>
                </div>
                <p className="copy">Copyright(c) 2023 Gyeongbokgung Night Trip. All right reserved</p>
            </div>
            <ul className='fnb'>
                {locationSectionFooter.pathname == '/festival/' && (
                <>
                <li onClick={ClickGuide}>{t('footer.sec1')}</li>
                <li onClick={ClickProgram}>{t('footer.sec2')}</li>
                <li onClick={ClickEvent}>{t('footer.sec3')}</li>
                <li onClick={ClickCommunity}>{t('footer.sec4')}</li>
                <li onClick={ClickGallery}>{t('footer.sec5')}</li>
                </>
                )}
            </ul>
        </footer>
     );
}
 
export default withTranslation()(Footer);