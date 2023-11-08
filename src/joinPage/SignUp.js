import './SignUp.css'
import headerImg from '../img/headerImg.png';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate= useNavigate();
    const joinFunc = ()=>{
        alert('가입을 축하드립니다.')
        navigate(-1);
    }

    return (  
        <section className='SignUp'>
            <div className="infoTit">
                <img src={headerImg}></img>
                <h3>회원가입</h3>
            </div>
            <div className='w1500'>
                <h3 className='titBox2'>회원가입</h3>
                <div className='SignUpMain'>
                    <div className='inputBox'>
                        <div className='inputDiv'>
                            <label>이름</label>
                            <input className='input' type='text'></input>
                        </div>
                        <div className='inputDiv'>
                            <label>아이디</label>
                            <input className='input' type='text'></input>
                            <div className='idchk'>
                                <button className="button">중복확인</button>
                                <p className='redTxt p'>* 이용자ID의 길이는 8 ~ 16자 입니다.</p>
                            </div>
                        </div>
                        <div className='inputDiv'>
                            <label>비밀번호</label>
                            <input className='input' type='password' placeholder='8~16자 영문대소문,숫자,특수문'></input>
                        </div>
                        <div className='inputDiv'>
                            <label>비밀번호 확인</label>
                            <input className='input' type='password'></input>
                        </div>
                        <div className='birth '>
                            <div className='inputDiv'>
                                <label>생년월일</label>
                                <input className='input' type="radio" name="y"></input><span>양력</span>
                                <input className='input' type="radio" name="y"></input><span>음력</span>
                            </div>
                            <div className='selectDiv'>
                                <select className='select'>
                                    <option selected>1999</option>
                                    <option>1997</option>
                                    <option>1989</option>
                                </select>
                                <select className='select'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option selected>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select className='select'>
                                    <option selected>13</option>
                                </select>
                            </div>
                        </div>

                        <div className='telphone'>
                            <label>휴대전화</label>
                            <div>
                                <select className='select'>
                                    <option selected>010</option>
                                </select>
                                <input className='telInput input' type='text'></input>
                                <input className='telInput input' type='text'></input>
                            </div>
                            <button className="button">인증하기</button>
                        </div>
                        <div className='eMail'>
                            <label>이메일</label>
                            <div>
                                <input className='mailInput input' type='text'></input>
                                <div className='middle'>@</div>
                                <input className='mailInput input' type='text'></input>
                                <select className='select'>
                                    <option selected>직접입력</option>
                                </select>
                            </div>
                            <button className='button'>인증발송</button>
                        </div>
                        <div className='inputDiv'>
                            <label>이용약관 동의</label>
                            <input className='input' type="checkbox"></input>
                            <p>&#91;필수&#93; 이용약관 동의 보기</p>
                        </div>
                        <div className='inputDiv'>
                            <label>개인정보/선택정보</label>
                            <input className='input' type="checkbox"></input>
                            <p>&#91;필수&#93;  개인정보 수집 및 이용 동의 보기</p>
                        </div>
                        <div className='inputDiv'>
                            <label>수집 및 이용 동의</label> 
                            <input className='input' type="checkbox"></input>
                            <p>&#91;선택&#93; 선택정보 수집 및 이용 동의 보기 </p>
                        </div>
                    </div>
                </div>
                <div className='SignUpBtn'>
                    <button className='button' onClick={joinFunc}>가입하기</button>
                </div>
            </div>
        </section>
    );
}
 
export default SignUp;