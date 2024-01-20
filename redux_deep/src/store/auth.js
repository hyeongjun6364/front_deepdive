import {createSlice,configureStore} from '@reduxjs/toolkit'

const initialAuthState = {
    isAuthenticated:false
}
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,  // Corrected property name
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        },
    }
});

export const authActions = authSlice.actions
export default authSlice.reducer