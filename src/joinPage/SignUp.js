import './SignUp.css'
import headerImg from '../img/headerImg.png'

const SignUp = () => {
  

    return (  
        <section className='SignUp'>
               <div className='w1500'>
                    <div className='SignUpHeader'>
                        <div><img src={headerImg}></img></div>
                        <h2></h2>
                    </div>
                    <h3 className='titBox2'>회원가입</h3>
                    <div className='SignUpMain'>
                        <div className='labelBox'>
                            <label>이름</label>
                            <label>아이디</label>
                            <label>비밀번호</label>
                            <label>비밀번호 확인</label>
                            <label>생년월일</label>
                            <label>휴대전화</label>
                            <label>이메일</label>
                            <label>이용약관 동의</label>
                            <label>개인정보/선택정보</label>
                            <label>수집 및 이용 동의</label>
                        </div>
                        <div className='inputBox'>

                            <div className='inputDiv'>
                                <input className='input' type='text'></input>
                            </div>

                            <div className='inputDiv'>
                                <input className='input' type='text'></input><button className="button">중복확인</button>
                                <p className='redTxt p'>*이용자ID의 길이는 8 ~ 16자 입니다.</p>
                            </div>
                            
                            <div className='inputDiv'>
                                <input className='input' type='text' placeholder='8~16자 영문대소문,숫자,특수문'></input>
                            </div>

                            <div className='inputDiv'>
                                <input className='input' type='text'></input>
                            </div>

                            <div className='birth flex'>
                                <div className='inputDiv'>
                                    <input className='input' type="radio" name="y"></input><span>양력</span>
                                    <input className='input' type="radio" name="y"></input><span>음력</span>
                                </div>
                                <div className='selectDiv'>
                                    <select className='select'>
                                        <option selected>1999</option>
                                    </select>
                                    <select className='select'>
                                        <option selected>10</option>
                                    </select>
                                    <select className='select'>
                                        <option selected>13</option>
                                    </select>
                                </div>
                            </div>

                           <div className='tel flex2'>
                                <select className='select'>
                                    <option selected>010</option>
                                </select>
                                <input className='telInput input' type='text'></input>
                                <input className='telInput input' type='text'></input>
                                <button className="button">인증하기</button>
                           </div>

                           <div className='eMail flex2'>
                                <input className='mailInput input' type='text'></input>
                                <div className='middle'>@</div>
                                <input className='mailInput input' type='text'></input>
                                <select className='select'>
                                    <option selected>직접입력</option>
                                </select>
                                <button className='button'>인증발송</button>
                           </div>
                           <p className='redTxt p'>*메일을 인증해주세요.</p>

                           <div className='check flex2'>
                                <input className='input' type="checkbox"></input><p className='p'>&#91;필수&#93; 이용약관 동의 보기</p>
                           </div>
                           <div className='flex2'>
                                <input className='input' type="checkbox"></input><p className='p'>&#91;필수&#93;  개인정보 수집 및 이용 동의 보기</p>
                           </div>
                           <div className='flex2'>
                                <input className='input' type="checkbox"></input><p className='p'>&#91;선택&#93; 선택정보 수집 및 이용 동의 보기 </p>
                           </div>
                        </div>
                    </div>
                    <div className='SignUpBtn'>
                        <button className='button'>가입하기</button>
                    </div>
                </div>
        </section>
    );
}
 
export default SignUp;