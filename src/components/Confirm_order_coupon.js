import React from 'react' ;
import '../assets/css/confirm_order_coupon.css'
let Confirm_order_coupon =()=>(
    <div className="coupon">
        <ul className="mui-table-view mui-table-view-radio payStyle" id="mui_box">
            <li className="mui-table-view-cell liClick">
                <a className="mui-navigate-right">
                    <div className="pay_fun"><img src="images/weixin6.png" className="pay_img"/>微信支付</div>
                    <img src="" alt=""/>
                </a>
                <img src="images/xuanzhong.png" className="xuanzhong" alt=""/>
            </li>
            <li className="mui-table-view-cell mui-selected">
                <a className="mui-navigate-right"><img src="images/jinqian.jpg" className="pay_img" />支付宝支付</a>
                <img src="images/xuanzhong.png" className="xuanzhong" alt=""/>
            </li>
            <li className="mui-table-view-cell">
                <a className="mui-navigate-right"><img src="images/huiyuan.jpg" className="pay_img"/>线下会员支付</a>
                <img src="images/xuanzhong.png" className="xuanzhong" alt=""/>
            </li>
        </ul>
    </div>
)



export default Confirm_order_coupon ;