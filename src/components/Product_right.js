import React ,{Component} from  'react' ;
import Product_rigth_list from '../common/Product_rigth_list'
import {connect} from 'react-redux'
import * as types from '../store/types'
import {asyncActionProductRightList} from '../store/asyncAction'
class Product_right extends Component{
// let Product_right = (props)=>(
    render(){
        // let {location, match} = this.props;
       
        // console.log(querystring.parse(location.search).a)
        return(
            <div className="right">

            <Product_rigth_list {...this.props}></Product_rigth_list>


            </div> 
        )
    }
    componentDidMount(){
        this.props.getProductRightList()
    }
    
}
let initMapStateToProps = (state)=>({
    product_rightlist:state.product_rightlist
})


let initMapDispatchToProps = (dispatch)=>({
      getProductRightList:()=>{
       dispatch(asyncActionProductRightList( 
        '/data/product_rightlist.json',
         dispatch,
        types.GETPRODUCT_RIGHTLIST
    ))
      }
})

export default connect( 
    initMapStateToProps,
    initMapDispatchToProps
    )(Product_right)