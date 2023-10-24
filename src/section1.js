import "./section1.css";

const Section1 = () => {

    return ( 
        <section className="section1">
            <article className="w1320">
                <div>
                    <h2>경복궁 별빛야행</h2>
                    <h2 className="txtBorder">정보</h2>
                    <p>
                        경복궁의 가장 깊은 곳 북측 권역의 문이 열립니다.
                        <br/>외소주방에서 궁중음식체험과 전통 공연을 즐기고,
                        <br/>전문 해설사와 함께 별빛 산책을 떠나보세요.
                    </p>
                    <div className="btn_viewmore">VIEWMORE</div>
                </div>
                <ul>
                    <li>
                        <h3>
                            <span>행</span>
                            <span>사</span>
                            <span>명</span>
                        </h3>
                        <p>2023 경복궁 별빛야행</p>
                    </li>
                    <li>
                        <h3>
                            <span>기</span>
                            <span>간</span>
                        </h3>
                        <p>2023. 9. 8 ~ 10. 8</p>
                    </li>
                    <li>
                        <h3>
                            <span>장</span>
                            <span>소</span>
                        </h3>
                        <p>경복궁 소주방, 북측전각 일대</p>
                    </li>
                    <li>
                        <h3>
                            <span>행</span>
                            <span>사</span>
                            <span>문</span>
                            <span>의</span>
                        </h3>
                        <p>1522-2295</p>
                    </li>
                    <li>
                        <h3>
                            <span>프</span>
                            <span>로</span>
                            <span>그</span>
                            <span>램</span>
                        </h3>
                        <p>수라상, 국악공연 관람, 야간해설탐방, 한복무료관람</p>
                    </li>
                </ul>
            </article>
        </section>
     );
}
 
export default Section1;