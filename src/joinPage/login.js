import '../css/login.css';
import topImg from '../img/headerImg.png';

const Login = () => {
    return ( 
        <section className="login">
            <article className="infoTit">
                <img src={topImg}></img>
                <h3>로그인</h3>
            </article>
            <article className='w1500'>
                <h3 className='titBox'>로그인</h3>
                <div className='loginArea'>
                    <div>
                        회원로그인
                    </div>
                    <div className='tabContent'>
                        <form action="" method="post">
                            <div className='formItem'>
                                <div><input type='text' name='id' id='id' placeholder='아이디'/></div>
                                <div><input type='password' name='pwd' id='pwd' placeholder='비밀번호'/></div>
                            </div>
                            <div className='chkBox'>
                                <div>
                                    <input type='checkbox' id='idchk'/>
                                    <label for='idchk'>아이디저장</label>
                                </div>
                                <div>
                                    아이디 찾기 | 비밀번호 찾기
                                </div>
                            </div>
                            <div className='btnWrap'>
                                <div><input type='submit' value='로그인'></input></div>
                                <div><input type='button' value='회원가입'></input></div>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default Login;