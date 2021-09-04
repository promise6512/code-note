/* 
   专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "../constant"
export const createIncrementAction =(data) => ({type:INCREMENT,data})
export const createDecrementAction =(data) => ({type:DECREMENT,data})
export const createIncrementAsyncAction = (data,time) => {
   //异步action，action的类型为function
   //同步action，action的类型为object
   return (dispatch)=>{   
      setTimeout(()=>{
         dispatch(createIncrementAction(data))
      },time)
   }
}