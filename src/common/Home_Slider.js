import React from 'react' ;
import '../assets/css/swiper.css'
import ReactSwipe from 'react-swipe';
let Slider = (props)=>{
    let reactSwipeEl;
    let {home_sliderimg} = props ;
    console.log(home_sliderimg)
    return(
        <div className="swiper_img">
               {/* {
                    // console.log(props.home_sliderimg)
                   home_sliderimg.map(item =>(
                    <div className="swiper-slide" key={item.id}> <a href="javascript:void(0)"><img src={item.img} alt="" /></a></div>
                    ))
                } */}
            <ReactSwipe
                className="carousel"
                swipeOptions={
                    { 
                        continuous: true ,
                        speed:1000,
                        auto:1000,
                    }
                }
                ref={el => (reactSwipeEl = el)}
            >
                
                
                <div className="swiper-slide"> <a href="javascript:void(0)"><img src="images/1.jpg" alt="" /></a></div>
                <div className="swiper-slide"> <a href="javascript:void(0)"><img src="images/2.jpg" alt="" /></a></div>
                <div className="swiper-slide"> <a href="javascript:void(0)"><img src="images/3.jpg" alt="" /></a></div>
                <div className="swiper-slide"> <a href="javascript:void(0)"><img src="images/4.jpg" alt="" /></a></div>
                <div className="swiper-slide"> <a href="javascript:void(0)"><img src="images/5.jpg" alt="" /></a></div>
            </ReactSwipe>
        </div>
    )
        
    // <div>
    //     <div>
    //         <div >
    //             <div>
    //                 <a href="javascript:void(0)"><img src="images/1.jpg" alt="" /></a>
    //             </div>
    //             <div >
    //                 <a href="javascript:void(0)"><img src="images/2.jpg" alt="" /></a>
    //             </div>
    //             <div >
    //                 <a href="javascript:void(0)"><img src="images/3.jpg" alt="" /></a>
    //             </div>
    //             <div>
    //                 <a href="javascript:void(0)"><img src="images/4.jpg" alt="" /></a>
    //             </div>
    //             <div >
    //                 <a href="javascript:void(0)"><img src="images/5.jpg" alt="" /></a>
    //             </div>
    //         </div>
    //         <div ></div>
    //     </div>
    //     <div className="fbg"></div>
    // </div>
}




export default Slider ;

