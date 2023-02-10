import NavItem from "./NavItem";
import NavProfileInfo from "./NavProfileInfo";
import { AiFillHome } from "react-icons/ai";
import { CiHashtag } from "react-icons/ci";
import { GrNotification } from "react-icons/gr";
import { BiEnvelope } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { CgMoreO } from "react-icons/cg";

export default function LeftSideBar() {
  let style = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width : "20%",
      padding: "0% 0% 5% 3.7%",
      gap: "10px",
      border: "solid 1px #eff3f4",
      // position: "absolute",
    },
    logo: {
      width: "70px",
    
    },
    items: {
      display: "flex",
      flexDirection: "column",
      width:"25%",
      gap: "20px",
      paddingLeft: "9%",
  },
    button:{
      padding: "5% 5%",
      marginTop: "6%",
      width: "80%",
      backgroundColor: "#1d9bf0",
      color: "white",
      fontSize: "17px",
      border :"none",
      borderRadius: "25px",
    }
  };
  return (
    <div style={style.container}>
      <img src="./public/twitterLogo1.png" style={style.logo}></img>
      <div style={style.items}>
        <NavItem icon={<AiFillHome />} text="Home" link="/" />
        <NavItem icon={<CiHashtag />} text="Explore" link="/" />
        <NavItem icon={<GrNotification />} text="Notifications" link="/" />
        <NavItem icon={<BiEnvelope />} text="Messages" link="/" />
        <NavItem icon={<BsBookmark />} text="Bookmarks" link="/" />
        <NavItem icon={<CiViewList />} text="Lists" link="/" />
        <NavItem icon={<RxPerson />} text="Profile" link="/" />
        <NavItem icon={<CgMoreO />} text="More" link="/" />
      </div>
      <button style={style.button}>Tweet</button>
      <NavProfileInfo src="./public/prof.gif" name="yosr" username="@yosryosra"/>
    </div>
  );
}
