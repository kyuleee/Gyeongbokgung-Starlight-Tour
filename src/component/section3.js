import '../css/section3.css';
import { useEffect, useRef, useState} from 'react';

const Section3 = () => {
  const section3Ref = useRef();
  const cardRefs = useRef([]);
  const [cardTransforms, setCardTransforms] = useState([]);

  useEffect(() => {
    const wrapper = section3Ref.current;
    const cards = cardRefs.current.map((cardRef) => cardRef.current);
    const start = wrapper.offsetTop - 100;
    const end = wrapper.offsetTop + wrapper.offsetHeight - window.innerHeight * 1.2;
    const step = (end - start) / (cards.length * 2);

    const updateTransforms = () => {
      if(window.innerWidth<=1024){
        return ;
      }
      const transforms = cards.map((card, i) => {
        const s = start + step * i;
        const e = s + step * (cards.length + 1);
        if (window.scrollY <= s) {
          return 'translateX(100vw)';
        } else if (window.scrollY > s && window.scrollY <= e) {
          return `translateX(${100 + (window.scrollY - s) / (e - s) * -100}vw)`;
        } else if (window.scrollY > e) {
          return 'translateX(0vw)';
        }
      });
      setCardTransforms(transforms);
    };

    updateTransforms();

    const handleResize = () => {
        updateTransforms();
    };

    const handleScroll = () => {
      updateTransforms();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const cardContents = [
    "'아티스트가 사랑한 궁'은 아티스트와 함께 궁궐의 아름다움을 전하는 초청공연입니다. 가을밤, 특별한 선율이 흐르는 경복궁 집옥재로 여러분을 초대합니다.",
    "판소리로 듣는 궁 이야기'는 세워지고 무너지고, 세워지고 무너지기를 반복하는 궁의 끈질긴 생명력과 그것을 기억하는 이들에 대한 이야기를 담은 창작 판소리 공연입니다.",
    "하루 2번 경복궁에서 왕가와 함께하는 특별한 산책이 펼쳐집니다. 왕과 왕비, 왕세자와 세자빈과 함께 걸으며 조선시대 궁궐의 일상을 즐겨보세요.",
    "조선왕조실록의 내용을 토대로 실제 임금이 드셨던 궁중병과와 궁중약차를 오늘날에도 즐길 수 있도록 구성된 체험 프로그램입니다.",
  ];
  return (
    <section className="section3 w1500" ref={section3Ref} >
      <article className="sticky">
        <h1>경복궁 행사</h1>
        <div className="eventWrap">
        {[1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="event"
              style={{ transform: cardTransforms[idx - 1] }}
              ref={(cardRef) => (cardRefs.current[idx - 1] = cardRef)}
            >
              <div className={`front front${idx}`}></div>
              <div className="back">{cardContents[idx - 1]}</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
export default Section3;