import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Employee } from '../types/types';
import { Button, TextField, Typography } from '@mui/material';

type EditMemberProps = {
    open: boolean;
    type: string;
    onClose?: {
        bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
    }['bivarianceHack'];
    onSaveClick: Function;
}

export default function EditMember(props: Employee & EditMemberProps) {
    const refs: any = useRef({
        name: null,
        position: null,
        hireDate: null,
        email: null,
        phoneNumber: null
    });

    const addRef = (name: string, element: HTMLInputElement) => {
        if (element) {
            refs.current[name] = element;
        }
    };

    const saveClick = () => {
        if(!refs.current['name'].value) {
            return;
        }
        props.onSaveClick({
            name: refs.current['name'].value,
            position: refs.current['position'].value,
            hireDate: refs.current['hireDate'].value,
            email: refs.current['email'].value,
            phoneNumber: refs.current['phoneNumber'].value
        }, props.type);
    }
    
    return (
        <Drawer open={props.open} onClose={props.onClose} anchor="right">
            <Box width={400} p={2}>
                <Typography component="h2" marginBottom="normal">Add/Edit Member Details</Typography>
                <TextField fullWidth margin="normal" id="name" label="Name" name="name" defaultValue={props.name} variant="outlined" ref={(el: HTMLDivElement) => addRef('name', el?.querySelector('input')!)} />
                <TextField fullWidth margin="normal" id="position" label="Position" name="position" defaultValue={props.position} variant="outlined" ref={(el: HTMLDivElement) => addRef('position', el?.querySelector('input')!)}/>
                <TextField fullWidth margin="normal" id="hireDate" label="Hire Data" name="hireDate" defaultValue={props.hireDate} variant="outlined" ref={(el: HTMLDivElement) => addRef('hireDate', el?.querySelector('input')!)} />
                <TextField fullWidth margin="normal" id="email" label="Email Id" name="email" defaultValue={props.email} variant="outlined" ref={(el: HTMLDivElement) => addRef('email', el?.querySelector('input')!)} />
                <TextField fullWidth margin="normal" id="phoneNumber" label="Phone Number" name="phoneNumber" defaultValue={props.phoneNumber} variant="outlined" ref={(el: HTMLDivElement) => addRef('phoneNumber', el?.querySelector('input')!)}/>
                <Button onClick={saveClick} variant='contained'>Save</Button>
            </Box>
        </Drawer>
    );
}