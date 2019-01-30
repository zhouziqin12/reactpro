import React  from 'react' ; 
import '../assets/css/detail_tool_bar.css'
let Detail_tool_bar = (props)=>(
    <>
        <div className="detail_tool_bar">
            <a className="detail_tool_shangjia" href="javascript:void(0)"></a>
            <a className="detail_tool_buy_cart" href="javascript:void(0)">
                <i className="detail_tool_icon_cart">
                    <span className="detail_tool_num">{props.confirmCount}</span>
                </i>
            </a>
            <a className="detail_tool_buy" href="javascript:void(0)" onClick={()=>props.history.push('/buycar')}>立即购买</a>
            <a className="detail_tool_join" href="javascript:void(0)" onClick={props.addShop}>加入购物车</a>
        </div>
    </>
)

export default Detail_tool_bar ;