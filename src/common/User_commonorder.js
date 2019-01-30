import React from 'react' ;
import '../assets/css/user_commonorder.css'
let User_commonorder = ()=>(
    <div className="user_commonorder_order_list">
        <div className="user_commonorder_order">
            <div className="user_commonorder_title">
                订单号：201604291625301768
                <span className="rf">已付款</span>
            </div>
            <div className="user_commonorder_order_product">
                <img src="images/22.png" alt="" />
                <div className="user_commonorder_order_right">
                    <div className="user_commonorder_order_introduce">
                        【五一特惠59元2罐】抢光王！印尼进口丽芝士nabati奶酪威化饼干350g 规格：【350g灌装】
                    </div>
                    <div className="user_commonorder_order_data">数量：<span className="user_commonorder_num">1</span>，&nbsp;<b>￥</b><span>33.00</span></div>
                </div>
            </div>
            <div className="user_commonorder_end">共 <span>1件</span>，合计 <b>￥<span>79.00</span></b> （包邮）</div>
            <div className="user_commonorder_btn">
                <a className="user_commonorder_pay" href="javascript:void(0)">退货/售后</a>
                <a className="user_commonorder_cancel" href="javascript:void(0)">取消订单</a>
            </div>
        </div>
    </div>
)

export default User_commonorder ;

