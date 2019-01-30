import React , {Component} from 'react'
import Home_Navbar from './Home_Navbar'
import Home_Main from './Home_Main'
import {connect} from 'react-redux'
import * as types from '../store/types'
import Loading from '../common/Loading'

import {asyncActionHomeSliderImg ,asyncActionHomeList ,asyncActionHomeHotSale} from '../store/asyncAction'
class Home extends Component{
    render(){
        return(
            <>
          
                <Home_Navbar></Home_Navbar>
                <Home_Main {...this.props}></Home_Main>
                {this.props.loading && <Loading></Loading>}
          
            </>
        )
    }
    componentDidMount(){
        this.props.getHomesliderimg()
        this.props.getHomelist()
        this.props.getHomeHotSale()
    }
}

let initMapStateToProps = (state)=>{
    return{
        home_sliderimg:state.home_sliderimg,
        home_list:state.home_list,
        loading:state.loading,
        home_hotsale:state.home_hotsale
    }
}

let initMapDispatchToProps = (dispatch) =>({
    getHomesliderimg:()=>{
        asyncActionHomeSliderImg(
            '/data/home_slider.json',
            dispatch,
            types.GETHOME_SLIDERIMG
        )
        
    },
    getHomelist:()=>{
        dispatch(asyncActionHomeList(
            '/data/home_list.json',
            dispatch,
            types.GETHOME_LIST
        ))
    },
    getHomeHotSale:()=>{
        dispatch(asyncActionHomeHotSale( 
            '/data/home_hotsale.json',
            dispatch,
            types.GETHOME_HOTSALE
        ))
    }
})

export default connect(  
    initMapStateToProps,
    initMapDispatchToProps
)(Home)