import {combineReducers} from 'redux'
import ActiveReducer from './ActiveReducer'
const rootReducer=combineReducers({
    Recepie:ActiveReducer

})
export default rootReducer
