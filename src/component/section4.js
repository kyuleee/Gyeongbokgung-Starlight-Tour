import '../css/section4.css'

const Section4 = () => {
    return (  
        <section className='section4'>
            <div className="sec4Padding w1500 flex">
                <article className="section4Aticle">
                    <h1>경복궁 커뮤니티</h1>
                    <button className="programMoreBtn sec4MoreBtn">더보기</button>
                </article>
                <article className="section4Aticle">
                    <div className="notice flex">
                        <p className='noticeTXT'>경복궁에서 마주한 특별한 시간</p>
                        <p className='noticeDate'>2023.09</p>
                    </div>
                    <div className="notice flex">
                        <p className='noticeTXT'>궁궐 일상모습 재현 및 체험</p>
                        <p className='noticeDate'>2023.09</p>
                    </div>
                    <div className="notice flex">
                        <p className='noticeTXT'>아티스트가 사랑한 궁</p>
                        <p className='noticeDate'>2023.09</p>
                    </div>
                    <div className="notice flex">
                        <p className='noticeTXT'>2023 수라간 시식공감</p>
                        <p className='noticeDate'>2023.09</p>
                    </div>
                    <div className="notice flex">
                        <p className='noticeTXT'>판소리로 듣는 궁 이야기</p>
                        <p className='noticeDate'>2023.09</p>
                    </div>  
                </article>
            </div>
        </section>
    );
}
 
export default Section4;