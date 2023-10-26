import "./App.css";
import "./css/reset.css";
import Sky from './component/sky'
import Palace from './component/palace'
import Footer from "./component/footer";
import Section1 from './component/section1'
import Section5 from './component/section5'
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
        <Section5/>
        <Footer />
    </div>
  );

} 

export default App;