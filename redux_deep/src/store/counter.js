import {createSlice,configureStore} from '@reduxjs/toolkit'
export const INCREMENT = 'increment';
const initialCounterState = {counter:0,showCounter:true}
const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state) {
            //원래 리덕스의 상태를 이용하려면 불변성을 이용하여 
            //객체를 복사후 값을 증가시켰지만
            //자동으로 리덕스 툴킷은 객체를 자동으로 복사를 해준다.
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },

    }
})
export const counterActions = counterSlice.actions
export default counterSlice.reducer