import type { FC, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useRoutes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';

import { routes } from './routes/Router'
import ResponsiveAppBar from './components/Appbar'
import PageLoader from './components/PageLoader';



const App: FC = (): ReactElement => {
  const content = useRoutes(routes)

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <CssBaseline />
      <div className='app-wrapper'>
        <ResponsiveAppBar />
        {content}
        <PageLoader />
      </div>
    </ErrorBoundary>
  )
}

export { App }