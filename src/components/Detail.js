import React ,{Component} from 'react' ; 
import Header from '../common/Header'
import Detail_slider from '../common/Detail_slider'
import Detail_data from './Detail_data'
import Detail_warm_prompt from './Detail_warm_prompt'
import Detail_pic from './Detail_pic'
import Detail_tool_bar from './Detail_tool_bar'
import Addshop from './Addshop'
import {connect} from 'react-redux'
import '../assets/css/addshop.css'
import * as types from '../store/types'
class Dedail extends Component{
    render(){
        return(
            <>
                <Header {...this.props} title={"商品详情"}></Header>
                <Detail_slider></Detail_slider>
                <Detail_data {...this.props}></Detail_data>
                <Detail_warm_prompt></Detail_warm_prompt>
                <Detail_pic></Detail_pic>
                <Detail_tool_bar {...this.props} addShop={this.props.addShop.bind(this)}></Detail_tool_bar>
               {this.props.addshop &&  <Addshop {...this.props}  closeShop={this.props.closeShop.bind(this)} increCount={this.props.increCount.bind(this)} decreCount={this.props.decreCount.bind(this)} confirmAdd={this.props.confirmAdd.bind(this)}></Addshop>}
            </>
        )
    }
}

let initMapStateToProps = (state)=>({
    addshop:state.addshop,
    count:state.count,
    confirmCount:state.confirmCount,
    addBuycar:state.addBuycar
})
let initMapDispatchToProps = (dispatch)=>({
    addShop:()=>{ dispatch({type:types.ADDSHOP , payload : true})},
    closeShop:()=>{dispatch({type:types.ADDSHOP , payload : false})},
    increCount:()=>{dispatch({type:types.INCRECOUNT})},
    decreCount:(n)=>{
        console.log(n)
        if(n.innerHTML > 0){
            dispatch({type:types.DECRECOUNT})
        }
    },
    confirmAdd:(arr , location)=>{
        // console.log(options)
        dispatch({type:types.ADDBUYCAR , payload:arr})
        dispatch({type:types.CONFIRMADD});
        dispatch({type:types.ADDSHOP , payload : false})
    }
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Dedail) ;