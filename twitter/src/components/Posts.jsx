import react, {useState} from 'react';
import Post from './Post';
 export default function Posts({tweets}){
    
    return(<div>
       {tweets.map(tweet=>(
        <Post
        src="./public/che.jpg"
        name="cher"
        usrname="@cher"
        content={tweet.text}/>
       ))}
      
    </div>)
}
