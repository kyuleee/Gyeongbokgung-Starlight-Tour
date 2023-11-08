import '../pageCss/section1_subPage.css';
import topImg from '../img/headerImg.png';
import slogan from '../img/mainText2.png';
import event1 from '../img/event1.jpg';
import event2 from '../img/event2.jpg';
import event3 from '../img/event3.png';
import event4 from '../img/event4.jpg';
import event5 from '../img/event5.png';
import subway from '../img/subway.png';
import bus from '../img/bus.png';
import { useEffect,useRef,useState,useMemo } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from '../lang/i18n';
import { withTranslation,useTranslation } from 'react-i18next';



const {kakao} = window;
const Section1_supPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
      })
    const [location, setLocation] = useState("");
    const [map, setMap] = useState();
  
    // 현재위치 세부조정
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
  
    // 현재 위치 가져오기
    useMemo(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      }
  
      function success(position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
  
      function error() {
        setLocation({
          latitude:  37.579617,
          longitude: 126.977041,
        });
        console.log("위치 받기 실패");
      }
    }, [navigator.geolocation.getCurrentPosition]);
  
    // 카카오지도  API 가져오기
    const kakaoMap = () => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 5,
      };
      setMap(new kakao.maps.Map(container, options));
    };
  
    // 화면에 랜더링
    useEffect(() => {
      kakaoMap();
      console.log(location);
    }, [location]);

    const kakaoMetroUrl = 'https://map.kakao.com/?target=subway&REGION=01'
    const kakaoBusUrl = 'https://map.kakao.com/'
    const MoveMetroMap = ()=>{
        window.open(kakaoMetroUrl)
    }
    const MoveBusMap = ()=>{
        window.open(kakaoBusUrl)
    }

    return ( 
        <section className="section1_subPage">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>{t('sec1.main')}</h3>
            </div>
            <div className='w1500'>
                <div className='slogan'>
                    <img src={slogan}/>
                    <h3>{t('sub1.slg')}</h3>
                    <p>{t('sub1.slg1')}</p>
                    <p>{t('sub1.slg2')}.</p>
                </div>
                <article className='mainInfo'>
                    <h2>{t('sub1.tit')}<span>{t('sub1.tit1')}</span></h2>
                    <ul>
                        <li>
                            <b>
                            {i18n.language === "ko" ? 
                            (<><span>행</span><span>사</span><span>명</span></>)
                            :(<><span>Festival name</span></>)}
                            </b>
                            <span>{t('sec1.box1_1')}</span>
                        </li>
                        <li>
                            <b>
                            {i18n.language === "ko" ? 
                            (<><span>기</span><span>간</span></>)
                            :(<><span>Period</span></>)}
                            </b>
                            <span>{t('sec1.box2_1')}</span>
                        </li>
                        <li>
                            <b>
                            {i18n.language === "ko" ? 
                            (<><span>장</span><span>소</span></>)
                            :(<><span>Venue</span></>)}
                            </b>
                            <span>{t('sec1.box3_1')}</span>
                        </li>
                        <li>
                            <b>
                            {i18n.language === "ko" ? 
                            (<><span>행</span><span>사</span><span>문</span><span>의</span></>)
                            :(<><span>Contact</span></>)}
                            </b>
                            <span>1522-2295</span>
                        </li>
                        <li>
                            <b>
                            {i18n.language === "ko" ? 
                            (<><span>프</span><span>로</span><span>그</span><span>램</span></>)
                            :(<><span>Programs</span></>)}
                            </b>
                            <span>{t('sec1.box5_1')}</span>
                        </li>
                    </ul>
                </article>
                <article className='schedule'>
                    <h2>{t('sub2.tit')}</h2>
                    <div className='table'>
                        <ul>
                            <li >
                                <a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109344&searchCategory1=600&searchCategory2=617&searchField=all&searchDate=202310&weekSel=undefined&searchText=' target='_blank'><img src={event1} data-aos="fade-left" data-aos-duration="1000"></img></a>
                                <div className='eventTxtBox'>
                                    <p>{t('sub2.tit1')}</p>
                                    <p>{t('sub2.add1')}</p>
                                    <p>2023-10-17 ~ 2023-10-18</p>
                                </div>
                            </li>
                            <li >
                                <a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109342&searchCategory1=600&searchCategory2=617&searchField=all&searchDate=202310&weekSel=undefined&searchText=' target='_blank'><img src={event2} data-aos="fade-right" data-aos-duration="1000"/></a>
                                <div className='eventTxtBox'>
                                    <p>{t('sub2.tit2')}</p>
                                    <p>{t('sub2.add2')}</p>
                                    <p>2023-10-13 ~ 2023-10-14</p>
                                </div>
                            </li>
                            <li >
                                <a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109330&searchCategory1=600&searchCategory2=617&searchField=all&searchDate=202310&weekSel=undefined&searchText=' target='_blank'><img src={event3} data-aos="fade-left" data-aos-duration="1000"/></a>
                                <div className='eventTxtBox'>
                                    <p>{t('sub2.tit3')}</p>
                                    <p>{t('sub2.add3')}</p>
                                    <p>2023-10-08 ~ 2023-10-13</p>
                                </div>
                            </li>
                            <li >
                                <a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=2&idx=109270&searchCategory1=600&searchCategory2=617&searchField=all&searchDate=202310&weekSel=undefined&searchText=' target='_blank'><img src={event4} data-aos="fade-right" data-aos-duration="1000"/></a>
                                <div className='eventTxtBox'>
                                    <p>{t('sub2.tit4')}</p>
                                    <p>{t('sub2.add4')}</p>
                                    <p>2023-09-07 ~ 2023-10-21</p>
                                </div>
                            </li>
                            <li>
                                <a href='https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=2&idx=109253&searchCategory1=600&searchCategory2=617&searchField=all&searchDate=202310&weekSel=undefined&searchText=' target='_blank'><img src={event5}  data-aos="fade-left" data-aos-duration="1000"/></a>
                                <div className='eventTxtBox'>
                                    <p>{t('sub2.tit5')}</p>
                                    <p>{t('sub2.add5')}</p>
                                    <p>2023-09-08 ~ 2023-10-08</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className='secMap'>
                    <h2>{t('sub3.map')}</h2>
                    <div id='map' style={{width:"100%", height:"400px"}}></div>
                </article>
                <article className='pblcTrnsp'>
                    <h2>{t('sub3.tit')}</h2>
                    <ul>
                        <li onClick={MoveMetroMap}>
                            <div className='vehicle'>
                                <img src={subway} />
                                <span>{t('sub3.trnsp')}</span>
                            </div>
                            <ol>
                                <li>
                                    <b className='line3'>{t('sub3.way1')}</b>
                                    <p>{t('sub3.way1_1')}</p>
                                </li>
                                <li>
                                    <b className='line5'>{t('sub3.way2')}</b>
                                    <p>{t('sub3.way2_1')}</p>
                                </li>
                                <li>
                                    <b className='line3'>{t('sub3.way3')}</b>
                                    <p>{t('sub3.way3_1')}</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <ul>
                        <li onClick={MoveBusMap}>
                            <div className='vehicle'>
                                <img src={bus} />
                                <span>{t('sub3.trnsp1')}</span>
                            </div>
                            <ol>
                                <li>
                                    <b className='villageBus'>{t('sub3.b1')}</b>
                                    <p>{t('sub3.b1_1')}</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
     );
}
 
export default withTranslation()(Section1_supPage);