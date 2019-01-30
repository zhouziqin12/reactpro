import React ,{Component}from 'react' 
import Product_search from '../common/Product_search' ;
import Product_left from './Product_left'
import Product_right from './Product_right' ;
import {connect} from 'react-redux'
import * as types from '../store/types'
import {asyncActionProductLeft} from '../store/asyncAction'
import {Route} from 'react-router-dom'
import '../assets/css/product.css'

class Product extends Component{
        render(){
            let {match , history} = this.props ;
            return(
                <>
                    <Product_search {...this.props} goSearch={this.goSearch.bind(this)} goBack={this.goBack.bind(this)}></Product_search>
                    <div className="product_main">
                        <Product_left {...this.props} goProductRight={this.props.goProductRight.bind(this)}></Product_left>
                        {/* <Product_right {...this.props} ></Product_right> */}
                        <Route path={match.path + "/product_right/:aid"}  component={Product_right} />
                    </div>
                </>
            )
        }
        componentDidMount(){
            this.props.getProductLeft()
        }
        goSearch(){
            // console.log('...')
            this.props.history.push('/search')
            
        }
        goBack(){
            this.props.history.go(-1)
        }
        // goProductRight(id , index , ev){
            // console.log(id ,index )
            // this.props.store.dispatch({type:types.GETPRODUCT_LEFTACTIVE , payload:id})
            // ev.target.className="current" ;
            // console.log(ev)
        // }
   
}

let initMapStateToProps = (state)=>({
    product_left:state.product_left,
    product_leftactive:state.product_leftactive
})


let initMapDispatchToProps = (dispatch)=>({
    getProductLeft:()=>{asyncActionProductLeft(
        '/data/product_left.json',
        dispatch,
        types.GETPRODUCT_LEFT
    )},
    goProductRight:(id ,ev)=>{
        dispatch({type:types.GETPRODUCT_LEFTACTIVE , payload:id})
    },
    getProductRightList:()=>{
        console.log('...')
    },
    
    
    
})
export default connect( 
    initMapStateToProps,
    initMapDispatchToProps
    )(Product)