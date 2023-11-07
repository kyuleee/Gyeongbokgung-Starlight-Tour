import { useParams,Link, useNavigate } from "react-router-dom";
import topImg from '../img/headerImg.png';
import '../pageCss/notiDetail.css'

const NotiDetail = ({notiData, notiRemove}) => {
    const {idx} = useParams();
    const navigate=useNavigate();
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