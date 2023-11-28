import "./App.css";
import "./css/reset.css";
import { Routes, Route } from 'react-router-dom'
import { useState, useRef, useEffect} from "react";
import LoadingImg from './img/mainText2.png'
import Sky from './component/sky'
import Top from "./component/top"
import Header from "./component/header"
import Footer from "./component/footer";
import Main from "./component/main"

//Pages
import Section1_subPage from "./page/section1_subPage";
import Section2_subPage from "./page/section2_subPage";
import Section3_subPage from "./page/section3_subPage";
import Section5_subPage from "./page/section5_subPage";
import Section_FAQ from './page/section4_FAQ'
import NotFound from './page/notFound';


// community
import NotiDetail from './page/notiDetail';
import NotiList from './page/notiList';
import NotiWrite from './page/notiWrite';

// join
import Login from "./joinPage/login";
import SignUp from './joinPage/SignUp';


function App() {
  const [notiData, setNotiData] = useState([]);
  const dataId = useRef(0);
  const notiCreate= (title,userName,content) =>{
    const createDate= new Date().getTime();
    const NewItem = {
      title,
      userName,
      content,
      createDate,
      notiId : dataId.current
    }
    dataId.current +=1;
    setNotiData([...notiData, NewItem]);
  }
  const notiRemove = (id)=>{
    const newlist=notiData.filter((data)=>data.notiId !== id);
    setNotiData(newlist);
  }
  
  const [LodingPage, setLodingPage] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLodingPage(false);
    },2500)
  })
  return(
    <div className="loadingWrap">
      {LodingPage ? (
      <div>
        <Sky>
        </Sky>
        <div className="loadingScreen">
          <div className="loadingImg">
            <img src={LoadingImg} className="loadingContent"></img>
            <p className="loadingText">Loading</p>
          </div>
        </div>
      </div>
      ) : (
        <div>
        <Sky />
        <Routes>
          <Route path="/Gyeongbokgung-Starlight-Tour/" element={<><Top/><Header/><Main/></>}/>
          <Route path="/Guide" element={<><Header/><Section1_subPage/></>}/>
          <Route path="/Program" element={<><Header/><Section2_subPage/></>}/>
          <Route path="/Event" element={<><Header/><Section3_subPage/></>}/>
          <Route path="/NoticeList" element={<><Header/><NotiList notiData={notiData}/></>}/>
          <Route path="/NoticeList/:idx" element={<><Header/><NotiDetail notiData={notiData} notiRemove={notiRemove}/></>}/>
          <Route path="/NoticeWrite" element={<><Header/><NotiWrite notiCreate={notiCreate}/></>}/>
          <Route path="/FAQ" element={<><Header/><Section_FAQ/></>}/>
          <Route path="/Gallery" element={<><Header/><Section5_subPage/></>}/>
          <Route path="/Login" element={<><Header/><Login/></>}/>
          <Route path="/Join" element={<><Header/><SignUp/></>}/>
          <Route path="*" element={<><Header/><NotFound/></>}/>
        </Routes>
        <Footer />
        </div>)}
    </div>
  );
} 
export default App;