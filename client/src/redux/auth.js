const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function auth(state = {isLogin: false, user: 'pompey'}, action) {
    switch (action.type) {
        case LOGIN :
            return {...state, isLogin: true}
        case LOGOUT :
            return {...state, isLogin: false}
        default:
            return state
    }
}

export function login() {
    return {type: LOGIN}
}
export function logOut() {
    return {type: LOGOUT}
}
