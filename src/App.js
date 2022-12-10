import './App.css';
import { useState } from 'react';
import { Header } from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import SideIconsBar from './Components/SideIconsBar';
import SideBar from './Components/SideBar';

function App() {
  const [sideBarState, SetsideBarState] = useState({
    status: true
  })
  return (
    <>
      <Header sideBarState={sideBarState} SetsideBarState={SetsideBarState} />
      <div className="main_page">
        {sideBarState.status ? <SideIconsBar /> : <SideBar />}
        <RecommendedVideos sideBarState={sideBarState} />
      </div>
    </>
  );
}

export default App;
