import React  from 'react' ; 
import '../assets/css/detail_data.css'
import querystring from 'query-string'
import {chenkPrice} from '../api/chenkPrice'
let Detai_data = (props)=>(
    <div className="detail_data_data">
        <p className="detail_data_introduce">{querystring.parse(props.location.search).a}</p>
        <p className="detail_data_price">{chenkPrice(querystring.parse(props.location.search).b - 0)}</p>
        <p className="detail_data_scj">市场价：<span>{chenkPrice(querystring.parse(props.location.search).c - 0)}</span></p>
        <div className="detail_data_send">
            <div className="detail_data_lf">
                运费：包邮
            </div>
            <div className="detail_data_rf">
                默认配送：圆通速递
            </div>
        </div>
    </div>
)

export default Detai_data ;