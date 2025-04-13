import { createSlice, current } from '@reduxjs/toolkit'
import { Employee } from '../../types/types'
import { AppDispatch, RootState } from '../store';
import { api } from '../../service/api';

export interface EmployeeState {
    employees: Employee[]
}

const initialState: EmployeeState = {
    employees: [{
      name: "",
      dateOfBirth: "",
      position: "",
      salary: "",
      hireDate: "",
      email: "",
      phoneNumber: ""
    }]
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployees(state: EmployeeState, action) {
      state.employees = action.payload;
    },
    addEmployeeDetail(state: EmployeeState, action) {
      const curr = current(state);
      state.employees = curr.employees.concat(action.payload);
    },
    updateEmployee(state: EmployeeState, action) {
      const { employees } = current(state);
      const index = employees.findIndex(item => item.employeeId === action.payload.employeeId)
      employees.splice(index, 1, action.payload.data)
      state.employees = employees;
    },
    removeEmployee(state: EmployeeState, action) {
      const { employees } = current(state);
      const index = employees.findIndex(item => item.employeeId === action.payload)
      employees.splice(index, 1)
      state.employees = employees;
    }
  },
});

export const fetchAllEmployees = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp: void = await api.get('/api/employees');
      dispatch(setEmployees(resp));
    } catch(e) {
      dispatch(setEmployees([]));
    }
  }
}

export const addEmployee = (data: Employee) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp: void = await api.post('/api/employees', data);
      dispatch(addEmployeeDetail(resp));
    } catch(e) { }
  }
}

export const putEmployee = (employeeId: Number | undefined, data: Employee) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp: void = await api.put(`/api/employees/${employeeId}`, data);
      dispatch(updateEmployee({employeeId, data}));
    } catch(e) { }
  }
}

export const deleteEmployee = (employeeId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp: void = await api.delete(`/api/employees/${employeeId}`);
      dispatch(removeEmployee(employeeId));
    } catch(e) { }
  }
}

export const { setEmployees, addEmployeeDetail, updateEmployee, removeEmployee } = employeeSlice.actions

export const employeeReducer = employeeSlice.reducer