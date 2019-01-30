import React ,{Component} from 'react' ;
import Header from '../common/Header'
import Register_main from './Register_main'
class Register extends Component{
    render(){
        return(
           <>
             <Header></Header>
             <Register_main {...this.props}></Register_main>
           </>
        )
    }
}
export default Register ;