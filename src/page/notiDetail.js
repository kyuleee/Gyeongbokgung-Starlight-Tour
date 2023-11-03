import { useParams,Link, useNavigate } from "react-router-dom";
import topImg from '../img/headerImg.png';

const NotiDetail = ({notiData, notiRemove}) => {
    const {idx} = useParams();
    const navigate=useNavigate();
    // console.log(idx);
    const delFunc = ()=>{
        notiRemove(notiData[idx].notiId);
        navigate('/NoticeList');
    }

    return ( 
        <section className="notiDetail">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>공지사항</h3>
            </div>
            <article className="w1500">
                <div className='tabWrap'>
                    <nav>
                        <ul>
                            <Link to='/NoticeList'><li>공지사항</li></Link>
                            <Link to='/NoticeWrite'><li>문의하기</li></Link>
                            <Link to='/NoticeWrite'><li>FAQ</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="boardView">
                    <div className="headerClear">
                        <p>{notiData[idx].title}</p>
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <p>id  {notiData[idx].notiId}</p>
                    {/* <p>제목  {notiData[idx].title}</p> */}
                    <p>내용  {notiData[idx].content}</p>
                    <p>작성자  {notiData[idx].userName}</p>
                    <p>등록일  {notiData[idx].createDate}</p>
                </div>


                <div>
                    <button onClick={delFunc}>삭제</button>
                    <Link to='/NoticeList'><button>목록</button></Link>
                </div>
            </article>
        </section>
     );
}
 
export default NotiDetail;