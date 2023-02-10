import React, {useState} from 'react';
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { CgPoll } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import handleaddPost from './Posts';

export default function DraftTweet({ src,setTweets,tweets }) {
  let style = {
    draft: {
      display: "flex",
      borderBottom: "1px solid #eff3f4",

      padding: "2%",
      gap: "1%",
      alignItems: "flex-start",
    },
    img: {
      borderRadius: "50%",
      width: "50px",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      // backgroundColor: "red",
      width: "90%",
    },
    icons: {
      display: "flex",
      gap: "7%",
      color: "#1d9bf0",
      fontSize: "30px",
    },
    input: {
      border: "none",
      backgroundColor: "transparent",
      padding: "3%",
      fontSize: "20px",
    },
    BtmContainer: {
    //   backgroundColor:"yellow",
      display: "flex",
      justifyContent: "space-between",
      padding: "0% 8% 0% 3%",
      
    },
    BtnTweet: {
      padding:"10px 20px 10px 20px",
      backgroundColor: "#1d9bf0",
      color: "white",
      fontSize: "17px",
      border: "none",
      borderRadius: "25px",
    },
  };
  const [tweet, setTweet] =useState("tweet");
  function handleTweetChange(e){
    setTweet({text:e.target.value});
    console.log(e.target.value);
    let val = e.target.value;
  }
  
  return (
    <div style={style.draft}>
      <img src={src} style={style.img} />
      <div style={style.wrapper}>
        <input value={tweet.text} onChange={handleTweetChange} placeholder="What's happening?" style={style.input} />
        <div style={style.BtmContainer}>
          <div style={style.icons}>
            <AiOutlinePicture />
            <AiOutlineFileGif />
            <CgPoll />
            <BsEmojiSmile />
            <TbCalendarTime />
            <CiLocationOn />
          </div>
          <div>
            <button style={style.BtnTweet} onClick={()=>setTweets([tweet,...tweets])} 
            >Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
