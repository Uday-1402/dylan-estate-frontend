import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: "page",
    initialState:{
        page: 0
    },
    reducers:{
        setPage: (state,action) =>{
            state.page = action.payload.page
        }
    }
})


export const {setPage} = pageSlice.actions
export default pageSlice.reducer;