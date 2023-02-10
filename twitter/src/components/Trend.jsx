import { FiMoreHorizontal } from "react-icons/fi";

export default function Trend({trending,trend,tweets}){
    let style={
        container:{
            display:"flex",
            justifyContent: "space-between",
        },
        trend:{
            display:"flex",
            flexDirection:"column",
            gap:"0.2rem",
        },
        trending:{
            color:"#536471",
        }
    }
    return(
        <div  style={style.container}>
            <div style={style.trend}>
            <div style={style.trending}>{trending}</div>
            <div>{trend}</div>
            <div style={style.trending}>{tweets}</div>
            </div>
            <FiMoreHorizontal/>
        </div>
    )

}