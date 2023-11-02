import { useState, useRef } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import topImg from '../img/headerImg.png';

const NotiWrite = ({notiCreate}) => {
    const notiName = useRef();
    const notiCnt = useRef();
    const notiTit = useRef();
    const navigate = useNavigate();

    const [notiValue, setNotiValue]=useState({
        title:'',
        userName :'',
        content:''
    });
    const {title,userName,content} = notiValue;
    const changeValue = (e) =>{
        setNotiValue({
            ...notiValue,
            [e.target.name] : e.target.value
        })
    }
    const notiSave = ()=>{
        if(title.length<2){
            alert('제목을 2자 이상 작성하시오.');
            notiTit.current.focus();
            return;
        }
        if(userName.length<2){
            alert('이름을 2자 이상 작성하시오.');
            notiName.current.focus();
            return ;
        }
        if(content.length<3){
            alert('내용을 3자 이상 작성하시오.');
            notiCnt.current.focus();
            return ;
        }
        notiCreate(title,userName,content);
        alert('문의완료');
        navigate('/NoticeList');
    }
    
    return ( 
        <section className="notiWrite">
            <div className="infoTit">
                <img src={topImg}></img>
                <h3>문의하기</h3>
            </div>
            <article className='w1500'>
                <div className='tabWrap'>
                    <nav>
                        <ul>
                            <Link to='/NoticeList'><li>공지사항</li></Link>
                            <Link to='/NoticeWrite'><li>문의하기</li></Link>
                            <li>FAQ</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>
                        2023 경복궁 별빛야행 축제에 대해 궁금한 점이 있으신가요?
                        <br/>아래 양식에 따라 작성 후 제출해주세요!
                    </h3>
                    <div className='signUpTable'>
                        <p><span>*</span>은 필수입력 사항입니다</p>
                        <ul>
                            <li>
                                <label>이름<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='userName' value={userName} ref={notiName} onChange={changeValue} placeholder='제목을 입력해주세요'/>
                                    <p>이름을 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>휴대폰번호<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='phone' placeholder='‘-’없이 숫자만 입력해주세요'/>
                                    <p>‘-’없이 숫자만 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>제목<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='title' value={title} ref={notiTit} onChange={changeValue} placeholder='"-"없이 숫자만 입력해주세요'/>
                                    <p>제목을 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>내용<span>*</span></label>
                                <div className='inbx'>
                                    <textarea name="content" value={content} ref={notiCnt} onChange={changeValue} placeholder='내용을 입력해주세요'/>
                                </div>
                            </li>
                            <li>
                                <label>자동입력방지코드</label>
                                <div className='inbx'>
                                    <textarea name='captcha' placeholder='보안문자입력' maxLength='4'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='pri'>
                        <h3>개인정보 수집/이용</h3>
                        <div className='cont1'>
                            66
                        </div>
                        <div className='ck'>
                            <input type='checkbox' id='priChk' name='priChk'></input>
                            <label for='priChk'>개인정보 수집에 동의합니다</label>
                        </div>
                        <button onClick={notiSave} className='saveBtn'>제출하기</button>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default NotiWrite;