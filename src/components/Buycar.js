import React ,{Component}from 'react' 
import Header from '../common/Header'
import Buycar_main from './Buycar_main'
import '../assets/css/buycar.css'
class Buycar extends Component{
    render(){
        return(
            <>
                <Header {...this.props} title={"购物车"}></Header>
                <Buycar_main {...this.props}></Buycar_main>
            </>
        )
    }
    
}
export default Buycar ;