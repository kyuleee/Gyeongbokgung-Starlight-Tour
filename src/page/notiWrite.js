import { useState, useRef } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import topImg from '../img/headerImg.png';
import '../pageCss/notiWrite.css'

const NotiWrite = ({notiCreate}) => {
    const notiName = useRef();
    const notiCnt = useRef();
    const notiTit = useRef();
    const navigate = useNavigate();

    const [notiValue, setNotiValue]=useState({
        title:'',
        userName :'',
        content:'',
        checkAgree : false,
    });
    const {title,userName,content,checkAgree} = notiValue;
    const changeValue = (e) =>{
        if (e.target.type === 'checkbox'){
        setNotiValue({
            ...notiValue,
            [e.target.name] : e.target.checked
        })
    }else{
        setNotiValue({
            ...notiValue,
            [e.target.name] : e.target.value
        })
    }
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
        if(!checkAgree){
            alert('개인정보 수집에 동의해야 합니다')
            return;
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
                            <Link to='/NoticeWrite'><li>FAQ</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className='joinWrap'>
                    <h3>
                        2023 경복궁 별빛야행 축제에 대해 궁금한 점이 있으신가요?
                        <br/>아래 양식에 따라 작성 후 제출해주세요!
                    </h3>
                    <p className='r_impor'><span>*</span>은 필수입력 사항입니다</p>
                    <form className='signUpTable' method='post' action=''>
                        <ul>
                            <li>
                                <label>이름<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='userName' value={userName} ref={notiName} onChange={changeValue} placeholder='제목을 입력해주세요' autoComplete='off'/>
                                    <p>이름을 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>휴대폰번호<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='phone' placeholder='‘-’ 없이 숫자만 입력해주세요' autoComplete='off'/>
                                    <p>‘-’없이 숫자만 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>제목<span>*</span></label>
                                <div className='inbx'>
                                    <input type='text' name='title' value={title} ref={notiTit} onChange={changeValue} placeholder='"-" 없이 숫자만 입력해주세요' autoComplete='off'/>
                                    <p>제목을 입력해주세요</p>
                                </div>
                            </li>
                            <li>
                                <label>내용<span>*</span></label>
                                <div className='tabx'>
                                    <textarea name="content" value={content} ref={notiCnt} onChange={changeValue} placeholder='내용을 입력해주세요'/>
                                </div>
                            </li>
                        </ul>
                    </form>
                    <div className='pri'>
                        <h3>개인정보 수집/이용</h3>
                        <div className='cont1'>
                            제1조 (개인정보의 수집, 이용 목적)
                            <br/>
                            <br/>
                            ■ 수집하는 개인정보 항목
                            2023 경복궁 별빛야행은 온라인 문의를 위해 아래와 같은 개인정보를 수집하고 있습니다.
                            <br/>
                            <br/>
                            ο 수집항목 : 이름 , 휴대폰번호, 이메일 주소
                            ο 개인정보 수집방법 : 홈페이지(온라인 문의)
                            <br/>
                            <br/>
                            ■ 개인정보의 수집 및 이용목적
                            경복궁 별빛야행은 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                            <br/>
                            <br/>
                            Ο 온라인 문의 및 처리
                            - 서비스 이용에 따른 본인확인, 개인 식별, 고지사항 전달
                            <br/>
                            <br/>
                            제2조 (개인정보의 목적 외 사용 및 제3자에 대한 제공)
                            <br/>
                            <br/>
                            경복궁 별빛야행은 서비스 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다. 단, 관계 법령상 규정이 있는 경우나 이용자의 동의가 있는 경우에는 그러하지 아니합니다.
                            <br/>
                            <br/>
                            제3조 (개인정보의 보유 및 이용 기간)
                            <br/>
                            <br/>
                            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                            단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계시령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                            <br/>
                            <br/>
                            ο 보존 항목 : 이름 , 휴대폰번호, 이메일 주소
                            ο 보존이 필요한 근거 법령 : 통신비밀보호법 접속기록 등 웹사이트 방문 관련 기록 3개월
                            <br/>
                            <br/>
                            제4조 (개인정보의 파기 절차 및 방법)
                            <br/>
                            <br/>
                            개인정보의 파기절차 및 방법은 다음과 같습니다.
                            <br/>
                            <br/>
                            ο 파기절차
                            - 이용자가 서비스 신청 등을 위해 입력한 정보는 제3조의 개인정보의 보유 및 이용기간 만료 등 목적이 달성된 후 지체없이 파기됩니다.
                            <br/>
                            <br/>
                            ο 파기방법
                            - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                            - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                            <br/>
                            <br/>
                            제5조 (개인정보의 자동수집 장치의 설치·운영 및 거부에 관한 사항)
                            <br/>
                            <br/>
                            당 홈페이지는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용하지 않습니다.
                            <br/>
                            <br/>
                            제6조 (개인정보보호를 위한 기술적/관리적 대책)
                            <br/>
                            <br/>
                            경복궁 별빛야행은 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 합리적인 조치를 취할 수 있으며,
                            이를 위한 기술적 대책으로는 다음과 같은 것이 있습니다.
                            <br/>
                            <br/>
                            Ο 이용자의 개인정보는 기본적으로 비밀번호 및 암호화된 정보에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
                            <br/>
                            <br/>
                            Ο 경복궁 별빛야행은 백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있으며 백신프로그램은 주기적으로 업데이트 됩니다.
                            <br/>
                            <br/>
                            Ο 경복궁 별빛야행은 해킹 및 바이러스 등에 의하여 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해, 외부로부터의 침입탐지 및 침입차단 시스템을 두어
                            24시간 모니터링하며 관리하고 있습니다.
                            <br/>
                            <br/>
                            경복궁 별빛야행은 이용자의 개인정보보호의 중요성을 인식하고 있으며 이를 위해 개인정보처리직원을 합리적으로 제한하고 있으며 개인정보보호책임자가 처리직원을 대상으로
                            교육을 실시하여 개인정보보호를 위해 최선을 다하고 있습니다. 또한 본 정책에 명시된 이행사항 및 관련 직원의 준수여부를 정기적으로 점검하여 위반내용이 있는 경우
                            이를 시정 또는 개선하고 기타 필요한 조치를 취하도록 하고 있습니다.
                            <br/>
                            <br/>
                            제7조 (권익침해 구제방법)
                            <br/>
                            <br/>
                            이용자는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                            이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                            <br/>
                            <br/>
                            ο 개인정보분쟁조정위원회 : 02-2100-2499 (www.kopico.go.kr)
                            ο 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                            ο 대검찰청 사이버범죄수사단 : 02-3480-3571 (www.spo.go.kr)
                            ο 경찰청 사이버안전국 : (국번없이) 182 (cyberbureau.police.go.kr)
                            <br/>
                            <br/>
                            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는
                            부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                            <br/>
                            <br/>
                            ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회 (www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                            <br/>
                            <br/>
                            제8조 (개인정보 처리 위탁관리)
                            <br/>
                            <br/>
                            경복궁 별빛야행은 온라인 문의에 대한 해당 개인정보의 처리를 타인에게 위탁하지 않습니다.
                            <br/>
                            <br/>
                            제9조 (고지의무)
                            <br/>
                            <br/>
                            현 개인정보처리방침은 2023년 7월 31일 제정되었으며, 정부 및 경복궁 별빛야행의 정책 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 홈페이지를 통해 사전 공지합니다.
                        </div>
                        <div className='ck'>
                            <input type='checkbox' id='priChk' name='checkAgree' checked={checkAgree} onChange={changeValue}></input>
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