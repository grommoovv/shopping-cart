import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { AppRouterProvider } from './app/providers/AppRouterProvider/ui/AppRouterProvider'
import './app/styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={AppRouterProvider} />
  </>
)
