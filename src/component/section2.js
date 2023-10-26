import "../css/section2.css";
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'



const Section2 = () => {

    return ( 
        <section className="section2">
            <article className="w1320">
                <div>
                    <div className="txtBox">
                        <h2>경복궁 프로그램</h2>
                        <h2>정보</h2>
                    </div>
                    <div className="eventBox">
                        <img src={img1}/>
                        <p className="tit">궁중음식 체험</p>
                        <p>'아티스트가 사랑한 궁'은 아티스트와 함께 
                            <br/>궁궐의 아름다움을 전하는 초청공연입니다.
                            <br/>가을밤, 특별한 선율이 흐르는 경복궁 집옥재로 여러분을 초대합니다.</p>
                    </div>
                </div>
                <div className="eventBox">
                    <img src={img2}/>
                    <p className="tit">국악공연 관람</p>
                    <p>맛있는 수라상을 먹는 동안 국악공연이 
                    <br/>함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                </div>
                <div className="eventBox">
                    <img src={img3}/>
                    <p className="tit">야간해설탐방</p>
                    <p>
                        경복궁 별빛야행은 야간 특별관람 때에 
                    <br/>공개되지 않았던 경복궁 북측 권역을 탐방하며, 
                    <br/>복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.
                    </p>
                </div>
                <div className="eventBox">
                    <img src={img4}/>
                    <p className="tit">한복무료관람</p>
                    <p>
                        대중화 · 생활화 · 세계화 · 활성화를 위하여 
                        <br/>고궁의 분위기와 어울리는 한복 착용을 유도하고자 
                        <br/>한복착용자 무료관람 제도를 마련하여 운영하고 있다.
                    </p>
                </div>
            </article>
        </section>
     );
}
 
export default Section2;