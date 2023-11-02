import "../css/footer.css";
import {Link} from 'react-router-dom';
import youtube from '../img/icon_sns4.png';
import insta from '../img/icon_sns3.png';

const Footer = () => {
    const handleMenuClick = (id) => {
        const section = document.getElementById(id);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return ( 
        <footer className='w1500'>
            <div className='footerLeft'>
                <div className='logo'><img src={process.env.PUBLIC_URL + './img/Logo_white.png'}/></div>
                <div className="tel">
                    <p><span>주소</span>(06153) 서울특별시 강남구 봉은사로 406 (삼성동 112-2)</p>
                    <p><span>전화번호</span>(02) 566-6300 </p>
                </div>
                <div className="sns">
                    <span className="youtube"><a href="https://www.youtube.com/watch?v=jyJZ211wQuM" target='_blank'><img src={youtube}/></a></span>
                    <span className="instagram"><a href="https://www.instagram.com/gyeongbokgung_palace_official/" target='_blank'><img src={insta}/></a></span>
                </div>
                <p className="copy">Copyright(c) 2023 Gyeongbokgung Night Trip. All right reserved</p>
            </div>
            <ul className='fnb'>
                <li onClick={() => handleMenuClick('section1')}>별빛야행 소개</li>
                <li onClick={() => handleMenuClick('section2')}>메인 프로그램</li>
                <li onClick={() => handleMenuClick('section3')}>경복궁 행사</li>
                <li onClick={() => handleMenuClick('section4')}>커뮤니티</li>
                <li onClick={() => handleMenuClick('section5')}>갤러리</li>
            </ul>
        </footer>
     );
}
 
export default Footer;