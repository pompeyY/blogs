import React from "react";
import {connect} from 'react-redux'
import {login} from '../redux/auth'
import {Redirect} from 'react-router-dom'
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
            <h1>你还没有登录，请登录</h1>
            <button onClick={this.props.login}>登录</button>
        </div>)
        return this.props.isLogin ? redirect : login
    }
}

export default Login;
