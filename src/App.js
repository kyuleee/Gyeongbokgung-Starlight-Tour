import "./App.css";
import "./reset.css";
import SKY from './sky'
import Palace from './palace'
import Gallery from "./gallery";
import Footer from "./footer";
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Header from "./header"
import Top from "./top"
import Test from "./test";

function App() {

  return(
    <div>
        <section>
          <SKY />
          <Palace />
        </section>
        <Top/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        {/* <section className="test2">   <Test />
        </section> */}
     
        <Gallery />
        <Footer />
    </div>
  );

} 

export default App;