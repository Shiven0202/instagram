import React from "react";
import "./MessageHome.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SearchIcon from "@mui/icons-material/Search";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Image1 from "../assets/E1.png";
import Image2 from "../assets/E2.png";
import Image3 from "../assets/E3.png";
import Image4 from "../assets/E4.png";
import Image5 from "../assets/E5.png";
import image from "../assets/Raga.png";
import image6 from "../assets/Ikka.png";
const MessagePage = () => {
  return (
    <div className="Messanger">
      <div className="MessangerPage">
        <div className="ChatPage">
          <ArrowBackIcon
            className="Arrow"
            sx={{ fontSize: "20px", marginTop: "15px" }}
          />
          <div className="ChatBox">
            <h1 className="MessageName">heyy.Shiven</h1>
          </div>
          <ExpandMoreIcon sx={{ fontSize: "20px" }} />
        </div>
        <div className="PenPage">
          <RateReviewIcon sx={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="SearchButton">
        <form class="d-flex" role="search">
          <SearchIcon className="SearchNameIcon" sx={{ fontSize: "20px" }} />

          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>

      <div className="Notes">
        <div className="NoteHighlight">
          <div className="ImgNote">
            <div className="Vibe">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={Image1} alt="" className="HighLightImage" />
            <p className="Note">Your Note</p>
          </div>
          <div className="ImgNote">
            <div className="Vibe">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={image6} alt="" className="HighLightImage" />
            <p className="Note">User</p>
          </div>
          <div className="ImgNote">
            <div className="Vibe">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={Image5} alt="" className="HighLightImage" />
            <p className="Note">User</p>
          </div>
          <div className="ImgNote">
            <div className="Vibe">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={Image3} alt="" className="HighLightImage" />
            <p className="Note">User</p>
          </div>
          <div className="ImgNote">
            <div className="Vibe">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={Image4} alt="" className="HighLightImage" />
            <p className="Note">User</p>
          </div>
          <div className="ImgNote">
            <div className="Vibe">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Crunt Vide?"
                aria-label="Search"
              />
            </div>
            <img src={Image4} alt="" className="HighLightImage" />
            <p className="Note">User</p>
          </div>
        </div>
      </div>
      <div className="Message-Requeat">
        <div className="MessSide">
          <p className="MessageTExt">Message</p>
        </div>
        <div className="RequestSide">
          <p className="MessageTExt">Request</p>
        </div>
      </div>
      <div className="MessangerChatBox">
        <div className="ScrollBar">
        <div className="PersonChatPAge">
          <img src={image} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image2} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={image6} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image1} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image2} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image3} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image4} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image4} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image4} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="PersonChatPAge">
          <img src={Image4} alt="" className="SingerChatImage" />
          <p className="UserNameChat"> Raga </p>
          <div className="ChatCamera">
            <CameraAltIcon sx={{ fontSize: "20px" }} />
          </div>
        </div>
        </div>
        
      </div>
   
   
    </div>
  );
};

export default MessagePage;
