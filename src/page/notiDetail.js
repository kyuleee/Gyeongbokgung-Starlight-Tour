import { useParams,Link, useNavigate } from "react-router-dom";
import topImg from '../img/headerImg.png';
import '../pageCss/notiDetail.css'
import { useRef, useEffect, useState } from 'react'; 

const NotiDetail = ({notiData, notiRemove}) => {
    const {idx} = useParams();
    const navigate=useNavigate();
    const [isLiOn, setLiOn] = useState(0); // 초기 메뉴 항목을 0으로 설정
    const lis = useRef([]);
    // console.log(idx);
    const delFunc = ()=>{
        notiRemove(notiData[idx].notiId);
        navigate('/NoticeList');
    }
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-');
    };
    const goBack = ()=>{
        navigate(-1);
    }
    
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
        <section className="notiDetail">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>공지사항</h3>
            </div>
            <article className="w1500">
            <div className='Section4_announcementBtns'>
                    <ul className='flex2'>
                        {/* 메뉴 항목을 클릭할 때 클래스를 조건부로 설정하여 활성/비활성 스타일을 적용합니다. */}
                        <Link to='/NoticeList'><li className={isLiOn === 0 ? 'on' : 'off'} ref={(li) => (lis.current[0] = li)}>공지사항</li></Link>
                        <Link to='/NoticeWrite'><li className={isLiOn === 1 ? 'on' : 'off'} ref={(li) => (lis.current[1] = li)}>문의하기</li></Link>
                        <Link to='/FAQ'><li className={isLiOn === 2 ? 'on' : 'off'} ref={(li) => (lis.current[2] = li)}>FAQ</li></Link>
                    </ul>
                </div>    
                <div className="boardView">
                    <div className="headerClear">
                        <p>{notiData[idx].title}</p>
                        <div>
                            <span>{notiData[idx].userName}</span>
                            <span>{formatDate(notiData[idx].createDate)}</span>
                        </div>
                    </div>
                    <div className="notiContent">
                        <p>{notiData[idx].content}</p>
                    </div>
                </div>
                <div className="btnArea">
                    <button onClick={delFunc}>삭제</button>
                    {/* <Link to='/NoticeList'><button>목록</button></Link> */}
                    <button onClick={goBack}>목록</button>
                </div>
            </article>
        </section>
     );
}
 
export default NotiDetail;