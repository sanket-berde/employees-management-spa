import {
    type Reducer,
    type UnknownAction,
    combineReducers,
  } from '@reduxjs/toolkit'
  
import { employeeReducer } from './slices/employeeSlice';
import { loadingReducer } from './slices/loadingSlice';

  export const rootReducer = {
    employee: employeeReducer,
    loader: loadingReducer
  }
  
  export const appReducer = combineReducers(rootReducer)
  
  export const mainReducer: Reducer = (
    state: ReturnType<typeof appReducer>,
    action: UnknownAction,
  ) => appReducer(state, action)