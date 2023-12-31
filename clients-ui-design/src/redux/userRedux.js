import {createSlice} from '@reduxjs/toolkit';
import { useActionData } from 'react-router-dom';

const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true 
        },
        loginSuccess:(state)=>{
            state.isFetching=false;
            state.currentUser= useActionData.payload
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true
        },
    },
});
export const {loginStart,loginSuccess,loginFailure} = userSlice.actions;
export default userSlice.reducer;