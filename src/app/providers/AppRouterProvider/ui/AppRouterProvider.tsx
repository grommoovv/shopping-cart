import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../../../shared/layout'
import { HomePage } from '../../../../pages/HomePage/ui/HomePage'
import { ProductPage } from '../../../../pages/ProductPage/ui/ProductPage'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product/:title',
        element: <ProductPage />,
      },
    ],
  },
])
