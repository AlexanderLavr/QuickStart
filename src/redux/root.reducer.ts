import { combineReducers, Reducer } from 'redux'
import { mainReducer } from './main.redux/main.reducer';

const rootReducer: Reducer = combineReducers<any>({
  main: mainReducer
})
 export default rootReducer
