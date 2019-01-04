import React from "react";
import {connect} from 'react-redux'
import {login} from '../../redux/auth'
import {Redirect} from 'react-router-dom'
import './login.scss'
@connect(
    state => state.auth,
        {login}
)
class Login extends React.Component{
    render() {
        // console.log(this.props)
        const redirect = <Redirect to='/home'/>
        const login = (<div>
            {this.props.isLogin ? <Redirect to='/home'></Redirect> : null}
            <div className="login-box">
              <input type="text" placeholder="请输入账号"/>
              <input type="password" placeholder="请输入密码"/>
              <div className="box-btn">
                <button onClick={this.props.login}>登录</button>
                <button onClick={this.props.login}>注册</button>
              </div>
            </div>
        </div>)
        return this.props.isLogin ? redirect : login
    }
}

export default Login;
