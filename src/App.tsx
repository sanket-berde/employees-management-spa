import type { FC, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';

import { routes } from './routes/Router'
import ResponsiveAppBar from './components/Appbar'
import PageLoader from './components/PageLoader';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { Box, Snackbar } from '@mui/material';
import { setSnackBarOptions } from './store/slices/alertSlice';
import { RootState, useAppDispatch, useAppSelector } from './store/store';
import { green } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App: FC = (): ReactElement => {
  const content = useRoutes(routes)
  const dispatch = useAppDispatch();

  const { open, autoHideDuration, message } = useAppSelector((state: RootState) => state.alert);

  const handleSnackbarClose = () => {
    dispatch(setSnackBarOptions({ open: false, message: '' }));
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box className='app-wrapper' sx={{height: '100vh'}}>
          <ResponsiveAppBar />
          {content}
          <PageLoader />
          <Snackbar
            sx={{ '.MuiSnackbarContent-root' : { background: green[400] } }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleSnackbarClose}
            message={message}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          />
        </Box>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { App }