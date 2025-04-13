import { Box, Button, Container, ListItem, Paper, Typography } from '@mui/material'
import { useEffect, type FC, type ReactElement, useState } from 'react'
import { Employee } from '../../types/types';
import EditMember from '../../components/EditMember';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllEmployees, putEmployee } from '../../store/slices/employeeSlice';
import { useParams } from 'react-router-dom';

const Member: FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { employeeId } = useParams();
    const { employees } = useAppSelector((state: RootState) => state.employee);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [member, setMember] = useState<Employee | undefined>({});

    useEffect(() => {
        dispatch(fetchAllEmployees());
        const selected = employees.find((item: Employee) => {
            return Number(item?.employeeId) === Number(employeeId)
        })
        setMember(selected);
    }, [dispatch, employees, employeeId]);

    const onEditClick = () => {
        setDrawerOpen(true);
    }

    const onSaveClick = async(employee: Employee) => {
        dispatch(putEmployee(member?.employeeId, {...employee, employeeId: member?.employeeId }));
        onDrawerClose();
    }

    const onDrawerClose = () => {
        setDrawerOpen(false);
    }
    
    return (
        <>
            <Container className='member-container'>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography component="h3" sx={{ fontSize: 26, m: '20px 0' }}>
                        {member?.name}
                    </Typography>
                    <Button variant='contained' onClick={onEditClick}>Update Details</Button>
                </Box>
                <Paper elevation={1} sx={{ p: 1, display: 'flex', flexWrap: 'wrap', flexFlow: 'column' }}>
                    <ListItem sx={{ fontSize: 16, mt: 1, mb: 1 }}>
                        EmployeeId: {String(member?.employeeId)}
                    </ListItem>
                    <ListItem sx={{ fontSize: 16, mt: 1, mb: 1 }}>
                        Designation: {member?.position}
                    </ListItem>
                    <ListItem sx={{ fontSize: 16, mt: 1, mb: 1 }}>
                        Email: {member?.email}
                    </ListItem>
                    <ListItem sx={{ fontSize: 16, mt: 1, mb: 1 }}>
                        Phone Number: {member?.phoneNumber}
                    </ListItem>
                    <ListItem sx={{ fontSize: 16, mt: 1, mb: 1 }}>
                        Date of Joining: {member?.hireDate}
                    </ListItem>
                </Paper>
            </Container>
            <EditMember {...member} open={drawerOpen} onClose={onDrawerClose} onSaveClick={onSaveClick} type={'edit'} />
        </>
            
    )
}

export { Member }