import "./css/reset.css";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom'
import Sky from './component/sky'
import Top from "./component/top"
import Header from "./component/header"
import Footer from "./component/footer";
import Main from "./component/main"

//Pages
import Section1_subPage from "./page/section1_subPage";
import Section2_subPage from "./page/section2_subPage";
import Section3_subPage from "./page/section3_subPage";

function App() {
  return(
    <div>
          <Sky />
        <Routes>
          <Route path="/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/1" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/2" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/3" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/" element={<></>}/>
          <Route path="/" element={<></>}/>
          <Route path="/" element={<></>}/>
          <Route path="/" element={<></>}/>
          <Route path="/" element={<></>}/>
        </Routes>
        <Footer />
    </div>
  );
} 
export default App;