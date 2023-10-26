import "./App.css";
import "./css/reset.css";
import Sky from './component/sky'
import Palace from './component/palace'
import Gallery from "./component/gallery";
import Footer from "./component/footer";
import Section1 from './component/section1'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Header from "./component/header"
import Top from "./component/top"


function App() {

  return(
    <div>
        <section>
          <Sky />
          <Palace />
        </section>
        <Top/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Gallery />
        <Footer />
    </div>
  );

} 

export default App;