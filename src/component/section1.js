import "../css/section1.css";

const Section1 = () => {

    return ( 
        <section className="section1 w1500">
            <article className="section1Article">
                <div>
                    <h1 className="section1Title"><a>경복궁 별빛야행</a></h1>
                    <p className="section1Content">경복궁의 가장 깊은 곳 북측 권역의 문이 열립니다.</p>
                    <p className="section1Content">외소주방에서 궁중음식체험과 전통 공연을 즐기고,</p>
                    <p className="section1Content">전문 해설사와 함께 별빛 산책을 떠나보세요.</p>
                    <a className="moreBtn">더보기</a>
                </div>
                <div>
                    <table className="tableWrap">
                        <tr>
                            <td className="titleBox"><sapn>행</sapn><span>사</span><span>명</span></td>
                            <td className="titleBoxContent">2023 경복궁 별빛야행</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>기</span><span>간</span></td>
                            <td className="titleBoxContent">2023년 09월 08일 ~ 2023년 11월 13일</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>장</span><span>소</span></td>
                            <td className="titleBoxContent">경복궁, 소주방, 북측전각 일대</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>행</span><span>사</span><span>문</span><span>의</span></td>
                            <td className="titleBoxContent">1522-2295</td>
                        </tr>
                        <tr>
                            <td className="titleBox"><span>프</span><span>로</span><span>그</span><span>램</span></td>
                            <td className="titleBoxContent">별빛산책로, 도슭수라상, 음식구성</td>
                        </tr>
                    </table>
                </div>
            </article>
        </section>
     );
}
 
export default Section1;