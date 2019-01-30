import React from 'react' ;
import '../assets/css/product_search.css'

let Product_search = (props)=>{
    let {history} = props ;
    return(
        <div className="search_box">
            <a href="javascript:;" className="back lf" onClick={()=>history.go(-1)}></a>
            <a href="javascript:;" className="search lf" onClick={props.goSearch}>输入商品名称</a>
        </div>
    )
}

export default Product_search ;