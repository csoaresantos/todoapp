import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const mainReducer = combineReducers({
    todo: todoReducer
})

export default mainReducer