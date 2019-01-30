import React ,{Component}from 'react' ;
import User_header from './User_header'
import User_member from './User_member'
import {connect} from 'react-redux'
import '../assets/css/user.css'
// let User = ()=>(
    class User extends Component{
        state = {
            username:''
        }
        render(){
            return(
                <div className="user_main">
                    <User_header {...this.props} goAfterSale={this.goAfterSale.bind(this)} goWaitPay={this.goWaitPay.bind(this)} goConfirm_order={this.goConfirm_order.bind(this)}           username={this.state.username} ></User_header>
                    <User_member></User_member>
                    <div className="my_purse">
                        <div className="my_purse_title">
                            <a className="my_purse_title_link" href="javascript:void(0)">
                                <b></b>我的钱包
                            </a>
                        </div>
                        <div className="my_purse_content">
                            <a className="freeze" href="javascript:void(0)">
                                <p>0</p>
                                提现冻结
                            </a>
                            <a className="balance" href="javascript:void(0)">
                                <p>0</p>
                                余额
                            </a>
                            <a className="coupon" href="javascript:void(0)">
                                <p>0</p>
                                优惠券
                            </a>
                        </div>
                    </div>
                    <ul className="item_list">
                    <li className="item">
                        <a className="item_order_link" href="javascript:void(0)">
                            <div className="item_content">
                                全部订单
                                <span>查看</span>
                            </div>
                        </a>
                    </li>
                    <li className="item">
                        <a className="item_er_link" href="javascript:void(0)">
                            <div className="item_content">
                                推广二维码
                                <span>点击发送</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            )
        }
        goAfterSale(){
            console.log('...')
            this.props.history.push('/user_aftersale')
        }
        goWaitPay(){
            console.log('....')
            this.props.history.push('/user_allorders')
        }
        goConfirm_order(){
            console.log('....')
            this.props.history.push('/confirm_order')
        }
        componentDidMount(){
            this.setState({
                username:document.cookie
            })
        }
       
    }
// )



export default User ;