import { useState} from 'react';
import '../css/section5.css'
import img1 from '../img/img1.jpg'

const Section5 = () => {
    const [move, setMove] = useState(true);
    const onStop = () => setMove(false);
    const onRun = () => setMove(true);
    const slides = [
        { color: "red", target: "#" },
        { color: "red", target: "#" },
        { color: "red", target: "#" },
        { color: "red", target: "#" },
        { color: "red", target: "#" },
        { color: "red", target: "#" },
        { color: "red", target: "#" },
    ];

    return (  
        <section className='section5'>
            <article className='w1500'>
                <h1 className='section5Title'>경복궁 갤러리</h1>
            </article>
            <article className="slideWrapper">
                <div>
                    <ul className="topMovewrapper">
                         {/*State False면 Class가 Stop 으로 바뀌면서 멈춤 */}
                        <div className={"slide original" + (move ? "" : " stop")}>
                            {slides.map((s, i) => (
                                <li className="moveBox" onMouseEnter={onStop} onMouseLeave={onRun} key={i}>
                                    <div className="item" style={ { background: s.color}}></div>
                                </li>
                            ))}
                        </div>
                        <div className={"slide cloneBox" + (move ? "" : " stop")} >
                            {slides.map((s, i) => (
                                <li className="moveBox" onMouseEnter={onStop} onMouseLeave={onRun} key={i}>
                                    <div className="item" style={{ background:{ background: s.color}}}></div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>
            </article>

        </section>
    );
}
 
export default Section5;