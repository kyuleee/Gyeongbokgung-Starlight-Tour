import { useParams,Link, useNavigate } from "react-router-dom";
import topImg from '../img/headerImg.png';

const NotiDetail = ({notiData, notiRemove}) => {
    const {idx} = useParams();
    const navigate=useNavigate();
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
                <p>id | {notiData[idx].notiId}</p>
                <p>제목 | {notiData[idx].title}</p>
                <p>내용 | {notiData[idx].content}</p>
                <p>작성자 | {notiData[idx].userName}</p>
                <div>
                    {/* <button><Link to={`/edit/${idx}`}>수정</Link></button> */}
                    <button onClick={delFunc}>삭제</button>
                    <Link to='/NoticeList'><button>리스트</button></Link>
                </div>
            </article>
        </section>
     );
}
 
export default NotiDetail;