import React from 'react' ;
import '../assets/css/user_member.css'
let User_member = ()=>(
    <div className="vip_rank">
        <div className="vip_rank_title">
            <a className="vip_rank_title_link" href="javascript:void(0)">
                <div className="lf">金卡会员</div>
                <div className="rf">会员等级</div>
            </a>
        </div>
        <div className="vip_rank_content">
            <a className="wdfs" href="javascript:void(0)">
                <p>0</p>
                我的粉丝
            </a>
            <a className="byzd" href="javascript:void(0)">
                <p>0</p>
                本月账单
            </a>
            <a className="jffd" href="javascript:void(0)">
                <p>0</p>
                本月积分返点
            </a>
        </div>
    </div>
)

export default User_member ;