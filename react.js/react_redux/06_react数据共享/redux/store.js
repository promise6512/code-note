/* 
   该文件专门用于暴露store对象 整个应用只有一个store对象
*/ 
//引入createStore 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count服务的reducer
import countReducer from './reducers/count' 
//引入为person服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
//合并多个reducer
const allReducers = combineReducers({
   count:countReducer,
   person:personReducer
})
//暴露store
//export default createStore(countReducer,applyMiddleware(thunk))

export default createStore(allReducers,applyMiddleware(thunk))
