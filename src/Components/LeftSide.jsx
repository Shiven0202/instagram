import React from 'react'
import './LeftSidePage.css'
import { Link , navLink } from 'react-router-dom';
import ProfileImage from '../assets/Profile.png'
import instagramLog from '../assets/instagramlogo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EmailIcon from '@mui/icons-material/Email';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
const LeftSide = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img className='logoImg' src={instagramLog} alt="Instagram Logo"/>
      </div>
      <div className="navLinkpart">
        <div className="navLink">
         <HomeIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
      <div className="navName"><Link to='/'> Home</Link></div>
        </div>
        <div className="navLink">
          <SearchIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName">Search</div>
        </div>
        <div className="navLink">
          <ExploreIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName "> <Link to="/ExplorePage" > Explore</Link> </div>
        </div>
        <div className="navLink">
       <MusicVideoIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
       <Link to='/ReelsPage'>   <div className="navName">  Reels   </div></Link>
        </div>
        <div className="navLink">
          <EmailIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName"><Link to='/MessagePage'>Message</Link></div>
        </div>
        <div className="navLink">
          <FavoriteBorderIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName">Notifications</div>
        </div>
        <div className="navLink">
          <AddBoxIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName">Create</div>
        </div>
        <div className="navLink">
           <img className='profileImg' src={ProfileImage} alt="Profile Image" />
          <div className="navName"><Link to='ProfileSide'>Profile</Link></div>
        </div>

        <div className="belowPart">
        <div className="navLink">
        <GestureIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName">Thread</div>
        </div>
        <div className="navLink">
        <MenuIcon sx={{fonstSize:"30px" ,margin:"0 20px 0 0"}}/>
          <div className="navName">More</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
