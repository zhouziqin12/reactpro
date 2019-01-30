import React ,{Component} from 'react' ;
import Header from '../common/Header';
import Relogin_main from './Relogin_main'
class Relogin extends Component{
    render(){
        return(
            <>
                <Header></Header>
                <Relogin_main></Relogin_main>
            </>
        )
    }
}

export default Relogin ;

