import React ,{Component} from 'react' ;
import Header from '../common/Header';
import Login_main from './Login_main'
class Login extends Component{
    render(){
        return(
            <>
                <Header {...this.props}></Header>
                <Login_main {...this.props}></Login_main>
            </>
        )
    }
}

export default Login ;

