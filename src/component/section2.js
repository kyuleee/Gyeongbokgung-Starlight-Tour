import "../css/section2.css";
import bannerArrow from '../img/bnr_arr.png'
import programImg1 from '../img/img1.jpg';
import programImg2 from '../img/img2.jpg';
import programImg3 from '../img/img3.jpg';
import programImg4 from '../img/img4.jpg';
import { useRef,useEffect,useState } from 'react';

const Section2 = () => {

    const [isSlide1Visible, setSlide1Visible] = useState(true);
    const [isSlide1Visible2, setSlide1Visible2] = useState(true);
    const [isSlide1Visible3, setSlide1Visible3] = useState(true);
    const [isSlide2Visible, setSlide2Visible] = useState(true);
    const [isSlide2VisibleA, setSlide2VisibleA] = useState(true);
    const [isSlide2Visible2, setSlide2Visible2] = useState(true);
    const [isSlide2Visible3, setSlide2Visible3] = useState(true);
    const [isSlide3Visible, setSlide3Visible] = useState(true);
    const [isSlide3VisibleA, setSlide3VisibleA] = useState(true);
    const [isSlide3Visible2, setSlide3Visible2] = useState(true);
    const [isSlide3Visible3, setSlide3Visible3] = useState(true);
    const [isSlide4VisibleA, setSlide4VisibleA] = useState(true);

    const sticky = useRef();  

    useEffect(() => { 
        
    
        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            console.log(scrollY);
    //  내렸을때 사라짐 
            if (scrollY >= 3000) {
                setSlide1Visible(false);
                setSlide2VisibleA(false);
            }
            if (scrollY >= 3300) {
                 setSlide1Visible2(false);
            }
            if(scrollY >= 3600){
                setSlide1Visible3(false);
            }
            if(scrollY >= 3900){
                setSlide2Visible(false);
                setSlide3VisibleA(false);
            }
            if(scrollY >= 4200){
                setSlide2Visible2(false);
            }
            if(scrollY >= 4500){
                setSlide2Visible3(false);
            }
            if(scrollY >= 4800){
                setSlide3Visible(false);
                setSlide4VisibleA(false);
            }
            if(scrollY >= 5100){
                setSlide3Visible2(false);
            }
            if(scrollY > 5400){
                setSlide3Visible3(false);
            }   
   
        /// 올렸을때 다시 생김

          };
          


          window.addEventListener('scroll', handleScroll);

        });

    return ( 
        <section className="section2">
            <div className="sec2Padding w1500"> 
                <div className="stickyBox">
                    <div className="sticky" ref={sticky}>
                    <button className="programMoreBtn">더보기</button>
                    <h1 className="programH1">경복궁 프로그램</h1>
               

                        <div className={`slide 
                            ${isSlide1Visible ? 'slide1' : 'hidden1'} 
                            ${isSlide1Visible2 ? 'slide1' : 'hidden2'}
                            ${isSlide1Visible3 ? 'slide1' : 'hidden3'}
                            `
                        }>
                            <article className="section2Aticle">
                                <div>
                                    <h2 className="programH2">궁중음식 체험</h2>       
                                    <p>궁궐의 부엌인 ‘소주방’에 들러 조선의 왕이 먹던 일상식인 12첩 반상을 맛보게 됩니다.</p>
                                </div>
                            </article>
                            <article className="section2Aticle">
                                <div className="programImgbox" >
                                    <img src={programImg1}/>
                                </div>
                            </article>
                        </div>    
                        <div className={`slide 
                        ${isSlide2Visible ? 'slide2' : 'hidden1'} 
                        ${isSlide2Visible2 ? 'slide2' : 'hidden2'}
                        ${isSlide2Visible3 ? 'slide2' : 'hidden3'}
                        ${isSlide2VisibleA ? 'slide2' : 'visible'}
                        
                        `
                        }>
                            <article className="section2Aticle">
                                <div>
                                    <h2 className="programH2">국악공연 관람</h2>       
                                    <p>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                                </div>
                            </article>
                            <article className="section2Aticle">
                                <div className="programImgbox" >
                                    <img src={programImg2}/>
                                </div>
                            </article>
                        </div>    
                        <div className={`slide 
                        ${isSlide3Visible ? 'slide3' : 'hidden1'} 
                        ${isSlide3Visible2 ? 'slide3' : 'hidden2'}
                        ${isSlide3Visible3 ? 'slide3' : 'hidden3'}
                        ${isSlide3VisibleA ? 'slide2' : 'visible'}
                        `
                        }>
                            <article className="section2Aticle">
                                <div>
                                    <h2 className="programH2">야간해설탐방</h2>       
                                    <p>경복궁 북측 권역을 탐방하며, 복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.</p>
                                </div>
        
                            </article>
                            <article className="section2Aticle">
                                <div className="programImgbox" >
                                    <img src={programImg3}/>
                                </div>
                            </article>
                        </div>   
                        <div className={`slide 
                            ${isSlide4VisibleA ? 'slide2' : 'visible'}
                            `
                        }>
                            <article className="section2Aticle">
                                <div>
                                    <h2 className="programH2">한복무료관람</h2>       
                                    <p>전통한복, 생활한복  모두 무료관람 대상. 상의(저고리)와 하의(치마, 바지)를 기본으로  함.</p>
                                </div>
                            </article>
                            <article className="section2Aticle">
                                <div className="programImgbox" >
                                    <img src={programImg4}/>
                                </div>
                            </article>
                        </div>    
                    </div>
                </div>    
            </div>
            
            <div className="bannerWrap">                
                <div className="rollingBanner">
                    <div className="banner">         
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>2023 경복궁 별빛야행 축제</p>
                    </div>
                </div>
                <div className="rollingBanner Clone">
                    <div className="banner">         
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>2023 경복궁 별빛야행 축제</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>2023 경복궁 별빛야행 축제</p>
                    </div>
                </div>
            </div>    
        </section>

     );
}
 
export default Section2;