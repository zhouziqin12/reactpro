import React from 'react' ;
import '../assets/css/product_left.css'
import {NavLink , Route} from 'react-router-dom'
let Product_left = ({product_left,goProductRight,product_leftactive ,match ,getProductRightList})=>(
        <div className="left">
            <ul>
                {
                   product_left.map(item =>(
                    <li key={item.id}
                    onClick={(ev)=>{goProductRight(item.id , ev)}}
                    className={product_leftactive==item.id ? "current" : ""}><NavLink to={{pathname:match.url + '/product_right/'+item.id }}>{item.title}</NavLink></li>
                   ))
                }

                
                {/* <li className="current">为你推荐</li>
                <li>特卖专场</li>
                <li>每日新品</li>
                <li>每周热卖</li>
                <li>个护化妆</li>
                <li>精品美食</li>
                <li>地标特产</li>
                <li>时令鲜果</li>
                <li>流行服饰</li>
                <li>男女鞋靴</li>
                <li>时尚箱包</li>
                <li>营养保健</li>
                <li>母婴用品</li>
                <li>名酒名茶</li>
                <li>家居日用</li>
                <li>数码/家电</li>
                <li>首饰奢品</li>
                <li>品牌专场</li> */}
            </ul>
        </div>
)

export default Product_left ;