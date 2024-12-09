import React from "react";
import story from "../story.json";
import "./MiddleSidePage.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Ikka from "../assets/Ikka.png";
import Raga from "../assets/Raga.png";
import Kriti from "../assets/Kriti.png";
import Rafftar from "../assets/Rafftar.png";
import Krsna from "../assets/Krsna.png";

const MiddleSide = () => {
  const storys = story.story;
  return (
    <div className="MiddleScrollBar">
    <div className="middleHomeSide">
      
      <div className="storyBlock">
        {storys?.map((item, index) => {
          return (
            <div className="storyParticuler">
              <div className="imageDiv">
                <img className="statusImg" src={item.img} />
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Ikka} />
            <div className="postInfouserName">IkkaMusic</div>
            <div className="postTime">.40 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Ikka} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Ikka} alt="" />
            <div className="likeCount">
              liked by <p className="user">ikkamusic</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">ikkamusic</h2>
              <p className="discriptionText">Hip Hop....Don't Stop..!!</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Raga} />
            <div className="postInfouserName">Raga</div>
            <div className="postTime"> </div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Raga} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Rafftar} alt="" />
            <img className="CommentProfile" src={Raga} alt="" />
            <div className="likeCount">
              liked by <p className="user">Raga</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Rafftar</h2>
              <p className="discriptionText">Hip Hop....Don't Stop..!!</p>
            </div>
          </div>
        </div>
      </div>
    
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Kriti} />
            <div className="postInfouserName">Kriti</div>
            <div className="postTime"> 1 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Kriti} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Rafftar} alt="" />
            <div className="likeCount">
              liked by <p className="user">Kriti</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Kirit</h2>
              <p className="discriptionText">
                Thank you audience for all the love.!
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Rafftar} />
            <div className="postInfouserName">Rafftar</div>
            <div className="postTime">.40 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Rafftar} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Ikka} alt="" />
            <div className="likeCount">
              liked by <p className="user">ikkamusic</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Krsna</h2>
              <p className="discriptionText">Hip Hop....Don't Stop..!!</p>
            </div>
          </div>
        </div>
      </div>
  
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Krsna} />
            <div className="postInfouserName">Krsna</div>
            <div className="postTime">.20 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Krsna} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Raga} alt="" />
            <div className="likeCount">
              liked by <p className="user">Krsna</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Krsna</h2>
              <p className="discriptionText">Hip Hop..!!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Krsna} />
            <div className="postInfouserName">Krsna</div>
            <div className="postTime">.20 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Krsna} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Raga} alt="" />
            <div className="likeCount">
              liked by <p className="user">Krsna</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Krsna</h2>
              <p className="discriptionText">Hip Hop..!!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Krsna} />
            <div className="postInfouserName">Krsna</div>
            <div className="postTime">.20 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Krsna} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Raga} alt="" />
            <div className="likeCount">
              liked by <p className="user">Krsna</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Krsna</h2>
              <p className="discriptionText">Hip Hop..!!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="postSection">
        <div className="post">
          <div className="postinfo">
            <img className="postInfoImg" src={Krsna} />
            <div className="postInfouserName">Krsna</div>
            <div className="postTime">.20 min</div>
          </div>
          <div className="moreOpetion">
            <MoreVertIcon sx={{ fontSize: "20pxpx" }} />
          </div>
        </div>
        <div className="userPost">
          <img className="User-1" src={Krsna} alt="User Post" />
          <div className="Like-Box">
            <div className="likeSection">
              <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
              <p className="100k">100k</p>
            </div>
            <div className="commentSection">
              <ChatBubbleOutlineIcon sx={{ fontSize: "20px" }} />
            </div>
            <div className="SendSection">
              <SendIcon sx={{ fontSize: "20px" }} />
              <p className="20k">20k</p>
            </div>
            <div className="Bookmark">
              <BookmarkBorderIcon sx={{ fontSize: "20px" }} />
            </div>
          </div>
          <div className="commentPhoto">
            <img className="CommentProfile" src={Ikka} alt="" />
            <img className="CommentProfile" src={Raga} alt="" />
            <div className="likeCount">
              liked by <p className="user">Krsna</p> and others
            </div>
          </div>
          <div className="Discription">
            <div className="DicriptionName">
              <h2 className="ikkamusic">Krsna</h2>
              <p className="discriptionText">Hip Hop..!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default MiddleSide;
