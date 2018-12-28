import { counter } from './counter'
import { auth } from './auth'
import { combineReducers } from 'redux'

export default combineReducers({counter, auth})
