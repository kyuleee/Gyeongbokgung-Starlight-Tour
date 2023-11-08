import "../css/section2.css";
import { Link } from 'react-router-dom';
import bannerArrow from '../img/bnr_arr.png'
import programImg1 from '../img/img1.jpg';
import programImg2 from '../img/img2.jpg';
import programImg3 from '../img/img3.jpg';
import programImg4 from '../img/img4.jpg';
import { useRef,useEffect,useState } from 'react';
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';
const Section2 = () => {
    const { t } = useTranslation();

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
                        <h1 className="programH1">{t('sec2.title')}</h1>
                        <Link to="/Program"><button className="programMoreBtn">{t('btn')}</button></Link>
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
                                        <h2 className="programH2">{t('sec2.box1')}</h2>       
                                        <p>{t('sec2.box1_1')}.</p>
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
                                        <h2 className="programH2">{t('sec2.box2')}</h2>       
                                        <p>{t('sec2.box2_1')}.</p>
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
                                        <h2 className="programH2">{t('sec2.box3')}</h2>       
                                        <p>{t('sec2.box3_1')}.</p>
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
                                        <h2 className="programH2">{t('sec2.box4')}</h2>       
                                        <p>{t('sec2.box4_1')}.</p>
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
                        <p className='bannerTxtWhite'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>{t('sec2.bnr')}</p>
                    </div>
                </div>
                <div className="rollingBanner Clone">
                    <div className="banner">         
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtWhite'>{t('sec2.bnr')}</p>
                        <img className="bannerArrow" src={bannerArrow}></img>
                        <p className='bannerTxtBlack'>{t('sec2.bnr')}</p>
                    </div>
                </div>
            </div>
        </section>

     );
}
 
export default withTranslation()(Section2);