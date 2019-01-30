import React , {Component}from 'react' ;
import Home_Slider from '../common/Home_Slider'
import Home_Day from './Home_Day'
import Home_Content from './Home_Content'
import '../assets/css/home_main.css'
class Main extends Component{
    render(){

        return(
            <div className="home_main">
                <Home_Slider {...this.props}></Home_Slider>
                <Home_Day></Home_Day>
                <Home_Content {...this.props}></Home_Content>
            </div>
        )
    }
}

export default Main ;