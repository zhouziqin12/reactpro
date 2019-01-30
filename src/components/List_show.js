import React from 'react' ;
import '../assets/css/list_show.css'
import querystring from 'query-string'
import {chenkPrice} from '../api/chenkPrice'
let List_show = (props)=>{
    let {location , list_shop} = props;
//    console.log(querystring.parse(location.search).a)
    let pinlei = querystring.parse(location.search).a ;
    let arr = [] ;
    for(var i = 0 ; i < list_shop.length;i ++ ){
        if(pinlei == list_shop[i].leixing) {
            arr = list_shop[i].chanpin
        }
    }
    console.log(arr)
   console.log(props)
   let {history} = props ;
    return(
        <>   
            <div className="list_show">
                {
                    arr.map((item , index) =>(
                    <div className="list_product_box"  key ={index} onClick={()=>history.replace('/detail?a='+ item.title + '&b=' + item.price + '&c=' + item.cheapPrice + '&d=' + item.img)}>
                        <div className="list_product">
                            <a href="javascript:;">
                                <img src={item.img} alt="" />
                                <p className="list_jieshao">{item.title}</p>
                                <p className="list_jiage">{chenkPrice(item.price)} <span>省{chenkPrice(item.cheapPrice)}</span></p>
                            </a>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
        
    )
    
}

export default List_show ;