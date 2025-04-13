import type { FC, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';

import { routes } from './routes/Router'
import ResponsiveAppBar from './components/Appbar'
import PageLoader from './components/PageLoader';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { Box } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App: FC = (): ReactElement => {
  const content = useRoutes(routes)

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box className='app-wrapper' sx={{height: '100vh'}}>
          <ResponsiveAppBar />
          {content}
          <PageLoader />
        </Box>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export { App }