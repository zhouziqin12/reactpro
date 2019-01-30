import React from 'react' ;
import '../assets/css/confirm_order_content.css'
let Confirm_order_content =()=>(
    <div className="order_content">
        <div className="order">
            <img className="lf" src="images/22.png" alt="" />
            <div className="data lf">
                <div className="order_introduce">韩国 Papa recipe 春雨蜂蜜保湿爽肤水 200ml</div>
                <div className="order_norms">爽肤水200ml</div>
                <div className="p_n">
                    <p className="price lf">￥<span>85</span></p>
                    <p className="number rf">x<span>1</span></p>
                </div>
            </div>
        </div>
        <div className="freight">运费 <span>包邮</span></div>
        <div className="message">
            <form action="">
                <input type="text" placeholder="给商家留言" />
            </form>
        </div>
    </div>
)



export default Confirm_order_content ;