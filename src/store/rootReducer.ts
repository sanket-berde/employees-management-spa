import {
    type Reducer,
    type UnknownAction,
    combineReducers,
  } from '@reduxjs/toolkit'
  
import { employeeReducer } from './slices/employeeSlice';
import { loadingReducer } from './slices/loadingSlice';
import { alertReducer } from './slices/alertSlice';

  export const rootReducer = {
    employee: employeeReducer,
    loader: loadingReducer,
    alert: alertReducer
  }
  
  export const appReducer = combineReducers(rootReducer)
  
  export const mainReducer: Reducer = (
    state: ReturnType<typeof appReducer>,
    action: UnknownAction,
  ) => appReducer(state, action)