import React from 'react' ;
import Header from '../common/Header'
import User_commonorder from '../common/User_commonorder'
let User_aftersale =(props)=>(
    <>
        <Header {...props} title={"退货/售后"}></Header>
        <User_commonorder></User_commonorder>
    </>
)

export default User_aftersale;