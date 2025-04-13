import { Box, Button, Container, Paper, Typography } from '@mui/material'
import { useEffect, type FC, type ReactElement, useState } from 'react'
import MemberCard from '../../components/MemberCard';
import { Employee } from '../../types/types';
import EditMember from '../../components/EditMember';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { addEmployee, fetchAllEmployees, putEmployee, deleteEmployee } from '../../store/slices/employeeSlice';


const Team: FC = (): ReactElement => {

    const dispatch = useAppDispatch();
    const { employees } = useAppSelector((state: RootState) => state.employee);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [member, setMember] = useState<Employee>({});
    const [type, setType] = useState('add');

    useEffect(() => {
        dispatch(fetchAllEmployees());
    }, []);


    const onAddMember = () => {
        setDrawerOpen(true);
        setMember({});
        setType('add');
    }

    const onEditClick = (employee: Employee) => {
        setDrawerOpen(true);
        setType('edit');
        setMember(employee);
    }

    const onDeleteClick = async (employee: Employee) => {
        dispatch(deleteEmployee(employee.employeeId));
    }

    const onSaveClick = async(employee: Employee, type: string) => {
        if(type === 'add') {
            dispatch(addEmployee(employee));
        } else {
            dispatch(putEmployee(member.employeeId, {...employee, employeeId: member.employeeId }));
        }
        onDrawerClose();
    }

    const onDrawerClose = () => {
        setDrawerOpen(false);
    }
    
    return (
        <>
            <Container className='team-container'>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="h3" sx={{ fontSize: 26, m: '20px 0' }}>
                        Team Marvel
                    </Typography>
                    <Button color="primary" variant="contained" onClick={onAddMember}>Add Member</Button>
                </Box>
                <Paper elevation={1} sx={{ p: 1, display: 'flex', flexWrap: 'wrap' }}>
                    {employees
                    // somehow sorting is not working, need to look into
//                     .sort((a: any, b: any) => {
//                         return (Number(a?.employeeId > b?.employeeId || -1))
// }                   )
                    .map((employee: Employee) => <MemberCard key={`${employee.employeeId}`} {...employee} editClick={onEditClick} deleteClick={onDeleteClick} />)}
                </Paper>
            </Container>
            <EditMember {...member} open={drawerOpen} onClose={onDrawerClose} onSaveClick={onSaveClick} type={type} />
        </>
            
    )
}

export { Team }