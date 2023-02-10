import react, {useState} from 'react';
import DraftTweet from "./DraftTweet";
import Posts from "./Posts";

export default function Feed() {
  let style = {
    container: {
      width: "43%",
    },
    tabs: {
      display: "flex",
    },
    tabButton: {
      flex: 1,
      padding: "3%",
      borderBottom: "solid 1px #eff3f4",
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      backgroundColor: "transparent",
    },
  };
  const [tweets, setTweets] = useState([])
  function handleaddTweet({post}){
        
  }
  return (

    <div style={style.container}>
      <h1 style={{ marginLeft: "4%" }}>Home</h1>
      <div style={style.tabs}>
        <button style={style.tabButton}>For you</button>
        <button style={style.tabButton}>Following</button>
      </div>
      <DraftTweet  tweets={tweets} setTweets={setTweets} src="./public/prof.gif" />
      <Posts tweets={tweets} />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
