import React from "react";
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync, getUserData} from "../../redux/counter";
import {logOut} from '../../redux/auth'
import {Redirect} from 'react-router-dom'
import './home.scss'

@connect(
    state => ({num: state.counter, log: state.auth}),
    {addGun, removeGun, addGunAsync, logOut, getUserData}
)
class Home extends React.Component{
    render() {
        // console.log(11111111, aa)
        return (
            <div className="page">
                {!this.props.log.isLogin ? <Redirect to='/login'></Redirect> : null}
                <h1 className="page-title">{`现有枪${this.props.num}把`} </h1>
                <button onClick={this.props.addGun}>加抢</button>
                <button onClick={this.props.removeGun}>拔抢</button>
                <button onClick={this.props.addGunAsync}>拖两天拔抢</button>
                <hr/>
                <button onClick={this.props.logOut}>登出</button>
                <button onClick={this.props.getUserData}>获取数据</button>
            </div>
        )
    }
}

export default Home;
