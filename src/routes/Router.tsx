import type { RouteObject } from 'react-router-dom'

import { ROUTE_CONSTANTS } from '../constants/routeConstants'
import { Home } from '../pages'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <div />,
  },
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_CONSTANTS.EMPLOYEE,
    element: <div>EJNKJN</div>,
  },
]

export { routes }