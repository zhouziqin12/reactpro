import React from 'react' ;
import '../assets/css/user_header.css'
import querystring from 'query-string'
let User_header = (props)=>(
    <div className="user_box">
        <div className="user_info">
            <a href="javascript:void(0)" className="vip_data">
                <div className="head">
                    <img src="images/0.jpg" alt="" />
                </div>
                <div className="vip_right">
                    <p className="user_name">
                        XXX <span className="open_vip">开通年卡会员</span>
                    </p>
                    <div className="tjr">
                        <p>推荐人:</p>
                        <p className="tjr_name">商家</p>
                        <p className="tjr_xg">修改</p>
                    </div>
                    <p className="vip_number">用户名:<span>{props.username}</span></p>
                    <i className="right_icon"></i>
                </div>
            </a>
        </div>
        <div className="tjr_xg_tc">
            <span className="tjr_sp1">修改推荐人</span>
            <br/>
            <label>请输入推荐人会员号</label>
            <br/>
            <input  className="txt" type="text" name="tjrName" />
            <br/>
            <p><span className="tjr_sp2">取消</span><span>确定</span></p>

        </div>
        <div className="user_order">
            <a className="dfk" href="javascript:void(0)" onClick={props.goWaitPay}>
                <p>0</p>
                待付款
            </a>
            <a className="dsh" href="javascript:void(0)">
                <p>0</p>
                待收货
            </a>
            <a className="dpj" href="javascript:void(0)" onClick={props.goConfirm_order}>
                <p>0</p>
                确认订单
            </a>
            <a className="tk" href="javascript:void(0)" onClick={props.goAfterSale}>
                <p>0</p>
                退款/售后
            </a>
        </div>
    </div>
)

export default User_header ;