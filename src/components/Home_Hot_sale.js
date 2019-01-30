import React from 'react' ;
import '../assets/css/home_Hot_sale.css'
import {chenkPrice} from '../api/chenkPrice'
let Hot_sale = (props)=>(
    <div className="hot_sale">
        <p className="hot_commodity">热销商品</p>
        <div className="hot_sale_show">
            {
                props.home_hotsale.map(item=>(
                    <div className="hot_product" key={item.id}>
                        <img src={item.img} alt="" />
                        <p className="introduce">{item.title}</p>
                        <p className="price">优惠价：{chenkPrice(item.price)}</p>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Hot_sale ;