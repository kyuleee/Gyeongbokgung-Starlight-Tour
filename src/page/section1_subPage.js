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


const {kakao} = window;
const Section1_supPage = () => {
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
  
    // 카카오지도 API 가져오기
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
                <h3>별빛야행 소개</h3>
            </div>
            <div className='w1500'>
                <div className='slogan'>
                    <img src={slogan}/>
                    <h3>2023 경복궁 별빛야행</h3>
                    <p>서울의 밤을 더 뜨겁게 달궈 시민과 함께 만드는 문화매력도시 서울을 보여줄 <span>2023 경복궁 별빛야행</span></p>
                    <p>모두가 함께 즐기는 서울의 대표 문화예술축제로 한걸음 더 다가갈 한달간의 여정에 여러분을 초대합니다.</p>
                </div>
                <article className='mainInfo'>
                    <h2>경복궁<span>축제</span></h2>
                    <ul>
                        <li>
                            <b>
                                <span>행</span>
                                <span>사</span>
                                <span>명</span>
                            </b>
                            <span>2023 경복궁 별빛야행</span>
                        </li>
                        <li>
                            <b>
                                <span>기</span>
                                <span>간</span>
                            </b>
                            <span>2023.10.11(수) ~ 11.13</span>
                        </li>
                        <li>
                            <b>
                                <span>장</span>
                                <span>소</span>
                            </b>
                            <span>경복궁 내</span>
                        </li>
                        <li>
                            <b>
                                <span>주</span>
                                <span>최</span>
                            </b>
                            <span>문화재청 궁능유적본부 경복궁 관리소</span>
                        </li>
                        <li>
                            <b>
                                <span>프</span>
                                <span>로</span>
                                <span>그</span>
                                <span>램</span>
                            </b>
                            <span>궁중음식 체험, 국악공연 관람, 야간해설 탐방</span>
                        </li>
                    </ul>
                </article>
                <article className='schedule'>
                    <h2>축제 일정표</h2>
                    <div className='table'>
                        <ul>
                            <li >
                                <img src={event1} data-aos="fade-left" data-aos-duration="1500"/>
                                <div className='eventTxtBox'>
                                    <p>[2023 가을 궁중문화축전] 아티스트가 사랑한 궁</p>
                                    <p>경복궁 집옥재</p>
                                    <p>2023-10-17 ~ 2023-10-18</p>
                                </div>
                            </li>
                            <li >
                                <img src={event2} data-aos="fade-right"/>
                                <div className='eventTxtBox'>
                                    <p>[2023 가을 궁중문화축전] 판소리로 듣는 궁 이야기</p>
                                    <p>경복궁 흥복전</p>
                                    <p>2023-10-13 ~ 2023-10-14</p>
                                </div>
                            </li>
                            <li >
                                <img src={event3} data-aos="fade-left"/>
                                <div className='eventTxtBox'>
                                    <p>궁궐일상모습 재현 및 체험-왕가의 산책</p>
                                    <p>경복궁 일원</p>
                                    <p>2023-10-08 ~ 2023-10-13</p>
                                </div>
                            </li>
                            <li >
                                <img src={event4} data-aos="fade-right"/>
                                <div className='eventTxtBox'>
                                    <p>2023년 경복궁 생과방(하반기)</p>
                                    <p>경복궁 생과방</p>
                                    <p>2023-09-07 ~ 2023-10-21</p>
                                </div>
                            </li>
                            <li>
                                <img src={event5}  data-aos="fade-left"/>
                                <div className='eventTxtBox'>
                                    <p>2023 경복궁 별빛야행(하반기)</p>
                                    <p>경복궁</p>
                                    <p>2023-09-08 ~ 2023-10-08</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <article className='secMap'>
                    <h2>오시는 길</h2>
                    <div id='map' style={{width:"100%", height:"400px"}}></div>
                </article>
                <article className='pblcTrnsp'>
                    <h2>대중교통 안내</h2>
                    <ul>
                        <li onClick={MoveMetroMap}>
                            <div className='vehicle'>
                                <img src={subway} />
                                <span>지하철</span>
                            </div>
                            <ol>
                                <li>
                                    <b className='line3'>3호선</b>
                                    <p>3호선 안국역 1번 출구 도보 13분</p>
                                </li>
                                <li>
                                    <b className='line5'>5호선</b>
                                    <p>5호선 광화문역 2번 출구 도보 약 14분</p>
                                </li>
                                <li>
                                    <b className='line3'>3호선</b>
                                    <p>3호선 경복궁역 4번 출구 도보 16분</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <ul>
                        <li onClick={MoveBusMap}>
                            <div className='vehicle'>
                                <img src={bus} />
                                <span>버스</span>
                            </div>
                            <ol>
                                <li>
                                    <b className='villageBus'>마을</b>
                                    <p>종로 11번 버스 법련사 정류장</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
     );
}
 
export default Section1_supPage;