import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";

export default function Post({ src, name, usrname, content }) {
  let style = {
    post: {
      display: "flex",
      borderBottom: "1px solid #eff3f4",
      padding: "2%",
      gap: "1%",
      alignItems: "flex-start",
    },
    content: {
      width: "80%",
      padding: "0% 0% 0% 3%"
    },
    names: {
        display: "flex",
        gap:"1%",
        alignItems:"center",
    },
    stats: {
        display: "flex",
        gap: "15%",
        fontSize: "14px"
    },
    img: {
      borderRadius: "50%",
      width: "50px",
    },
    usrname:{
        color: "gray",
    },
    name:{
        fontSize:"18px"
    }
  };
  return (
    <div style={style.post}>
      <img src={src} style={style.img} />
      <div style={style.content}>
        <div style={style.names}>
          <div style={style.name}>{name}</div>
          <div style={style.usrname}>{usrname}</div>
        </div>
        <p>{content}</p>
        <div style={style.stats}>
          <FaRegComment />
          <FaRetweet />
          <AiOutlineHeart />
          <ImStatsBars />
        </div>
      </div>
    </div>
  );
}
