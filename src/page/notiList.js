import {Link } from 'react-router-dom';
import {useState, useRef} from 'react';
import topImg from '../img/headerImg.png';
import '../pageCss/notiList.css';

const NotiList = ({notiData}) => {
    const [count,setCount] = useState(10);
    const btn = useRef();
    // const moreBtn = ()=>{
    //     if(count < notiData.length){
    //         setCount(count + 10)
    //     }else{
    //         // console.log(btn.current)
    //         // btn.current.style.display='none';
    //         btn.current.style.setProperty('display','none');
    //         btn.current.style.backgroundColor='red';
    //         // btn.current.style.color='white';
    //     }
    // }
    
    
   
    return ( 
        <section className="notiList">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>공지사항</h3>
            </div>
            <article className='w1500'>
                <div className='tabWrap'>
                    <nav>
                        <ul>
                            <Link to='/NoticeList'><li>공지사항</li></Link>
                            <Link to='/NoticeWrite'><li>문의하기</li></Link>
                            <Link to='/FAQ'><li>FAQ</li></Link>
                        </ul>
                    </nav>
                </div>
                <table className='listTit'>
                    <colgroup>
                        <col className='notNum'/>
                        <col className='notTit'/>
                        <col className='notName'/>
                        <col className='notDate'/>
                    </colgroup>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    <tr>
                        <td>공지</td>
                        <td>2023 경복궁 별빛야행 입장 및 관람안내</td>
                        <td>민규리</td>
                        <td>2023-10-18</td>
                    </tr>
                    {notiData.map((notiD)=>
                        <tr key={notiD.notiId} className='ddd'>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.notiId}</Link></td>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.title}</Link></td>
                                <td><Link to={`/NoticeList/${notiD.notiId}`}>{notiD.userName}</Link></td>
                            <td>{new Date(notiD.createDate).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')}</td>
                        </tr>
                    )}
                </table>
                <div className='searchBox'>
                    <input type='text' placeholder='내용 + 제목'></input>
                    <button className='searchBtn' >검색</button>
                </div>
            </article>
        </section>
     );
}
NotiList.defaultProps = {
    notiData:[]
}
 
export default NotiList;