import "./footer.css";

const Footer = () => {

    return ( 
        <section className="footer">
            <h1 className="logoBox"><div className="logo"></div></h1>
            <div className="tel">
                <p><span>주소</span>(06153) 서울특별시 강남구 봉은사로 406 (삼성동 112-2) </p>
                <p><span>전화번호</span>(02) 566-6300 </p>
            </div>
            <div className="sns">
                <div className="fb"></div>
                <div className="kk"></div>
            </div>
            
            <p className="copy"> Copyright(c) 2023 Gyeongbokgung Night Trip. All right reserved</p>
      
        </section>
     );
}
 
export default Footer;