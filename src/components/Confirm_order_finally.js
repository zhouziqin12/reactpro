import React from 'react' ;
import '../assets/css/confirm_order_finally.css'
let Confirm_order_finally =()=>(
    <div className="finally">
        <p className="finally_num">共<span>1</span>件商品</p>
        <div className="end">
            <p className="total">商品总金额：<b>￥</b><span>85</span></p>
            <p className="youhui">优惠：<span>0.00</span></p>
            <p className="shifu">实付：<b>￥</b><span>85</span></p>
        </div>
    </div>
)



export default Confirm_order_finally ;