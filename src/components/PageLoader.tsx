import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useAppSelector } from '../store/store';

export default function PageLoader() {
  
  const { loading } = useAppSelector( state => state.loader);

  return (
      <Dialog
        open={loading}
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        fullWidth
      >
        <DialogContent>
          <DialogTitle id="alert-dialog-title" sx={{ width: 400, textAlign: 'center', mb: 1 }}>
            Loading
          </DialogTitle>
          <LinearProgress sx={{ mb: 2 }}/>
        </DialogContent>
      </Dialog>
  );
}
