import './App.css';
import { Header } from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import SideBar from './Components/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className="main_page">
        <SideBar />
        <RecommendedVideos />
      </div>
    </>
  );
}

export default App;
