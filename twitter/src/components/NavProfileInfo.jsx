import { FiMoreHorizontal } from "react-icons/fi";
export default function NavProfileInfo({src,name,username}){
    let style={
    wrapper:{
        display: "flex",
        alignItems: "center",
        width:"100%",
        gap: "15%",
    },
    names:{
        display: "flex",
        flexDirection: "column",
    },
    usrname:{
        color: "gray",
    },
    img :{
        borderRadius: "50%",
        width: "40px",
    },
    account:{
        display: "flex",
        alignItems: "center",
        gap: "6%",
        margin: "5% 0% 0% 6%",
    }

    }
    return(
        <div style={style.wrapper}>
            <div style={style.account}>
            <img style={style.img} src={src}/>
            <div style={style.names}>
                <span>{name}</span>
                <span style={style.usrname}>{username}</span>
            </div>
            </div>
            <FiMoreHorizontal />
        </div>
    )
}