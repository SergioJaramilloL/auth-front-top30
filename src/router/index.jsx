import {createBrowserRouter} from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import PrivateRoute from '../components/PrivateRoute'
import LoginPage from '../pages/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
])

export default router