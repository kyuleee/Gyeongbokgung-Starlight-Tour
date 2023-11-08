import '../pageCss/section4_FAQ.css';  // CSS 파일을 가져옵니다.
import headerImg from '../img/headerImg.png';  // 이미지 파일 경로를 가져옵니다.
import iconQ from '../img/Q.png';  // 이미지 파일 경로를 가져옵니다.
import iconA from '../img/A.png';  // 이미지 파일 경로를 가져옵니다.
import { useRef, useEffect, useState } from 'react';  // React 라이브러리에서 useRef, useEffect, useState를 가져옵니다.
import { Link } from 'react-router-dom';

const Section4_FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);  // 활성화된 아코디언 인덱스를 저장하는 상태
    const [isLiOn, setLiOn] = useState(0); // 초기 메뉴 항목을 0으로 설정
    const lis = useRef([]);  // DOM 요소에 접근하기 위한 ref

    const faqData = [
        {
            question: '축제관람은 무료인가요?',
            answer: '네, 축제 관람은 무료입니다.',
        },
        {
            question: '우천시 축제는 어떻게 진행되나요?',
            answer: '우천시에는 행사 일정이 변경될 수 있습니다. 자세한 내용은 공지사항을 참조하세요.',
        },
        {
            question: '축제 장소 편의시설은 무엇이 있나요?',
            answer: '축제 장소에는 화장실, 식당, 주차시설, 의료 스테이션, 휠체어 대여소 등 다양한 편의시설이 있습니다.',
        },
        {
            question: '소지품 분실 및 습득시 어떻게 해야하나요?',
            answer: '분실한 물품은 축제 안내 부스에서 문의하시거나, 주최 측에 알려주시면 분실물 보관소에서 찾을 수 있습니다.',
        },
    ];

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            // 클릭된 아코디언이 이미 열려있으면 닫습니다.
            setActiveIndex(null);
        } else {
            // 클릭된 아코디언을 엽니다.
            setActiveIndex(index);
        }
    };

    const handleMouseOver = (index) => {
        setLiOn(index);
    };

    useEffect(() => { 
        // 컴포넌트가 마운트될 때, 마우스 이벤트 리스너를 추가합니다.


    
            lis.current.forEach((li, index) => {
                li.addEventListener('mouseover', () => handleMouseOver(index));
                li.addEventListener('mouseleave', () => handleMouseOver(null)); // 마우스를 떠날 때 null로 설정
            });
    
            return () => {
                window.onload = function(){
                // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
                lis.current.forEach((li, index) => {
                    li.removeEventListener('mouseover', () => handleMouseOver(index));
                    li.removeEventListener('mouseleave', () => handleMouseOver(null));
                });
            }
            };
        
    }, []);

    return (
        <section className='section4_subPage'>
              <div className="infoTit">
                    <img src={headerImg}></img>
                    <h3>FAQ</h3>
                </div>
            <div className='w1500'>
                <div className='Section4_announcementBtns'>
                    <ul className='flex2'>
                        {/* 메뉴 항목을 클릭할 때 클래스를 조건부로 설정하여 활성/비활성 스타일을 적용합니다. */}
                        <Link to='/NoticeList'><li className={isLiOn === 0 ? 'on' : 'off'} ref={(li) => (lis.current[0] = li)}>공지사항</li></Link>
                        <Link to='/NoticeWrite'><li className={isLiOn === 1 ? 'on' : 'off'} ref={(li) => (lis.current[1] = li)}>문의하기</li></Link>
                        <Link to='/FAQ'><li className={isLiOn === 2 ? 'on' : 'off'} ref={(li) => (lis.current[2] = li)}>FAQ</li></Link>
                    </ul>
                </div>    
                <article className='faqArticle'>
                    <div className='faqTitle'>제목</div>
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <div
                                className={`accordion ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className='iconQ'><img src={iconQ} alt="Question Icon" /></div>
                                <p>{item.question}</p>
                            </div>
                            <div className={`panel ${activeIndex === index ? 'active' : ''}`}>
                                <div className='iconA'><img src={iconA} alt="Answer Icon" /></div>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}

export default Section4_FAQ;