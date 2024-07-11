import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";
import pageReducer from "./features/pageSlice";
import detailsFormReducer from './features/detailsFormSlice';

const store = configureStore({
    reducer:{
        formType: formReducer,
        page: pageReducer,
        detailsFormType:detailsFormReducer
    }
})

export default store;