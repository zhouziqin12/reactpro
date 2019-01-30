import React from 'react' ;
import '../assets/css/buycar_header.css'

let Buycar_header = (props)=>{
    let {history} = props ;
    return (
    <div className="top">
        <a href="javascript:;" className="back" onClick = {()=>history.go(-1)}></a>
        <span>{props.title}</span>
        {props.bianji && <a href="JavaScript:void(0)" className="edit">编辑</a>}
    </div>
    )
}

export default Buycar_header ;