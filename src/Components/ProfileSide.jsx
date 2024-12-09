import React ,  { useState } from 'react'
import './ProfileSidePage.css'
import Profile from '../assets/Profile.png'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AppsIcon from '@mui/icons-material/Apps';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PortraitIcon from '@mui/icons-material/Portrait';
import Image1 from '../assets/E1.png';
import Image2 from '../assets/E2.png';
import Image3 from '../assets/E3.png';
import Image4 from '../assets/E4.png';
import Image5 from '../assets/E5.png'

const ProfileSide = () => {
    const [profileData, setProfileData] = useState(null);

  return (
    <div className="ProfileeditPage">
    <div className='ProfileHome'>
        <div className='ProfileHomeImage'>
            <img src={Profile} alt="" className="PfImage"  height={"50px"} />
            <div className="PlusIcon">
        <AddCircleIcon className='PlusBuuton'  sx={{fontSize:"20px"}}/>
        </div>
        <div className="profileName">
            <h2 className='BioName'>Shiven</h2>
        </div>
        <div className="Bio-Discripstion">
            <p className='Bio-Discripstion-Name'>I am a Nautur explorer</p>
        </div>
        </div>
        <div className="followerPostPage">
       <div className="Follower">
        <h4 className="Post-count">
            12
        </h4>
        <p className='Follower-Count'>Post </p>
       </div>
       <div className="Following">
       <h4 className="Post-count">
            150k
        </h4>
        <p className='Following-Count'>Follower </p>
       </div>
       <div className="Follow">
       <h4 className="Post-count">
            150
        </h4>
        <p className='Following-Count'>Following </p>
       </div>
       </div>
    
    </div>
       <div className="ProfileButtonsPage">
       <div className="Edit">
       <a href='' className="ProfileButton">Edit Profile</a>
       </div>
       <div className="Share">
       <a href='' className="ProfileButton">Share Profile</a>
       </div>
       <div className="useredit">
      <a href='' className='user'  > <PersonAddIcon className='user'  sx={{fontSize:"25px"}}/></a>
       </div>
      </div>

      <div className="Highlight">
        <div className="StoryHighlight">
            <img src={Image1} alt="" className="HighLightImage" />
            <img src={Image2} alt="" className="HighLightImage" />
            <img src={Image3} alt="" className="HighLightImage" />
            <img src={Image4} alt="" className="HighLightImage" />
            <img src={Image5} alt="" className="HighLightImage" />
            <img src={Image2} alt="" className="HighLightImage" />
            <img src={Image3} alt="" className="HighLightImage" />
           
           


        </div>
      </div>

        


      <div className="Reel-Post-Collebration-Icon">
      <div className="App">
        <AppsIcon  sx={{fontSize:"20px"}}/>
      </div>
      <div className="App">
        <SlowMotionVideoIcon  sx={{fontSize:"20px"}}/>
      </div>
      <div className="Collebration">
        <PortraitIcon  sx={{fontSize:"20px"}}/>
      </div>
      </div>

      <div className="PostsHomePage">
        <div className="ImagesPage">
            <img src={Image1} alt="" className="Image" />
            <img src={Image2} alt="" className="Image" />
            <img src={Image3} alt="" className="Image" />
            <img src={Image4} alt="" className="Image" />
            <img src={Image5} alt="" className="Image" />
            <img src={Image2} alt="" className="Image" />
            <img src={Image3} alt="" className="Image" />
            <img src={Image4} alt="" className="Image" />
            <img src={Image5} alt="" className="Image" />
            <img src={Image2} alt="" className="Image" />
            <img src={Image3} alt="" className="Image" />
            <img src={Image4} alt="" className="Image" />
           


        </div>
      </div>
      </div>
  )
}

export default ProfileSide
