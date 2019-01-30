import React ,{Component} from 'react' ;
import Product_search from '../common/Product_search'
import List_navbar from './List_navbar'
import List_show from './List_show'
import {connect} from 'react-redux'
import * as types from '../store/types'
import {asyncActionGetListShop} from '../store/asyncAction'
class List extends Component{
    render(){
        return(
            <>
                <Product_search {...this.props}></Product_search>
                <List_navbar></List_navbar>
                <List_show {...this.props}></List_show>
            </>
        )
    }
    componentDidMount(){
        this.props.getListShop()
    }
}

let initMapStateToProps = (state)=>({
    list_shop:state.list_shop
})

let initMapDispatchToProps = (dispatch)=>({
    getListShop:()=>{
        asyncActionGetListShop(
            '/data/list.json',
            dispatch,
            types.GETLIST_SHOP
        )
    }
})
export default connect(  
    initMapStateToProps,
    initMapDispatchToProps
    )(List)