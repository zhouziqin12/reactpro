import React ,{Component} from 'react' ;
import '../assets/css/login_main.css'

class Login_main extends Component{
    state = {
        username:'' ,
        password:''
    }
    render(){
        return(
            <>
                <form>
                    <div className="number">
                        <span>手机号</span>
                        <input  type="text" placeholder="请输入手机号" onChange={this.changeUserName.bind(this)}/>
                    </div>
                    <div className="pwd">
                        <span>密码</span>
                        <input  type="password" placeholder="请输入密码" onChange={this.changePassWord.bind(this)}/>
                    </div>
                    <div className="login_btn">
                        <button type="button" onClick={this.gologin.bind(this)}>登录</button>
                    </div>
                </form>
                <div className="skip">
                    <a className="lf" href="Javascript:void(0)">注册</a>
                    <a className="rf" href="Javascript:void(0)">忘记密码？</a>
                </div>
            </>
        )
    }
    gologin(){
        fetch(
           'http://localhost:3000/login?userName='+this.state.username + '&passWord='+this.state.password
        ).then(
            res=>res.json()
        )
        .then((data)=>{
            console.log(data)
            if(data.error == 1){
                alert('用户名密码不存在或者输入错误,建议先去注册')
                // location.href='/register'
                // console.log(this.$router)
                this.props.history.push('/register')
            }else if(data.error == 0){
                    document.cookie = this.state.username
                    // console.log(this)
                    alert('欢迎登录')
                this.props.history.push('/user?username='+this.state.username + '&password='+this.state.password)
                  
            }
            
        })
        // console.log('...')
    }
    changeUserName(ev){
        this.setState({
            username:ev.target.value
        })
    }
    changePassWord(ev){
        this.setState({
            password:ev.target.value
        })
    }
}


export default Login_main ;

