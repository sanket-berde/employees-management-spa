import { createSlice } from '@reduxjs/toolkit'

export interface LoadingState {
    loading: boolean
}

const initialState: LoadingState = {
    loading: false
}

export const employeeSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading(state: LoadingState, action) {
      state.loading = action.payload;
    }
  },
});

export const { setLoading } = employeeSlice.actions

export const loadingReducer = employeeSlice.reducer