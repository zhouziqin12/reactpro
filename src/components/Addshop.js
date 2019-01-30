import React ,{Component}from 'react' ;
import querystring from 'query-string'
import {chenkPrice} from '../api/chenkPrice'
class Addshop extends Component{
// let Addshop = (props)=>{
    render(){
        let a = querystring.parse(this.props.location.search).a;
        let b = querystring.parse(this.props.location.search).b;
        let c = querystring.parse(this.props.location.search).c;
        let d = querystring.parse(this.props.location.search).d;
        let count = this.props.count ;
        return(
            <>
                <div id="addshop_affirm_join" className="addshop_affirm">
                    <img id="img11" src="/images/product_list73.jpg" onClick={this.props.closeShop}/>
                    <div className="addshop_affirm_up">
                        <div className="addshop_img_box addshop_lf">
                            <img  src={d} alt="" />
                        </div>
                        <div className="addshop_affirm_jieshao addshop_lf">
                            <p className="addshop_affirm_introduce">{a}</p>
                            <p className="addshop_total">总价&nbsp;:<span>{chenkPrice((b - 0) * count)}</span></p>
                        </div>
                    </div>
                    <div className="addshop_affirm_down">
                        <div className="addshop_norms">
                            <p>规格</p>
                            <a href="javascript:void(0)">【1灌装】800g/罐</a>
                        </div>
                        <div className="addshop_affirm_num">
                            数量
                            <button type="button"  onClick={()=>this.props.decreCount(this.refs.c1)}>-</button>
                            <span ref="c1">{count}</span>
                            <button type="button" onClick={this.props.increCount}>+</button>
                        </div>
                    </div>
                    <a href="JavaScript:void(0)" className="addshop_affirm_ok" onClick={()=>this.props.confirmAdd([{a , b, d , count}] , this.props.location)}>确定</a>
                </div>
            </>
        )
    }
    
}
 export default Addshop