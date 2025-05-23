import { createSlice, current } from '@reduxjs/toolkit'
import { Employee } from '../../types/types'
import { AppDispatch, RootState } from '../store';
import { api } from '../../service/api';
import { setLoading } from './loadingSlice';
import { setSnackBarOptions } from './alertSlice';

export interface EmployeeState {
    employees: Employee[]
}

const initialState: EmployeeState = {
    employees: []
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
      const emp = [...employees];

      emp.splice(index, 1, action.payload.data)
      state.employees = emp;
    },
    removeEmployee(state: EmployeeState, action) {
      const { employees } = current(state);
      const index = employees.findIndex(item => item.employeeId === action.payload)
      const emp = [...employees];
      
      emp.splice(index, 1)
      state.employees = emp;
    }
  },
});

export const fetchAllEmployees = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // if employees already loaded on page, ignore API call
      if(getState().employee.employees.length) {
        return;
      }
      dispatch(setLoading(true));
      const resp: void = await api.get('/api/employees');
      dispatch(setEmployees(resp));
    } catch(e) {
      dispatch(setEmployees([]));
    } finally {
      dispatch(setLoading(false));
    }
  }
}

export const addEmployee = (data: Employee) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const resp: void = await api.post('/api/employees', data);
      dispatch(addEmployeeDetail(resp));
      dispatch(setSnackBarOptions({ open: true, message: 'Team Member Added!'}))
    } catch(e) { } finally {
      dispatch(setLoading(false));
    }
  }
}

export const putEmployee = (employeeId: Number | undefined, data: Employee) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      await api.put(`/api/employees/${employeeId}`, data);
      dispatch(updateEmployee({employeeId, data}));
      dispatch(setSnackBarOptions({ open: true, message: 'Team Member Updated!'}))
    } catch(e) { } finally {
      dispatch(setLoading(false));
    }
  }
}

export const deleteEmployee = (employeeId: Number | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      await api.delete(`/api/employees/${employeeId}`);
      dispatch(removeEmployee(employeeId));
      dispatch(setSnackBarOptions({ open: true, message: 'Team Member Deleted!'}))
    } catch(e) { } finally {
      dispatch(setLoading(false));
    }
  }
}

export const { setEmployees, addEmployeeDetail, updateEmployee, removeEmployee } = employeeSlice.actions

export const employeeReducer = employeeSlice.reducer