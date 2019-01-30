import React from 'react' ;
import  '../assets/css/buycar_main_product.css'
import {chenkPrice} from '../api/chenkPrice'
let Buycar_product = (props)=>(
    <>
        {
            props.addBuycar.map( (item , index) =>(
                    <div className="product" key= {index}>
                        <div className="commodity_box">
                            <div className="commodity">
                                <div className="img lf">
                                    <img src={item.d} alt="" />
                                </div>
                                <div className="detail lf">
                                    <p className="jieshao">{item.a}</p>
                                    <p className="size">【1灌装】800g/罐</p>
                                    <p className="size">数量：{item.count}</p>
                                    <div className="price_num">
                                        <div className="price lf">
                                            <span>单价：{chenkPrice(item.b)}</span>
                                            <br />
                                            <span>总价：{chenkPrice(item.b * item.count)}</span>
                                        </div>
                                        <div className="num rf">
                                            <button type="button">-</button>
                                            <span>1</span>
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="del">删除</div>
                        </div>
                    </div>
            ))
        }
        <div>点击付款</div>
    </>
    
)

export default Buycar_product ;