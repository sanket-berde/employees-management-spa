import { createSlice } from '@reduxjs/toolkit'

export interface LoadingState {
    loading: boolean
}

const initialState: LoadingState = {
    loading: false
}

export const loadingSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoading(state: LoadingState, action) {
      state.loading = action.payload;
    }
  },
});

export const { setLoading } = loadingSlice.actions

export const loadingReducer = loadingSlice.reducer