import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Employee } from '../types/types';

export default function MemberCard(props: Employee & { editClick: Function, deleteClick: Function }) {
  return (
      <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250, m: '17px' }}>
        <CardContent>
            <Typography sx={{ color: 'text.secondary', fontSize: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>{`EMP ID: ${props.employeeId || 'TBD'}`}</Box>
                <CardActions sx={{ p: 0 }}>
                    <IconButton size='small' onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.editClick(props, e)}>
                        <EditIcon fontSize='small'/>
                    </IconButton>
                    <IconButton  size='small' onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.deleteClick(props, e)}>
                        <DeleteIcon  fontSize='small'/>
                    </IconButton>
                </CardActions>
            </Typography>
            <Typography variant="h5" component="div">
             {props.name || 'Sanket Berde'}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                {props.position || 'Designation TBD'}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 11, display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
                <Box>DOJ: {props.hireDate || 'DD-MM-YYYY'}</Box>
                <Box display="flex" justifyContent="end" flexDirection="column">
                    {props.phoneNumber && <small>📞: <Link sx={{ textDecoration: 'none' }} href={`tel:${props.phoneNumber}`}>{props.phoneNumber || '-'}</Link></small>}
                    {props.email && <small>📥: <Link sx={{ textDecoration: 'none' }} href={`mailto:${props.email}`}>{props.email || '-'}</Link></small>}
                </Box>
            </Typography>
        </CardContent>
      </Card>
  );
}