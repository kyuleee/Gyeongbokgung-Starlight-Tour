import '../css/section4.css'
import {Link} from 'react-router-dom'
import { withTranslation,useTranslation } from 'react-i18next';
const Section4 = () => {
  const { t } = useTranslation();
    return (  
        <section className='section4'>
            <div className="sec4Padding w1500 flex">
                <article className="section4Aticle">
                    <h1>{t('sec4.title')}</h1>
                    <Link to ="/NoticeList"><button className="programMoreBtn sec4MoreBtn">{t('btn')}</button></Link>
                </article>
                <article className="section4Aticle">
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='noticeTXT'>{t('sec4.not1')}</p>
                        <p className='noticeDate'>2023.09</p>
                    </div></Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='noticeTXT'>{t('sec4.not2')}</p>
                        <p className='noticeDate'>2023.09</p>
                    </div></Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='noticeTXT'>{t('sec4.not3')}</p>
                        <p className='noticeDate'>2023.09</p>
                    </div></Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='noticeTXT'>{t('sec4.not4')}</p>
                        <p className='noticeDate'>2023.09</p>
                    </div></Link>
                    <Link to ="/NoticeList"><div className="notice flex">
                        <p className='noticeTXT'>{t('sec4.not5')}</p>
                        <p className='noticeDate'>2023.09</p>
                    </div></Link>  
                </article>
            </div>
        </section>
    );
}
 
export default withTranslation()(Section4);