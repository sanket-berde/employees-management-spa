import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Badge, Button } from '@mui/material';
import { Employee } from '../types/types';
import StarIcon from '@mui/icons-material/Star';
import { deepPurple, purple, yellow } from '@mui/material/colors';


export default function FeaturedMember(props: Employee) {
    return (
        <Card variant="outlined" sx={{ maxWidth: 300, minWidth: 250, m: 2, borderRadius: 4 }}>
            <CardContent>
                <Typography sx={{ color: 'text.secondary', fontSize: 12, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                    <Badge
                        overlap="circular"
                        sx={{ '.MuiBadge-badge': { bottom: '29%', right: '14%' } }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <StarIcon sx={{ color: yellow[500] }}></StarIcon>
                        }
                    >
                            <Avatar sx={{ mb: 2, width: 90, height: 90, fontSize: '3.25rem', bgcolor: deepPurple[500] }}>{(props.name || 'Sanket Berde').substring(0, 1)}</Avatar>
                    </Badge>
                    <Typography variant="h5" component="div" sx={{ mb: 1 }}>
                        {props.name || 'Sanket Berde'}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {props.position || 'Principal Software Engineer'}
                    </Typography>
                    <CardActions sx={{ p: 0 }}>
                        <Button variant="contained" href={`/employee/${props.employeeId}`}>View Profile</Button>
                    </CardActions>
                </Typography>
            </CardContent>
        </Card>
    );
}