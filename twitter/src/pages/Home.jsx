import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home(){
    return(
        <div className="Home">
        <LeftSidebar/>
        <Feed/>
        <RightSidebar/>
        
        </div>
    )
}