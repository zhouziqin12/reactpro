import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../store/types'
import {asyncActionBeginQingQiu} from '../store/asyncAction'

class AuthUser extends  React.Component{
    render(){
      let {component:Component,...rest}=this.props;
      this.props.beginQingqiu() ;
      if (!this.props.hasAuth) return null;
      return (
        <Route {...rest} render={(props)=>{
       
            // if( document.cookie.length > 0){
            //     alert('欢迎尊贵的VIP')
            //     // props.history.push("/user")
            // }else{
            //     alert('还未登陆，马上帮您跳转到登录页')
            //     props.history.push("/login")
            // }
            if(document.cookie.length == 0) {
                alert('还未登陆，马上帮您跳转到登录页')
            }

            return(
                document.cookie.length > 0 ?
                <Component {...props} />://数据预载
                <Redirect to="/login" />
            )
         
            
        }}/>
      )
    }
  }

  let initMapStateToProps = (state)=>({
    hasAuth: state.hasAuth
  })
  let initMapDispatchToProps = (dispatch)=>({
    beginQingqiu:()=>{
        // console.log('....')
        dispatch(asyncActionBeginQingQiu(
            '/data/user.json',
            dispatch,
            types.HASUSER
        ))
    }
  }) 
  export default connect(  
    initMapStateToProps,
    initMapDispatchToProps
)(AuthUser)