import Axios from 'axios'

const ADD_GUN = 'ADD_GUN'
const REMOVE_GUN = 'REMOVE_GUN'
const USER_DATA = 'USER_DATA'

export function counter(state=0, action) {
    console.log(1111111111111, state, action)
    switch (action.type) {
        case ADD_GUN:
            return state+1
        case  REMOVE_GUN:
            return state-1
        default:
            return 10
    }
}

export function addGun() {
    return {type: ADD_GUN}
}
export function removeGun() {
    return {type: REMOVE_GUN}
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}
export function userData(data) {
    return {type: USER_DATA, payload: data}
}
export function getUserData() {
    return async dispatch => {
        const res = await Axios.get('/user/login')
        dispatch(userData(res))
    }
}

