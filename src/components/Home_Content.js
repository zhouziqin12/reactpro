import React , {Component} from 'react' ;
import Home_list from '../common/Home_list' ;
import Home_Hot_sale from './Home_Hot_sale';
class Content extends Component{
    render(){
        return(
            <div className="content">
                <Home_list {...this.props}></Home_list>
                <Home_Hot_sale {...this.props}></Home_Hot_sale>
            </div>
        )
    }
}



export default Content ;