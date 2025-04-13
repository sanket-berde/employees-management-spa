import { createSlice } from '@reduxjs/toolkit'

type AlertInitialState = {
  open: boolean;
  message: string;
  autoHideDuration: number;
}

const initialState: AlertInitialState = {
  open: false,
  message: '',
  autoHideDuration: 6000
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setSnackBarOptions(state: AlertInitialState, action) {
      state.open = action.payload.open;
      state.message = action.payload.message;
    }
  },
});

export const { setSnackBarOptions } = alertSlice.actions;

export const alertReducer = alertSlice.reducer;