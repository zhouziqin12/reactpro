import React from 'react' ;
import '../assets/css/home_product.css'
import QueueAnim from 'rc-queue-anim';
let Home_list = (props)=>{
    let {history} = props ;
    return(
        <>
        <QueueAnim>
            {
                props.home_list.map(item=>(
                    <div className="product" key={item.id}>
                        <a className="bg_img" href="#"><img src={item.img} alt="" /></a>
                        <div className="look">
                            <a href="#">
                                <div className="lf"><img src={item.img1} alt="" /></div>
                                <div className="rf">
                                    <p>{item.liebie}</p>
                                    <p><span>点击查看</span>&gt;&gt;</p>
                                </div>
                            </a>
                        </div>
                        <div className="show">
                            <ul>
                                <li>
                                    <div className="lf">
                                        <a href="#">
                                            <img src={item.img2} alt="" />
                                        </a>
                                    </div>
                                    <div className="rf">
                                        <p><a href="#">{item.bizi}</a></p>
                                        <a href="#" className="into" onClick={()=>history.push('/list?a=' + item.bizi)} >立即进入</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="lf">
                                        <a href="#">
                                            <img src={item.img3} alt="" />
                                        </a>
                                    </div>
                                    <div className="rf">
                                        <p><a href="#">{item.yanjing}</a></p>
                                        <a href="#" className="into" onClick={()=>history.push('/list?a=' + item.yanjing)}>立即进入</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="lf">
                                        <a href="#">
                                            <img src={item.img4} alt="" />
                                        </a>
                                    </div>
                                    <div className="rf">
                                        <p><a href="#">{item.lianbu}</a></p>
                                        <a href="#" className="into" onClick={()=>history.push('/list?a=' + item.lianbu)}>立即进入</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="lf">
                                        <a href="#">
                                            <img src={item.img5} alt="" />
                                        </a>
                                    </div>
                                    <div className="rf">
                                        <p><a href="#">{item.erduo}</a></p>
                                        <a href="#" className="into" onClick={()=>history.push('/list?a=' + item.erduo)}>立即进入</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> 
                ))
            }
        </QueueAnim>
        </>
    )
        
        
    }


export default Home_list ;