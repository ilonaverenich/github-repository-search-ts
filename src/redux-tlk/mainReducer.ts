import { createReducer, createAction } from "@reduxjs/toolkit";

type Repos ={
    id:number,

}

type initialValueTypes = {
    repos: Repos[]
}

const initialValue: initialValueTypes = {
    repos : []
}

export const saveData = createAction('SAVE_DATA');

export const mainReducer = createReducer(initialValue,(builder)=>{
    builder.addCase(saveData,(state,action)=>{
        
    })
})