import React ,{Component} from 'react' ;
import '../assets/css/register_main.css'
class Register_main extends Component{
    state = {
        username :'' ,
        password :''
    }
    render(){
        return(
            <>
                <form>
                    <div className="number">
                        <span>手机号</span>
                        <input type="text" placeholder="请输入手机号" onChange={this.getUserName.bind(this)}/>
                    </div>
                    <div className="validation">
                        <span>验证码</span>
                        <input type="text" placeholder="请输入验证码" />
                        <a className="vali_code" href="javascript:void(0)">获取验证码</a>
                        <a className="time" href="javascript:void(0)">59秒后重发</a>
                    </div>
                    <div className="pwd">
                        <span>密码</span>
                        <input type="password" placeholder="请输入密码" onChange={this.getPassWord.bind(this)}/>
                    </div>
                    <div className="register_btn">
                        <button type="button" onClick={this.goRegister.bind(this)}>注册</button>
                    </div>
                </form>
                <div className="skip">
                    <a href="Javascript:void(0)">登录</a>
                </div>
            </>
        )
    }
    getUserName(ev){
        this.setState({
            username : ev.target.value
        })
    }
    getPassWord(ev){
        this.setState({
            password:ev.target.value
        })
    }
    goRegister(){
        fetch(
           'http://localhost:3000/register?userName=' + this.state.username + '&passWord='+this.state.password
        ).then(res=>res.json()).then((data)=>{
            if(data.error == 0){
                alert('注册成功')
                // this.$router.push('./login')
                this.props.history.push('/login')
            }else if(data.error==1){
                alert('注册失败，请重新注册')
            }
        })
    }
    
}

export default Register_main ;