import React from 'react' ;
import '../assets/css/product_right.css'
import QueueAnim from 'rc-queue-anim';
let Product_right_list = ({product_rightlist , match ,history})=>{
    // console.log(match.params.aid)
    // let {match , }
    let arr = [] ;
   for(var i = 0 ; i < product_rightlist.length ; i ++){
        if(match.params.aid == product_rightlist[i].id ){
            arr = product_rightlist[i].leibie
            console.log(arr)
        }
   }
   
    return(
        <>
         <QueueAnim duration={2000} type={['top' , 'bottom']}>
           {
               arr.map((item , index)=>(
                        <div key ={index}>
                            <div className="category">
                                <p className="title">{item.title}</p>
                                <div className="show">
                                    <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link" href="javascript:;">
                                            <p className="introduce">{item.naifen}</p>
                                            <img src={item.img1} alt="" />
                                        </a>
                                    </div>
                                    <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link" href="javascript:;">
                                            <p className="introduce">{item.tuiche}</p>
                                            <img src={item.img2} alt="" />
                                        </a>
                                    </div>
                                    <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link" href="javascript:;">
                                            <p className="introduce">{item.yifu}</p>
                                            <img src={item.img3} alt="" />
                                        </a>
                                    </div>
                                    <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link"href="javascript:;">
                                            <p className="introduce">{item.kuzi}</p>
                                            <img src={item.img4} alt="" />
                                        </a>
                                    </div>
                                    {item.muyin && <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link" href="javascript:;">
                                            <p className="introduce">{item.muyin}</p>
                                            {item.img5 && <img src={item.img5} alt="" />}
                                        </a>
                                    </div>}
                                    {item.shipin && <div className="product" onClick={()=>history.push('/detail?a=dfsdadsfdsfsdfsdfdsfsdfsdfdssfsdfsdfdssfsdfsdfds')}>
                                        <a className="link"href="javascript:;">
                                            <p className="introduce">{item.shipin}</p>
                                            {item.img6 && <img src={item.img6} alt="" />}
                                        </a>
                                    </div>}
                                    

                                </div>
                            </div>
                        </div>
               ))
           }
        </QueueAnim>
        </>
    )
}

   


export default Product_right_list ;