import React from 'react';
import './Gallary.css';
import Vid1 from "../Components/video/Videos/Reel1.mp4";
import Vid2 from "../Components/video/Videos/Reel2.mp4";
import Vid3 from "../Components/video/Videos/Reel3.mp4";
import Vid4 from "../Components/video/Videos/Reel4.mp4";
import Vid5 from "../Components/video/Videos/Reel5.mp4";
import Vid6 from "../Components/video/Videos/Reel6.mp4";
import Exploreimgae1 from '../assets/E1.png';
import Exploreimgae2 from '../assets/E2.png';
import Exploreimgae3 from '../assets/E3.png';
import Exploreimgae4 from '../assets/E4.png';
import Exploreimgae5 from '../assets/E5.png';
import Exploreimgae6 from '../assets/E6.png';
import Exploreimgae7 from '../assets/E7.png';
import Exploreimgae8 from '../assets/E8.png';
import Exploreimgae9 from '../assets/E9.png';
import Exploreimgae10 from '../assets/E10.png';
import Exploreimgae11 from '../assets/E11.png';
import Exploreimgae12 from '../assets/E12.png';
import Exploreimgae13 from '../assets/E13.png';
import Exploreimgae14 from '../assets/E14.png';
import { useEffect } from 'react'



const ExplorePage = () => {
  useEffect(() => {
    // Select all video elements with class 'vid'
    const videos = document.querySelectorAll('.vid');
    
    // Iterate through each video and play it
    videos.forEach(video => {
      video.play();
    });
  }, []); // Empty dependency array to run only once when component mounts
 
  return (
    <div className='ExploreVideoHome'>
      <div className="ExplorePageScrollBar">
      <div className="PhotoVideoGallary">
        <div className="PhotoVideoGallaryInner">
          {/* Gallery Grid */}
          <div className="VideoGallery">
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid1} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae1} alt="Explore 1" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae5} alt="Explore 5" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae8} alt="Explore 8" className="Reel" />
            </div>
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid2} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae6} alt="Explore 6" className="Reel" />
            </div>
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid3} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae2} alt="Explore 2" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae3} alt="Explore 3" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae14} alt="Explore 14" className="Reel" />
            </div>
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid4} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae12} alt="Explore 12" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae7} alt="Explore 7" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae4} alt="Explore 4" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae11} alt="Explore 11" className="Reel" />
            </div>
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid5} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <video className="Reel" width="100%" height="100%" controls src={Vid6} type="video/mp4"></video>
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae9} alt="Explore 9" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae10} alt="Explore 10" className="Reel" />
            </div>
            <div className="GalleryItem">
              <img src={Exploreimgae13} alt="Explore 13" className="Reel" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ExplorePage;
