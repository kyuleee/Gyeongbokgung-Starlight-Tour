import '../pageCss/section4_announcement1.css'
import headerImg from '../img/headerImg.png';
import { useRef,useEffect,useState } from 'react';

const Section4_announcement1 = () => {
    
    const [isLiOn, setLiOn] = useState(0); //초기상태를 0으로 변경
    const lis = useRef([]);
    
    const handleMouseOver = (index) => {
        setLiOn(index);
    };

    useEffect(() => { 


        lis.current.forEach((li, index) => {
            li.addEventListener('mouseover', () => handleMouseOver(index));
            li.addEventListener('mouseleave', () => handleMouseOver(null)); // 마우스를 떠날 때 null로 설정
        });

        return () => {
            lis.current.forEach((li, index) => {
                li.removeEventListener('mouseover', () => handleMouseOver(index));
                li.removeEventListener('mouseleave', () => handleMouseOver(null));
            });
        };

    }, []);
  

    
    return (  
        <section className='Section4_announcement1'>
               <div className='w1500'>
                    <div className='section4SubHeader'>
                        <div><img src={headerImg}></img></div>
                        <h2>공지사항</h2>
                    </div>
                    <div className='Section4_announcementBtns'>
                        <ul className='flex2'>
                            <li className={isLiOn === 0 ? 'on' : 'off'} ref={(li) => (lis.current[0] = li)}>공지사항</li>
                            <li className={isLiOn === 1 ? 'on' : 'off'} ref={(li) => (lis.current[1] = li)}>문의하기</li>
                            <li className={isLiOn === 2 ? 'on' : 'off'} ref={(li) => (lis.current[2] = li)}>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <table className='Section4_announcementTable'>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>등록일</th>
                                <th>조회수</th>
                            </tr>
                            <tr>
                                <td>공지</td>
                                <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                                <td>2023-10-18</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                                <td>2023-10-18</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                                <td>2023-10-18</td>
                                <td>10</td>
                            </tr>
                        </table>
                    </div>
                    <div className='searchBox'>
                        <input type="search" placeholder='제목 + 내용'></input>
                        <button>전체</button>
                    </div>
                </div>
        </section>
    );
}
 
export default Section4_announcement1;