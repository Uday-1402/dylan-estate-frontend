import { createSlice } from '@reduxjs/toolkit';

const detailsFormSlice = createSlice({
    name: "detailsFormType",
    initialState:{
        detailsFormType: 0,
    },
    reducers:{
        setDetailsFormType: (state,action) =>{
            state.detailsFormType = action.payload.detailsFormType
        }
    }
})


export const {setDetailsFormType} = detailsFormSlice.actions
export default detailsFormSlice.reducer;