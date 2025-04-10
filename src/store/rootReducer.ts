import {
    type Reducer,
    type UnknownAction,
    combineReducers,
  } from '@reduxjs/toolkit'
  
import { employeeReducer } from './slices/employeeSlice';

  export const rootReducer = {
    employee: employeeReducer,
  }
  
  export const appReducer = combineReducers(rootReducer)
  
  export const mainReducer: Reducer = (
    state: ReturnType<typeof appReducer>,
    action: UnknownAction,
  ) => appReducer(state, action)