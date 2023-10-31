import "../css/footer.css";
import {Link} from 'react-router-dom'

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
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
                    <span className="youtube"><a href="https://www.youtube.com/watch?v=jyJZ211wQuM" target='_blank'><img src={process.env.PUBLIC_URL + './img/youtube.png'}/></a></span>
                    {/* <span className="youtube"><a href="https://www.youtube.com/watch?v=jyJZ211wQuM" target='_blank'><img src={process.env.PUBLIC_URL + './img/instagram.png'}/></a></span> */}
                    <span className="instagram"><a href="https://www.instagram.com/gyeongbokgung_palace_official/" target='_blank'><img src={process.env.PUBLIC_URL + './img/instagram.png'}/></a></span>
                </div>
                <p className="copy">Copyright(c) 2023 Gyeongbokgung Night Trip. All right reserved</p>
            </div>
            <ul className='fnb'>
                <li onClick={() => scrollToSection('section1')}>별빛야행 소개</li>
                <li onClick={() => scrollToSection('section2')}>메인 프로그램</li>
                <li onClick={() => scrollToSection('section3')}>경복궁 행사</li>
                <li onClick={() => scrollToSection('section4')}>커뮤니티</li>
                <li onClick={() => scrollToSection('section5')}>갤러리</li>
            </ul>
        </footer>
     );
}
export default Footer;