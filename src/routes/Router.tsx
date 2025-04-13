import type { RouteObject } from 'react-router-dom'

import { ROUTE_CONSTANTS } from '../constants/routeConstants'
import { Home, Team } from '../pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <div>404 Page</div>,
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_CONSTANTS.TEAM,
    element: <Team />,
  },
]

export { routes }