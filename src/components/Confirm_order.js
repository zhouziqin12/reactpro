import React , {Component}from 'react' ;
import Header from '../common/Header'
import Confirm_address_data from './Confirm_address_data'
import Confirm_order_content from './Confirm_order_content'
import Confirm_order_coupon from './Confirm_order_coupon'
import Confirm_order_finally from './Confirm_order_finally'
import Confirm_order_pay from './Confirm_order_pay'
class Confirm_order extends Component{
    render(){
        return(
            <>
                <Header {...this.props} title={"确认订单"} bianji={false}></Header>
                <div>
                    <Confirm_address_data></Confirm_address_data>
                    <Confirm_order_content></Confirm_order_content>
                    <Confirm_order_coupon></Confirm_order_coupon>
                    <Confirm_order_finally></Confirm_order_finally>
                    <Confirm_order_pay></Confirm_order_pay>
                    
                </div>
            </>
        )
    }
}

export default Confirm_order ;