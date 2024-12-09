import React from 'react';
import './App.css';
import LeftSide from './Components/LeftSide';
import MiddleSide from './Components/MiddleSide';
import RightSide from './Components/RightSide';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReelsPage from './Components/ReelsPage'
import ExplorePage from './Components/ExplorePage'
import ProfileSide from './Components/ProfileSide';
import MessagePage from './Components/MessagePage';
function App() {
  return (
    <>

      <div className='App'>
        <div className="leftSideHome">
          <LeftSide />

        </div>
        
        <Routes>
          <Route path='/' element={
            <div className="middleSide">
              <MiddleSide />
            </div>
          } />

          <Route path='/ReelsPage' element={

            <div className='VideoPage'>

              <ReelsPage />
            </div>}
          />

          <Route path='/ExplorePage' element={
            <div className='ExplorePage'>
              <ExplorePage />
            </div>
          } />
          <Route path='/ProfileSide' element={
            <div className='ProfileSide'>
              <ProfileSide />
            </div>
          } />
          <Route path='/MessagePage' element={
            <div className='MessagePage'>
              <MessagePage />
            </div>
          } />
        </Routes>

        <div className="rightSide">
          <RightSide />
        </div>

      </div>
    </>
  );
}

export default App;
