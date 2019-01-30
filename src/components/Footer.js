import React from 'react'
import {NavLink} from 'react-router-dom'
let Footer = ()=>(

    <footer>
        <NavLink href="javascript:;" activeClassName="active" to="/home">首页</NavLink>
        <NavLink href="javascript:;" to="/product/product_right/1">分类</NavLink>
        <NavLink href="javascript:;" to="/buycar">购物车</NavLink>
        <NavLink href="javascript:;" to="/user">我的</NavLink>
    </footer>
       

)


export default Footer ;