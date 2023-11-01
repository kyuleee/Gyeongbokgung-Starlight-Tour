import "./App.css";
import "./css/reset.css";
import Sky from './component/sky'
import Palace from './component/palace'
import Top from "./component/top"
import Header from "./component/header"
import Section1 from './component/section1'
import Section2 from './component/section2';
import Section3 from "./component/section3";
import Section4 from './component/section4';
import Section5 from './component/section5'
import Footer from "./component/footer";

//Pages
import Section3_subpage from "./page/section3_subpage";


function App() {
  return(
    <div>
        <section>
          <Sky />
          {/* <Palace /> */}
        </section>
        {/* <Top/> */}
        <Header/>
        {/* <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/> */}
        <Section3_subpage/>

        <Footer />
    </div>
  );
} 
export default App;