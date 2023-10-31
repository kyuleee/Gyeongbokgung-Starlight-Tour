import "../css/section2.css";
import bannerArrow from '../img/bnr_arr.png'
import programImg1 from '../img/img1.jpg';
import programImg2 from '../img/img2.jpg';
import programImg3 from '../img/img3.jpg';
import programImg4 from '../img/img4.jpg';
import { useRef,useEffect,useState } from 'react';

const Section2 = () => {

    const [isSlideUp1, setSlideUp1] = useState(true);
    const [isSlideUp2, setSlideUp2] = useState(true);
    const [isSlideUp3, setSlideUp3] = useState(true);
    const [isSlideDown1, setSlideDown1] = useState(true);
    const [isSlideDown2, setSlideDown2] = useState(true);
    const [isSlideDown3, setSlideDown3] = useState(true);
    const slideBox = useRef();
    useEffect(() => { 
        let i = 1;
        const handleScroll = () => {
            const scrollY = window.pageYOffset;

            if ((scrollY >= 2600) && (i===1 )) {
                setSlideUp1(false);
            }
            if ((scrollY >= 3200) && (i===1 )) {
                setSlideUp2(false);
            }
            if((scrollY >= 3800) && (i===1 )){
                setSlideUp3(false);
            }
            if(scrollY >= 4100){
                i = 2;
            }
            if((scrollY <= 3800) && (i===2 )){
                setSlideDown1(false);
            }
            if((scrollY <= 3200) && (i===2 )){
                setSlideDown2(false);         
            }
            if((scrollY <= 2600) && (i===2 )){
                setSlideDown3(false);
            }
            if((scrollY < 2300) && (i===2)){
                i = 1;
                setSlideUp1(true);
                setSlideUp2(true);
                setSlideUp3(true);
                setSlideDown1(true);
                setSlideDown2(true);
                setSlideDown3(true);
            }
            
          };
          
          window.addEventListener('scroll', handleScroll);

        });
  
   
    //  내렸을때 사라짐 

    return ( 
        <section className="section2">
            <div className="w1500"> 
                <div className="stickyBox">
                    <div className="sticky2">
                        <h1 className="programH1">경복궁 프로그램</h1>
                        <button className="programMoreBtn">더보기</button>
                        <div className={`slideBox
                           ${isSlideUp1 ? 'slideBox' : 'up1'}
                           ${isSlideUp2 ? 'slideBox' : 'up2'}
                           ${isSlideUp3 ? 'slideBox' : 'up3'}
                           ${isSlideDown1 ? 'slideBox' : 'down1'}
                           ${isSlideDown2 ? 'slideBox' : 'down2'}
                           ${isSlideDown3 ? 'slideBox' : 'down3'}
                            `} ref={slideBox}>
                            <div className="slide slide1 flex">
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
                            <div  className="slide slide2 flex">
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
                            <div  className="slide slide3 flex">
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
                            <div  className="slide slide4 flex">
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