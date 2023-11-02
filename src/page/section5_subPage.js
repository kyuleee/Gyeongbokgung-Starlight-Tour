import '../pageCss/section5_subPage.css'
import headerImg from '../img/headerImg.png'
import galleryImg1 from '../img/galleryImg1.png';
import galleryImg2 from '../img/galleryImg2.png';
import galleryImg3 from '../img/galleryImg3.png';
import galleryImg4 from '../img/galleryImg4.png';
const Section5_subPage = () => {
  

    return (  
        <section className='section5_subPage'>
               <div className='w1500'>
                    <div className='section5SubHeader'>
                        <div><img src={headerImg}></img></div>
                        <h2>갤러리</h2>
                    </div>
                    <div className='section5SubMain'>
                        <article className='flex5' >
                            <div className='galleryImg'><img src={galleryImg1}></img></div>
                            <div className='galleryImg'><img src={galleryImg2}></img></div>
                        </article>
                        <article className='flex5' >
                            <div className='galleryImg'><img src={galleryImg3}></img></div>
                            <div className='galleryImg'><img src={galleryImg4}></img></div>
                        </article>
                    </div>
                </div>
        </section>
    );
}
 
export default Section5_subPage;