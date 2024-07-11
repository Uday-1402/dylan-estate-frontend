import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: "formType",
    initialState:{
        formType: 1,
    },
    reducers:{
        setFormType: (state,action) =>{
            state.formType = action.payload.formType
        }
    }
})


export const {setFormType} = formSlice.actions
export default formSlice.reducer;