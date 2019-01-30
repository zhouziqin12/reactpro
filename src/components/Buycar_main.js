import React ,{Component}from 'react' ;
import Buycar_main_title from './Buycar_main_title'
import Buycar_product from './Buycar_main_product'
import {connect} from 'react-redux' ;
import '../assets/css/buycar_main.css'
class Buycar_main extends Component{
    render(){
        return(
            <>
                <div className="main">
                    <Buycar_main_title></Buycar_main_title>
                    <Buycar_product {...this.props}></Buycar_product>
                </div>
            </>
        )
    }
    
}

let initMapStateToProps = (state)=>({
    addBuycar : state.addBuycar
})


export default connect(
    initMapStateToProps,
)(Buycar_main)