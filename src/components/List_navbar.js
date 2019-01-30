import React from 'react' ;
import '../assets/css/list_navbar.css'
let List_navbar = ()=>(
    <div className="list_navbar">
        <a href="javascript:void(0)" className="list_navbar_p_order active">综合</a>
        <a href="javascript:void(0)" className="list_navbar_uptime">新品</a>
        <a href="javascript:void(0)" className="list_navbar_price">
            <div className="sort">
                <div className="list_navbar_sort_up"></div>
                <div className="list_navbar_sort_down"></div>
            </div>
            价格
        </a>
        <a href="javascript:void(0)" className="filter">筛选</a>
    </div>
)

export default List_navbar ;