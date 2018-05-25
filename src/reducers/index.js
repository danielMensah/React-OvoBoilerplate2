import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import testing from './testing-reducer'

export default combineReducers({
    routing,
    testing
})