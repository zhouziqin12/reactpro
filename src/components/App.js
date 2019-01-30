import React, { Component } from 'react';
import {Redirect , Route , Switch} from 'react-router-dom' ;
import {connect} from 'react-redux'
import Home from './Home'
import Footer from './Footer'
import Product from './Product'
import Buycar from './Buycar'
import User from './User'
import Confirm_order from './Confirm_order'
import User_aftersale from './User_aftersale'
import User_allorders from './User_allorders'
import Dedail from './Detail'
import List from './List'
import Login from './Login'
import Relogin from './Relogin'
import Register from './Register'
import Search from './Search'
import Error from './Error'
import Authuser from '../guard/Authuser'
import * as types from '../store/types'
import QueueAnim from 'rc-queue-anim';
class App extends Component {
  render() {
    return (
      <div className="App">
                <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route path="/home" component={Home}></Route>
                  <Route path="/product" component={Product}></Route>
                  <Route path="/buycar" component={Buycar}></Route>
                  {/* <Route path="/user" component={User}></Route> */}
                  <Authuser path="/user" component={User}/>
                  <Route path="/confirm_order" component={Confirm_order}></Route>
                  <Route path="/user_aftersale" component={User_aftersale}></Route>
                  <Route path="/user_allorders" component={User_allorders}></Route>
                  <Route path="/detail" component={Dedail}></Route>
                  <Route path="/list" component={List}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/relogin" component={Relogin}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/search" component={Search}></Route>
                  <Route component={Error}></Route>
              </Switch>
              {this.props.bFoot && <Footer></Footer>}
      </div>
    );
  }
  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname!==nextProps.location.pathname){
      let routerPath = nextProps.location.pathname;
      if (/confirm_order|detail|user_aftersale|user_allorders|login|relogin|register|search|list/.test(routerPath)){
        this.props.viewFoot(false);
      }else if(/home|product|buycar|user|/.test(routerPath)){
        this.props.viewFoot(true);
      }
      console.log('...')
      // if (/user/.test(routerPath)){
      //   this.props.viewNav(false);
      //   this.props.viewFoot(true);
      // }

    }
  }
}

let initMapStateToProps = (state , ownProps)=>({
  bFoot : state.bFoot
})

let initMapDispatchToProps = (dispatch , ownProps)=>({
  viewFoot:(bl)=>{dispatch({type:types.BFOOT,payload:bl})},
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)
