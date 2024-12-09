import React from 'react'
import {Link} from 'react-router-dom'
import './RightPage.css'
import RafftarProflie from '../assets/ProfileRafftar.png'
import Pera from '../assets/Pera.png'
import Mc from '../assets/Mc.png'
import Nora from '../assets/Nora.png'
import Tiger from '../assets/Tiger.png'
import Arijit from '../assets/Arijit.png'
import Ragav from '../assets/Ragav.png'
const Right = () => {
  return (
    <div className='rightSideHome'>
      <div className="topProfileRight">
        <div className="imgaeDivRightSide">
          <img src={RafftarProflie} alt="" className="imageRightSideProfile" />
          <div className="SecondUSer">
            <div className="SecondProfile">
            rafftarmusic
            </div>
            <div className="LoginSecondAccount">
              <div className="Switch">Rafftar</div>
            </div>
           
            </div>
            <div className="SwitchButton">
             <Link to="/Login" className="Switch">Switch</Link>

            </div>
        </div>
        <div className="Suggestions">
          <div className="SuggestionsTitle">Suggestions For You</div>
          <div className="All">See All</div>
        </div>
        <div className="imgaeDivRightSide">
          <img src={Mc} alt="" className="imageRightSideProfile" />
          <div className="SecondUSer">
            <div className="SecondProfile">
            mcsquare
            </div>
            <div className="LoginSecondAccount">
              <div className="Switch">Mc Square</div>
            </div>
           
            </div>
            <div className="SwitchButton">
             <a href="" className="Switch">Follow</a>

            </div>
        </div>

        
        <div className="imgaeDivRightSide">
          <img src={Pera} alt="" className="imageRightSideProfile" />
          <div className="SecondUSer">
            <div className="SecondProfile">
            peradox
            </div>
            <div className="LoginSecondAccount">
              <div className="Switch">Peradox</div>
            </div>
           
            </div>
            <div className="SwitchButton">
             <a href="" className="Switch">Follow</a>

            </div>
        </div>

        <div className="imgaeDivRightSide">
          <img src={Ragav} alt="" className="imageRightSideProfile" />
          <div className="SecondUSer">
            <div className="SecondProfile">
            ragavjuyal
            </div>
            <div className="LoginSecondAccount">
              <div className="Switch">ragavjuyal</div>
            </div>
           
            </div>
            <div className="SwitchButton">
             <a href="" className="Switch">Follow</a>

            </div>
        </div>

        <div className="imgaeDivRightSide">
          <img src={Arijit} alt="" className="imageRightSideProfile" />
          <div className="SecondUSer">
            <div className="SecondProfile">
            arijitsing
            </div>
            <div className="LoginSecondAccount">
              <div className="Switch">Arijit Sing</div>
            </div>
           
            </div>
            <div className="SwitchButton">
             <a href="" className="Switch">Follow</a>

            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Right
