import React ,{Component} from 'react' ;
import '../assets/css/search.css'
class Search extends Component{
    render(){
        return(
            <>
            <div className="search_top">
                <a href="javascript:history.back()" className="search_back search_lf"></a>
                <input type="text" className="search_search search_lf" />
                <button type="button" className="search_button">搜索</button>
            </div>
            <div className="search_main">
                <div className="search_hot_search">
                    <p className="search_title">热门搜索</p>
                    <div className="search_hot_content">
                        <a className="item" href="JavaScript:void(0)">护肤</a>
                        <a className="item" href="JavaScript:void(0)">手表</a>
                        <a className="item" href="JavaScript:void(0)">钱包</a>
                        <a className="item" href="JavaScript:void(0)">香水</a>
                        <a className="item" href="JavaScript:void(0)">烟酒</a>
                        <a className="item" href="JavaScript:void(0)">保健品</a>
                        <a className="item" href="JavaScript:void(0)">手链</a>
                        <a className="item" href="JavaScript:void(0)">腰带</a>
                        <a className="item" href="JavaScript:void(0)">鞋子</a>
                        <a className="item" href="JavaScript:void(0)">戒指</a>
                    </div>
                </div>
                <div className="search_history">
                    <p className="search_title">历史</p>
                    <div className="search_hot_content">
                        <a className="search_item" href="JavaScript:void(0)">&nbsp;</a>
                    </div>
                </div>
                <div className="search_empty">
                    <a className="search_clear" href="javascript:void(0)">清空历史搜索</a>
                </div>
            </div>
            </>
        )
    }
}
export default Search ;