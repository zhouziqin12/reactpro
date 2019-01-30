import React from 'react' ;
import '../assets/css/detail_swiper.css'
import ReactSwipe from 'react-swipe';
let Slider = ()=>{
    let reactSwipeEl;
    return(
        <div className="detail_swiper_img">
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

