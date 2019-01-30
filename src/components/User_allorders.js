import React from 'react' ;
import Header from '../common/Header'
import User_commonorder from '../common/User_commonorder'
let User_allorders =(props)=>(
    <>
        <Header {...props} title={"全部订单"}></Header>
        <User_commonorder></User_commonorder>
    </>
)

export default User_allorders;