import '../pageCss/section4_announcement2.css'
import headerImg from '../img/headerImg.png';
import { useRef,useEffect,useState } from 'react';

const Section4_announcement2 = () => {
    
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
        <section className='Section4_announcement2'>
               <div className='w1500'>
               <div className='section4SubHeader'>
                    <div><img src={headerImg}></img></div>  {/* Header 이미지를 표시 */}
                    <h2>공지사항</h2>
                </div>
                <div className='Section4_announcementBtns'>
                    <ul className='flex2'>
                        {/* 메뉴 항목을 클릭할 때 클래스를 조건부로 설정하여 활성/비활성 스타일을 적용합니다. */}
                        <Link to='/NoticeList'><li className={isLiOn === 0 ? 'on' : 'off'} ref={(li) => (lis.current[0] = li)}>공지사항</li></Link>
                        <Link to='/NoticeWrite'><li className={isLiOn === 1 ? 'on' : 'off'} ref={(li) => (lis.current[1] = li)}>문의하기</li></Link>
                        <Link to='/FAQ'><li className={isLiOn === 2 ? 'on' : 'off'} ref={(li) => (lis.current[2] = li)}>FAQ</li></Link>
                    </ul>
                </div>    
                    <div>
                        <table className='Section4_announcementTable'>
                            <tr>
                                <td>공지</td>
                                <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                                <td>2023-10-18</td>
                                <td>10</td>
                            </tr>
                        </table>
                        <div className='announcementTextareaBox'>
                                <textarea className='announcementTextarea'></textarea>
                        </div>
                    </div>
                    <div className='listBox'>
                        <button>리스트</button>
                    </div>
                </div>
        </section>
    );
}
 
export default Section4_announcement2;