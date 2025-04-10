import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
    employee: {
        "Name": "Sanket",
        "DateOfBirth": "11-05-1991",
        "Position": "Enginner",
        "Salary": "20000",
        "HireDate": "12-08-2020",
        "Email": "snktbrd@gmail.com",
        "PhoneNumber": "9870341261"
    }
}

const initialState: ThemeState = {
    employee: {
        "Name": "Sanket",
        "DateOfBirth": "11-05-1991",
        "Position": "Enginner",
        "Salary": "20000",
        "HireDate": "12-08-2020",
        "Email": "snktbrd@gmail.com",
        "PhoneNumber": "9870341261"
    }
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployee(state) {
      state.employee = {
            "Name": "Sanket",
            "DateOfBirth": "11-05-1991",
            "Position": "Enginner",
            "Salary": "20000",
            "HireDate": "12-08-2020",
            "Email": "snktbrd@gmail.com",
            "PhoneNumber": "9870341261"
        }
    }
  },
})

export const { setEmployee } = employeeSlice.actions

export const employeeReducer = employeeSlice.reducer