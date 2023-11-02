import '../pageCss/section2_subPage.css'
import headerImg from '../img/headerImg.png';
import programImg1a from '../img/img1.jpg';
import programImg1b from '../img/img5.png';
import programImg2a from '../img/img6.png';
import programImg2b from '../img/img2.jpg';                                                                                                                                                                                                                 
import programImg3a from '../img/img3.jpg';
import programImg3b from '../img/img7.png';
import programImg4a from '../img/img4.jpg';
import programImg4b from '../img/img8.png';

const Section2_subPage = () => {
  

    return (  
        <section className='section2_subPage'>
            <div className='w1500'>
                <div className='section2SubHeader'>
                    <div><img src={headerImg}></img></div>
                    <h2>메인 프로그램</h2>
                </div>
                <div className='section2SubTop'>
                    <article className='section2SubTopLeft'>
                        <h1>경복궁 별빛야행</h1>
                        <p>프로그램</p>
                        <p>현장 상황에 따라 프로그램이 변경될 수 있습니다.</p>
                    </article>
                    <article className='section2SubTopRight'>
                        <h2>경복궁 별빛야행</h2>
                    </article>
                </div>
                <div className='section2SubMain'>
                    <h2>궁중음식 체험</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg1a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>소주방</h2>
                            <p>궁궐의 부엌인 ‘소주방’에 들러 조선의 왕이 먹던 일상식인 12첩 반상을 맛보게 됩니다.</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg1b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>도슭수라상</h2>
                            <p>조선의 왕이 먹던 일상식인 12첩 반상을 현대적으로 재해석한 ‘도슭수라상’을 맛보게 됩니다.</p>
                            <p>왕과 왕비만 받을 수 있었던 최고의 일상식인 12첩 반상을 현대적으로 해석해 합에 조금씩 담아냈습니다.</p>
                            <p>도슭수라상을 구성하는 열두 가지 음식에는 선조들의 음식 철학인 </p>
                            <p>음양오행 陰陽五行과 약식동원 藥食同源의 의미가 담겨 있습니다.</p>
                        </div>
                    </article>
                </div>    

                <div className='section2SubMain'>
                    <h2>국악공연 관람</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg2a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>국악공연 관람</h2>
                            <p>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg2b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>국악공연 관람</h2>
                            <p>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                        </div>
                    </article>
                </div>    

                <div className='section2SubMain'>
                    <h2>야간해설탐방</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg3a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>야간해설탐방</h2>
                            <p>경복궁 북측 권역을 탐방하며, 복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg3b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>야간해설탐방 이동경로</h2>
                            <p>①국립민속박물관 앞(집결) → ②외소주방(궁중음식 체험 및 국악공연 관람) →</p>
                            <p>③장고→ ④집옥재·팔우정 → ⑤건청궁 → ⑥향원정</p>
                        </div>
                    </article>
                </div>    

                <div className='section2SubMain'>
                    <h2>한복무료관람</h2>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg4a}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>가이드라인</h2>
                            <p>전통한복, 생활한복  모두 무료관람 대상</p>
                            <p>상의(저고리)와 하의(치마, 바지)를 기본으로  함.</p>
                            <p>여미는 깃 형태 유지</p>
                            <p>사복바지 형태에 준하는 바지</p>
                            <p>통치마, 풀치마 등 형식 제한 없음</p>
                        </div>
                    </article>
                    <article className='flex2'>
                        <div className='section2SubMainImg'>
                            <img src={programImg4b}></img>
                        </div>
                        <div className='section2SubMainTxt'>
                            <h2>주의사항</h2>
                            <p>티셔츠 형태의 생활한복 저고리는 인정하지 않습니다. </p>
                            <p>여미는 깃의 저고리와 하의 모두 갖춘 경우에만 한복으로 인정합니다.</p>
                        </div>
                    </article>
                </div>    
            </div>
        </section>
    );
}
 
export default Section2_subPage;