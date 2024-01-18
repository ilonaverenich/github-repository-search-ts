import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({data:mainReducer})
const store = configureStore({reducer:rootReducer})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;