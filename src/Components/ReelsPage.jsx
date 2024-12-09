import { Link } from "react-router-dom";
import LeftSide from "../Components/LeftSide";
import "./Reel.css";
import Reel1 from "../Components/video/Videos/Reel1.mp4";
import Reel2 from "../Components/video/Videos/Reel2.mp4";
import Reel3 from "../Components/video/Videos/Reel3.mp4";
import Reel4 from "../Components/video/Videos/Reel4.mp4";
import Reel5 from "../Components/video/Videos/Reel5.mp4";
import Reel6 from "../Components/video/Videos/Reel6.mp4";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect } from "react";

const ReelsPage = () => {
  useEffect(() => {
  
    const videos = document.querySelectorAll('.vid');
    
    
    videos.forEach(video => {
      video.play();
    });
  }, []); 

  return (
    <div className="ReelsHomePage">
      <div className="Reels">
        <div className="LogoName">
          <h3 className="ReelLogoName">Reels</h3>
          <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
        </div>

        <div className="ReelLeftSide">
          <PhotoCameraIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>

      <div className="VideoPlayPage">
        <div className="Video-cards">
          <video className="vid" width="100%" height="100%"  autoPlay loop muted controls src={Reel1} type="video/mp4"></video>
          <video className="vid" width="100%" height="100%"   autoPlay loop muted  controls src={Reel2} type="video/mp4"></video>
          <video className="vid" width="100%" height="100%"  autoPlay loop muted  controls src={Reel3} type="video/mp4"></video>
          <video className="vid" width="100%" height="100%"  autoPlay loop muted  controls src={Reel4} type="video/mp4"></video>
          <video className="vid" width="100%" height="100%"  autoPlay loop muted  controls src={Reel5} type="video/mp4"></video>
          <video className="vid" width="100%" height="100%"  autoPlay loop muted  controls src={Reel6} type="video/mp4"></video>
          
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;
