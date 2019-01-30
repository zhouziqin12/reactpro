import React from 'react'
import '../assets/css/home_navbar.css'
import '../assets/css/swiper.min.css'
import ReactSwipe from 'react-swipe';
const Home_Navbar = () => {
    let reactSwipeEl;
   
    return (
      <div>
        <div className="navbar">
    <div className="navbar-inner">
        <a href="search.html" className="search">搜索你想要的商品</a>
    </div>
    <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
        >
        <div className="sub_navbar">
            <div className="swiper-container swiper-container-1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide switch swiper-slide-active active">
                        <a href="javascript:void(0)" data-id="homeView">首页</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="52">专场抢购</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="53">美妆洗护</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="69">水果特产</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="71">女装</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="72">母婴玩具</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="73">保健</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="74">美食</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="75">进口红酒</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="77">箱鞋包</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="78">家居家纺</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="79">数码家电</a>
                    </div>
                    <div className="swiper-slide switch">
                        <a href="javascript:void(0)" data-id="80">男装童装</a>
                    </div>
                </div>
            </div>
        </div>
     </ReactSwipe>
</div>
     </div>
       
    );
  };

export default Home_Navbar ;