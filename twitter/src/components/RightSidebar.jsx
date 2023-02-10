import SearchBar from "./SearchBar";
import Trend from "./Trend";
import FollowProfile from "./FollowProfile";

let style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3%",
    padding: "5px 12px 0px 12px",
    width: "31%",
    border: "solid 1px #eff3f4",
    
  },
  trendsContainer: {
    backgroundColor: "#f7f9f9",
    width: "76%",
    padding: "0% 3% 3% 3%",
    borderRadius: "10px",
  },
  trends: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  profiles: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  copyright:{
    padding: "0% 5% 0% 10%",
    color: "gray",
  }
};
export default function LeftSideBar() {
  return (
    <div style={style.container}>
      <SearchBar />
      
      <div style={style.trendsContainer}>
        <h2>Trends for you</h2>
        <div style={style.trends}>
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
          <Trend
            trending="Trending in Tunisia"
            trend="#Tunisia"
            tweets="193K tweets"
          />
        </div>
      </div>
      <div style={style.trendsContainer}>
        <h2>Who to follow</h2>
        <div style={style.profiles}>
          <FollowProfile
            src="./public/kylian.jpg"
            name="Kylian Mbappé"
            usrname="@KMbappe"
          />
          <FollowProfile
            src="./public/kimk.jpg"
            name="Kim Kardashian"
            usrname="@KimKardashian"
          />
          
          
        </div>
      </div>
      <div style={style.copyright}>
        Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
        More <br/> © 2023 Twitter, Inc.
      </div>
    </div>
  );
}


