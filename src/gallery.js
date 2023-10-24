import "./gallery.css";

const Gallery = () => {

    return ( 
        <section className="gallery">
            <h1 className="gallery-h1">경복궁갤러리</h1>
            <h1 className="gallery-h1 h1-margin">정보</h1>
            <div className="slidebox">
                <div className="slide">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <div className="slide">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
            <div className="slidebox move">
                <div className="slide">
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <div className="slide">
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </section>
     );
}
 
export default Gallery;