export default function FollowProfile({src,name,usrname}){
    let style={
        wrapper:{
            display: "flex",
            justifyContent: "space-between",
        },
        account:{
            display: "flex",
            gap: "1vw",
        },
        names:{
            display: "flex",
            flexDirection: "column",
        },
        img:{
            borderRadius: "50%",
            width: "40px",
        },
        button:{
            backgroundColor: "#0f1419",
            color: "white",
            borderRadius:"20px",
            padding: "1% 8% 1% 8%",
            border: "none",
        },
        usrname:{
            color: "gray",
        }
    }
    return(
        <div style={style.wrapper}>
            <div style={style.account}>
            <img src={src} style={style.img}/>
            <div style={style.names}>
            <div>{name}</div>
            <div style={style.usrname}>{usrname}</div>
            </div>
            </div>
            <button style={style.button}>Follow</button>
        </div>
    )
}