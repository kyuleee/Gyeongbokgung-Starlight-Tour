import "./App.css";
import "./css/reset.css";
import {Routes, Route} from 'react-router-dom'
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
          <Route path="/Guide" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/NoticeList" element={<></>}/>
          <Route path="/NoticeWrite" element={<></>}/>
          <Route path="/FAQ" element={<></>}/>
          <Route path="/Gallery" element={<></>}/>
          <Route path="/Login" element={<></>}/>
          <Route path="/Join" element={<></>}/>
        </Routes>
        <Footer />
    </div>
  );
} 
export default App;