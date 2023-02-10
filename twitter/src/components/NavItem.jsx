import {Link} from 'react-router-dom';
export default function NavItem({icon,text,link}){
    let style={
        item: {
        display: "flex",
        alignItems : "center",
        gap: "10px",
        fontSize: "22px",
        color: "#0f1419",
        },
        
        link:{
            textDecoration: "none",
        }
    }
    
    return(
        <div>
        <Link to={link} style={style.link}>
        <div style={style.item}>
        <span>{icon}</span>
        <span>{text}</span>
        </div>
        </Link>
        </div>
        
    )
}