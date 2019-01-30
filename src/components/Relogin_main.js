import React ,{Component} from 'react' ;
import '../assets/css/relogin_main.css'
    let Relogin_main = ()=>(
            <>
               <form>
                    <div class="number">
                        <span>手机号</span>
                        <input id="phone" type="text" placeholder="请输入手机号" />
                        <p class="phone_msg"></p>
                    </div>
                    <div class="validation">
                        <span>验证码</span>
                        <input id="yzm" type="text" placeholder="请输入验证码" />
                        <a class="vali_code" href="javascript:void(0)">获取验证码</a>
                        <a class="time" href="javascript:void(0)">59秒后重发</a>
                        <p class="yzm_msg"></p>
                    </div>
                    <div class="pwd">
                        <span>密码</span>
                        <input id="pwd" type="password" placeholder="请输入密码" />
                        <p class="pwd_msg"></p>
                    </div>
                    <div class="affirm_pwd">
                        <span>确认密码</span>
                        <input id="affirm_pwd" type="password" placeholder="请再次输入密码" />
                        <p class="affirm_pwd_msg"></p>
                    </div>
                    <div class="login_btn">
                        <button type="submit">登录</button>
                    </div>
                </form>
            </>
        )


export default Relogin_main ;

