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
    const searchFunc = ()=>{
        
    }
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
                            <Link to='/NoticeWrite'><li>FAQ</li></Link>
                        </ul>
                    </nav>
                </div>
                {/* <div className='listTit'>
                    <p className='notNum'>번호</p>
                    <p className='notTit'>제목</p>
                    <p className='notName'>작성자</p>
                    <p className='notDate'>등록일</p>
                </div> */}
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
                        <tr key={notiD.notiId} className='NewList'>
                            <Link to={`/NoticeList/${notiD.notiId}`}>
                                <td className='notNum'>{notiD.notiId}</td>
                                <td className='notTit'>{notiD.title}</td>
                                <td className='notName'>{notiD.userName}</td>
                            </Link>
                            <td className='notDate'>{new Date(notiD.createDate).toLocaleDateString().replace(/\./g, '').replace(/\s/g, '-')}</td>
                        </tr>
                    )}
                </table>
                {/* <ul className='notiWrap'>
                    {notiData.map((notiD)=>
                        <li key={notiD.notiId}>
                            <Link to={`/NoticeList/${notiD.notiId}`}>
                                <span className='notNum'>{notiD.notiId}</span>
                                <span className='notTit'>{notiD.title}</span> 
                                <span className='notName'>{notiD.userName}</span>
                            </Link>
                            <span className='notDate'>{new Date(notiD.createDate).toLocaleDateString("en-US")}</span>
                        </li>
                    )}
                </ul> */}
                <div className='searchBox'>
                        <input type='text' placeholder='내용 + 제목'></input>
                        <button onClick={searchFunc}>검색</button>
                    </div>
            </article>
        </section>
     );
}
NotiList.defaultProps = {
    notiData:[]
}
 
export default NotiList;